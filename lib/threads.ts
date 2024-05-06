import { GetMessageThreadDetailsByReference, GetMessages } from "@/gateways/messages";

class AirchatMessageThreadBuilder {
    accessToken: string;
    recordingId: string;
    messagesCache: { [key: string]: any };
    messagesTree: { [key: string]: Array<string> };
    messagesProcessed: { [key: string]: boolean };
    messagesQueue = [];

    constructor(recordingId, accessToken) {
        this.accessToken = accessToken;
        this.recordingId = recordingId;
        this.messagesCache = {};
        this.messagesTree = {};
        this.messagesProcessed = {};
        this.messagesQueue = [];
    }
    getMessage = async (recordingId) => {
        if(this.messagesCache[recordingId]) {
            return this.messagesCache[recordingId];
        }
        let message = await GetMessages({
            token: this.accessToken,
            recordingIds: [recordingId]
        }) as any;
        message = message?.messageList?.[0];
        this.messagesCache[recordingId] = message;
        return message;
    }

    // this retrieves all direct children and 1 grandchild of each child (if exists)
    getMessageChildrenThreads = async (recordingId) => {
        console.log("getMessageChildrenThreads 1", recordingId);
        let messageChildren = await GetMessageThreadDetailsByReference({
            token: this.accessToken,
            recordingId,
        }) as any;
        return messageChildren.messageThreadDetailsList;
    }

    addToQueue = (recordingId) => {
        if(!this.messagesProcessed[recordingId] && !this.messagesQueue.includes(recordingId)) {
            this.messagesQueue.push(recordingId);
        }
    }

    saveInTree = (recordingId, childRecordingId) => {
        if(!this.messagesTree[recordingId]) {
            this.messagesTree[recordingId] = [childRecordingId];
        } else {
            if (!this.messagesTree[recordingId].includes(childRecordingId)) {
                this.messagesTree[recordingId].push(childRecordingId);
            }
        }
    }

    processMessage = async (recordingId) => {
        console.log("processing message", recordingId);
        if(this.messagesProcessed[recordingId]) {
            console.log("messagesProcessed", recordingId)
            return;
        }
        const message = await this.getMessage(recordingId);
        if(message?.previousThreadRecordingId) {
            console.log("message?.previousThreadRecordingId", message?.previousThreadRecordingId)
            this.saveInTree(message?.previousThreadRecordingId, recordingId);
            this.addToQueue(message?.previousThreadRecordingId);
            // const parentMessage = await this.getMessage(message?.previousThreadRecordingId);
            // if(parentMessage.previousThreadRecordingId) {
            //     this.addToQueue(parentMessage.previousThreadRecordingId);
            // }
        }

        const childrenThreads = await this.getMessageChildrenThreads(recordingId);
        await childrenThreads.forEach(async childThread => {
            this.messagesCache[childThread?.lastMessage?.recordingId] = childThread?.lastMessage;
            this.messagesCache[childThread?.firstMessage?.recordingId] = childThread?.firstMessage;
            await this.saveInTree(recordingId, childThread?.firstMessage?.recordingId);
            await this.saveInTree(recordingId, childThread?.lastMessage?.recordingId);
            await this.addToQueue(childThread?.firstMessage?.recordingId);
            await this.addToQueue(childThread?.lastMessage?.recordingId);
        });
        this.messagesProcessed[recordingId] = true;
        console.log('Finished processing');
        console.log('messagesProcessed', this.messagesProcessed);
    }

    run = async (recordingId) => {
        await this.processMessage(recordingId);
        while(this.messagesQueue.length > 0) {
            const nextRecordingId = this.messagesQueue.shift();
            await this.processMessage(nextRecordingId);
        }
        return {
            messagesCache: this.messagesCache,
            messagesTree: this.messagesTree,
            messagesProcessed: this.messagesProcessed,
            messagesQueue: this.messagesQueue,
        }
    }
}


export const getFullMessageThreadFromRecordingId = async ({recordingId, accessToken}) => {
    const threadBuilder = new AirchatMessageThreadBuilder(recordingId, accessToken);
    return await threadBuilder.run(recordingId);
}