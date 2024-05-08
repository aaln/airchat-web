import { ActivityAPIClient } from '@/airchat/activity/v2/activity_api_grpc_pb';
import { EnhancedSearchAPIClient } from '@/airchat/search/v2/enhanced_search_api_grpc_pb';
// @ts-ignore
import {
  ChannelSearchRequest,
  MessageSearchRequest
} from '@/airchat/search/v2/enhanced_search_api_pb';
import { airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  const query = url.searchParams.get('query');

  const activityClient = new ActivityAPIClient(
    airchatHostUrl,
    grpc.credentials.createSsl()
  );
  const metadata = new grpc.Metadata();
  metadata.add('authorization', `Bearer ${token}`);
  const enhancedSearchClient = new EnhancedSearchAPIClient(
    airchatHostUrl,
    grpc.credentials.createSsl()
  );

  // Create the enhanced search request object
  const searchReq = new MessageSearchRequest();
  searchReq.setQuery(query);

  const channelSearchReq = new ChannelSearchRequest();
  channelSearchReq.setQuery(query);

  return Promise.all([
    new Promise((resolve, reject) => {
      enhancedSearchClient.channelSearch(
        channelSearchReq,
        metadata,
        (error, response) => {
          if (error) {
            console.error('Channel Search Error:', error);
            reject(new Response('Internal Server Error', { status: 500 }));
          } else {
            const respObj = response.toObject();
            console.log('Channel Search Response:', respObj);
            resolve(respObj.channelSearchResultList);
          }
        }
      );
    }),
    new Promise((resolve, reject) => {
      enhancedSearchClient.messageSearch(
        searchReq,
        metadata,
        (error, response) => {
          if (error) {
            console.error('Message Search Error:', error);
            reject(new Response('Internal Server Error', { status: 500 }));
          } else {
            const respObj = response.toObject();
            console.log('Message Search Response:', respObj);
            resolve(respObj.messageSearchResultList);
          }
        }
      );
    })
  ])
    .then(([channelSearchResults, messageSearchResults]) => {
      return NextResponse.json({ channelSearchResults, messageSearchResults });
    })
    .catch((error) => {
      console.error('Promise.all Error:', error);
      return new Response('Internal Server Error', { status: 500 });
    });
}
