import * as grpc from '@grpc/grpc-js';
// @ts-ignore
// @ts-ignore
import { NextResponse } from 'next/server';

// Assuming we have the necessary information to create a message and upload audio
// such as the message content, audio file buffer, and any other required metadata.

// Import the necessary modules from the message API
import { MessageAPIClient } from '@/airchat/message/v2/message_api_grpc_pb';
// @ts-ignore
import { CreateMessageThreadRequest } from '@/airchat/message/v2/message_api_pb';


export async function GET(request: Request) {
    const url = new URL(request.url);
    const token = url.searchParams.get('token');

    // const client = new AuthAPIClient('api.prod.getairchat.io', grpc.credentials.createSsl());

    // Create a new message client with metadata for authentication
    const messageClient = new MessageAPIClient('api.prod.getairchat.io', grpc.credentials.createSsl());
    console.log('Message client:', messageClient);
    const metadata = new grpc.Metadata();
    if (token) {
        metadata.add('authorization', `Bearer ${token}`);
    }

    // Create a new message thread
    const createMessageThreadRequest = new CreateMessageThreadRequest();
    console.log('createMessageThreadRequest:', createMessageThreadRequest.toObject());
    // Set the necessary fields for the message thread
    // createMessageThreadRequest.set... (set the necessary properties)
    createMessageThreadRequest.setReferenceRecordingId(''); // Set the reference message ID if applicable
    createMessageThreadRequest.setMessageThreadId(''); // Optionally set a custom thread ID
    createMessageThreadRequest.setParticipantOnlyVisibility(false); // Set visibility if needed


    messageClient.createMessageThread(createMessageThreadRequest, metadata, (error, createMessageThreadResponse) => {
        console.log('Error:', error)
        console.log('createMessageThreadResponse:', createMessageThreadResponse);
        if(!createMessageThreadResponse) {
            return NextResponse.json(createMessageThreadResponse.toObject());
        }

        // Assuming the response contains the message thread ID we can use to upload the audio
        const messageThreadId = createMessageThreadResponse.getMessageThreadId();
        console.log('Created message thread:', messageThreadId);

            // // Now we create an upload request for the audio file
            // const createUploadRequest = new CreateUploadRequest();
            // // Set the necessary fields for the upload
            // // createUploadRequest.set... (set the necessary properties)

            // messageClient.createUpload(createUploadRequest, metadata, (uploadError, uploadResponse) => {
            //     if (uploadError) {
            //         console.error('Failed to create upload:', uploadError);
            //         return;
            //     }

            //     // Assuming the uploadResponse contains the information needed to upload the file
            //     // such as the upload URL and any required authentication tokens or headers
            //     const uploadUrl = uploadResponse.getUploadUrl();
            //     console.log('Upload URL:', uploadUrl);
            //     // Perform the actual upload to the provided upload URL
            //     // This would typically involve a separate HTTP request to the upload URL with the audio file buffer
            //     // and any required headers or tokens provided in the uploadResponse
            // });
        return NextResponse.json(createMessageThreadResponse.toObject());
    });

}