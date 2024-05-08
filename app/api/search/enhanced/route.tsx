import { EnhancedSearchAPIClient } from '@/airchat/search/v2/enhanced_search_api_grpc_pb';
import {
  // @ts-ignore
  MessageSearchRequest,
  // @ts-ignore
  MessageSearchSortOrder
} from '@/airchat/search/v2/enhanced_search_api_pb';
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
  const query = url.searchParams.get('query');
  const pageKey = url.searchParams.get('pageKey');

  if (!token || !query) {
    return new Response('Missing token or query', { status: 400 });
  }

  const searchClient = new EnhancedSearchAPIClient(
    airchatHostUrl,
    grpc.credentials.createSsl()
  );

  // Create the enhanced search request object
  const searchReq = new MessageSearchRequest();
  searchReq.setQuery(query);
  searchReq.setPageKey(pageKey);
  searchReq.setSortOrder(
    MessageSearchSortOrder.MESSAGE_SEARCH_SORT_ORDER_LATEST
  );
  searchReq.setQuery(query);

  const metadata = new grpc.Metadata();
  metadata.add('authorization', `Bearer ${token}`);
  metadata.add('user-agent', 'grpc-java-okhttp/1.55.1');
  metadata.add('content-type', 'application/grpc');
  metadata.add('te', 'trailers');
  metadata.add('grpc-accept-encoding', 'gzip');

  return new Promise<Response>((resolve, reject) => {
    searchClient.messageSearch(searchReq, metadata, (error, response) => {
      if (error) {
        console.error('Search Error:', error);
        reject(new Response('Internal Server Error', { status: 500 }));
      } else {
        const respObj = response.toObject();
        console.log('Search Response:', respObj);
        const results = respObj.messageSearchResultList.map(
          (message) => message.message
        );
        resolve(
          NextResponse.json({
            results,
            nextPageKey: respObj.nextPageKey
          })
        );
      }
    });
  });
}
