import { AuthAPIClient } from '@/airchat/auth/v2/auth_api_grpc_pb';
import * as grpc from '@grpc/grpc-js';
// @ts-ignore
import { AuthSessionToken, PhoneNumberFactor, PhoneNumberFactorTransport } from '@/airchat/auth/v2/auth_pb';
// @ts-ignore
import { AuthRequest } from '@/airchat/auth/v2/auth_api_pb';


export const createInitialPhoneAuthRequest = async (phoneNumber: string, locale: string): AuthRequest => {
    const phoneNumberFactor = new PhoneNumberFactor();
    phoneNumberFactor.setPhoneNumber(phoneNumber);
    phoneNumberFactor.setLocale(locale);
    phoneNumberFactor.setTransport(PhoneNumberFactorTransport.PHONE_NUMBER_FACTOR_TRANSPORT_SMS);

    const authReq = new AuthRequest();
    const sessionToken = new AuthSessionToken();
    sessionToken.setToken(null);
    authReq.setAuthSessionToken(sessionToken);
    authReq.setPhoneNumberFactor(phoneNumberFactor);

    const metadata = new grpc.Metadata();
    metadata.add('client-attestation-challenge', '442535c8-7f7a-4756-9d07-835b140b39db');
    metadata.add('client-assertion-data', '');
    const client = new AuthAPIClient('api.prod.getairchat.io', grpc.credentials.createSsl());

    const response = await client.auth(authReq, metadata);
    return response.toObject();
}