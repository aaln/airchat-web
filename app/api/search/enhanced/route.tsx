import { EnhancedSearchAPIClient } from '@/airchat/search/v2/enhanced_search_api_grpc_pb';
// @ts-ignore
import { MessageSearchRequest } from '@/airchat/search/v2/enhanced_search_api_pb';
import { airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const token = url.searchParams.get('token');
    const query = url.searchParams.get('query');

    if (!token || !query) {
        return new Response('Missing token or query', { status: 400 });
    }

    const searchClient = new EnhancedSearchAPIClient(airchatHostUrl, grpc.credentials.createSsl());

    // Create the enhanced search request object
    const searchReq = new MessageSearchRequest();
    searchReq.setQuery(query);

    const metadata = new grpc.Metadata();
    metadata.add('authorization', `Bearer ${token}`);

       // Optionally set other parameters
    // searchReq.setPageKey('your_page_key_here');
    // searchReq.setSortOrder(MessageSearchSortOrder.MESSAGE_SEARCH_SORT_ORDER_RELEVANCE);

    // Add any other necessary search parameters here
    // For example, if you need to specify a page key or search types:
    // searchReq.setPageKey('your_page_key_here');
    // searchReq.setTypeList([SearchType.SEARCH_TYPE_MESSAGE, ...]);

    // Make the gRPC call and return a promise
    return new Promise<Response>((resolve, reject) => {
        searchClient.messageSearch(searchReq, metadata, (error, response) => {
            if (error) {
                console.error('Search Error:', error);
                reject(new Response('Internal Server Error', { status: 500 }));
            } else {
                const respObj = response.toObject();
                console.log('Search Response:', respObj);
                console.log(JSON.stringify(respObj.messageSearchResultList))
                resolve(NextResponse.json(respObj.messageSearchResultList));
            }
        });
    });
}