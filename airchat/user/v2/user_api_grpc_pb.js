// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_user_v2_user_api_pb = require('../../../airchat/user/v2/user_api_pb.js');
var airchat_user_v2_user_pb = require('../../../airchat/user/v2/user_pb.js');

function serialize_airchat_user_v2_BlockUserRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.BlockUserRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.BlockUserRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_BlockUserRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.BlockUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_BlockUserResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.BlockUserResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.BlockUserResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_BlockUserResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.BlockUserResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_CheckUsernameAvailableRequest(arg) {
  if (
    !(arg instanceof airchat_user_v2_user_api_pb.CheckUsernameAvailableRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.user.v2.CheckUsernameAvailableRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_CheckUsernameAvailableRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.CheckUsernameAvailableRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_CheckUsernameAvailableResponse(arg) {
  if (
    !(arg instanceof airchat_user_v2_user_api_pb.CheckUsernameAvailableResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.user.v2.CheckUsernameAvailableResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_CheckUsernameAvailableResponse(
  buffer_arg
) {
  return airchat_user_v2_user_api_pb.CheckUsernameAvailableResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_DeleteUserRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.DeleteUserRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.DeleteUserRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_DeleteUserRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.DeleteUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_DeleteUserResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.DeleteUserResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.DeleteUserResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_DeleteUserResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.DeleteUserResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_FollowUserRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.FollowUserRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.FollowUserRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_FollowUserRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.FollowUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_FollowUserResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.FollowUserResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.FollowUserResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_FollowUserResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.FollowUserResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetBlockedUsersRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetBlockedUsersRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetBlockedUsersRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetBlockedUsersRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetBlockedUsersRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetBlockedUsersResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetBlockedUsersResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetBlockedUsersResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetBlockedUsersResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetBlockedUsersResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetCurrentUserRestrictionsRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_user_v2_user_api_pb.GetCurrentUserRestrictionsRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetCurrentUserRestrictionsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetCurrentUserRestrictionsRequest(
  buffer_arg
) {
  return airchat_user_v2_user_api_pb.GetCurrentUserRestrictionsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetCurrentUserRestrictionsResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_user_v2_user_api_pb.GetCurrentUserRestrictionsResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetCurrentUserRestrictionsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetCurrentUserRestrictionsResponse(
  buffer_arg
) {
  return airchat_user_v2_user_api_pb.GetCurrentUserRestrictionsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetFeaturedUsersRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetFeaturedUsersRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetFeaturedUsersRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetFeaturedUsersRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetFeaturedUsersRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetFeaturedUsersResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetFeaturedUsersResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetFeaturedUsersResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetFeaturedUsersResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetFeaturedUsersResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetFollowersRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetFollowersRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetFollowersRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetFollowersRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetFollowersRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetFollowersResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetFollowersResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetFollowersResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetFollowersResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetFollowersResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetFollowingRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetFollowingRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetFollowingRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetFollowingRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetFollowingRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetFollowingResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetFollowingResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetFollowingResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetFollowingResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetFollowingResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetInterestsRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetInterestsRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetInterestsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetInterestsRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetInterestsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetInterestsResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetInterestsResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetInterestsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetInterestsResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetInterestsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetMultipleUsersRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetMultipleUsersRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetMultipleUsersRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetMultipleUsersRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetMultipleUsersRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetMultipleUsersResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetMultipleUsersResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetMultipleUsersResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetMultipleUsersResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetMultipleUsersResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetMutedUsersRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetMutedUsersRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetMutedUsersRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetMutedUsersRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetMutedUsersRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetMutedUsersResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetMutedUsersResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetMutedUsersResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetMutedUsersResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetMutedUsersResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetUserRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetUserRequest)) {
    throw new Error('Expected argument of type airchat.user.v2.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetUserRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetUserResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.GetUserResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetUserResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetUserResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetUserResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetUserRestrictionsRequest(arg) {
  if (
    !(arg instanceof airchat_user_v2_user_api_pb.GetUserRestrictionsRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetUserRestrictionsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetUserRestrictionsRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetUserRestrictionsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetUserRestrictionsResponse(arg) {
  if (
    !(arg instanceof airchat_user_v2_user_api_pb.GetUserRestrictionsResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetUserRestrictionsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetUserRestrictionsResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetUserRestrictionsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetUserWithAnalyticsRequest(arg) {
  if (
    !(arg instanceof airchat_user_v2_user_api_pb.GetUserWithAnalyticsRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetUserWithAnalyticsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetUserWithAnalyticsRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetUserWithAnalyticsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_GetUserWithAnalyticsResponse(arg) {
  if (
    !(arg instanceof airchat_user_v2_user_api_pb.GetUserWithAnalyticsResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.user.v2.GetUserWithAnalyticsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_GetUserWithAnalyticsResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.GetUserWithAnalyticsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_InviteContactWithAttributionRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_user_v2_user_api_pb.InviteContactWithAttributionRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.user.v2.InviteContactWithAttributionRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_InviteContactWithAttributionRequest(
  buffer_arg
) {
  return airchat_user_v2_user_api_pb.InviteContactWithAttributionRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_InviteContactWithAttributionResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_user_v2_user_api_pb.InviteContactWithAttributionResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.user.v2.InviteContactWithAttributionResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_InviteContactWithAttributionResponse(
  buffer_arg
) {
  return airchat_user_v2_user_api_pb.InviteContactWithAttributionResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_MuteUserRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.MuteUserRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.MuteUserRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_MuteUserRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.MuteUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_MuteUserResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.MuteUserResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.MuteUserResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_MuteUserResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.MuteUserResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_ReportUserRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.ReportUserRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.ReportUserRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_ReportUserRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.ReportUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_ReportUserResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.ReportUserResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.ReportUserResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_ReportUserResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.ReportUserResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_SetUserInterestsRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.SetUserInterestsRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.SetUserInterestsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_SetUserInterestsRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.SetUserInterestsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_SetUserInterestsResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.SetUserInterestsResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.SetUserInterestsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_SetUserInterestsResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.SetUserInterestsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_SuspendUserRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.SuspendUserRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.SuspendUserRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_SuspendUserRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.SuspendUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_SuspendUserResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.SuspendUserResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.SuspendUserResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_SuspendUserResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.SuspendUserResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_UnblockUserRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.UnblockUserRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.UnblockUserRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_UnblockUserRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.UnblockUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_UnblockUserResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.UnblockUserResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.UnblockUserResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_UnblockUserResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.UnblockUserResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_UnfollowUserRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.UnfollowUserRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.UnfollowUserRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_UnfollowUserRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.UnfollowUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_UnfollowUserResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.UnfollowUserResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.UnfollowUserResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_UnfollowUserResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.UnfollowUserResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_UnmuteUserRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.UnmuteUserRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.UnmuteUserRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_UnmuteUserRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.UnmuteUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_UnmuteUserResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.UnmuteUserResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.UnmuteUserResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_UnmuteUserResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.UnmuteUserResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_UpdateUserRequest(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.UpdateUserRequest)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.UpdateUserRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_UpdateUserRequest(buffer_arg) {
  return airchat_user_v2_user_api_pb.UpdateUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_user_v2_UpdateUserResponse(arg) {
  if (!(arg instanceof airchat_user_v2_user_api_pb.UpdateUserResponse)) {
    throw new Error(
      'Expected argument of type airchat.user.v2.UpdateUserResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_user_v2_UpdateUserResponse(buffer_arg) {
  return airchat_user_v2_user_api_pb.UpdateUserResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// A service for updating and viewing user data.
var UserAPIService = (exports.UserAPIService = {
  // Updates the metadata of an existing user.
  updateUser: {
    path: '/airchat.user.v2.UserAPI/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.UpdateUserRequest,
    responseType: airchat_user_v2_user_api_pb.UpdateUserResponse,
    requestSerialize: serialize_airchat_user_v2_UpdateUserRequest,
    requestDeserialize: deserialize_airchat_user_v2_UpdateUserRequest,
    responseSerialize: serialize_airchat_user_v2_UpdateUserResponse,
    responseDeserialize: deserialize_airchat_user_v2_UpdateUserResponse
  },
  // Get a user's data with user perspective.
  getUser: {
    path: '/airchat.user.v2.UserAPI/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.GetUserRequest,
    responseType: airchat_user_v2_user_api_pb.GetUserResponse,
    requestSerialize: serialize_airchat_user_v2_GetUserRequest,
    requestDeserialize: deserialize_airchat_user_v2_GetUserRequest,
    responseSerialize: serialize_airchat_user_v2_GetUserResponse,
    responseDeserialize: deserialize_airchat_user_v2_GetUserResponse
  },
  // Get multiple user's data with user perspective.
  getMultipleUsers: {
    path: '/airchat.user.v2.UserAPI/GetMultipleUsers',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.GetMultipleUsersRequest,
    responseType: airchat_user_v2_user_api_pb.GetMultipleUsersResponse,
    requestSerialize: serialize_airchat_user_v2_GetMultipleUsersRequest,
    requestDeserialize: deserialize_airchat_user_v2_GetMultipleUsersRequest,
    responseSerialize: serialize_airchat_user_v2_GetMultipleUsersResponse,
    responseDeserialize: deserialize_airchat_user_v2_GetMultipleUsersResponse
  },
  // Gets user restrictions between other users than the current user.
  getUserRestrictions: {
    path: '/airchat.user.v2.UserAPI/GetUserRestrictions',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.GetUserRestrictionsRequest,
    responseType: airchat_user_v2_user_api_pb.GetUserRestrictionsResponse,
    requestSerialize: serialize_airchat_user_v2_GetUserRestrictionsRequest,
    requestDeserialize: deserialize_airchat_user_v2_GetUserRestrictionsRequest,
    responseSerialize: serialize_airchat_user_v2_GetUserRestrictionsResponse,
    responseDeserialize: deserialize_airchat_user_v2_GetUserRestrictionsResponse
  },
  // Checks to see if a username is available.
  checkUsernameAvailable: {
    path: '/airchat.user.v2.UserAPI/CheckUsernameAvailable',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.CheckUsernameAvailableRequest,
    responseType: airchat_user_v2_user_api_pb.CheckUsernameAvailableResponse,
    requestSerialize: serialize_airchat_user_v2_CheckUsernameAvailableRequest,
    requestDeserialize:
      deserialize_airchat_user_v2_CheckUsernameAvailableRequest,
    responseSerialize: serialize_airchat_user_v2_CheckUsernameAvailableResponse,
    responseDeserialize:
      deserialize_airchat_user_v2_CheckUsernameAvailableResponse
  },
  // Checks to see if a user is blocked
  getCurrentUserRestrictions: {
    path: '/airchat.user.v2.UserAPI/GetCurrentUserRestrictions',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.GetCurrentUserRestrictionsRequest,
    responseType:
      airchat_user_v2_user_api_pb.GetCurrentUserRestrictionsResponse,
    requestSerialize:
      serialize_airchat_user_v2_GetCurrentUserRestrictionsRequest,
    requestDeserialize:
      deserialize_airchat_user_v2_GetCurrentUserRestrictionsRequest,
    responseSerialize:
      serialize_airchat_user_v2_GetCurrentUserRestrictionsResponse,
    responseDeserialize:
      deserialize_airchat_user_v2_GetCurrentUserRestrictionsResponse
  },
  // Reports a user.
  reportUser: {
    path: '/airchat.user.v2.UserAPI/ReportUser',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.ReportUserRequest,
    responseType: airchat_user_v2_user_api_pb.ReportUserResponse,
    requestSerialize: serialize_airchat_user_v2_ReportUserRequest,
    requestDeserialize: deserialize_airchat_user_v2_ReportUserRequest,
    responseSerialize: serialize_airchat_user_v2_ReportUserResponse,
    responseDeserialize: deserialize_airchat_user_v2_ReportUserResponse
  },
  // Subscribes the current user as a follower of a particular user.
  followUser: {
    path: '/airchat.user.v2.UserAPI/FollowUser',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.FollowUserRequest,
    responseType: airchat_user_v2_user_api_pb.FollowUserResponse,
    requestSerialize: serialize_airchat_user_v2_FollowUserRequest,
    requestDeserialize: deserialize_airchat_user_v2_FollowUserRequest,
    responseSerialize: serialize_airchat_user_v2_FollowUserResponse,
    responseDeserialize: deserialize_airchat_user_v2_FollowUserResponse
  },
  // Unsubscribes the current user as a follower of a particular user.
  unfollowUser: {
    path: '/airchat.user.v2.UserAPI/UnfollowUser',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.UnfollowUserRequest,
    responseType: airchat_user_v2_user_api_pb.UnfollowUserResponse,
    requestSerialize: serialize_airchat_user_v2_UnfollowUserRequest,
    requestDeserialize: deserialize_airchat_user_v2_UnfollowUserRequest,
    responseSerialize: serialize_airchat_user_v2_UnfollowUserResponse,
    responseDeserialize: deserialize_airchat_user_v2_UnfollowUserResponse
  },
  // Fetches a pageable list of followers of a user.
  getFollowers: {
    path: '/airchat.user.v2.UserAPI/GetFollowers',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.GetFollowersRequest,
    responseType: airchat_user_v2_user_api_pb.GetFollowersResponse,
    requestSerialize: serialize_airchat_user_v2_GetFollowersRequest,
    requestDeserialize: deserialize_airchat_user_v2_GetFollowersRequest,
    responseSerialize: serialize_airchat_user_v2_GetFollowersResponse,
    responseDeserialize: deserialize_airchat_user_v2_GetFollowersResponse
  },
  // Fetches a pageable following list of a user.
  getFollowing: {
    path: '/airchat.user.v2.UserAPI/GetFollowing',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.GetFollowingRequest,
    responseType: airchat_user_v2_user_api_pb.GetFollowingResponse,
    requestSerialize: serialize_airchat_user_v2_GetFollowingRequest,
    requestDeserialize: deserialize_airchat_user_v2_GetFollowingRequest,
    responseSerialize: serialize_airchat_user_v2_GetFollowingResponse,
    responseDeserialize: deserialize_airchat_user_v2_GetFollowingResponse
  },
  // Deletes the current user with confirmation.
  deleteUser: {
    path: '/airchat.user.v2.UserAPI/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.DeleteUserRequest,
    responseType: airchat_user_v2_user_api_pb.DeleteUserResponse,
    requestSerialize: serialize_airchat_user_v2_DeleteUserRequest,
    requestDeserialize: deserialize_airchat_user_v2_DeleteUserRequest,
    responseSerialize: serialize_airchat_user_v2_DeleteUserResponse,
    responseDeserialize: deserialize_airchat_user_v2_DeleteUserResponse
  },
  // Blocks a user.
  blockUser: {
    path: '/airchat.user.v2.UserAPI/BlockUser',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.BlockUserRequest,
    responseType: airchat_user_v2_user_api_pb.BlockUserResponse,
    requestSerialize: serialize_airchat_user_v2_BlockUserRequest,
    requestDeserialize: deserialize_airchat_user_v2_BlockUserRequest,
    responseSerialize: serialize_airchat_user_v2_BlockUserResponse,
    responseDeserialize: deserialize_airchat_user_v2_BlockUserResponse
  },
  // Unblocks a user.
  unblockUser: {
    path: '/airchat.user.v2.UserAPI/UnblockUser',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.UnblockUserRequest,
    responseType: airchat_user_v2_user_api_pb.UnblockUserResponse,
    requestSerialize: serialize_airchat_user_v2_UnblockUserRequest,
    requestDeserialize: deserialize_airchat_user_v2_UnblockUserRequest,
    responseSerialize: serialize_airchat_user_v2_UnblockUserResponse,
    responseDeserialize: deserialize_airchat_user_v2_UnblockUserResponse
  },
  // Fetch the list of blocked users.
  getBlockedUsers: {
    path: '/airchat.user.v2.UserAPI/GetBlockedUsers',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.GetBlockedUsersRequest,
    responseType: airchat_user_v2_user_api_pb.GetBlockedUsersResponse,
    requestSerialize: serialize_airchat_user_v2_GetBlockedUsersRequest,
    requestDeserialize: deserialize_airchat_user_v2_GetBlockedUsersRequest,
    responseSerialize: serialize_airchat_user_v2_GetBlockedUsersResponse,
    responseDeserialize: deserialize_airchat_user_v2_GetBlockedUsersResponse
  },
  // Mute a user.
  muteUser: {
    path: '/airchat.user.v2.UserAPI/MuteUser',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.MuteUserRequest,
    responseType: airchat_user_v2_user_api_pb.MuteUserResponse,
    requestSerialize: serialize_airchat_user_v2_MuteUserRequest,
    requestDeserialize: deserialize_airchat_user_v2_MuteUserRequest,
    responseSerialize: serialize_airchat_user_v2_MuteUserResponse,
    responseDeserialize: deserialize_airchat_user_v2_MuteUserResponse
  },
  // Unmute a user.
  unmuteUser: {
    path: '/airchat.user.v2.UserAPI/UnmuteUser',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.UnmuteUserRequest,
    responseType: airchat_user_v2_user_api_pb.UnmuteUserResponse,
    requestSerialize: serialize_airchat_user_v2_UnmuteUserRequest,
    requestDeserialize: deserialize_airchat_user_v2_UnmuteUserRequest,
    responseSerialize: serialize_airchat_user_v2_UnmuteUserResponse,
    responseDeserialize: deserialize_airchat_user_v2_UnmuteUserResponse
  },
  // Fetch the list of muted users.
  getMutedUsers: {
    path: '/airchat.user.v2.UserAPI/GetMutedUsers',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.GetMutedUsersRequest,
    responseType: airchat_user_v2_user_api_pb.GetMutedUsersResponse,
    requestSerialize: serialize_airchat_user_v2_GetMutedUsersRequest,
    requestDeserialize: deserialize_airchat_user_v2_GetMutedUsersRequest,
    responseSerialize: serialize_airchat_user_v2_GetMutedUsersResponse,
    responseDeserialize: deserialize_airchat_user_v2_GetMutedUsersResponse
  },
  // Suspend/Unsuspend a user
  suspendUser: {
    path: '/airchat.user.v2.UserAPI/SuspendUser',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.SuspendUserRequest,
    responseType: airchat_user_v2_user_api_pb.SuspendUserResponse,
    requestSerialize: serialize_airchat_user_v2_SuspendUserRequest,
    requestDeserialize: deserialize_airchat_user_v2_SuspendUserRequest,
    responseSerialize: serialize_airchat_user_v2_SuspendUserResponse,
    responseDeserialize: deserialize_airchat_user_v2_SuspendUserResponse
  },
  // Get a user's data with user perspective and analytics.
  getUserWithAnalytics: {
    path: '/airchat.user.v2.UserAPI/GetUserWithAnalytics',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.GetUserWithAnalyticsRequest,
    responseType: airchat_user_v2_user_api_pb.GetUserWithAnalyticsResponse,
    requestSerialize: serialize_airchat_user_v2_GetUserWithAnalyticsRequest,
    requestDeserialize: deserialize_airchat_user_v2_GetUserWithAnalyticsRequest,
    responseSerialize: serialize_airchat_user_v2_GetUserWithAnalyticsResponse,
    responseDeserialize:
      deserialize_airchat_user_v2_GetUserWithAnalyticsResponse
  },
  // Get a list of global suggested interests/topics
  getInterests: {
    path: '/airchat.user.v2.UserAPI/GetInterests',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.GetInterestsRequest,
    responseType: airchat_user_v2_user_api_pb.GetInterestsResponse,
    requestSerialize: serialize_airchat_user_v2_GetInterestsRequest,
    requestDeserialize: deserialize_airchat_user_v2_GetInterestsRequest,
    responseSerialize: serialize_airchat_user_v2_GetInterestsResponse,
    responseDeserialize: deserialize_airchat_user_v2_GetInterestsResponse
  },
  // Set the user's selected interests
  setUserInterests: {
    path: '/airchat.user.v2.UserAPI/SetUserInterests',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.SetUserInterestsRequest,
    responseType: airchat_user_v2_user_api_pb.SetUserInterestsResponse,
    requestSerialize: serialize_airchat_user_v2_SetUserInterestsRequest,
    requestDeserialize: deserialize_airchat_user_v2_SetUserInterestsRequest,
    responseSerialize: serialize_airchat_user_v2_SetUserInterestsResponse,
    responseDeserialize: deserialize_airchat_user_v2_SetUserInterestsResponse
  },
  // Get a list of featured users given the context user's selected interests
  getFeaturedUsers: {
    path: '/airchat.user.v2.UserAPI/GetFeaturedUsers',
    requestStream: false,
    responseStream: false,
    requestType: airchat_user_v2_user_api_pb.GetFeaturedUsersRequest,
    responseType: airchat_user_v2_user_api_pb.GetFeaturedUsersResponse,
    requestSerialize: serialize_airchat_user_v2_GetFeaturedUsersRequest,
    requestDeserialize: deserialize_airchat_user_v2_GetFeaturedUsersRequest,
    responseSerialize: serialize_airchat_user_v2_GetFeaturedUsersResponse,
    responseDeserialize: deserialize_airchat_user_v2_GetFeaturedUsersResponse
  },
  // Sets Invite Attribution for Contact
  inviteContactWithAttribution: {
    path: '/airchat.user.v2.UserAPI/InviteContactWithAttribution',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_user_v2_user_api_pb.InviteContactWithAttributionRequest,
    responseType:
      airchat_user_v2_user_api_pb.InviteContactWithAttributionResponse,
    requestSerialize:
      serialize_airchat_user_v2_InviteContactWithAttributionRequest,
    requestDeserialize:
      deserialize_airchat_user_v2_InviteContactWithAttributionRequest,
    responseSerialize:
      serialize_airchat_user_v2_InviteContactWithAttributionResponse,
    responseDeserialize:
      deserialize_airchat_user_v2_InviteContactWithAttributionResponse
  }
});

exports.UserAPIClient = grpc.makeGenericClientConstructor(UserAPIService);
