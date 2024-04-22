// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_activity_v2_activity_api_pb = require('../../../airchat/activity/v2/activity_api_pb.js');
var airchat_activity_v2_activity_pb = require('../../../airchat/activity/v2/activity_pb.js');
var airchat_message_v2_message_pb = require('../../../airchat/message/v2/message_pb.js');
var airchat_user_v2_user_pb = require('../../../airchat/user/v2/user_pb.js');

function serialize_airchat_activity_v2_ClearNewActivityCounterRequest(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.ClearNewActivityCounterRequest)) {
    throw new Error('Expected argument of type airchat.activity.v2.ClearNewActivityCounterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_ClearNewActivityCounterRequest(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.ClearNewActivityCounterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_ClearNewActivityCounterResponse(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.ClearNewActivityCounterResponse)) {
    throw new Error('Expected argument of type airchat.activity.v2.ClearNewActivityCounterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_ClearNewActivityCounterResponse(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.ClearNewActivityCounterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_GetActivityItemUsersRequest(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.GetActivityItemUsersRequest)) {
    throw new Error('Expected argument of type airchat.activity.v2.GetActivityItemUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_GetActivityItemUsersRequest(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.GetActivityItemUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_GetActivityItemUsersResponse(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.GetActivityItemUsersResponse)) {
    throw new Error('Expected argument of type airchat.activity.v2.GetActivityItemUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_GetActivityItemUsersResponse(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.GetActivityItemUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_GetActivityLogRequest(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.GetActivityLogRequest)) {
    throw new Error('Expected argument of type airchat.activity.v2.GetActivityLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_GetActivityLogRequest(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.GetActivityLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_GetActivityLogResponse(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.GetActivityLogResponse)) {
    throw new Error('Expected argument of type airchat.activity.v2.GetActivityLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_GetActivityLogResponse(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.GetActivityLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_GetLatestActivityItemByCoordinateRequest(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.GetLatestActivityItemByCoordinateRequest)) {
    throw new Error('Expected argument of type airchat.activity.v2.GetLatestActivityItemByCoordinateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_GetLatestActivityItemByCoordinateRequest(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.GetLatestActivityItemByCoordinateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_GetLatestActivityItemByCoordinateResponse(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.GetLatestActivityItemByCoordinateResponse)) {
    throw new Error('Expected argument of type airchat.activity.v2.GetLatestActivityItemByCoordinateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_GetLatestActivityItemByCoordinateResponse(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.GetLatestActivityItemByCoordinateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_GetNewActivityCounterRequest(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.GetNewActivityCounterRequest)) {
    throw new Error('Expected argument of type airchat.activity.v2.GetNewActivityCounterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_GetNewActivityCounterRequest(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.GetNewActivityCounterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_GetNewActivityCounterResponse(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.GetNewActivityCounterResponse)) {
    throw new Error('Expected argument of type airchat.activity.v2.GetNewActivityCounterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_GetNewActivityCounterResponse(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.GetNewActivityCounterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_GetNormalizedActivityLogRequest(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.GetNormalizedActivityLogRequest)) {
    throw new Error('Expected argument of type airchat.activity.v2.GetNormalizedActivityLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_GetNormalizedActivityLogRequest(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.GetNormalizedActivityLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_GetNormalizedActivityLogResponse(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.GetNormalizedActivityLogResponse)) {
    throw new Error('Expected argument of type airchat.activity.v2.GetNormalizedActivityLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_GetNormalizedActivityLogResponse(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.GetNormalizedActivityLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_MarkActivityItemsSeenRequest(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.MarkActivityItemsSeenRequest)) {
    throw new Error('Expected argument of type airchat.activity.v2.MarkActivityItemsSeenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_MarkActivityItemsSeenRequest(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.MarkActivityItemsSeenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_activity_v2_MarkActivityItemsSeenResponse(arg) {
  if (!(arg instanceof airchat_activity_v2_activity_api_pb.MarkActivityItemsSeenResponse)) {
    throw new Error('Expected argument of type airchat.activity.v2.MarkActivityItemsSeenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_activity_v2_MarkActivityItemsSeenResponse(buffer_arg) {
  return airchat_activity_v2_activity_api_pb.MarkActivityItemsSeenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service handling activity feeds for the current user.
var ActivityAPIService = exports.ActivityAPIService = {
  // Gets a log of individual and grouped activity events.
getActivityLog: {
    path: '/airchat.activity.v2.ActivityAPI/GetActivityLog',
    requestStream: false,
    responseStream: false,
    requestType: airchat_activity_v2_activity_api_pb.GetActivityLogRequest,
    responseType: airchat_activity_v2_activity_api_pb.GetActivityLogResponse,
    requestSerialize: serialize_airchat_activity_v2_GetActivityLogRequest,
    requestDeserialize: deserialize_airchat_activity_v2_GetActivityLogRequest,
    responseSerialize: serialize_airchat_activity_v2_GetActivityLogResponse,
    responseDeserialize: deserialize_airchat_activity_v2_GetActivityLogResponse,
  },
  // Gets a log of the user's activity, sent in a normalized format for smaller size
getNormalizedActivityLog: {
    path: '/airchat.activity.v2.ActivityAPI/GetNormalizedActivityLog',
    requestStream: false,
    responseStream: false,
    requestType: airchat_activity_v2_activity_api_pb.GetNormalizedActivityLogRequest,
    responseType: airchat_activity_v2_activity_api_pb.GetNormalizedActivityLogResponse,
    requestSerialize: serialize_airchat_activity_v2_GetNormalizedActivityLogRequest,
    requestDeserialize: deserialize_airchat_activity_v2_GetNormalizedActivityLogRequest,
    responseSerialize: serialize_airchat_activity_v2_GetNormalizedActivityLogResponse,
    responseDeserialize: deserialize_airchat_activity_v2_GetNormalizedActivityLogResponse,
  },
  // Gets a list of users involved in a particular activity item.
getActivityItemUsers: {
    path: '/airchat.activity.v2.ActivityAPI/GetActivityItemUsers',
    requestStream: false,
    responseStream: false,
    requestType: airchat_activity_v2_activity_api_pb.GetActivityItemUsersRequest,
    responseType: airchat_activity_v2_activity_api_pb.GetActivityItemUsersResponse,
    requestSerialize: serialize_airchat_activity_v2_GetActivityItemUsersRequest,
    requestDeserialize: deserialize_airchat_activity_v2_GetActivityItemUsersRequest,
    responseSerialize: serialize_airchat_activity_v2_GetActivityItemUsersResponse,
    responseDeserialize: deserialize_airchat_activity_v2_GetActivityItemUsersResponse,
  },
  // Gets the counter for new activity log entries for the current user.
getNewActivityCounter: {
    path: '/airchat.activity.v2.ActivityAPI/GetNewActivityCounter',
    requestStream: false,
    responseStream: false,
    requestType: airchat_activity_v2_activity_api_pb.GetNewActivityCounterRequest,
    responseType: airchat_activity_v2_activity_api_pb.GetNewActivityCounterResponse,
    requestSerialize: serialize_airchat_activity_v2_GetNewActivityCounterRequest,
    requestDeserialize: deserialize_airchat_activity_v2_GetNewActivityCounterRequest,
    responseSerialize: serialize_airchat_activity_v2_GetNewActivityCounterResponse,
    responseDeserialize: deserialize_airchat_activity_v2_GetNewActivityCounterResponse,
  },
  // Resets the counter for new activity log entries to zero for the current user.
clearNewActivityCounter: {
    path: '/airchat.activity.v2.ActivityAPI/ClearNewActivityCounter',
    requestStream: false,
    responseStream: false,
    requestType: airchat_activity_v2_activity_api_pb.ClearNewActivityCounterRequest,
    responseType: airchat_activity_v2_activity_api_pb.ClearNewActivityCounterResponse,
    requestSerialize: serialize_airchat_activity_v2_ClearNewActivityCounterRequest,
    requestDeserialize: deserialize_airchat_activity_v2_ClearNewActivityCounterRequest,
    responseSerialize: serialize_airchat_activity_v2_ClearNewActivityCounterResponse,
    responseDeserialize: deserialize_airchat_activity_v2_ClearNewActivityCounterResponse,
  },
  // Marks a list of activity items as seen.
markActivityItemsSeen: {
    path: '/airchat.activity.v2.ActivityAPI/MarkActivityItemsSeen',
    requestStream: false,
    responseStream: false,
    requestType: airchat_activity_v2_activity_api_pb.MarkActivityItemsSeenRequest,
    responseType: airchat_activity_v2_activity_api_pb.MarkActivityItemsSeenResponse,
    requestSerialize: serialize_airchat_activity_v2_MarkActivityItemsSeenRequest,
    requestDeserialize: deserialize_airchat_activity_v2_MarkActivityItemsSeenRequest,
    responseSerialize: serialize_airchat_activity_v2_MarkActivityItemsSeenResponse,
    responseDeserialize: deserialize_airchat_activity_v2_MarkActivityItemsSeenResponse,
  },
  // Get the latest activity item by a coordinate
getLatestActivityItemByCoordinate: {
    path: '/airchat.activity.v2.ActivityAPI/GetLatestActivityItemByCoordinate',
    requestStream: false,
    responseStream: false,
    requestType: airchat_activity_v2_activity_api_pb.GetLatestActivityItemByCoordinateRequest,
    responseType: airchat_activity_v2_activity_api_pb.GetLatestActivityItemByCoordinateResponse,
    requestSerialize: serialize_airchat_activity_v2_GetLatestActivityItemByCoordinateRequest,
    requestDeserialize: deserialize_airchat_activity_v2_GetLatestActivityItemByCoordinateRequest,
    responseSerialize: serialize_airchat_activity_v2_GetLatestActivityItemByCoordinateResponse,
    responseDeserialize: deserialize_airchat_activity_v2_GetLatestActivityItemByCoordinateResponse,
  },
};

exports.ActivityAPIClient = grpc.makeGenericClientConstructor(ActivityAPIService);
