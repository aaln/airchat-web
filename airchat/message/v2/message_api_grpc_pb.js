// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_message_v2_message_api_pb = require('../../../airchat/message/v2/message_api_pb.js');
var airchat_user_v2_user_pb = require('../../../airchat/user/v2/user_pb.js');
var airchat_message_v2_message_pb = require('../../../airchat/message/v2/message_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_airchat_message_v2_AbortImageUploadRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.AbortImageUploadRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.AbortImageUploadRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_AbortImageUploadRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.AbortImageUploadRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_AbortImageUploadResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.AbortImageUploadResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.AbortImageUploadResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_AbortImageUploadResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.AbortImageUploadResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_AbortUploadRequest(arg) {
  if (!(arg instanceof airchat_message_v2_message_api_pb.AbortUploadRequest)) {
    throw new Error(
      'Expected argument of type airchat.message.v2.AbortUploadRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_AbortUploadRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.AbortUploadRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_AbortUploadResponse(arg) {
  if (!(arg instanceof airchat_message_v2_message_api_pb.AbortUploadResponse)) {
    throw new Error(
      'Expected argument of type airchat.message.v2.AbortUploadResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_AbortUploadResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.AbortUploadResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_ClearPrivateRoomUnreadCountRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.ClearPrivateRoomUnreadCountRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.ClearPrivateRoomUnreadCountRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_ClearPrivateRoomUnreadCountRequest(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.ClearPrivateRoomUnreadCountRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_ClearPrivateRoomUnreadCountResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.ClearPrivateRoomUnreadCountResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.ClearPrivateRoomUnreadCountResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_ClearPrivateRoomUnreadCountResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.ClearPrivateRoomUnreadCountResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CompleteImageUploadRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.CompleteImageUploadRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CompleteImageUploadRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CompleteImageUploadRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.CompleteImageUploadRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CompleteImageUploadResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.CompleteImageUploadResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CompleteImageUploadResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CompleteImageUploadResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.CompleteImageUploadResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CompleteUploadRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.CompleteUploadRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CompleteUploadRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CompleteUploadRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.CompleteUploadRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CompleteUploadResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.CompleteUploadResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CompleteUploadResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CompleteUploadResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.CompleteUploadResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CreateImageUploadRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.CreateImageUploadRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CreateImageUploadRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CreateImageUploadRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.CreateImageUploadRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CreateImageUploadResponse(arg) {
  if (
    !(
      arg instanceof airchat_message_v2_message_api_pb.CreateImageUploadResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CreateImageUploadResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CreateImageUploadResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.CreateImageUploadResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CreateMessageThreadRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.CreateMessageThreadRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CreateMessageThreadRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CreateMessageThreadRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.CreateMessageThreadRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CreateMessageThreadResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.CreateMessageThreadResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CreateMessageThreadResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CreateMessageThreadResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.CreateMessageThreadResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CreatePrivateRoomRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.CreatePrivateRoomRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CreatePrivateRoomRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CreatePrivateRoomRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.CreatePrivateRoomRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CreatePrivateRoomResponse(arg) {
  if (
    !(
      arg instanceof airchat_message_v2_message_api_pb.CreatePrivateRoomResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CreatePrivateRoomResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CreatePrivateRoomResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.CreatePrivateRoomResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CreatePrivateUploadRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.CreatePrivateUploadRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CreatePrivateUploadRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CreatePrivateUploadRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.CreatePrivateUploadRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CreatePrivateUploadResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.CreatePrivateUploadResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CreatePrivateUploadResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CreatePrivateUploadResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.CreatePrivateUploadResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CreateTranscriptionRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.CreateTranscriptionRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CreateTranscriptionRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CreateTranscriptionRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.CreateTranscriptionRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CreateTranscriptionResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.CreateTranscriptionResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CreateTranscriptionResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CreateTranscriptionResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.CreateTranscriptionResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CreateUploadRequest(arg) {
  if (!(arg instanceof airchat_message_v2_message_api_pb.CreateUploadRequest)) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CreateUploadRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CreateUploadRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.CreateUploadRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_CreateUploadResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.CreateUploadResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.CreateUploadResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_CreateUploadResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.CreateUploadResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_DeleteMessageRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.DeleteMessageRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.DeleteMessageRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_DeleteMessageRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.DeleteMessageRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_DeleteMessageResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.DeleteMessageResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.DeleteMessageResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_DeleteMessageResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.DeleteMessageResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetBookmarksRequest(arg) {
  if (!(arg instanceof airchat_message_v2_message_api_pb.GetBookmarksRequest)) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetBookmarksRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetBookmarksRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetBookmarksRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetBookmarksResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetBookmarksResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetBookmarksResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetBookmarksResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetBookmarksResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetChannelFeedRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetChannelFeedRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetChannelFeedRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetChannelFeedRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetChannelFeedRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetChannelFeedResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetChannelFeedResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetChannelFeedResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetChannelFeedResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetChannelFeedResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetHighlightFeedRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetHighlightFeedRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetHighlightFeedRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetHighlightFeedRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetHighlightFeedRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetHighlightFeedResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetHighlightFeedResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetHighlightFeedResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetHighlightFeedResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetHighlightFeedResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetHighlightsRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetHighlightsRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetHighlightsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetHighlightsRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetHighlightsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetHighlightsResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetHighlightsResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetHighlightsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetHighlightsResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetHighlightsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMentionCandidatesRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetMentionCandidatesRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMentionCandidatesRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMentionCandidatesRequest(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetMentionCandidatesRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMentionCandidatesResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetMentionCandidatesResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMentionCandidatesResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMentionCandidatesResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetMentionCandidatesResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessageAnalyticsRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetMessageAnalyticsRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessageAnalyticsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessageAnalyticsRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetMessageAnalyticsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessageAnalyticsResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetMessageAnalyticsResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessageAnalyticsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessageAnalyticsResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetMessageAnalyticsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessageEventLogRequest(arg) {
  if (
    !(
      arg instanceof airchat_message_v2_message_api_pb.GetMessageEventLogRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessageEventLogRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessageEventLogRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetMessageEventLogRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessageEventLogResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetMessageEventLogResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessageEventLogResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessageEventLogResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetMessageEventLogResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessageFeedRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetMessageFeedRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessageFeedRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessageFeedRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetMessageFeedRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessageFeedResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetMessageFeedResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessageFeedResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessageFeedResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetMessageFeedResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessageThreadDetailsByReferenceRequest(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetMessageThreadDetailsByReferenceRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessageThreadDetailsByReferenceRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessageThreadDetailsByReferenceRequest(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetMessageThreadDetailsByReferenceRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessageThreadDetailsByReferenceResponse(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetMessageThreadDetailsByReferenceResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessageThreadDetailsByReferenceResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessageThreadDetailsByReferenceResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetMessageThreadDetailsByReferenceResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessageThreadsByReferenceRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetMessageThreadsByReferenceRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessageThreadsByReferenceRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessageThreadsByReferenceRequest(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetMessageThreadsByReferenceRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessageThreadsByReferenceResponse(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetMessageThreadsByReferenceResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessageThreadsByReferenceResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessageThreadsByReferenceResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetMessageThreadsByReferenceResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessageThreadsRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetMessageThreadsRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessageThreadsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessageThreadsRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetMessageThreadsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessageThreadsResponse(arg) {
  if (
    !(
      arg instanceof airchat_message_v2_message_api_pb.GetMessageThreadsResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessageThreadsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessageThreadsResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetMessageThreadsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessagesRequest(arg) {
  if (!(arg instanceof airchat_message_v2_message_api_pb.GetMessagesRequest)) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessagesRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessagesRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetMessagesRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetMessagesResponse(arg) {
  if (!(arg instanceof airchat_message_v2_message_api_pb.GetMessagesResponse)) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetMessagesResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetMessagesResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetMessagesResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetPrivateMessagesByIndexRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetPrivateMessagesByIndexRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetPrivateMessagesByIndexRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetPrivateMessagesByIndexRequest(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetPrivateMessagesByIndexRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetPrivateMessagesByIndexResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetPrivateMessagesByIndexResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetPrivateMessagesByIndexResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetPrivateMessagesByIndexResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetPrivateMessagesByIndexResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetPrivateRoomDeletedIndexesRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetPrivateRoomDeletedIndexesRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetPrivateRoomDeletedIndexesRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetPrivateRoomDeletedIndexesRequest(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetPrivateRoomDeletedIndexesRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetPrivateRoomDeletedIndexesResponse(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetPrivateRoomDeletedIndexesResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetPrivateRoomDeletedIndexesResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetPrivateRoomDeletedIndexesResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetPrivateRoomDeletedIndexesResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetPrivateRoomRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetPrivateRoomRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetPrivateRoomRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetPrivateRoomRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetPrivateRoomRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetPrivateRoomResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetPrivateRoomResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetPrivateRoomResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetPrivateRoomResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetPrivateRoomResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetPrivateRoomsRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetPrivateRoomsRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetPrivateRoomsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetPrivateRoomsRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetPrivateRoomsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetPrivateRoomsResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.GetPrivateRoomsResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetPrivateRoomsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetPrivateRoomsResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetPrivateRoomsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetThreadDeletedIndexesRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetThreadDeletedIndexesRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetThreadDeletedIndexesRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetThreadDeletedIndexesRequest(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetThreadDeletedIndexesRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetThreadDeletedIndexesResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetThreadDeletedIndexesResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetThreadDeletedIndexesResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetThreadDeletedIndexesResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetThreadDeletedIndexesResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetThreadMessagesByIndexRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetThreadMessagesByIndexRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetThreadMessagesByIndexRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetThreadMessagesByIndexRequest(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetThreadMessagesByIndexRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetThreadMessagesByIndexResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.GetThreadMessagesByIndexResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetThreadMessagesByIndexResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetThreadMessagesByIndexResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.GetThreadMessagesByIndexResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetUserFeedRequest(arg) {
  if (!(arg instanceof airchat_message_v2_message_api_pb.GetUserFeedRequest)) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetUserFeedRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetUserFeedRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetUserFeedRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_GetUserFeedResponse(arg) {
  if (!(arg instanceof airchat_message_v2_message_api_pb.GetUserFeedResponse)) {
    throw new Error(
      'Expected argument of type airchat.message.v2.GetUserFeedResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_GetUserFeedResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.GetUserFeedResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_ReadyUploadSegmentRequest(arg) {
  if (
    !(
      arg instanceof airchat_message_v2_message_api_pb.ReadyUploadSegmentRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.ReadyUploadSegmentRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_ReadyUploadSegmentRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.ReadyUploadSegmentRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_ReadyUploadSegmentResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.ReadyUploadSegmentResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.ReadyUploadSegmentResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_ReadyUploadSegmentResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.ReadyUploadSegmentResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_RemoveBookmarkRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.RemoveBookmarkRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.RemoveBookmarkRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_RemoveBookmarkRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.RemoveBookmarkRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_RemoveBookmarkResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.RemoveBookmarkResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.RemoveBookmarkResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_RemoveBookmarkResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.RemoveBookmarkResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_RemoveHighlightRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.RemoveHighlightRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.RemoveHighlightRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_RemoveHighlightRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.RemoveHighlightRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_RemoveHighlightResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.RemoveHighlightResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.RemoveHighlightResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_RemoveHighlightResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.RemoveHighlightResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_SaveBookmarkRequest(arg) {
  if (!(arg instanceof airchat_message_v2_message_api_pb.SaveBookmarkRequest)) {
    throw new Error(
      'Expected argument of type airchat.message.v2.SaveBookmarkRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_SaveBookmarkRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.SaveBookmarkRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_SaveBookmarkResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.SaveBookmarkResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.SaveBookmarkResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_SaveBookmarkResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.SaveBookmarkResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_SaveHighlightRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.SaveHighlightRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.SaveHighlightRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_SaveHighlightRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.SaveHighlightRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_SaveHighlightResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.SaveHighlightResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.SaveHighlightResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_SaveHighlightResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.SaveHighlightResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_SendMessageEventRequest(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.SendMessageEventRequest)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.SendMessageEventRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_SendMessageEventRequest(buffer_arg) {
  return airchat_message_v2_message_api_pb.SendMessageEventRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_SendMessageEventResponse(arg) {
  if (
    !(arg instanceof airchat_message_v2_message_api_pb.SendMessageEventResponse)
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.SendMessageEventResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_SendMessageEventResponse(buffer_arg) {
  return airchat_message_v2_message_api_pb.SendMessageEventResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_UpdateMessageImageReferencesRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.UpdateMessageImageReferencesRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.UpdateMessageImageReferencesRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_UpdateMessageImageReferencesRequest(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.UpdateMessageImageReferencesRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_UpdateMessageImageReferencesResponse(
  arg
) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.UpdateMessageImageReferencesResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.UpdateMessageImageReferencesResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_UpdateMessageImageReferencesResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.UpdateMessageImageReferencesResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_UpdateMessageLinkMetadataRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.UpdateMessageLinkMetadataRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.UpdateMessageLinkMetadataRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_UpdateMessageLinkMetadataRequest(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.UpdateMessageLinkMetadataRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_UpdateMessageLinkMetadataResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.UpdateMessageLinkMetadataResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.UpdateMessageLinkMetadataResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_UpdateMessageLinkMetadataResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.UpdateMessageLinkMetadataResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_UpdateMessageMentionsRequest(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.UpdateMessageMentionsRequest
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.UpdateMessageMentionsRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_UpdateMessageMentionsRequest(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.UpdateMessageMentionsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_message_v2_UpdateMessageMentionsResponse(arg) {
  if (
    !(
      arg instanceof
      airchat_message_v2_message_api_pb.UpdateMessageMentionsResponse
    )
  ) {
    throw new Error(
      'Expected argument of type airchat.message.v2.UpdateMessageMentionsResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_message_v2_UpdateMessageMentionsResponse(
  buffer_arg
) {
  return airchat_message_v2_message_api_pb.UpdateMessageMentionsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// A service handling messages.
var MessageAPIService = (exports.MessageAPIService = {
  // Initiates a message upload.
  createUpload: {
    path: '/airchat.message.v2.MessageAPI/CreateUpload',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.CreateUploadRequest,
    responseType: airchat_message_v2_message_api_pb.CreateUploadResponse,
    requestSerialize: serialize_airchat_message_v2_CreateUploadRequest,
    requestDeserialize: deserialize_airchat_message_v2_CreateUploadRequest,
    responseSerialize: serialize_airchat_message_v2_CreateUploadResponse,
    responseDeserialize: deserialize_airchat_message_v2_CreateUploadResponse
  },
  // Creates an upload URL for a media segment.
  readyUploadSegment: {
    path: '/airchat.message.v2.MessageAPI/ReadyUploadSegment',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.ReadyUploadSegmentRequest,
    responseType: airchat_message_v2_message_api_pb.ReadyUploadSegmentResponse,
    requestSerialize: serialize_airchat_message_v2_ReadyUploadSegmentRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_ReadyUploadSegmentRequest,
    responseSerialize: serialize_airchat_message_v2_ReadyUploadSegmentResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_ReadyUploadSegmentResponse
  },
  // Completes the upload and generates the playlist.
  completeUpload: {
    path: '/airchat.message.v2.MessageAPI/CompleteUpload',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.CompleteUploadRequest,
    responseType: airchat_message_v2_message_api_pb.CompleteUploadResponse,
    requestSerialize: serialize_airchat_message_v2_CompleteUploadRequest,
    requestDeserialize: deserialize_airchat_message_v2_CompleteUploadRequest,
    responseSerialize: serialize_airchat_message_v2_CompleteUploadResponse,
    responseDeserialize: deserialize_airchat_message_v2_CompleteUploadResponse
  },
  // Aborts the upload and deletes the segments.
  abortUpload: {
    path: '/airchat.message.v2.MessageAPI/AbortUpload',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.AbortUploadRequest,
    responseType: airchat_message_v2_message_api_pb.AbortUploadResponse,
    requestSerialize: serialize_airchat_message_v2_AbortUploadRequest,
    requestDeserialize: deserialize_airchat_message_v2_AbortUploadRequest,
    responseSerialize: serialize_airchat_message_v2_AbortUploadResponse,
    responseDeserialize: deserialize_airchat_message_v2_AbortUploadResponse
  },
  // Gets the list of messages.
  getMessages: {
    path: '/airchat.message.v2.MessageAPI/GetMessages',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetMessagesRequest,
    responseType: airchat_message_v2_message_api_pb.GetMessagesResponse,
    requestSerialize: serialize_airchat_message_v2_GetMessagesRequest,
    requestDeserialize: deserialize_airchat_message_v2_GetMessagesRequest,
    responseSerialize: serialize_airchat_message_v2_GetMessagesResponse,
    responseDeserialize: deserialize_airchat_message_v2_GetMessagesResponse
  },
  // Deletes a message.
  deleteMessage: {
    path: '/airchat.message.v2.MessageAPI/DeleteMessage',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.DeleteMessageRequest,
    responseType: airchat_message_v2_message_api_pb.DeleteMessageResponse,
    requestSerialize: serialize_airchat_message_v2_DeleteMessageRequest,
    requestDeserialize: deserialize_airchat_message_v2_DeleteMessageRequest,
    responseSerialize: serialize_airchat_message_v2_DeleteMessageResponse,
    responseDeserialize: deserialize_airchat_message_v2_DeleteMessageResponse
  },
  // Creates a message thread.
  createMessageThread: {
    path: '/airchat.message.v2.MessageAPI/CreateMessageThread',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.CreateMessageThreadRequest,
    responseType: airchat_message_v2_message_api_pb.CreateMessageThreadResponse,
    requestSerialize: serialize_airchat_message_v2_CreateMessageThreadRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_CreateMessageThreadRequest,
    responseSerialize: serialize_airchat_message_v2_CreateMessageThreadResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_CreateMessageThreadResponse
  },
  // Gets a message thread.
  getMessageThreads: {
    path: '/airchat.message.v2.MessageAPI/GetMessageThreads',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetMessageThreadsRequest,
    responseType: airchat_message_v2_message_api_pb.GetMessageThreadsResponse,
    requestSerialize: serialize_airchat_message_v2_GetMessageThreadsRequest,
    requestDeserialize: deserialize_airchat_message_v2_GetMessageThreadsRequest,
    responseSerialize: serialize_airchat_message_v2_GetMessageThreadsResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_GetMessageThreadsResponse
  },
  // Gets a message thread.
  getMessageThreadsByReference: {
    path: '/airchat.message.v2.MessageAPI/GetMessageThreadsByReference',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_message_v2_message_api_pb.GetMessageThreadsByReferenceRequest,
    responseType:
      airchat_message_v2_message_api_pb.GetMessageThreadsByReferenceResponse,
    requestSerialize:
      serialize_airchat_message_v2_GetMessageThreadsByReferenceRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_GetMessageThreadsByReferenceRequest,
    responseSerialize:
      serialize_airchat_message_v2_GetMessageThreadsByReferenceResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_GetMessageThreadsByReferenceResponse
  },
  // Gets a message thread.
  getMessageThreadDetailsByReference: {
    path: '/airchat.message.v2.MessageAPI/GetMessageThreadDetailsByReference',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_message_v2_message_api_pb.GetMessageThreadDetailsByReferenceRequest,
    responseType:
      airchat_message_v2_message_api_pb.GetMessageThreadDetailsByReferenceResponse,
    requestSerialize:
      serialize_airchat_message_v2_GetMessageThreadDetailsByReferenceRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_GetMessageThreadDetailsByReferenceRequest,
    responseSerialize:
      serialize_airchat_message_v2_GetMessageThreadDetailsByReferenceResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_GetMessageThreadDetailsByReferenceResponse
  },
  // Get a page of messages within an index range.
  getThreadMessagesByIndex: {
    path: '/airchat.message.v2.MessageAPI/GetThreadMessagesByIndex',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_message_v2_message_api_pb.GetThreadMessagesByIndexRequest,
    responseType:
      airchat_message_v2_message_api_pb.GetThreadMessagesByIndexResponse,
    requestSerialize:
      serialize_airchat_message_v2_GetThreadMessagesByIndexRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_GetThreadMessagesByIndexRequest,
    responseSerialize:
      serialize_airchat_message_v2_GetThreadMessagesByIndexResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_GetThreadMessagesByIndexResponse
  },
  // Get all deleted thread message indexes in a given index range.
  getThreadDeletedIndexes: {
    path: '/airchat.message.v2.MessageAPI/GetThreadDeletedIndexes',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_message_v2_message_api_pb.GetThreadDeletedIndexesRequest,
    responseType:
      airchat_message_v2_message_api_pb.GetThreadDeletedIndexesResponse,
    requestSerialize:
      serialize_airchat_message_v2_GetThreadDeletedIndexesRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_GetThreadDeletedIndexesRequest,
    responseSerialize:
      serialize_airchat_message_v2_GetThreadDeletedIndexesResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_GetThreadDeletedIndexesResponse
  },
  // Sends a message event.
  sendMessageEvent: {
    path: '/airchat.message.v2.MessageAPI/SendMessageEvent',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.SendMessageEventRequest,
    responseType: airchat_message_v2_message_api_pb.SendMessageEventResponse,
    requestSerialize: serialize_airchat_message_v2_SendMessageEventRequest,
    requestDeserialize: deserialize_airchat_message_v2_SendMessageEventRequest,
    responseSerialize: serialize_airchat_message_v2_SendMessageEventResponse,
    responseDeserialize: deserialize_airchat_message_v2_SendMessageEventResponse
  },
  // Get the event log items for a specific message.
  getMessageEventLog: {
    path: '/airchat.message.v2.MessageAPI/GetMessageEventLog',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetMessageEventLogRequest,
    responseType: airchat_message_v2_message_api_pb.GetMessageEventLogResponse,
    requestSerialize: serialize_airchat_message_v2_GetMessageEventLogRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_GetMessageEventLogRequest,
    responseSerialize: serialize_airchat_message_v2_GetMessageEventLogResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_GetMessageEventLogResponse
  },
  // Gets message analytics for the requested types.
  getMessageAnalytics: {
    path: '/airchat.message.v2.MessageAPI/GetMessageAnalytics',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetMessageAnalyticsRequest,
    responseType: airchat_message_v2_message_api_pb.GetMessageAnalyticsResponse,
    requestSerialize: serialize_airchat_message_v2_GetMessageAnalyticsRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_GetMessageAnalyticsRequest,
    responseSerialize: serialize_airchat_message_v2_GetMessageAnalyticsResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_GetMessageAnalyticsResponse
  },
  // Gets the message feed.
  getMessageFeed: {
    path: '/airchat.message.v2.MessageAPI/GetMessageFeed',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetMessageFeedRequest,
    responseType: airchat_message_v2_message_api_pb.GetMessageFeedResponse,
    requestSerialize: serialize_airchat_message_v2_GetMessageFeedRequest,
    requestDeserialize: deserialize_airchat_message_v2_GetMessageFeedRequest,
    responseSerialize: serialize_airchat_message_v2_GetMessageFeedResponse,
    responseDeserialize: deserialize_airchat_message_v2_GetMessageFeedResponse
  },
  // Gets the user feed.
  getUserFeed: {
    path: '/airchat.message.v2.MessageAPI/GetUserFeed',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetUserFeedRequest,
    responseType: airchat_message_v2_message_api_pb.GetUserFeedResponse,
    requestSerialize: serialize_airchat_message_v2_GetUserFeedRequest,
    requestDeserialize: deserialize_airchat_message_v2_GetUserFeedRequest,
    responseSerialize: serialize_airchat_message_v2_GetUserFeedResponse,
    responseDeserialize: deserialize_airchat_message_v2_GetUserFeedResponse
  },
  // Gets the highlight feed.
  getHighlightFeed: {
    path: '/airchat.message.v2.MessageAPI/GetHighlightFeed',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetHighlightFeedRequest,
    responseType: airchat_message_v2_message_api_pb.GetHighlightFeedResponse,
    requestSerialize: serialize_airchat_message_v2_GetHighlightFeedRequest,
    requestDeserialize: deserialize_airchat_message_v2_GetHighlightFeedRequest,
    responseSerialize: serialize_airchat_message_v2_GetHighlightFeedResponse,
    responseDeserialize: deserialize_airchat_message_v2_GetHighlightFeedResponse
  },
  // Gets the message feed for a given channel.
  getChannelFeed: {
    path: '/airchat.message.v2.MessageAPI/GetChannelFeed',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetChannelFeedRequest,
    responseType: airchat_message_v2_message_api_pb.GetChannelFeedResponse,
    requestSerialize: serialize_airchat_message_v2_GetChannelFeedRequest,
    requestDeserialize: deserialize_airchat_message_v2_GetChannelFeedRequest,
    responseSerialize: serialize_airchat_message_v2_GetChannelFeedResponse,
    responseDeserialize: deserialize_airchat_message_v2_GetChannelFeedResponse
  },
  // Gets the highlighted items
  getHighlights: {
    path: '/airchat.message.v2.MessageAPI/GetHighlights',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetHighlightsRequest,
    responseType: airchat_message_v2_message_api_pb.GetHighlightsResponse,
    requestSerialize: serialize_airchat_message_v2_GetHighlightsRequest,
    requestDeserialize: deserialize_airchat_message_v2_GetHighlightsRequest,
    responseSerialize: serialize_airchat_message_v2_GetHighlightsResponse,
    responseDeserialize: deserialize_airchat_message_v2_GetHighlightsResponse
  },
  // Highlights a message or thread.
  saveHighlight: {
    path: '/airchat.message.v2.MessageAPI/SaveHighlight',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.SaveHighlightRequest,
    responseType: airchat_message_v2_message_api_pb.SaveHighlightResponse,
    requestSerialize: serialize_airchat_message_v2_SaveHighlightRequest,
    requestDeserialize: deserialize_airchat_message_v2_SaveHighlightRequest,
    responseSerialize: serialize_airchat_message_v2_SaveHighlightResponse,
    responseDeserialize: deserialize_airchat_message_v2_SaveHighlightResponse
  },
  // Removes the highlighted items
  removeHighlight: {
    path: '/airchat.message.v2.MessageAPI/RemoveHighlight',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.RemoveHighlightRequest,
    responseType: airchat_message_v2_message_api_pb.RemoveHighlightResponse,
    requestSerialize: serialize_airchat_message_v2_RemoveHighlightRequest,
    requestDeserialize: deserialize_airchat_message_v2_RemoveHighlightRequest,
    responseSerialize: serialize_airchat_message_v2_RemoveHighlightResponse,
    responseDeserialize: deserialize_airchat_message_v2_RemoveHighlightResponse
  },
  // Gets the bookmarked items
  getBookmarks: {
    path: '/airchat.message.v2.MessageAPI/GetBookmarks',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetBookmarksRequest,
    responseType: airchat_message_v2_message_api_pb.GetBookmarksResponse,
    requestSerialize: serialize_airchat_message_v2_GetBookmarksRequest,
    requestDeserialize: deserialize_airchat_message_v2_GetBookmarksRequest,
    responseSerialize: serialize_airchat_message_v2_GetBookmarksResponse,
    responseDeserialize: deserialize_airchat_message_v2_GetBookmarksResponse
  },
  // Bookmarks a message or thread.
  saveBookmark: {
    path: '/airchat.message.v2.MessageAPI/SaveBookmark',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.SaveBookmarkRequest,
    responseType: airchat_message_v2_message_api_pb.SaveBookmarkResponse,
    requestSerialize: serialize_airchat_message_v2_SaveBookmarkRequest,
    requestDeserialize: deserialize_airchat_message_v2_SaveBookmarkRequest,
    responseSerialize: serialize_airchat_message_v2_SaveBookmarkResponse,
    responseDeserialize: deserialize_airchat_message_v2_SaveBookmarkResponse
  },
  // Removes the bookmarked items
  removeBookmark: {
    path: '/airchat.message.v2.MessageAPI/RemoveBookmark',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.RemoveBookmarkRequest,
    responseType: airchat_message_v2_message_api_pb.RemoveBookmarkResponse,
    requestSerialize: serialize_airchat_message_v2_RemoveBookmarkRequest,
    requestDeserialize: deserialize_airchat_message_v2_RemoveBookmarkRequest,
    responseSerialize: serialize_airchat_message_v2_RemoveBookmarkResponse,
    responseDeserialize: deserialize_airchat_message_v2_RemoveBookmarkResponse
  },
  // Updates the message with link references.
  updateMessageLinkMetadata: {
    path: '/airchat.message.v2.MessageAPI/UpdateMessageLinkMetadata',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_message_v2_message_api_pb.UpdateMessageLinkMetadataRequest,
    responseType:
      airchat_message_v2_message_api_pb.UpdateMessageLinkMetadataResponse,
    requestSerialize:
      serialize_airchat_message_v2_UpdateMessageLinkMetadataRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_UpdateMessageLinkMetadataRequest,
    responseSerialize:
      serialize_airchat_message_v2_UpdateMessageLinkMetadataResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_UpdateMessageLinkMetadataResponse
  },
  // Creates a transcription for a message using an on-device model.
  createTranscription: {
    path: '/airchat.message.v2.MessageAPI/CreateTranscription',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.CreateTranscriptionRequest,
    responseType: airchat_message_v2_message_api_pb.CreateTranscriptionResponse,
    requestSerialize: serialize_airchat_message_v2_CreateTranscriptionRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_CreateTranscriptionRequest,
    responseSerialize: serialize_airchat_message_v2_CreateTranscriptionResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_CreateTranscriptionResponse
  },
  //
  // Image Upload RPCs
  //
  //
  // Creates an upload URL and image reference id.
  createImageUpload: {
    path: '/airchat.message.v2.MessageAPI/CreateImageUpload',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.CreateImageUploadRequest,
    responseType: airchat_message_v2_message_api_pb.CreateImageUploadResponse,
    requestSerialize: serialize_airchat_message_v2_CreateImageUploadRequest,
    requestDeserialize: deserialize_airchat_message_v2_CreateImageUploadRequest,
    responseSerialize: serialize_airchat_message_v2_CreateImageUploadResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_CreateImageUploadResponse
  },
  // Completes the upload.
  completeImageUpload: {
    path: '/airchat.message.v2.MessageAPI/CompleteImageUpload',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.CompleteImageUploadRequest,
    responseType: airchat_message_v2_message_api_pb.CompleteImageUploadResponse,
    requestSerialize: serialize_airchat_message_v2_CompleteImageUploadRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_CompleteImageUploadRequest,
    responseSerialize: serialize_airchat_message_v2_CompleteImageUploadResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_CompleteImageUploadResponse
  },
  // Aborts the upload and deletes the image.
  abortImageUpload: {
    path: '/airchat.message.v2.MessageAPI/AbortImageUpload',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.AbortImageUploadRequest,
    responseType: airchat_message_v2_message_api_pb.AbortImageUploadResponse,
    requestSerialize: serialize_airchat_message_v2_AbortImageUploadRequest,
    requestDeserialize: deserialize_airchat_message_v2_AbortImageUploadRequest,
    responseSerialize: serialize_airchat_message_v2_AbortImageUploadResponse,
    responseDeserialize: deserialize_airchat_message_v2_AbortImageUploadResponse
  },
  // Updates the message with the image references.
  updateMessageImageReferences: {
    path: '/airchat.message.v2.MessageAPI/UpdateMessageImageReferences',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_message_v2_message_api_pb.UpdateMessageImageReferencesRequest,
    responseType:
      airchat_message_v2_message_api_pb.UpdateMessageImageReferencesResponse,
    requestSerialize:
      serialize_airchat_message_v2_UpdateMessageImageReferencesRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_UpdateMessageImageReferencesRequest,
    responseSerialize:
      serialize_airchat_message_v2_UpdateMessageImageReferencesResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_UpdateMessageImageReferencesResponse
  },
  //
  // Mention RPCs
  //
  //
  // Update mentioned users
  updateMessageMentions: {
    path: '/airchat.message.v2.MessageAPI/UpdateMessageMentions',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.UpdateMessageMentionsRequest,
    responseType:
      airchat_message_v2_message_api_pb.UpdateMessageMentionsResponse,
    requestSerialize: serialize_airchat_message_v2_UpdateMessageMentionsRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_UpdateMessageMentionsRequest,
    responseSerialize:
      serialize_airchat_message_v2_UpdateMessageMentionsResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_UpdateMessageMentionsResponse
  },
  // Get mention candidates
  getMentionCandidates: {
    path: '/airchat.message.v2.MessageAPI/GetMentionCandidates',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetMentionCandidatesRequest,
    responseType:
      airchat_message_v2_message_api_pb.GetMentionCandidatesResponse,
    requestSerialize: serialize_airchat_message_v2_GetMentionCandidatesRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_GetMentionCandidatesRequest,
    responseSerialize:
      serialize_airchat_message_v2_GetMentionCandidatesResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_GetMentionCandidatesResponse
  },
  //
  // Private message RPCs
  //
  //
  // Initiates a private message upload.
  createPrivateUpload: {
    path: '/airchat.message.v2.MessageAPI/CreatePrivateUpload',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.CreatePrivateUploadRequest,
    responseType: airchat_message_v2_message_api_pb.CreatePrivateUploadResponse,
    requestSerialize: serialize_airchat_message_v2_CreatePrivateUploadRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_CreatePrivateUploadRequest,
    responseSerialize: serialize_airchat_message_v2_CreatePrivateUploadResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_CreatePrivateUploadResponse
  },
  // Creates a private room.
  createPrivateRoom: {
    path: '/airchat.message.v2.MessageAPI/CreatePrivateRoom',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.CreatePrivateRoomRequest,
    responseType: airchat_message_v2_message_api_pb.CreatePrivateRoomResponse,
    requestSerialize: serialize_airchat_message_v2_CreatePrivateRoomRequest,
    requestDeserialize: deserialize_airchat_message_v2_CreatePrivateRoomRequest,
    responseSerialize: serialize_airchat_message_v2_CreatePrivateRoomResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_CreatePrivateRoomResponse
  },
  // Gets a private room.
  getPrivateRoom: {
    path: '/airchat.message.v2.MessageAPI/GetPrivateRoom',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetPrivateRoomRequest,
    responseType: airchat_message_v2_message_api_pb.GetPrivateRoomResponse,
    requestSerialize: serialize_airchat_message_v2_GetPrivateRoomRequest,
    requestDeserialize: deserialize_airchat_message_v2_GetPrivateRoomRequest,
    responseSerialize: serialize_airchat_message_v2_GetPrivateRoomResponse,
    responseDeserialize: deserialize_airchat_message_v2_GetPrivateRoomResponse
  },
  // Get the list of active private rooms where the current user is a participant.
  getPrivateRooms: {
    path: '/airchat.message.v2.MessageAPI/GetPrivateRooms',
    requestStream: false,
    responseStream: false,
    requestType: airchat_message_v2_message_api_pb.GetPrivateRoomsRequest,
    responseType: airchat_message_v2_message_api_pb.GetPrivateRoomsResponse,
    requestSerialize: serialize_airchat_message_v2_GetPrivateRoomsRequest,
    requestDeserialize: deserialize_airchat_message_v2_GetPrivateRoomsRequest,
    responseSerialize: serialize_airchat_message_v2_GetPrivateRoomsResponse,
    responseDeserialize: deserialize_airchat_message_v2_GetPrivateRoomsResponse
  },
  // Creates a private room.
  clearPrivateRoomUnreadCount: {
    path: '/airchat.message.v2.MessageAPI/ClearPrivateRoomUnreadCount',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_message_v2_message_api_pb.ClearPrivateRoomUnreadCountRequest,
    responseType:
      airchat_message_v2_message_api_pb.ClearPrivateRoomUnreadCountResponse,
    requestSerialize:
      serialize_airchat_message_v2_ClearPrivateRoomUnreadCountRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_ClearPrivateRoomUnreadCountRequest,
    responseSerialize:
      serialize_airchat_message_v2_ClearPrivateRoomUnreadCountResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_ClearPrivateRoomUnreadCountResponse
  },
  // Get a page of private room messages within an index range.
  getPrivateMessagesByIndex: {
    path: '/airchat.message.v2.MessageAPI/GetPrivateMessagesByIndex',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_message_v2_message_api_pb.GetPrivateMessagesByIndexRequest,
    responseType:
      airchat_message_v2_message_api_pb.GetPrivateMessagesByIndexResponse,
    requestSerialize:
      serialize_airchat_message_v2_GetPrivateMessagesByIndexRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_GetPrivateMessagesByIndexRequest,
    responseSerialize:
      serialize_airchat_message_v2_GetPrivateMessagesByIndexResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_GetPrivateMessagesByIndexResponse
  },
  // Get all deleted private room message indexes in a given index range.
  getPrivateRoomDeletedIndexes: {
    path: '/airchat.message.v2.MessageAPI/GetPrivateRoomDeletedIndexes',
    requestStream: false,
    responseStream: false,
    requestType:
      airchat_message_v2_message_api_pb.GetPrivateRoomDeletedIndexesRequest,
    responseType:
      airchat_message_v2_message_api_pb.GetPrivateRoomDeletedIndexesResponse,
    requestSerialize:
      serialize_airchat_message_v2_GetPrivateRoomDeletedIndexesRequest,
    requestDeserialize:
      deserialize_airchat_message_v2_GetPrivateRoomDeletedIndexesRequest,
    responseSerialize:
      serialize_airchat_message_v2_GetPrivateRoomDeletedIndexesResponse,
    responseDeserialize:
      deserialize_airchat_message_v2_GetPrivateRoomDeletedIndexesResponse
  }
});

exports.MessageAPIClient = grpc.makeGenericClientConstructor(MessageAPIService);
