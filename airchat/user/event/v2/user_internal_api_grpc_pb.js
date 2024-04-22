// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_user_event_v2_user_internal_api_pb = require('../../../../airchat/user/event/v2/user_internal_api_pb.js');
var airchat_user_v2_user_pb = require('../../../../airchat/user/v2/user_pb.js');
var airchat_message_v2_message_pb = require('../../../../airchat/message/v2/message_pb.js');

function serialize_airchat_user_event_v2_CalculateMentionCandidatesRequest(arg) {
  if (!(arg instanceof airchat_user_event_v2_user_internal_api_pb.CalculateMentionCandidatesRequest)) {
    throw new Error('Expected argument of type airchat.user.event.v2.CalculateMentionCandidatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_event_v2_CalculateMentionCandidatesRequest(buffer_arg) {
  return airchat_user_event_v2_user_internal_api_pb.CalculateMentionCandidatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_user_event_v2_CalculateMentionCandidatesResponse(arg) {
  if (!(arg instanceof airchat_user_event_v2_user_internal_api_pb.CalculateMentionCandidatesResponse)) {
    throw new Error('Expected argument of type airchat.user.event.v2.CalculateMentionCandidatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_event_v2_CalculateMentionCandidatesResponse(buffer_arg) {
  return airchat_user_event_v2_user_internal_api_pb.CalculateMentionCandidatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_user_event_v2_GetRecommendedUsersRequest(arg) {
  if (!(arg instanceof airchat_user_event_v2_user_internal_api_pb.GetRecommendedUsersRequest)) {
    throw new Error('Expected argument of type airchat.user.event.v2.GetRecommendedUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_event_v2_GetRecommendedUsersRequest(buffer_arg) {
  return airchat_user_event_v2_user_internal_api_pb.GetRecommendedUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_user_event_v2_GetRecommendedUsersResponse(arg) {
  if (!(arg instanceof airchat_user_event_v2_user_internal_api_pb.GetRecommendedUsersResponse)) {
    throw new Error('Expected argument of type airchat.user.event.v2.GetRecommendedUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_event_v2_GetRecommendedUsersResponse(buffer_arg) {
  return airchat_user_event_v2_user_internal_api_pb.GetRecommendedUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_user_event_v2_GetUserAnalyticsRequest(arg) {
  if (!(arg instanceof airchat_user_event_v2_user_internal_api_pb.GetUserAnalyticsRequest)) {
    throw new Error('Expected argument of type airchat.user.event.v2.GetUserAnalyticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_event_v2_GetUserAnalyticsRequest(buffer_arg) {
  return airchat_user_event_v2_user_internal_api_pb.GetUserAnalyticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_user_event_v2_GetUserAnalyticsResponse(arg) {
  if (!(arg instanceof airchat_user_event_v2_user_internal_api_pb.GetUserAnalyticsResponse)) {
    throw new Error('Expected argument of type airchat.user.event.v2.GetUserAnalyticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_event_v2_GetUserAnalyticsResponse(buffer_arg) {
  return airchat_user_event_v2_user_internal_api_pb.GetUserAnalyticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_user_event_v2_GetUserRestrictionsRequest(arg) {
  if (!(arg instanceof airchat_user_event_v2_user_internal_api_pb.GetUserRestrictionsRequest)) {
    throw new Error('Expected argument of type airchat.user.event.v2.GetUserRestrictionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_event_v2_GetUserRestrictionsRequest(buffer_arg) {
  return airchat_user_event_v2_user_internal_api_pb.GetUserRestrictionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_user_event_v2_GetUserRestrictionsResponse(arg) {
  if (!(arg instanceof airchat_user_event_v2_user_internal_api_pb.GetUserRestrictionsResponse)) {
    throw new Error('Expected argument of type airchat.user.event.v2.GetUserRestrictionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_event_v2_GetUserRestrictionsResponse(buffer_arg) {
  return airchat_user_event_v2_user_internal_api_pb.GetUserRestrictionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_user_event_v2_IsFollowedRequest(arg) {
  if (!(arg instanceof airchat_user_event_v2_user_internal_api_pb.IsFollowedRequest)) {
    throw new Error('Expected argument of type airchat.user.event.v2.IsFollowedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_event_v2_IsFollowedRequest(buffer_arg) {
  return airchat_user_event_v2_user_internal_api_pb.IsFollowedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_user_event_v2_IsFollowedResponse(arg) {
  if (!(arg instanceof airchat_user_event_v2_user_internal_api_pb.IsFollowedResponse)) {
    throw new Error('Expected argument of type airchat.user.event.v2.IsFollowedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_event_v2_IsFollowedResponse(buffer_arg) {
  return airchat_user_event_v2_user_internal_api_pb.IsFollowedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_user_event_v2_IsInContactsRequest(arg) {
  if (!(arg instanceof airchat_user_event_v2_user_internal_api_pb.IsInContactsRequest)) {
    throw new Error('Expected argument of type airchat.user.event.v2.IsInContactsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_event_v2_IsInContactsRequest(buffer_arg) {
  return airchat_user_event_v2_user_internal_api_pb.IsInContactsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_user_event_v2_IsInContactsResponse(arg) {
  if (!(arg instanceof airchat_user_event_v2_user_internal_api_pb.IsInContactsResponse)) {
    throw new Error('Expected argument of type airchat.user.event.v2.IsInContactsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_event_v2_IsInContactsResponse(buffer_arg) {
  return airchat_user_event_v2_user_internal_api_pb.IsInContactsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service for updating and viewing user data.
var UserInternalAPIService = exports.UserInternalAPIService = {
  // Checks whether a user is followed.
isFollowed: {
    path: '/airchat.user.event.v2.UserInternalAPI/IsFollowed',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_event_v2_user_internal_api_pb.IsFollowedRequest,
    responseType: airchat_user_event_v2_user_internal_api_pb.IsFollowedResponse,
    requestSerialize: serialize_airchat_user_event_v2_IsFollowedRequest,
    requestDeserialize: deserialize_airchat_user_event_v2_IsFollowedRequest,
    responseSerialize: serialize_airchat_user_event_v2_IsFollowedResponse,
    responseDeserialize: deserialize_airchat_user_event_v2_IsFollowedResponse,
  },
  // Gets user restrictions between other users than the current user.
getUserRestrictions: {
    path: '/airchat.user.event.v2.UserInternalAPI/GetUserRestrictions',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_event_v2_user_internal_api_pb.GetUserRestrictionsRequest,
    responseType: airchat_user_event_v2_user_internal_api_pb.GetUserRestrictionsResponse,
    requestSerialize: serialize_airchat_user_event_v2_GetUserRestrictionsRequest,
    requestDeserialize: deserialize_airchat_user_event_v2_GetUserRestrictionsRequest,
    responseSerialize: serialize_airchat_user_event_v2_GetUserRestrictionsResponse,
    responseDeserialize: deserialize_airchat_user_event_v2_GetUserRestrictionsResponse,
  },
  // Checks whether a user is found in another user's contacts book
isInContacts: {
    path: '/airchat.user.event.v2.UserInternalAPI/IsInContacts',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_event_v2_user_internal_api_pb.IsInContactsRequest,
    responseType: airchat_user_event_v2_user_internal_api_pb.IsInContactsResponse,
    requestSerialize: serialize_airchat_user_event_v2_IsInContactsRequest,
    requestDeserialize: deserialize_airchat_user_event_v2_IsInContactsRequest,
    responseSerialize: serialize_airchat_user_event_v2_IsInContactsResponse,
    responseDeserialize: deserialize_airchat_user_event_v2_IsInContactsResponse,
  },
  // Calculates mention candidates
calculateMentionCandidates: {
    path: '/airchat.user.event.v2.UserInternalAPI/CalculateMentionCandidates',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_event_v2_user_internal_api_pb.CalculateMentionCandidatesRequest,
    responseType: airchat_user_event_v2_user_internal_api_pb.CalculateMentionCandidatesResponse,
    requestSerialize: serialize_airchat_user_event_v2_CalculateMentionCandidatesRequest,
    requestDeserialize: deserialize_airchat_user_event_v2_CalculateMentionCandidatesRequest,
    responseSerialize: serialize_airchat_user_event_v2_CalculateMentionCandidatesResponse,
    responseDeserialize: deserialize_airchat_user_event_v2_CalculateMentionCandidatesResponse,
  },
  // Gets the user analytics.
getUserAnalytics: {
    path: '/airchat.user.event.v2.UserInternalAPI/GetUserAnalytics',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_event_v2_user_internal_api_pb.GetUserAnalyticsRequest,
    responseType: airchat_user_event_v2_user_internal_api_pb.GetUserAnalyticsResponse,
    requestSerialize: serialize_airchat_user_event_v2_GetUserAnalyticsRequest,
    requestDeserialize: deserialize_airchat_user_event_v2_GetUserAnalyticsRequest,
    responseSerialize: serialize_airchat_user_event_v2_GetUserAnalyticsResponse,
    responseDeserialize: deserialize_airchat_user_event_v2_GetUserAnalyticsResponse,
  },
  // Gets personalized recommended users that the current user may want to follow.
getRecommendedUsers: {
    path: '/airchat.user.event.v2.UserInternalAPI/GetRecommendedUsers',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_event_v2_user_internal_api_pb.GetRecommendedUsersRequest,
    responseType: airchat_user_event_v2_user_internal_api_pb.GetRecommendedUsersResponse,
    requestSerialize: serialize_airchat_user_event_v2_GetRecommendedUsersRequest,
    requestDeserialize: deserialize_airchat_user_event_v2_GetRecommendedUsersRequest,
    responseSerialize: serialize_airchat_user_event_v2_GetRecommendedUsersResponse,
    responseDeserialize: deserialize_airchat_user_event_v2_GetRecommendedUsersResponse,
  },
};

exports.UserInternalAPIClient = grpc.makeGenericClientConstructor(UserInternalAPIService);
