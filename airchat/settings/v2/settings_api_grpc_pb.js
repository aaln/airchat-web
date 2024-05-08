// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_settings_v2_settings_api_pb = require('../../../airchat/settings/v2/settings_api_pb.js');
var airchat_settings_v2_settings_pb = require('../../../airchat/settings/v2/settings_pb.js');

function serialize_airchat_settings_v2_GetSettingsRequest(arg) {
  if (
    !(arg instanceof airchat_settings_v2_settings_api_pb.GetSettingsRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.settings.v2.GetSettingsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_settings_v2_GetSettingsRequest(buffer_arg) {
  return airchat_settings_v2_settings_api_pb.GetSettingsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_settings_v2_GetSettingsResponse(arg) {
  if (
    !(arg instanceof airchat_settings_v2_settings_api_pb.GetSettingsResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.settings.v2.GetSettingsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_settings_v2_GetSettingsResponse(buffer_arg) {
  return airchat_settings_v2_settings_api_pb.GetSettingsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_settings_v2_UpdateSettingsRequest(arg) {
  if (
    !(arg instanceof airchat_settings_v2_settings_api_pb.UpdateSettingsRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.settings.v2.UpdateSettingsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_settings_v2_UpdateSettingsRequest(buffer_arg) {
  return airchat_settings_v2_settings_api_pb.UpdateSettingsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_settings_v2_UpdateSettingsResponse(arg) {
  if (
    !(arg instanceof airchat_settings_v2_settings_api_pb.UpdateSettingsResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.settings.v2.UpdateSettingsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_settings_v2_UpdateSettingsResponse(buffer_arg) {
  return airchat_settings_v2_settings_api_pb.UpdateSettingsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// The service for all User settings.
var SettingsAPIService = (exports.SettingsAPIService = {
  // List all of the Settings for the current User.
  getSettings: {
    path: '/airchat.settings.v2.SettingsAPI/GetSettings',
    requestStream: false,
    responseStream: false,
    requestType: airchat_settings_v2_settings_api_pb.GetSettingsRequest,
    responseType: airchat_settings_v2_settings_api_pb.GetSettingsResponse,
    requestSerialize: serialize_airchat_settings_v2_GetSettingsRequest,
    requestDeserialize: deserialize_airchat_settings_v2_GetSettingsRequest,
    responseSerialize: serialize_airchat_settings_v2_GetSettingsResponse,
    responseDeserialize: deserialize_airchat_settings_v2_GetSettingsResponse
  },
  // Updates the entire Settings object. Any consumers must provide the entire object when updating.
  updateSettings: {
    path: '/airchat.settings.v2.SettingsAPI/UpdateSettings',
    requestStream: false,
    responseStream: false,
    requestType: airchat_settings_v2_settings_api_pb.UpdateSettingsRequest,
    responseType: airchat_settings_v2_settings_api_pb.UpdateSettingsResponse,
    requestSerialize: serialize_airchat_settings_v2_UpdateSettingsRequest,
    requestDeserialize: deserialize_airchat_settings_v2_UpdateSettingsRequest,
    responseSerialize: serialize_airchat_settings_v2_UpdateSettingsResponse,
    responseDeserialize: deserialize_airchat_settings_v2_UpdateSettingsResponse
  }
});

exports.SettingsAPIClient =
  grpc.makeGenericClientConstructor(SettingsAPIService);
