import { MessageAPIClient } from "@/airchat/message/v2/message_api_grpc_pb";
import { GetMessageThreadsRequest } from "@/airchat/message/v2/message_api_pb";
import { airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const token = url.searchParams.get('token');
    console.log({token})

    const messageClient = new MessageAPIClient(airchatHostUrl, grpc.credentials.createSsl());
    const metadata = new grpc.Metadata();
    metadata.add('authorization', `Bearer ${token}`);

    const threadsReq = new GetMessageThreadsRequest();

    return new Promise<Response>((resolve, reject) => {
        messageClient.getMessageThreads(threadsReq, metadata, (error, response) => {
            if (error) {
                console.error('Error fetching message threads:', error);
                reject(new Response('Internal Server Error', { status: 500 }));
            } else {
                const respObj = response.toObject();
                console.log('Fetched message threads successfully:', respObj);
                resolve(NextResponse.json(respObj));
            }
        });
    });
}
