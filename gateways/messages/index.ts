import { MessageAPIClient } from "@/airchat/message/v2/message_api_grpc_pb";
// @ts-ignore
import { GetMessagesRequest, GetMessageThreadDetailsByReferenceRequest } from "@/airchat/message/v2/message_api_pb";
import { airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { cache } from "react";

export const GetMessages = cache(async ({
    token,
    recordingIds,
}) => {
    const messageClient = new MessageAPIClient(airchatHostUrl, grpc.credentials.createSsl());
    const metadata = new grpc.Metadata();
    metadata.add('authorization', `Bearer ${token}`);

    const getMessagesReq = new GetMessagesRequest();
    getMessagesReq.setRecordingIdList(recordingIds);

    try {
        const response = await new Promise((resolve, reject) => {
            messageClient.getMessages(getMessagesReq, metadata, (error, response) => {
                if (error) {
                    console.error('Error fetching messages:', error);
                    reject(new Error('Internal Server Error'));
                } else {
                    resolve(response.toObject());
                }
            });
        });
        return response;
    } catch (error) {
        throw new Error('Failed to fetch messages');
    }
});

export const GetMessageThreadDetailsByReference = cache(async ({
    token,
    recordingId,
}) => {
    const messageClient = new MessageAPIClient(airchatHostUrl, grpc.credentials.createSsl());
    const metadata = new grpc.Metadata();
    metadata.add('authorization', `Bearer ${token}`);

    const threadDetailsReq = new GetMessageThreadDetailsByReferenceRequest();
    threadDetailsReq.setReferenceRecordingId(recordingId);
    threadDetailsReq.setIncludeAll(true);

    try {
        const response = await new Promise((resolve, reject) => {
            messageClient.getMessageThreadDetailsByReference(threadDetailsReq, metadata, (error, response) => {
                if (error) {
                    console.error('Error fetching message thread details:', error);
                    reject(new Error('Internal Server Error'));
                } else {
                    resolve(response.toObject());
                }
            });
        });
        return response;
    } catch (error) {
        throw new Error('Failed to fetch message thread details');
    }
});