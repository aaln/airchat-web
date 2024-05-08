import { AuthAPIClient } from '@/airchat/auth/v2/auth_api_grpc_pb';
// @ts-ignore
import { AuthRequest } from '@/airchat/auth/v2/auth_api_pb';

import {
  // @ts-ignore
  AuthSessionToken,
  // @ts-ignore
  PhoneNumberFactor,
  // @ts-ignore
  PhoneNumberFactorTransport
} from '@/airchat/auth/v2/auth_pb';
import * as grpc from '@grpc/grpc-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const phone = url.searchParams.get('phone');
  const locale = url.searchParams.get('locale');
  const phoneNumberFactor = new PhoneNumberFactor();
  phoneNumberFactor.setPhoneNumber(phone);
  phoneNumberFactor.setLocale(locale);
  phoneNumberFactor.setTransport(
    PhoneNumberFactorTransport.PHONE_NUMBER_FACTOR_TRANSPORT_SMS
  );

  const authReq = new AuthRequest();
  const sessionToken = new AuthSessionToken(); // Assuming you have a generated class for this
  sessionToken.setToken(null); // If starting a new session, this might be empty or some initial value
  authReq.setAuthSessionToken(sessionToken);
  authReq.setPhoneNumberFactor(phoneNumberFactor);

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
  const client = new AuthAPIClient(
    'api.prod.getairchat.io',
    grpc.credentials.createSsl()
  );
  return new Promise<Response>((resolve, reject) => {
    console.log('Request:', authReq.toObject());
    client.auth(
      authReq,
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
