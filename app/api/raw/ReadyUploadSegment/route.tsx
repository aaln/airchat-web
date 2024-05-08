import { MessageAPIClient } from "@/airchat/message/v2/message_api_grpc_pb";
import { ReadyUploadSegmentRequest } from "@/airchat/message/v2/message_api_pb";
import { accessTokenCookieName, airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { cookies } from "next/headers";
import { NextResponse } from 'next/server';


export async function GET(request: Request) {
    const url = new URL(request.url);
    const cookieStore = cookies()
    const accessTokenCookie = cookieStore.get(accessTokenCookieName)
    const token = url.searchParams.get('token') || accessTokenCookie.value;
    const recordingId = url.searchParams.get('id');
    const duration = url.searchParams.get('duration');

    const messageClient = new MessageAPIClient(airchatHostUrl, grpc.credentials.createSsl());
    const metadata = new grpc.Metadata();
    metadata.add('authorization', `Bearer ${token}`);

    const readyUploadSegmentReq = new ReadyUploadSegmentRequest();
    readyUploadSegmentReq.setRecordingId(recordingId);
    readyUploadSegmentReq.setDuration(duration);
    readyUploadSegmentReq.setSegmentIndex(0);
    return new Promise<Response>((resolve, reject) => {
        messageClient.readyUploadSegment(readyUploadSegmentReq, metadata, (error, response) => {
            if (error) {
                console.error('Error creating upload request:', error);
                reject(new Response('Internal Server Error', { status: 500 }));
            } else {
                const respObj = response.toObject();
                console.log('Upload request created successfully:', respObj);
                resolve(NextResponse.json(respObj));
            }
        });
    });
}
