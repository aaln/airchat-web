import { MessageInternalAPIClient } from '@/airchat/message/event/v2/message_internal_api_grpc_pb';
// @ts-ignore
import { GetHydratedMessagesRequest } from '@/airchat/message/event/v2/message_internal_api_pb';
import { accessTokenCookieName, airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const cookieStore = cookies();
  const accessTokenCookie = cookieStore.get(accessTokenCookieName);
  const token = url.searchParams.get('token') || accessTokenCookie.value;
  const recordingIds = url.searchParams.getAll('id');

  const messageClient = new MessageInternalAPIClient(
    airchatHostUrl,
    grpc.credentials.createSsl()
  );
  const metadata = new grpc.Metadata();
  metadata.add('authorization', `Bearer ${token}`);

  const hydratedMessagesReq = new GetHydratedMessagesRequest();
  hydratedMessagesReq.setRecordingIdList([
    '416914d3-c85c-4b07-b153-41447a577b1b'
  ]);
  return new Promise<Response>((resolve, reject) => {
    messageClient.getHydratedMessages(
      hydratedMessagesReq,
      metadata,
      (error, response) => {
        if (error) {
          console.error('Error fetching hydrated messages:', error);
          reject(new Response('Internal Server Error', { status: 500 }));
        } else {
          const respObj = response.toObject();
          console.log('Fetched hydrated messages successfully:', respObj);
          resolve(NextResponse.json(respObj));
        }
      }
    );
  });
}
