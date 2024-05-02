import { MessageAPIClient } from '@/airchat/message/v2/message_api_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import { NextResponse } from 'next/server';
// @ts-ignore
import { SendMessageEventRequest } from '@/airchat/message/v2/message_api_pb';
import { accessTokenCookieName } from '@/constants';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    const cookieStore = cookies();
    const url = new URL(request.url);
    const token = url.searchParams.get('token') || cookieStore.get(accessTokenCookieName).value;
    const recordingId = url.searchParams.get('recordingId');
    const event = parseInt(url.searchParams.get('event'));

    // Create a new message client with metadata for authentication
    const messageClient = new MessageAPIClient('api.prod.getairchat.io', grpc.credentials.createSsl());
    const metadata = new grpc.Metadata();
    if (token) {
        metadata.add('authorization', `Bearer ${token}`);
    }

    // Send a message event
    const sendMessageEventRequest = new SendMessageEventRequest();
    sendMessageEventRequest.setRecordingId(recordingId);  
    sendMessageEventRequest.setEventType(event);

    // Set the necessary fields for the message event

    return messageClient.sendMessageEvent(sendMessageEventRequest, metadata, (error, sendMessageEventResponse) => {
        console.log('Error:', error);
        console.log('sendMessageEventResponse:', sendMessageEventResponse);
        if (!sendMessageEventResponse) {
            return NextResponse.json({ error: 'Failed to send message event' });
        }

        // Assuming the response contains the necessary data we need to proceed
        console.log('Sent message event:', sendMessageEventResponse.toObject());
        return NextResponse.json(sendMessageEventResponse.toObject());
    });
}
