import { AuthAPIClient } from '@/airchat/auth/v2/auth_api_grpc_pb';
// @ts-ignore
import { RefreshRequest, RefreshToken } from '@/airchat/auth/v2/auth_api_pb';
import * as grpc from '@grpc/grpc-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const body = await request.json();
  const { token } = body;

  const refreshToken = new RefreshToken();
  refreshToken.setToken(token); // Replace with your actual refresh token

  const refreshRequest = new RefreshRequest();
  refreshRequest.setRefreshToken(refreshToken);

  const client = new AuthAPIClient(
    'api.prod.getairchat.io',
    grpc.credentials.createSsl()
  );

  const metadata = new grpc.Metadata();
  // metadata.add('host', 'api.prod.getairchat.io:443');
  // metadata.add('user-agent', 'grpc-java-okhttp/1.55.1');
  // metadata.add('content-type', 'application/grpc');
  // // metadata.add('te', 'trailers');
  metadata.add(
    'client-attestation-challenge',
    '442535c8-7f7a-4756-9d07-835b140b39db'
  );
  metadata.add('client-assertion-data', '');
  // metadata.add('grpc-accept-encoding', 'gzip');

  return new Promise<Response>((resolve, reject) => {
    client.refresh(
      refreshRequest,
      metadata,
      (error: grpc.ServiceError, response: any) => {
        if (error) {
          console.error('Error:', error);
          reject(
            new Response(null, {
              status: 500,
              statusText: 'Internal Server Error'
            })
          );
        } else {
          console.log('Response:', response.toObject());
          resolve(NextResponse.json(response.toObject()));
        }
      }
    );
  });
}
