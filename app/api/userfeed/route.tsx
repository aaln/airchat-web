import { MessageAPIClient } from '@/airchat/message/v2/message_api_grpc_pb';
// @ts-ignore
import { GetUserFeedRequest } from '@/airchat/message/v2/message_api_pb';
import { saveOrUpdateMessages } from '@/collect/ingest';
import { accessTokenCookieName, airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookieStore = cookies();
  const url = new URL(request.url);
  const token =
    url.searchParams.get('token') ||
    cookieStore.get(accessTokenCookieName).value;
  const nextPageKey = url.searchParams.get('nextPageKey');
  const userId = url.searchParams.get('userId');

  const messageClient = new MessageAPIClient(
    airchatHostUrl,
    grpc.credentials.createSsl()
  );
  const metadata = new grpc.Metadata();
  metadata.add('authorization', `Bearer ${token}`);

  const userFeedReq = new GetUserFeedRequest();
  userFeedReq.setUserId(userId);
  if (nextPageKey) {
    userFeedReq.setPageKey(nextPageKey);
  }

  return new Promise<Response>((resolve, reject) => {
    messageClient.getUserFeed(userFeedReq, metadata, (error, response) => {
      if (error) {
        console.error('Error:', error);
        reject(new Response('Internal Server Error', { status: 500 }));
      } else {
        const respObj = response.toObject();
        let messagesToUpdate = respObj.itemsList.reduce((prev, item) => {
          prev.push(item.referenceMessage, ...item.messagesList);
          return prev;
        }, []);
        messagesToUpdate = messagesToUpdate.filter(
          (message) => message !== null
        );
        saveOrUpdateMessages(messagesToUpdate);
        resolve(NextResponse.json(respObj));
      }
    });
  });
}
