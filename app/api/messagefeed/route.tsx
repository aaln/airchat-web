import { MessageAPIClient } from "@/airchat/message/v2/message_api_grpc_pb";
// @ts-ignore
import { GetMessageFeedRequest } from "@/airchat/message/v2/message_api_pb";
import { accessTokenCookieName, airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { cookies } from "next/headers";
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const cookieStore = cookies()
    const url = new URL(request.url);
    const token = url.searchParams.get('token') || cookieStore.get(accessTokenCookieName).value;
    const nextPageKey = url.searchParams.get('nextPageKey');

    const messageClient = new MessageAPIClient(airchatHostUrl, grpc.credentials.createSsl());
    const metadata = new grpc.Metadata();
    metadata.add('authorization', `Bearer ${token}`);

    const messageFeedReq = new GetMessageFeedRequest();
    if (nextPageKey) {
        messageFeedReq.setPageKey(nextPageKey);
    }

    return new Promise<Response>((resolve, reject) => {
        messageClient.getMessageFeed(messageFeedReq, metadata, (error, response) => {
            
            if (error) {
                console.error('Error:', error);
                reject(new Response('Internal Server Error', { status: 500 }));
            } else {
                const respObj = response.toObject();
                console.log('Message Feed Response:', respObj);
                let messagesToUpdate = respObj.itemsList.reduce((prev, item) => {
                    prev.push(item.referenceMessage, ...item.messagesList);
                    return prev;
                }, []);
                messagesToUpdate = messagesToUpdate.filter(message => message !== null);
                // saveOrUpdateMessages(messagesToUpdate)
                resolve(NextResponse.json(respObj));
            }
        });
    });
}
