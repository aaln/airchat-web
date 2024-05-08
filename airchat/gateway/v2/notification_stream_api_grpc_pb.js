// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_gateway_v2_notification_stream_api_pb = require('../../../airchat/gateway/v2/notification_stream_api_pb.js');
var airchat_gateway_v2_notification_stream_pb = require('../../../airchat/gateway/v2/notification_stream_pb.js');

function serialize_airchat_gateway_v2_NotificationStreamRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_gateway_v2_notification_stream_api_pb.NotificationStreamRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.gateway.v2.NotificationStreamRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_gateway_v2_NotificationStreamRequest(buffer_arg) {
  return airchat_gateway_v2_notification_stream_api_pb.NotificationStreamRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_gateway_v2_NotificationStreamResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_gateway_v2_notification_stream_api_pb.NotificationStreamResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.gateway.v2.NotificationStreamResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_gateway_v2_NotificationStreamResponse(buffer_arg) {
  return airchat_gateway_v2_notification_stream_api_pb.NotificationStreamResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// A service for handling client subscriptions to notifications relevant to the user.
var NotificationStreamAPIService = (exports.NotificationStreamAPIService = {
  // Stream notifications relevant to the current user
  notificationStream: {
    path: '/airchat.gateway.v2.NotificationStreamAPI/NotificationStream',
    requestStream: true,
    responseStream: true,
    requestType:
      airchat_gateway_v2_notification_stream_api_pb.NotificationStreamRequest,
    responseType:
      airchat_gateway_v2_notification_stream_api_pb.NotificationStreamResponse,
    requestSerialize: serialize_airchat_gateway_v2_NotificationStreamRequest,
    requestDeserialize:
      deserialize_airchat_gateway_v2_NotificationStreamRequest,
    responseSerialize: serialize_airchat_gateway_v2_NotificationStreamResponse,
    responseDeserialize:
      deserialize_airchat_gateway_v2_NotificationStreamResponse
  }
});

exports.NotificationStreamAPIClient = grpc.makeGenericClientConstructor(
  NotificationStreamAPIService
);
