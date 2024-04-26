import { MessageAPIClient } from "@/airchat/message/v2/message_api_grpc_pb";
// @ts-ignore
import { GetMessageThreadDetailsByReferenceRequest } from "@/airchat/message/v2/message_api_pb";
import { airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const token = url.searchParams.get('token');
    const referenceId = url.searchParams.get('id');

    const messageClient = new MessageAPIClient(airchatHostUrl, grpc.credentials.createSsl());
    const metadata = new grpc.Metadata();
    metadata.add('authorization', `Bearer ${token}`);

    const threadDetailsReq = new GetMessageThreadDetailsByReferenceRequest();
    threadDetailsReq.setReferenceRecordingId(referenceId); // Updated to use setReferenceId as per the followup prompt

    return new Promise<Response>((resolve, reject) => {
        messageClient.getMessageThreadDetailsByReference(threadDetailsReq, metadata, (error, response) => {
            if (error) {
                console.error('Error fetching message thread details:', error);
                reject(new Response('Internal Server Error', { status: 500 }));
            } else {
                const respObj = response.toObject();
                console.log('Fetched message thread details successfully:', respObj);
                resolve(NextResponse.json(respObj));
            }
        });
    });
}

