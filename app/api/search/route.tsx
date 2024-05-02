import { SearchAPIClient } from '@/airchat/search/v2/search_api_grpc_pb';
// @ts-ignore
import { SearchRequest } from '@/airchat/search/v2/search_api_pb';
import { accessTokenCookieName, airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
     const cookieStore = cookies()
    const url = new URL(request.url);
    const token = url.searchParams.get('token') || cookieStore.get(accessTokenCookieName).value;
    
    const query = url.searchParams.get('query');

    if (!token || !query) {
        return new Response('Missing token or query', { status: 400 });
    }

    const searchClient = new SearchAPIClient(airchatHostUrl, grpc.credentials.createSsl());
    const metadata = new grpc.Metadata();
    metadata.add('authorization', `Bearer ${token}`);

    // Create the search request object
    const searchReq = new SearchRequest();
    searchReq.setQuery(query);
    searchReq.setTypeList(1)

    // Add any other necessary search parameters here
    // For example, if you need to specify a page key or search types:
    // searchReq.setPageKey('your_page_key_here');
    // searchReq.setTypeList([SearchType.SEARCH_TYPE_MESSAGE, ...]);

    // Make the gRPC call and return a promise
    return new Promise<Response>((resolve, reject) => {
        searchClient.search(searchReq, metadata, (error, response) => {
            if (error) {
                console.error('Search Error:', error);
                reject(new Response('Internal Server Error', { status: 500 }));
            } else {
                const respObj = response.toObject();
                console.log('Search Response:', respObj.hitList);
                resolve(NextResponse.json(respObj.hitList));
            }
        });
    });
}