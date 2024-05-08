import { ActivityStreamAPIClient } from '@/airchat/gateway/v2/activity_stream_api_grpc_pb';
// @ts-ignore
import { ActivityStreamRequest } from '@/airchat/gateway/v2/activity_stream_api_pb';
import { airchatHostUrl } from '@/constants';
import * as grpc from '@grpc/grpc-js';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  if (!token) {
    return new Response('Missing token or query', { status: 400 });
  }

  const activityStreamClient = new ActivityStreamAPIClient(
    airchatHostUrl,
    grpc.credentials.createSsl()
  );
  const metadata = new grpc.Metadata();
  metadata.add('authorization', `Bearer ${token}`);

  const activityStreamReq = new ActivityStreamRequest();

  return new Promise<Response>((resolve, reject) => {
    activityStreamClient.activityStream(
      activityStreamReq,
      metadata,
      (error: grpc.ServiceError | null, response: any) => {
        if (error) {
          console.error('Error:', error);
          reject(new Response('Internal Server Error', { status: 500 }));
        } else {
          const respObj = response.toObject();
          console.log('Activity Stream Response:', respObj);
          resolve(
            new Response(JSON.stringify(respObj), {
              status: 200,
              headers: { 'Content-Type': 'application/json' }
            })
          );
        }
      }
    );
  });
}
