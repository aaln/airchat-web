// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_message_event_v2_message_internal_api_pb = require('../../../../airchat/message/event/v2/message_internal_api_pb.js');
var airchat_message_v2_message_pb = require('../../../../airchat/message/v2/message_pb.js');

function serialize_airchat_message_event_v2_GetHydratedMessagesRequest(arg) {
  if (!(arg instanceof airchat_message_event_v2_message_internal_api_pb.GetHydratedMessagesRequest)) {
    throw new Error('Expected argument of type airchat.message.event.v2.GetHydratedMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_event_v2_GetHydratedMessagesRequest(buffer_arg) {
  return airchat_message_event_v2_message_internal_api_pb.GetHydratedMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_message_event_v2_GetHydratedMessagesResponse(arg) {
  if (!(arg instanceof airchat_message_event_v2_message_internal_api_pb.GetHydratedMessagesResponse)) {
    throw new Error('Expected argument of type airchat.message.event.v2.GetHydratedMessagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_event_v2_GetHydratedMessagesResponse(buffer_arg) {
  return airchat_message_event_v2_message_internal_api_pb.GetHydratedMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_message_event_v2_GetHydratedPrivateMessagesRequest(arg) {
  if (!(arg instanceof airchat_message_event_v2_message_internal_api_pb.GetHydratedPrivateMessagesRequest)) {
    throw new Error('Expected argument of type airchat.message.event.v2.GetHydratedPrivateMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_event_v2_GetHydratedPrivateMessagesRequest(buffer_arg) {
  return airchat_message_event_v2_message_internal_api_pb.GetHydratedPrivateMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_message_event_v2_GetHydratedPrivateMessagesResponse(arg) {
  if (!(arg instanceof airchat_message_event_v2_message_internal_api_pb.GetHydratedPrivateMessagesResponse)) {
    throw new Error('Expected argument of type airchat.message.event.v2.GetHydratedPrivateMessagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_event_v2_GetHydratedPrivateMessagesResponse(buffer_arg) {
  return airchat_message_event_v2_message_internal_api_pb.GetHydratedPrivateMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_message_event_v2_GetUserIdsByInteractionScoreRequest(arg) {
  if (!(arg instanceof airchat_message_event_v2_message_internal_api_pb.GetUserIdsByInteractionScoreRequest)) {
    throw new Error('Expected argument of type airchat.message.event.v2.GetUserIdsByInteractionScoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_event_v2_GetUserIdsByInteractionScoreRequest(buffer_arg) {
  return airchat_message_event_v2_message_internal_api_pb.GetUserIdsByInteractionScoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_message_event_v2_GetUserIdsByInteractionScoreResponse(arg) {
  if (!(arg instanceof airchat_message_event_v2_message_internal_api_pb.GetUserIdsByInteractionScoreResponse)) {
    throw new Error('Expected argument of type airchat.message.event.v2.GetUserIdsByInteractionScoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_event_v2_GetUserIdsByInteractionScoreResponse(buffer_arg) {
  return airchat_message_event_v2_message_internal_api_pb.GetUserIdsByInteractionScoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service for interacting with messages.
var MessageInternalAPIService = exports.MessageInternalAPIService = {
  // Gets a list of hydrated messages.
getHydratedMessages: {
    path: '/airchat.message.event.v2.MessageInternalAPI/GetHydratedMessages',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_event_v2_message_internal_api_pb.GetHydratedMessagesRequest,
    responseType: airchat_message_event_v2_message_internal_api_pb.GetHydratedMessagesResponse,
    requestSerialize: serialize_airchat_message_event_v2_GetHydratedMessagesRequest,
    requestDeserialize: deserialize_airchat_message_event_v2_GetHydratedMessagesRequest,
    responseSerialize: serialize_airchat_message_event_v2_GetHydratedMessagesResponse,
    responseDeserialize: deserialize_airchat_message_event_v2_GetHydratedMessagesResponse,
  },
  // Gets the list of user IDs sorted by their interaction scores relative to the current user.
getUserIdsByInteractionScore: {
    path: '/airchat.message.event.v2.MessageInternalAPI/GetUserIdsByInteractionScore',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_event_v2_message_internal_api_pb.GetUserIdsByInteractionScoreRequest,
    responseType: airchat_message_event_v2_message_internal_api_pb.GetUserIdsByInteractionScoreResponse,
    requestSerialize: serialize_airchat_message_event_v2_GetUserIdsByInteractionScoreRequest,
    requestDeserialize: deserialize_airchat_message_event_v2_GetUserIdsByInteractionScoreRequest,
    responseSerialize: serialize_airchat_message_event_v2_GetUserIdsByInteractionScoreResponse,
    responseDeserialize: deserialize_airchat_message_event_v2_GetUserIdsByInteractionScoreResponse,
  },
  // Gets a list of private hydrated messages.
getHydratedPrivateMessages: {
    path: '/airchat.message.event.v2.MessageInternalAPI/GetHydratedPrivateMessages',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_event_v2_message_internal_api_pb.GetHydratedPrivateMessagesRequest,
    responseType: airchat_message_event_v2_message_internal_api_pb.GetHydratedPrivateMessagesResponse,
    requestSerialize: serialize_airchat_message_event_v2_GetHydratedPrivateMessagesRequest,
    requestDeserialize: deserialize_airchat_message_event_v2_GetHydratedPrivateMessagesRequest,
    responseSerialize: serialize_airchat_message_event_v2_GetHydratedPrivateMessagesResponse,
    responseDeserialize: deserialize_airchat_message_event_v2_GetHydratedPrivateMessagesResponse,
  },
};

exports.MessageInternalAPIClient = grpc.makeGenericClientConstructor(MessageInternalAPIService);
