// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_auth_event_v2_auth_internal_api_pb = require('../../../../airchat/auth/event/v2/auth_internal_api_pb.js');

function serialize_airchat_auth_event_v2_GetUserPhoneFactorsRequest(arg) {
  if (!(arg instanceof airchat_auth_event_v2_auth_internal_api_pb.GetUserPhoneFactorsRequest)) {
    throw new Error('Expected argument of type airchat.auth.event.v2.GetUserPhoneFactorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_event_v2_GetUserPhoneFactorsRequest(buffer_arg) {
  return airchat_auth_event_v2_auth_internal_api_pb.GetUserPhoneFactorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_event_v2_GetUserPhoneFactorsResponse(arg) {
  if (!(arg instanceof airchat_auth_event_v2_auth_internal_api_pb.GetUserPhoneFactorsResponse)) {
    throw new Error('Expected argument of type airchat.auth.event.v2.GetUserPhoneFactorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_event_v2_GetUserPhoneFactorsResponse(buffer_arg) {
  return airchat_auth_event_v2_auth_internal_api_pb.GetUserPhoneFactorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// An internal service for authenticating users with Airchat.
var AuthInternalAPIService = exports.AuthInternalAPIService = {
  // Fetches phone numbers associated with the user
getUserPhoneFactors: {
    path: '/airchat.auth.event.v2.AuthInternalAPI/GetUserPhoneFactors',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_event_v2_auth_internal_api_pb.GetUserPhoneFactorsRequest,
    responseType: airchat_auth_event_v2_auth_internal_api_pb.GetUserPhoneFactorsResponse,
    requestSerialize: serialize_airchat_auth_event_v2_GetUserPhoneFactorsRequest,
    requestDeserialize: deserialize_airchat_auth_event_v2_GetUserPhoneFactorsRequest,
    responseSerialize: serialize_airchat_auth_event_v2_GetUserPhoneFactorsResponse,
    responseDeserialize: deserialize_airchat_auth_event_v2_GetUserPhoneFactorsResponse,
  },
};

exports.AuthInternalAPIClient = grpc.makeGenericClientConstructor(AuthInternalAPIService);
