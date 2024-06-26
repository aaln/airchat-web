import { MessageAPIClient } from '@/airchat/message/v2/message_api_grpc_pb';
// @ts-ignore
import { GetPrivateRoomsRequest } from '@/airchat/message/v2/message_api_pb';
import { accessTokenCookieName, airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookieStore = cookies();
  const url = new URL(request.url);
  const token =
    url.searchParams.get('token') ||
    cookieStore.get(accessTokenCookieName)?.value;
  if (!token) {
    return new Response('Missing token or userId query parameter', {
      status: 400
    });
  }

  const messageClient = new MessageAPIClient(
    airchatHostUrl,
    grpc.credentials.createSsl()
  );

  // Create the GetPrivateRooms request object
  const getPrivateRoomsReq = new GetPrivateRoomsRequest();
  // getPrivateRoomsReq.setUserId(userId);

  const metadata = new grpc.Metadata();
  metadata.add('authorization', `Bearer ${token}`);
  metadata.add('user-agent', 'grpc-java-okhttp/1.55.1');
  metadata.add('content-type', 'application/grpc');
  metadata.add('te', 'trailers');
  metadata.add('grpc-accept-encoding', 'gzip');

  return new Promise<Response>((resolve, reject) => {
    messageClient.getPrivateRooms(
      getPrivateRoomsReq,
      metadata,
      (error, response) => {
        if (error) {
          console.error('GetPrivateRooms Error:', error);
          reject(new Response('Internal Server Error', { status: 500 }));
        } else {
          const roomsInfo = response.toObject();
          console.log('GetPrivateRooms Response:', roomsInfo);
          resolve(NextResponse.json(roomsInfo));
        }
      }
    );
  });
}
