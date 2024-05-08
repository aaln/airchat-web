// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_gateway_v2_activity_stream_api_pb = require('../../../airchat/gateway/v2/activity_stream_api_pb.js');
var airchat_activity_v2_activity_pb = require('../../../airchat/activity/v2/activity_pb.js');

function serialize_airchat_gateway_v2_ActivityStreamRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_gateway_v2_activity_stream_api_pb.ActivityStreamRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.gateway.v2.ActivityStreamRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_gateway_v2_ActivityStreamRequest(buffer_arg) {
  return airchat_gateway_v2_activity_stream_api_pb.ActivityStreamRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_gateway_v2_ActivityStreamResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_gateway_v2_activity_stream_api_pb.ActivityStreamResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.gateway.v2.ActivityStreamResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_gateway_v2_ActivityStreamResponse(buffer_arg) {
  return airchat_gateway_v2_activity_stream_api_pb.ActivityStreamResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// A service for handling client subscriptions to activity relevant to the user.
var ActivityStreamAPIService = (exports.ActivityStreamAPIService = {
  // Stream activity log items relevant to the current user using a bidirectional stream
  activityStream: {
    path: '/airchat.gateway.v2.ActivityStreamAPI/ActivityStream',
    requestStream: true,
    responseStream: true,
    requestType:
      airchat_gateway_v2_activity_stream_api_pb.ActivityStreamRequest,
    responseType:
      airchat_gateway_v2_activity_stream_api_pb.ActivityStreamResponse,
    requestSerialize: serialize_airchat_gateway_v2_ActivityStreamRequest,
    requestDeserialize: deserialize_airchat_gateway_v2_ActivityStreamRequest,
    responseSerialize: serialize_airchat_gateway_v2_ActivityStreamResponse,
    responseDeserialize: deserialize_airchat_gateway_v2_ActivityStreamResponse
  }
});

exports.ActivityStreamAPIClient = grpc.makeGenericClientConstructor(
  ActivityStreamAPIService
);
