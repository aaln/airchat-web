import { MessageAPIClient } from "@/airchat/message/v2/message_api_grpc_pb";
// @ts-ignore
import { GetMessageFeedRequest } from "@/airchat/message/v2/message_api_pb";
import { airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const token = url.searchParams.get('token');
    const pageKey = url.searchParams.get('pageKey'); // Assuming 'pageKey' is used for pagination

    const messageClient = new MessageAPIClient(airchatHostUrl, grpc.credentials.createSsl());
    const metadata = new grpc.Metadata();
    metadata.add('authorization', `Bearer ${token}`);

    const messageFeedReq = new GetMessageFeedRequest();
    if (pageKey) {
        messageFeedReq.setPageKey(pageKey);
    }

    return new Promise<Response>((resolve, reject) => {
        messageClient.getMessageFeed(messageFeedReq, metadata, (error, response) => {
            if (error) {
                console.error('Error:', error);
                reject(new Response('Internal Server Error', { status: 500 }));
            } else {
                const respObj = response.toObject();
                console.log('Message Feed Response:', respObj);
                resolve(NextResponse.json(respObj));
            }
        });
    });
}
