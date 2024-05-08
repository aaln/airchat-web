import { MessageAPIClient } from "@/airchat/message/v2/message_api_grpc_pb";
import { CompleteUploadRequest } from "@/airchat/message/v2/message_api_pb";
import { accessTokenCookieName, airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { cookies } from "next/headers";
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const cookieStore = cookies()
    const accessTokenCookie = cookieStore.get(accessTokenCookieName)
    const token = url.searchParams.get('token') || accessTokenCookie.value;
    let recordingId = url.searchParams.get('id');
    if(!recordingId) {
        recordingId = uuidv4();
    }

    const messageClient = new MessageAPIClient(airchatHostUrl, grpc.credentials.createSsl());
    const metadata = new grpc.Metadata();
    metadata.add('authorization', `Bearer ${token}`);
    console.log("completeUploadReq recordingId", recordingId)
    const completeUploadReq = new CompleteUploadRequest();
    completeUploadReq.setRecordingId(recordingId);
    completeUploadReq.setNumSegments(0);
    
    return new Promise<Response>((resolve, reject) => {
        messageClient.completeUpload(completeUploadReq, metadata, (error, response) => {
            if (error) {
                console.error('Error completing upload request:', error);
                reject(new Response('Internal Server Error', { status: 500 }));
            } else {
                let respObj = response.toObject();
                console.log('Upload request completed successfully:', respObj);
                respObj = {
                    ...respObj,
                    recordingId
                }
                resolve(NextResponse.json(respObj));
            }
        });
    });
}
