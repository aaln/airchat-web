import { ActivityAPIClient } from "@/airchat/activity/v2/activity_api_grpc_pb";
// eslint-disable-next-line
import { GetActivityLogRequest } from "@/airchat/activity/v2/activity_api_pb";
import { airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';
import { NextResponse } from 'next/server';
export async function GET(request: Request) {
    const url = new URL(request.url);
    const token = url.searchParams.get('token');

    const activityClient = new ActivityAPIClient(airchatHostUrl, grpc.credentials.createSsl());
    const metadata = new grpc.Metadata();
    metadata.add('authorization', `Bearer ${token}`);

    // Create the request object
    const activityReq = new GetActivityLogRequest();
    // Add necessary request parameters here
    // For example, if you need to specify a page key or activity types:
    // activityReq.setPageKey('your_page_key_here');
    // activityReq.setActivityTypesList([ActivityType.ACTIVITY_TYPE_MESSAGE_LIKE, ...]);
    
    // Make the gRPC call and return a promise
    return new Promise<Response>((resolve, reject) => {
        activityClient.getActivityLog(activityReq, metadata, (error: grpc.ServiceError | null, response: any) => {
            if (error) {
                console.error('Error:', error);
                reject(new Response('Internal Server Error', { status: 500 }));
            } else {
                const respObj = response.toObject();
                resolve(NextResponse.json(respObj.logItemList));
            }
        });
    });
}
