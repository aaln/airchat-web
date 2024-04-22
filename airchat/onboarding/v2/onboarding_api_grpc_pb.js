// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_onboarding_v2_onboarding_api_pb = require('../../../airchat/onboarding/v2/onboarding_api_pb.js');
var airchat_onboarding_v2_onboarding_pb = require('../../../airchat/onboarding/v2/onboarding_pb.js');

function serialize_airchat_onboarding_v2_ValidateOnboardingRequest(arg) {
  if (!(arg instanceof airchat_onboarding_v2_onboarding_api_pb.ValidateOnboardingRequest)) {
    throw new Error('Expected argument of type airchat.onboarding.v2.ValidateOnboardingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_onboarding_v2_ValidateOnboardingRequest(buffer_arg) {
  return airchat_onboarding_v2_onboarding_api_pb.ValidateOnboardingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_onboarding_v2_ValidateOnboardingResponse(arg) {
  if (!(arg instanceof airchat_onboarding_v2_onboarding_api_pb.ValidateOnboardingResponse)) {
    throw new Error('Expected argument of type airchat.onboarding.v2.ValidateOnboardingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_onboarding_v2_ValidateOnboardingResponse(buffer_arg) {
  return airchat_onboarding_v2_onboarding_api_pb.ValidateOnboardingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service for handling the onboarding flow.
var OnboardingAPIService = exports.OnboardingAPIService = {
  // Validates the completion of the client coordinated onboarding sequence.
// If no errors are returned, the user is valid and has been marked as active. The client should refresh the auth token.
validateOnboarding: {
    path: '/airchat.onboarding.v2.OnboardingAPI/ValidateOnboarding',
    requestStream: false,
    responseStream: false,
    requestType: airchat_onboarding_v2_onboarding_api_pb.ValidateOnboardingRequest,
    responseType: airchat_onboarding_v2_onboarding_api_pb.ValidateOnboardingResponse,
    requestSerialize: serialize_airchat_onboarding_v2_ValidateOnboardingRequest,
    requestDeserialize: deserialize_airchat_onboarding_v2_ValidateOnboardingRequest,
    responseSerialize: serialize_airchat_onboarding_v2_ValidateOnboardingResponse,
    responseDeserialize: deserialize_airchat_onboarding_v2_ValidateOnboardingResponse,
  },
};

exports.OnboardingAPIClient = grpc.makeGenericClientConstructor(OnboardingAPIService);
