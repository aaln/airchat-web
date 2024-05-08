// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_gateway_v2_status_stream_api_pb = require('../../../airchat/gateway/v2/status_stream_api_pb.js');
var airchat_gateway_v2_status_stream_pb = require('../../../airchat/gateway/v2/status_stream_pb.js');

function serialize_airchat_gateway_v2_SendStatusRequest(arg) {
  if (
    !(arg instanceof airchat_gateway_v2_status_stream_api_pb.SendStatusRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.gateway.v2.SendStatusRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_gateway_v2_SendStatusRequest(buffer_arg) {
  return airchat_gateway_v2_status_stream_api_pb.SendStatusRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_gateway_v2_SendStatusResponse(arg) {
  if (
    !(arg instanceof airchat_gateway_v2_status_stream_api_pb.SendStatusResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.gateway.v2.SendStatusResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_gateway_v2_SendStatusResponse(buffer_arg) {
  return airchat_gateway_v2_status_stream_api_pb.SendStatusResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_gateway_v2_StatusStreamRequest(arg) {
  if (
    !(
      arg instanceof airchat_gateway_v2_status_stream_api_pb.StatusStreamRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.gateway.v2.StatusStreamRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_gateway_v2_StatusStreamRequest(buffer_arg) {
  return airchat_gateway_v2_status_stream_api_pb.StatusStreamRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_gateway_v2_StatusStreamResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_gateway_v2_status_stream_api_pb.StatusStreamResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.gateway.v2.StatusStreamResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_gateway_v2_StatusStreamResponse(buffer_arg) {
  return airchat_gateway_v2_status_stream_api_pb.StatusStreamResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_gateway_v2_UpdateStatusSubscriptionRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_gateway_v2_status_stream_api_pb.UpdateStatusSubscriptionRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.gateway.v2.UpdateStatusSubscriptionRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_gateway_v2_UpdateStatusSubscriptionRequest(
  buffer_arg
) {
  return airchat_gateway_v2_status_stream_api_pb.UpdateStatusSubscriptionRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_gateway_v2_UpdateStatusSubscriptionResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_gateway_v2_status_stream_api_pb.UpdateStatusSubscriptionResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.gateway.v2.UpdateStatusSubscriptionResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_gateway_v2_UpdateStatusSubscriptionResponse(
  buffer_arg
) {
  return airchat_gateway_v2_status_stream_api_pb.UpdateStatusSubscriptionResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// A service for handling user statuses that are relevant to the current user.
var StatusStreamAPIService = (exports.StatusStreamAPIService = {
  // Initiates a stream of user statuses related to a list of user ID's
  statusStream: {
    path: '/airchat.gateway.v2.StatusStreamAPI/StatusStream',
    requestStream: true,
    responseStream: true,
    requestType: airchat_gateway_v2_status_stream_api_pb.StatusStreamRequest,
    responseType: airchat_gateway_v2_status_stream_api_pb.StatusStreamResponse,
    requestSerialize: serialize_airchat_gateway_v2_StatusStreamRequest,
    requestDeserialize: deserialize_airchat_gateway_v2_StatusStreamRequest,
    responseSerialize: serialize_airchat_gateway_v2_StatusStreamResponse,
    responseDeserialize: deserialize_airchat_gateway_v2_StatusStreamResponse
  },
  // Updates the set of userIDs being subscribed to.
  updateStatusSubscription: {
    path: '/airchat.gateway.v2.StatusStreamAPI/UpdateStatusSubscription',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_gateway_v2_status_stream_api_pb.UpdateStatusSubscriptionRequest,
    responseType:
      airchat_gateway_v2_status_stream_api_pb.UpdateStatusSubscriptionResponse,
    requestSerialize:
      serialize_airchat_gateway_v2_UpdateStatusSubscriptionRequest,
    requestDeserialize:
      deserialize_airchat_gateway_v2_UpdateStatusSubscriptionRequest,
    responseSerialize:
      serialize_airchat_gateway_v2_UpdateStatusSubscriptionResponse,
    responseDeserialize:
      deserialize_airchat_gateway_v2_UpdateStatusSubscriptionResponse
  },
  // Publishes a new status to be dispatched to subscribers.
  sendStatus: {
    path: '/airchat.gateway.v2.StatusStreamAPI/SendStatus',
    requestStream: false,
    responseStream: false,
    requestType: airchat_gateway_v2_status_stream_api_pb.SendStatusRequest,
    responseType: airchat_gateway_v2_status_stream_api_pb.SendStatusResponse,
    requestSerialize: serialize_airchat_gateway_v2_SendStatusRequest,
    requestDeserialize: deserialize_airchat_gateway_v2_SendStatusRequest,
    responseSerialize: serialize_airchat_gateway_v2_SendStatusResponse,
    responseDeserialize: deserialize_airchat_gateway_v2_SendStatusResponse
  }
});

exports.StatusStreamAPIClient = grpc.makeGenericClientConstructor(
  StatusStreamAPIService
);
