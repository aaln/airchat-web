// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_channel_event_v2_channel_internal_api_pb = require('../../../../airchat/channel/event/v2/channel_internal_api_pb.js');
var airchat_channel_v2_channel_pb = require('../../../../airchat/channel/v2/channel_pb.js');

function serialize_airchat_channel_event_v2_GetHydratedChannelsRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_event_v2_channel_internal_api_pb.GetHydratedChannelsRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.event.v2.GetHydratedChannelsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_event_v2_GetHydratedChannelsRequest(
  buffer_arg
) {
  return airchat_channel_event_v2_channel_internal_api_pb.GetHydratedChannelsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_event_v2_GetHydratedChannelsResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_event_v2_channel_internal_api_pb.GetHydratedChannelsResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.event.v2.GetHydratedChannelsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_event_v2_GetHydratedChannelsResponse(
  buffer_arg
) {
  return airchat_channel_event_v2_channel_internal_api_pb.GetHydratedChannelsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// A service for interacting with channels.
var ChannelInternalAPIService = (exports.ChannelInternalAPIService = {
  // Gets a list of hydrated channels.
  getHydratedChannels: {
    path: '/airchat.channel.event.v2.ChannelInternalAPI/GetHydratedChannels',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_channel_event_v2_channel_internal_api_pb.GetHydratedChannelsRequest,
    responseType:
      airchat_channel_event_v2_channel_internal_api_pb.GetHydratedChannelsResponse,
    requestSerialize:
      serialize_airchat_channel_event_v2_GetHydratedChannelsRequest,
    requestDeserialize:
      deserialize_airchat_channel_event_v2_GetHydratedChannelsRequest,
    responseSerialize:
      serialize_airchat_channel_event_v2_GetHydratedChannelsResponse,
    responseDeserialize:
      deserialize_airchat_channel_event_v2_GetHydratedChannelsResponse
  }
});

exports.ChannelInternalAPIClient = grpc.makeGenericClientConstructor(
  ChannelInternalAPIService
);
