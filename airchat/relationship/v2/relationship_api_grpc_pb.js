// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_relationship_v2_relationship_api_pb = require('../../../airchat/relationship/v2/relationship_api_pb.js');
var airchat_relationship_v2_relationship_pb = require('../../../airchat/relationship/v2/relationship_pb.js');
var airchat_user_v2_user_pb = require('../../../airchat/user/v2/user_pb.js');

function serialize_airchat_relationship_v2_GetFeaturedUsersRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_relationship_v2_relationship_api_pb.GetFeaturedUsersRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.relationship.v2.GetFeaturedUsersRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_relationship_v2_GetFeaturedUsersRequest(
  buffer_arg
) {
  return airchat_relationship_v2_relationship_api_pb.GetFeaturedUsersRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_relationship_v2_GetFeaturedUsersResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_relationship_v2_relationship_api_pb.GetFeaturedUsersResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.relationship.v2.GetFeaturedUsersResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_relationship_v2_GetFeaturedUsersResponse(
  buffer_arg
) {
  return airchat_relationship_v2_relationship_api_pb.GetFeaturedUsersResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_relationship_v2_GetInviteContactDataRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_relationship_v2_relationship_api_pb.GetInviteContactDataRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.relationship.v2.GetInviteContactDataRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_relationship_v2_GetInviteContactDataRequest(
  buffer_arg
) {
  return airchat_relationship_v2_relationship_api_pb.GetInviteContactDataRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_relationship_v2_GetInviteContactDataResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_relationship_v2_relationship_api_pb.GetInviteContactDataResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.relationship.v2.GetInviteContactDataResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_relationship_v2_GetInviteContactDataResponse(
  buffer_arg
) {
  return airchat_relationship_v2_relationship_api_pb.GetInviteContactDataResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_relationship_v2_GetRecommendedUsersRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_relationship_v2_relationship_api_pb.GetRecommendedUsersRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.relationship.v2.GetRecommendedUsersRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_relationship_v2_GetRecommendedUsersRequest(
  buffer_arg
) {
  return airchat_relationship_v2_relationship_api_pb.GetRecommendedUsersRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_relationship_v2_GetRecommendedUsersResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_relationship_v2_relationship_api_pb.GetRecommendedUsersResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.relationship.v2.GetRecommendedUsersResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_relationship_v2_GetRecommendedUsersResponse(
  buffer_arg
) {
  return airchat_relationship_v2_relationship_api_pb.GetRecommendedUsersResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_relationship_v2_GetSuggestedUsersRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_relationship_v2_relationship_api_pb.GetSuggestedUsersRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.relationship.v2.GetSuggestedUsersRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_relationship_v2_GetSuggestedUsersRequest(
  buffer_arg
) {
  return airchat_relationship_v2_relationship_api_pb.GetSuggestedUsersRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_relationship_v2_GetSuggestedUsersResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_relationship_v2_relationship_api_pb.GetSuggestedUsersResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.relationship.v2.GetSuggestedUsersResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_relationship_v2_GetSuggestedUsersResponse(
  buffer_arg
) {
  return airchat_relationship_v2_relationship_api_pb.GetSuggestedUsersResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_relationship_v2_UploadContactsRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_relationship_v2_relationship_api_pb.UploadContactsRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.relationship.v2.UploadContactsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_relationship_v2_UploadContactsRequest(buffer_arg) {
  return airchat_relationship_v2_relationship_api_pb.UploadContactsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_relationship_v2_UploadContactsResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_relationship_v2_relationship_api_pb.UploadContactsResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.relationship.v2.UploadContactsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_relationship_v2_UploadContactsResponse(
  buffer_arg
) {
  return airchat_relationship_v2_relationship_api_pb.UploadContactsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// A service for reasoning about the connections between users.
var RelationshipAPIService = (exports.RelationshipAPIService = {
  // Uploads a batch of contacts and receive a response for the batch with the rooms the contacts are part of.
  uploadContacts: {
    path: '/airchat.relationship.v2.RelationshipAPI/UploadContacts',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_relationship_v2_relationship_api_pb.UploadContactsRequest,
    responseType:
      airchat_relationship_v2_relationship_api_pb.UploadContactsResponse,
    requestSerialize: serialize_airchat_relationship_v2_UploadContactsRequest,
    requestDeserialize:
      deserialize_airchat_relationship_v2_UploadContactsRequest,
    responseSerialize: serialize_airchat_relationship_v2_UploadContactsResponse,
    responseDeserialize:
      deserialize_airchat_relationship_v2_UploadContactsResponse
  },
  // Gets featured users for the requesting user.
  getFeaturedUsers: {
    path: '/airchat.relationship.v2.RelationshipAPI/GetFeaturedUsers',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_relationship_v2_relationship_api_pb.GetFeaturedUsersRequest,
    responseType:
      airchat_relationship_v2_relationship_api_pb.GetFeaturedUsersResponse,
    requestSerialize: serialize_airchat_relationship_v2_GetFeaturedUsersRequest,
    requestDeserialize:
      deserialize_airchat_relationship_v2_GetFeaturedUsersRequest,
    responseSerialize:
      serialize_airchat_relationship_v2_GetFeaturedUsersResponse,
    responseDeserialize:
      deserialize_airchat_relationship_v2_GetFeaturedUsersResponse
  },
  // Gets the data related to the invite contact.
  getInviteContactData: {
    path: '/airchat.relationship.v2.RelationshipAPI/GetInviteContactData',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_relationship_v2_relationship_api_pb.GetInviteContactDataRequest,
    responseType:
      airchat_relationship_v2_relationship_api_pb.GetInviteContactDataResponse,
    requestSerialize:
      serialize_airchat_relationship_v2_GetInviteContactDataRequest,
    requestDeserialize:
      deserialize_airchat_relationship_v2_GetInviteContactDataRequest,
    responseSerialize:
      serialize_airchat_relationship_v2_GetInviteContactDataResponse,
    responseDeserialize:
      deserialize_airchat_relationship_v2_GetInviteContactDataResponse
  },
  // Gets suggested users that the current user may want to follow.
  getSuggestedUsers: {
    path: '/airchat.relationship.v2.RelationshipAPI/GetSuggestedUsers',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_relationship_v2_relationship_api_pb.GetSuggestedUsersRequest,
    responseType:
      airchat_relationship_v2_relationship_api_pb.GetSuggestedUsersResponse,
    requestSerialize:
      serialize_airchat_relationship_v2_GetSuggestedUsersRequest,
    requestDeserialize:
      deserialize_airchat_relationship_v2_GetSuggestedUsersRequest,
    responseSerialize:
      serialize_airchat_relationship_v2_GetSuggestedUsersResponse,
    responseDeserialize:
      deserialize_airchat_relationship_v2_GetSuggestedUsersResponse
  },
  // Gets personalized recommended users that the current user may want to follow.
  getRecommendedUsers: {
    path: '/airchat.relationship.v2.RelationshipAPI/GetRecommendedUsers',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_relationship_v2_relationship_api_pb.GetRecommendedUsersRequest,
    responseType:
      airchat_relationship_v2_relationship_api_pb.GetRecommendedUsersResponse,
    requestSerialize:
      serialize_airchat_relationship_v2_GetRecommendedUsersRequest,
    requestDeserialize:
      deserialize_airchat_relationship_v2_GetRecommendedUsersRequest,
    responseSerialize:
      serialize_airchat_relationship_v2_GetRecommendedUsersResponse,
    responseDeserialize:
      deserialize_airchat_relationship_v2_GetRecommendedUsersResponse
  }
});

exports.RelationshipAPIClient = grpc.makeGenericClientConstructor(
  RelationshipAPIService
);
