import { LinksAPIClient } from '@/airchat/links/v2/links_api_grpc_pb';
// @ts-ignore
import { CreateShortLinkRequest, PostLink, UserLink } from '@/airchat/links/v2/links_api_pb';
import { accessTokenCookieName, airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const cookieStore = cookies();
    const url = new URL(request.url);
    const token = url.searchParams.get('token') || cookieStore.get(accessTokenCookieName).value;
    const link = url.searchParams.get('link');

    if (!token || !link) {
        return new Response('Missing token or link', { status: 400 });
    }

    const linksClient = new LinksAPIClient(airchatHostUrl, grpc.credentials.createSsl());
    // Create the create short link request object
    const createShortLinkReq = new CreateShortLinkRequest();
    let userLink = new UserLink();
    // userLink.setUsername("aaron");
    // createShortLinkReq.setUserLink(userLink);

    let postLink = new PostLink();
    postLink.setRecordingId("9c09716e-f114-4d56-8a80-5861ec7cff79");
    
    createShortLinkReq.setPostLink(postLink);
    // const resp = await createShortLinkReq.getPostLink(link)

    const metadata = new grpc.Metadata();
    metadata.add('authorization', `Bearer ${token}`);
    metadata.add('user-agent', 'grpc-java-okhttp/1.55.1');
    metadata.add('content-type', 'application/grpc');
    metadata.add('te', 'trailers');
    metadata.add('grpc-accept-encoding', 'gzip');

    return new Promise<Response>((resolve, reject) => {
        linksClient.createShortLink(createShortLinkReq, metadata, (error, response) => {
            if (error) {
                console.error('Create Short Link Error:', error);
                reject(new Response('Internal Server Error', { status: 500 }));
            } else {
                const respObj = response.toObject();
                console.log('Create Short Link Response:', respObj);
                resolve(NextResponse.json({
                    shortLink: respObj.shortLink
                }));
            }
        });
    });
}