import { MessageAPIClient } from "@/airchat/message/v2/message_api_grpc_pb";
import { CreateUploadRequest } from "@/airchat/message/v2/message_api_pb";
import { MessageMediaType, Playlist } from "@/airchat/message/v2/message_pb";
import { accessTokenCookieName, airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb.js';
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

    const createUploadReq = new CreateUploadRequest();
    
    createUploadReq.setRecordingId(recordingId);
    const playlistConfig = new Playlist;
    playlistConfig.setMediaType(MessageMediaType.MESSAGE_MEDIA_TYPE_AUDIO);
    // createUploadReq.setMessageThreadId("230c55fa-b11a-3e1a-9a98-5131579d19d3");
    createUploadReq.setPlaylistConfig(playlistConfig);
    // createUploadReq.setPlaylistHeader(undefined);
    // createdTimestamp.setSeconds(3014331992);
    // createdTimestamp.setNanos(470000000);
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const generatedTimestamp = new google_protobuf_timestamp_pb.Timestamp;
    generatedTimestamp.fromDate(new Date(currentTimestamp * 1000));
    // var value = new google_protobuf_timestamp_pb.Timestamp;
    // value.fromDate(new Date(1715043196));
    createUploadReq.setCreatedTime(generatedTimestamp);
    // createUploadReq.setChannelId("your_channel_id_here");

    return new Promise<Response>((resolve, reject) => {
        messageClient.createUpload(createUploadReq, metadata, (error, response) => {
            if (error) {
                console.error('Error creating upload request:', error);
                reject(new Response('Internal Server Error', { status: 500 }));
            } else {
                let respObj = response.toObject();
                console.log('Upload request created successfully:', respObj);
                respObj = {
                    ...respObj,
                    recordingId
                }
                resolve(NextResponse.json(respObj));
            }
        });
    });
}
