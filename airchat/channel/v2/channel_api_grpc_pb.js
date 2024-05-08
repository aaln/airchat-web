// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_channel_v2_channel_api_pb = require('../../../airchat/channel/v2/channel_api_pb.js');
var airchat_user_v2_user_pb = require('../../../airchat/user/v2/user_pb.js');
var airchat_channel_v2_channel_pb = require('../../../airchat/channel/v2/channel_pb.js');
var airchat_message_v2_message_pb = require('../../../airchat/message/v2/message_pb.js');

function serialize_airchat_channel_v2_AddChannelParticipantRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.AddChannelParticipantRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.AddChannelParticipantRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_AddChannelParticipantRequest(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.AddChannelParticipantRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_AddChannelParticipantResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.AddChannelParticipantResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.AddChannelParticipantResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_AddChannelParticipantResponse(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.AddChannelParticipantResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_CreateChannelParticipantInviteRequest(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.CreateChannelParticipantInviteRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.CreateChannelParticipantInviteRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_CreateChannelParticipantInviteRequest(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.CreateChannelParticipantInviteRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_CreateChannelParticipantInviteResponse(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.CreateChannelParticipantInviteResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.CreateChannelParticipantInviteResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_CreateChannelParticipantInviteResponse(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.CreateChannelParticipantInviteResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_CreateChannelRequest(arg) {
  if (
    !(arg instanceof airchat_channel_v2_channel_api_pb.CreateChannelRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.CreateChannelRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_CreateChannelRequest(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.CreateChannelRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_CreateChannelResponse(arg) {
  if (
    !(arg instanceof airchat_channel_v2_channel_api_pb.CreateChannelResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.CreateChannelResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_CreateChannelResponse(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.CreateChannelResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_DeleteChannelRequest(arg) {
  if (
    !(arg instanceof airchat_channel_v2_channel_api_pb.DeleteChannelRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.DeleteChannelRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_DeleteChannelRequest(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.DeleteChannelRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_DeleteChannelResponse(arg) {
  if (
    !(arg instanceof airchat_channel_v2_channel_api_pb.DeleteChannelResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.DeleteChannelResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_DeleteChannelResponse(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.DeleteChannelResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GenerateChannelInviteCodeRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.GenerateChannelInviteCodeRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GenerateChannelInviteCodeRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GenerateChannelInviteCodeRequest(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.GenerateChannelInviteCodeRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GenerateChannelInviteCodeResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.GenerateChannelInviteCodeResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GenerateChannelInviteCodeResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GenerateChannelInviteCodeResponse(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.GenerateChannelInviteCodeResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetChannelInviteCodesRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.GetChannelInviteCodesRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetChannelInviteCodesRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetChannelInviteCodesRequest(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.GetChannelInviteCodesRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetChannelInviteCodesResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.GetChannelInviteCodesResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetChannelInviteCodesResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetChannelInviteCodesResponse(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.GetChannelInviteCodesResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetChannelParticipantsRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.GetChannelParticipantsRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetChannelParticipantsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetChannelParticipantsRequest(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.GetChannelParticipantsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetChannelParticipantsResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.GetChannelParticipantsResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetChannelParticipantsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetChannelParticipantsResponse(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.GetChannelParticipantsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetChannelRequest(arg) {
  if (!(arg instanceof airchat_channel_v2_channel_api_pb.GetChannelRequest)) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetChannelRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetChannelRequest(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.GetChannelRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetChannelResponse(arg) {
  if (!(arg instanceof airchat_channel_v2_channel_api_pb.GetChannelResponse)) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetChannelResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetChannelResponse(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.GetChannelResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetOwnerChannelsRequest(arg) {
  if (
    !(arg instanceof airchat_channel_v2_channel_api_pb.GetOwnerChannelsRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetOwnerChannelsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetOwnerChannelsRequest(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.GetOwnerChannelsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetOwnerChannelsResponse(arg) {
  if (
    !(arg instanceof airchat_channel_v2_channel_api_pb.GetOwnerChannelsResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetOwnerChannelsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetOwnerChannelsResponse(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.GetOwnerChannelsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetParticipantChannelsRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.GetParticipantChannelsRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetParticipantChannelsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetParticipantChannelsRequest(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.GetParticipantChannelsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetParticipantChannelsResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.GetParticipantChannelsResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetParticipantChannelsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetParticipantChannelsResponse(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.GetParticipantChannelsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetPendingChannelParticipantInvitesRequest(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.GetPendingChannelParticipantInvitesRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetPendingChannelParticipantInvitesRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetPendingChannelParticipantInvitesRequest(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.GetPendingChannelParticipantInvitesRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetPendingChannelParticipantInvitesResponse(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.GetPendingChannelParticipantInvitesResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetPendingChannelParticipantInvitesResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetPendingChannelParticipantInvitesResponse(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.GetPendingChannelParticipantInvitesResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetUserChannelParticipantInvitesRequest(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.GetUserChannelParticipantInvitesRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetUserChannelParticipantInvitesRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetUserChannelParticipantInvitesRequest(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.GetUserChannelParticipantInvitesRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_GetUserChannelParticipantInvitesResponse(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.GetUserChannelParticipantInvitesResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.GetUserChannelParticipantInvitesResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_GetUserChannelParticipantInvitesResponse(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.GetUserChannelParticipantInvitesResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_HideChannelMessageRequest(arg) {
  if (
    !(
      arg instanceof airchat_channel_v2_channel_api_pb.HideChannelMessageRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.HideChannelMessageRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_HideChannelMessageRequest(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.HideChannelMessageRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_HideChannelMessageResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.HideChannelMessageResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.HideChannelMessageResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_HideChannelMessageResponse(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.HideChannelMessageResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_JoinChannelRequest(arg) {
  if (!(arg instanceof airchat_channel_v2_channel_api_pb.JoinChannelRequest)) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.JoinChannelRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_JoinChannelRequest(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.JoinChannelRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_JoinChannelResponse(arg) {
  if (!(arg instanceof airchat_channel_v2_channel_api_pb.JoinChannelResponse)) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.JoinChannelResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_JoinChannelResponse(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.JoinChannelResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_LeaveChannelRequest(arg) {
  if (!(arg instanceof airchat_channel_v2_channel_api_pb.LeaveChannelRequest)) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.LeaveChannelRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_LeaveChannelRequest(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.LeaveChannelRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_LeaveChannelResponse(arg) {
  if (
    !(arg instanceof airchat_channel_v2_channel_api_pb.LeaveChannelResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.LeaveChannelResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_LeaveChannelResponse(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.LeaveChannelResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_RejectChannelParticipantInviteRequest(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.RejectChannelParticipantInviteRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.RejectChannelParticipantInviteRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_RejectChannelParticipantInviteRequest(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.RejectChannelParticipantInviteRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_RejectChannelParticipantInviteResponse(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.RejectChannelParticipantInviteResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.RejectChannelParticipantInviteResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_RejectChannelParticipantInviteResponse(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.RejectChannelParticipantInviteResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_RemoveChannelInviteCodeRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.RemoveChannelInviteCodeRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.RemoveChannelInviteCodeRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_RemoveChannelInviteCodeRequest(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.RemoveChannelInviteCodeRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_RemoveChannelInviteCodeResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.RemoveChannelInviteCodeResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.RemoveChannelInviteCodeResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_RemoveChannelInviteCodeResponse(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.RemoveChannelInviteCodeResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_RemoveChannelParticipantRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.RemoveChannelParticipantRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.RemoveChannelParticipantRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_RemoveChannelParticipantRequest(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.RemoveChannelParticipantRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_RemoveChannelParticipantResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.RemoveChannelParticipantResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.RemoveChannelParticipantResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_RemoveChannelParticipantResponse(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.RemoveChannelParticipantResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_RetractChannelParticipantInviteRequest(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.RetractChannelParticipantInviteRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.RetractChannelParticipantInviteRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_RetractChannelParticipantInviteRequest(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.RetractChannelParticipantInviteRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_RetractChannelParticipantInviteResponse(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_channel_v2_channel_api_pb.RetractChannelParticipantInviteResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.RetractChannelParticipantInviteResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_RetractChannelParticipantInviteResponse(
  buffer_arg
) {
  return airchat_channel_v2_channel_api_pb.RetractChannelParticipantInviteResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_UpdateChannelRequest(arg) {
  if (
    !(arg instanceof airchat_channel_v2_channel_api_pb.UpdateChannelRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.UpdateChannelRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_UpdateChannelRequest(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.UpdateChannelRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_channel_v2_UpdateChannelResponse(arg) {
  if (
    !(arg instanceof airchat_channel_v2_channel_api_pb.UpdateChannelResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.channel.v2.UpdateChannelResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_channel_v2_UpdateChannelResponse(buffer_arg) {
  return airchat_channel_v2_channel_api_pb.UpdateChannelResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// A service handling channels.
var ChannelAPIService = (exports.ChannelAPIService = {
  // Creates a new channel.
  createChannel: {
    path: '/airchat.channel.v2.ChannelAPI/CreateChannel',
    requestStream: false,
    responseStream: false,
    requestType: airchat_channel_v2_channel_api_pb.CreateChannelRequest,
    responseType: airchat_channel_v2_channel_api_pb.CreateChannelResponse,
    requestSerialize: serialize_airchat_channel_v2_CreateChannelRequest,
    requestDeserialize: deserialize_airchat_channel_v2_CreateChannelRequest,
    responseSerialize: serialize_airchat_channel_v2_CreateChannelResponse,
    responseDeserialize: deserialize_airchat_channel_v2_CreateChannelResponse
  },
  // Updates a channel.
  updateChannel: {
    path: '/airchat.channel.v2.ChannelAPI/UpdateChannel',
    requestStream: false,
    responseStream: false,
    requestType: airchat_channel_v2_channel_api_pb.UpdateChannelRequest,
    responseType: airchat_channel_v2_channel_api_pb.UpdateChannelResponse,
    requestSerialize: serialize_airchat_channel_v2_UpdateChannelRequest,
    requestDeserialize: deserialize_airchat_channel_v2_UpdateChannelRequest,
    responseSerialize: serialize_airchat_channel_v2_UpdateChannelResponse,
    responseDeserialize: deserialize_airchat_channel_v2_UpdateChannelResponse
  },
  // Deletes a channel.
  deleteChannel: {
    path: '/airchat.channel.v2.ChannelAPI/DeleteChannel',
    requestStream: false,
    responseStream: false,
    requestType: airchat_channel_v2_channel_api_pb.DeleteChannelRequest,
    responseType: airchat_channel_v2_channel_api_pb.DeleteChannelResponse,
    requestSerialize: serialize_airchat_channel_v2_DeleteChannelRequest,
    requestDeserialize: deserialize_airchat_channel_v2_DeleteChannelRequest,
    responseSerialize: serialize_airchat_channel_v2_DeleteChannelResponse,
    responseDeserialize: deserialize_airchat_channel_v2_DeleteChannelResponse
  },
  // Adds a participant to a channel. Used by the channel owner if they are granted permission to add participants.
  addChannelParticipant: {
    path: '/airchat.channel.v2.ChannelAPI/AddChannelParticipant',
    requestStream: false,
    responseStream: false,
    requestType: airchat_channel_v2_channel_api_pb.AddChannelParticipantRequest,
    responseType:
      airchat_channel_v2_channel_api_pb.AddChannelParticipantResponse,
    requestSerialize: serialize_airchat_channel_v2_AddChannelParticipantRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_AddChannelParticipantRequest,
    responseSerialize:
      serialize_airchat_channel_v2_AddChannelParticipantResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_AddChannelParticipantResponse
  },
  // Removes a participant from a channel. Used by the channel owner.
  removeChannelParticipant: {
    path: '/airchat.channel.v2.ChannelAPI/RemoveChannelParticipant',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_channel_v2_channel_api_pb.RemoveChannelParticipantRequest,
    responseType:
      airchat_channel_v2_channel_api_pb.RemoveChannelParticipantResponse,
    requestSerialize:
      serialize_airchat_channel_v2_RemoveChannelParticipantRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_RemoveChannelParticipantRequest,
    responseSerialize:
      serialize_airchat_channel_v2_RemoveChannelParticipantResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_RemoveChannelParticipantResponse
  },
  // Used by a current user to join a channel using an invite code.
  joinChannel: {
    path: '/airchat.channel.v2.ChannelAPI/JoinChannel',
    requestStream: false,
    responseStream: false,
    requestType: airchat_channel_v2_channel_api_pb.JoinChannelRequest,
    responseType: airchat_channel_v2_channel_api_pb.JoinChannelResponse,
    requestSerialize: serialize_airchat_channel_v2_JoinChannelRequest,
    requestDeserialize: deserialize_airchat_channel_v2_JoinChannelRequest,
    responseSerialize: serialize_airchat_channel_v2_JoinChannelResponse,
    responseDeserialize: deserialize_airchat_channel_v2_JoinChannelResponse
  },
  // Used by a current user to leave a channel.
  leaveChannel: {
    path: '/airchat.channel.v2.ChannelAPI/LeaveChannel',
    requestStream: false,
    responseStream: false,
    requestType: airchat_channel_v2_channel_api_pb.LeaveChannelRequest,
    responseType: airchat_channel_v2_channel_api_pb.LeaveChannelResponse,
    requestSerialize: serialize_airchat_channel_v2_LeaveChannelRequest,
    requestDeserialize: deserialize_airchat_channel_v2_LeaveChannelRequest,
    responseSerialize: serialize_airchat_channel_v2_LeaveChannelResponse,
    responseDeserialize: deserialize_airchat_channel_v2_LeaveChannelResponse
  },
  // Gets a list of participants in a channel.
  getChannelParticipants: {
    path: '/airchat.channel.v2.ChannelAPI/GetChannelParticipants',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_channel_v2_channel_api_pb.GetChannelParticipantsRequest,
    responseType:
      airchat_channel_v2_channel_api_pb.GetChannelParticipantsResponse,
    requestSerialize:
      serialize_airchat_channel_v2_GetChannelParticipantsRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_GetChannelParticipantsRequest,
    responseSerialize:
      serialize_airchat_channel_v2_GetChannelParticipantsResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_GetChannelParticipantsResponse
  },
  // Gets a channel by ID or handle.
  getChannel: {
    path: '/airchat.channel.v2.ChannelAPI/GetChannel',
    requestStream: false,
    responseStream: false,
    requestType: airchat_channel_v2_channel_api_pb.GetChannelRequest,
    responseType: airchat_channel_v2_channel_api_pb.GetChannelResponse,
    requestSerialize: serialize_airchat_channel_v2_GetChannelRequest,
    requestDeserialize: deserialize_airchat_channel_v2_GetChannelRequest,
    responseSerialize: serialize_airchat_channel_v2_GetChannelResponse,
    responseDeserialize: deserialize_airchat_channel_v2_GetChannelResponse
  },
  // Gets channels owned by a user.
  getOwnerChannels: {
    path: '/airchat.channel.v2.ChannelAPI/GetOwnerChannels',
    requestStream: false,
    responseStream: false,
    requestType: airchat_channel_v2_channel_api_pb.GetOwnerChannelsRequest,
    responseType: airchat_channel_v2_channel_api_pb.GetOwnerChannelsResponse,
    requestSerialize: serialize_airchat_channel_v2_GetOwnerChannelsRequest,
    requestDeserialize: deserialize_airchat_channel_v2_GetOwnerChannelsRequest,
    responseSerialize: serialize_airchat_channel_v2_GetOwnerChannelsResponse,
    responseDeserialize: deserialize_airchat_channel_v2_GetOwnerChannelsResponse
  },
  // Gets channels a participant is in.
  getParticipantChannels: {
    path: '/airchat.channel.v2.ChannelAPI/GetParticipantChannels',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_channel_v2_channel_api_pb.GetParticipantChannelsRequest,
    responseType:
      airchat_channel_v2_channel_api_pb.GetParticipantChannelsResponse,
    requestSerialize:
      serialize_airchat_channel_v2_GetParticipantChannelsRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_GetParticipantChannelsRequest,
    responseSerialize:
      serialize_airchat_channel_v2_GetParticipantChannelsResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_GetParticipantChannelsResponse
  },
  // Generates an invite code for a channel.
  generateChannelInviteCode: {
    path: '/airchat.channel.v2.ChannelAPI/GenerateChannelInviteCode',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_channel_v2_channel_api_pb.GenerateChannelInviteCodeRequest,
    responseType:
      airchat_channel_v2_channel_api_pb.GenerateChannelInviteCodeResponse,
    requestSerialize:
      serialize_airchat_channel_v2_GenerateChannelInviteCodeRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_GenerateChannelInviteCodeRequest,
    responseSerialize:
      serialize_airchat_channel_v2_GenerateChannelInviteCodeResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_GenerateChannelInviteCodeResponse
  },
  // Removes an invite code for a channel.
  removeChannelInviteCode: {
    path: '/airchat.channel.v2.ChannelAPI/RemoveChannelInviteCode',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_channel_v2_channel_api_pb.RemoveChannelInviteCodeRequest,
    responseType:
      airchat_channel_v2_channel_api_pb.RemoveChannelInviteCodeResponse,
    requestSerialize:
      serialize_airchat_channel_v2_RemoveChannelInviteCodeRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_RemoveChannelInviteCodeRequest,
    responseSerialize:
      serialize_airchat_channel_v2_RemoveChannelInviteCodeResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_RemoveChannelInviteCodeResponse
  },
  // Gets invite codes for a channel.
  getChannelInviteCodes: {
    path: '/airchat.channel.v2.ChannelAPI/GetChannelInviteCodes',
    requestStream: false,
    responseStream: false,
    requestType: airchat_channel_v2_channel_api_pb.GetChannelInviteCodesRequest,
    responseType:
      airchat_channel_v2_channel_api_pb.GetChannelInviteCodesResponse,
    requestSerialize: serialize_airchat_channel_v2_GetChannelInviteCodesRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_GetChannelInviteCodesRequest,
    responseSerialize:
      serialize_airchat_channel_v2_GetChannelInviteCodesResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_GetChannelInviteCodesResponse
  },
  // Hides or unhides a message in a channel.
  hideChannelMessage: {
    path: '/airchat.channel.v2.ChannelAPI/HideChannelMessage',
    requestStream: false,
    responseStream: false,
    requestType: airchat_channel_v2_channel_api_pb.HideChannelMessageRequest,
    responseType: airchat_channel_v2_channel_api_pb.HideChannelMessageResponse,
    requestSerialize: serialize_airchat_channel_v2_HideChannelMessageRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_HideChannelMessageRequest,
    responseSerialize: serialize_airchat_channel_v2_HideChannelMessageResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_HideChannelMessageResponse
  },
  // Creates a participant invite for a channel.
  createChannelParticipantInvite: {
    path: '/airchat.channel.v2.ChannelAPI/CreateChannelParticipantInvite',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_channel_v2_channel_api_pb.CreateChannelParticipantInviteRequest,
    responseType:
      airchat_channel_v2_channel_api_pb.CreateChannelParticipantInviteResponse,
    requestSerialize:
      serialize_airchat_channel_v2_CreateChannelParticipantInviteRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_CreateChannelParticipantInviteRequest,
    responseSerialize:
      serialize_airchat_channel_v2_CreateChannelParticipantInviteResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_CreateChannelParticipantInviteResponse
  },
  // Retracts a pending participant invite (used by the owner).
  retractChannelParticipantInvite: {
    path: '/airchat.channel.v2.ChannelAPI/RetractChannelParticipantInvite',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_channel_v2_channel_api_pb.RetractChannelParticipantInviteRequest,
    responseType:
      airchat_channel_v2_channel_api_pb.RetractChannelParticipantInviteResponse,
    requestSerialize:
      serialize_airchat_channel_v2_RetractChannelParticipantInviteRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_RetractChannelParticipantInviteRequest,
    responseSerialize:
      serialize_airchat_channel_v2_RetractChannelParticipantInviteResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_RetractChannelParticipantInviteResponse
  },
  // Rejects a pending participant invite (used by the participant).
  rejectChannelParticipantInvite: {
    path: '/airchat.channel.v2.ChannelAPI/RejectChannelParticipantInvite',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_channel_v2_channel_api_pb.RejectChannelParticipantInviteRequest,
    responseType:
      airchat_channel_v2_channel_api_pb.RejectChannelParticipantInviteResponse,
    requestSerialize:
      serialize_airchat_channel_v2_RejectChannelParticipantInviteRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_RejectChannelParticipantInviteRequest,
    responseSerialize:
      serialize_airchat_channel_v2_RejectChannelParticipantInviteResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_RejectChannelParticipantInviteResponse
  },
  // Gets pending participant invites for a channel.
  getPendingChannelParticipantInvites: {
    path: '/airchat.channel.v2.ChannelAPI/GetPendingChannelParticipantInvites',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_channel_v2_channel_api_pb.GetPendingChannelParticipantInvitesRequest,
    responseType:
      airchat_channel_v2_channel_api_pb.GetPendingChannelParticipantInvitesResponse,
    requestSerialize:
      serialize_airchat_channel_v2_GetPendingChannelParticipantInvitesRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_GetPendingChannelParticipantInvitesRequest,
    responseSerialize:
      serialize_airchat_channel_v2_GetPendingChannelParticipantInvitesResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_GetPendingChannelParticipantInvitesResponse
  },
  // Gets pending participant invites for a user.
  getUserChannelParticipantInvites: {
    path: '/airchat.channel.v2.ChannelAPI/GetUserChannelParticipantInvites',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_channel_v2_channel_api_pb.GetUserChannelParticipantInvitesRequest,
    responseType:
      airchat_channel_v2_channel_api_pb.GetUserChannelParticipantInvitesResponse,
    requestSerialize:
      serialize_airchat_channel_v2_GetUserChannelParticipantInvitesRequest,
    requestDeserialize:
      deserialize_airchat_channel_v2_GetUserChannelParticipantInvitesRequest,
    responseSerialize:
      serialize_airchat_channel_v2_GetUserChannelParticipantInvitesResponse,
    responseDeserialize:
      deserialize_airchat_channel_v2_GetUserChannelParticipantInvitesResponse
  }
});

exports.ChannelAPIClient = grpc.makeGenericClientConstructor(ChannelAPIService);
