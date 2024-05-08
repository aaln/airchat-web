// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_notification_v2_notification_api_pb = require('../../../airchat/notification/v2/notification_api_pb.js');
var airchat_notification_v2_notification_pb = require('../../../airchat/notification/v2/notification_pb.js');

function serialize_airchat_notification_v2_ClearPushTokenRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_notification_v2_notification_api_pb.ClearPushTokenRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.notification.v2.ClearPushTokenRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_notification_v2_ClearPushTokenRequest(buffer_arg) {
  return airchat_notification_v2_notification_api_pb.ClearPushTokenRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_notification_v2_ClearPushTokenResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_notification_v2_notification_api_pb.ClearPushTokenResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.notification.v2.ClearPushTokenResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_notification_v2_ClearPushTokenResponse(
  buffer_arg
) {
  return airchat_notification_v2_notification_api_pb.ClearPushTokenResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_notification_v2_GetPushTokenStateRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_notification_v2_notification_api_pb.GetPushTokenStateRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.notification.v2.GetPushTokenStateRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_notification_v2_GetPushTokenStateRequest(
  buffer_arg
) {
  return airchat_notification_v2_notification_api_pb.GetPushTokenStateRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_notification_v2_GetPushTokenStateResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_notification_v2_notification_api_pb.GetPushTokenStateResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.notification.v2.GetPushTokenStateResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_notification_v2_GetPushTokenStateResponse(
  buffer_arg
) {
  return airchat_notification_v2_notification_api_pb.GetPushTokenStateResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_notification_v2_SetPushTokenRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_notification_v2_notification_api_pb.SetPushTokenRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.notification.v2.SetPushTokenRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_notification_v2_SetPushTokenRequest(buffer_arg) {
  return airchat_notification_v2_notification_api_pb.SetPushTokenRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_notification_v2_SetPushTokenResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_notification_v2_notification_api_pb.SetPushTokenResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.notification.v2.SetPushTokenResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_notification_v2_SetPushTokenResponse(buffer_arg) {
  return airchat_notification_v2_notification_api_pb.SetPushTokenResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// A service for configuring notification data.
var NotificationAPIService = (exports.NotificationAPIService = {
  // Allows the setting of a push token for the current user.
  setPushToken: {
    path: '/airchat.notification.v2.NotificationAPI/SetPushToken',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_notification_v2_notification_api_pb.SetPushTokenRequest,
    responseType:
      airchat_notification_v2_notification_api_pb.SetPushTokenResponse,
    requestSerialize: serialize_airchat_notification_v2_SetPushTokenRequest,
    requestDeserialize: deserialize_airchat_notification_v2_SetPushTokenRequest,
    responseSerialize: serialize_airchat_notification_v2_SetPushTokenResponse,
    responseDeserialize:
      deserialize_airchat_notification_v2_SetPushTokenResponse
  },
  // Clears the currently set push tokens for the current user.
  clearPushToken: {
    path: '/airchat.notification.v2.NotificationAPI/ClearPushToken',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_notification_v2_notification_api_pb.ClearPushTokenRequest,
    responseType:
      airchat_notification_v2_notification_api_pb.ClearPushTokenResponse,
    requestSerialize: serialize_airchat_notification_v2_ClearPushTokenRequest,
    requestDeserialize:
      deserialize_airchat_notification_v2_ClearPushTokenRequest,
    responseSerialize: serialize_airchat_notification_v2_ClearPushTokenResponse,
    responseDeserialize:
      deserialize_airchat_notification_v2_ClearPushTokenResponse
  },
  // Returns the currently state of push token for the current user.
  getPushTokenState: {
    path: '/airchat.notification.v2.NotificationAPI/GetPushTokenState',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_notification_v2_notification_api_pb.GetPushTokenStateRequest,
    responseType:
      airchat_notification_v2_notification_api_pb.GetPushTokenStateResponse,
    requestSerialize:
      serialize_airchat_notification_v2_GetPushTokenStateRequest,
    requestDeserialize:
      deserialize_airchat_notification_v2_GetPushTokenStateRequest,
    responseSerialize:
      serialize_airchat_notification_v2_GetPushTokenStateResponse,
    responseDeserialize:
      deserialize_airchat_notification_v2_GetPushTokenStateResponse
  }
});

exports.NotificationAPIClient = grpc.makeGenericClientConstructor(
  NotificationAPIService
);
