// source: airchat/message/v2/message_api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = function () {
  if (this) {
    return this;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  return Function('return this')();
}.call(null);

var airchat_user_v2_user_pb = require('../../../airchat/user/v2/user_pb.js');
goog.object.extend(proto, airchat_user_v2_user_pb);
var airchat_message_v2_message_pb = require('../../../airchat/message/v2/message_pb.js');
goog.object.extend(proto, airchat_message_v2_message_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol(
  'proto.airchat.message.v2.AbortImageUploadRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.AbortImageUploadResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.message.v2.AbortUploadRequest', null, global);
goog.exportSymbol('proto.airchat.message.v2.AbortUploadResponse', null, global);
goog.exportSymbol(
  'proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CompleteImageUploadRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CompleteImageUploadResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CompleteUploadRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CompleteUploadResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CompleteUploadResponse.PayloadCase',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CreateImageUploadRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CreateImageUploadResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CreateMessageThreadRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CreateMessageThreadResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CreatePrivateRoomRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CreatePrivateRoomResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CreatePrivateUploadRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CreatePrivateUploadResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CreateTranscriptionRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.CreateTranscriptionResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.message.v2.CreateUploadRequest', null, global);
goog.exportSymbol(
  'proto.airchat.message.v2.CreateUploadResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.DeleteMessageRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.DeleteMessageResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.message.v2.GetBookmarksRequest', null, global);
goog.exportSymbol(
  'proto.airchat.message.v2.GetBookmarksResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetChannelFeedRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetChannelFeedResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetHighlightFeedRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetHighlightFeedResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetHighlightsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetHighlightsResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMentionCandidatesRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMentionCandidatesResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMessageAnalyticsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMessageAnalyticsResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMessageEventLogRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMessageEventLogResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMessageFeedRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMessageFeedResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMessageThreadsByReferenceRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMessageThreadsByReferenceResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMessageThreadsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetMessageThreadsResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.message.v2.GetMessagesRequest', null, global);
goog.exportSymbol('proto.airchat.message.v2.GetMessagesResponse', null, global);
goog.exportSymbol(
  'proto.airchat.message.v2.GetPrivateMessagesByIndexRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetPrivateMessagesByIndexResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetPrivateRoomRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetPrivateRoomRequest.IdCase',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetPrivateRoomResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetPrivateRoomsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetPrivateRoomsResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetThreadDeletedIndexesRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetThreadDeletedIndexesResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetThreadMessagesByIndexRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.GetThreadMessagesByIndexResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.message.v2.GetUserFeedRequest', null, global);
goog.exportSymbol('proto.airchat.message.v2.GetUserFeedResponse', null, global);
goog.exportSymbol(
  'proto.airchat.message.v2.ReadyUploadSegmentRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.ReadyUploadSegmentResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.RemoveBookmarkRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.RemoveBookmarkRequest.ContextCase',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.RemoveBookmarkResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.RemoveHighlightRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.RemoveHighlightRequest.ContextCase',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.RemoveHighlightResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.message.v2.SaveBookmarkRequest', null, global);
goog.exportSymbol(
  'proto.airchat.message.v2.SaveBookmarkRequest.ContextCase',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.SaveBookmarkResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.SaveHighlightRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.SaveHighlightRequest.ContextCase',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.SaveHighlightResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.SendMessageEventRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.SendMessageEventResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.UpdateMessageImageReferencesRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.UpdateMessageImageReferencesResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.UpdateMessageLinkMetadataRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.UpdateMessageLinkMetadataResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.UpdateMessageMentionsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.message.v2.UpdateMessageMentionsResponse',
  null,
  global
);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CreateUploadRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.CreateUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CreateUploadRequest.displayName =
    'proto.airchat.message.v2.CreateUploadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CreateUploadResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.CreateUploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CreateUploadResponse.displayName =
    'proto.airchat.message.v2.CreateUploadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.ReadyUploadSegmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.ReadyUploadSegmentRequest.displayName =
    'proto.airchat.message.v2.ReadyUploadSegmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.ReadyUploadSegmentResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.ReadyUploadSegmentResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.ReadyUploadSegmentResponse.displayName =
    'proto.airchat.message.v2.ReadyUploadSegmentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CompleteUploadRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.CompleteUploadRequest.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.CompleteUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CompleteUploadRequest.displayName =
    'proto.airchat.message.v2.CompleteUploadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CompleteUploadResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.message.v2.CompleteUploadResponse.oneofGroups_
  );
};
goog.inherits(proto.airchat.message.v2.CompleteUploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CompleteUploadResponse.displayName =
    'proto.airchat.message.v2.CompleteUploadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.AbortUploadRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.AbortUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.AbortUploadRequest.displayName =
    'proto.airchat.message.v2.AbortUploadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.AbortUploadResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.AbortUploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.AbortUploadResponse.displayName =
    'proto.airchat.message.v2.AbortUploadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessagesRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetMessagesRequest.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.GetMessagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessagesRequest.displayName =
    'proto.airchat.message.v2.GetMessagesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessagesResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetMessagesResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.GetMessagesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessagesResponse.displayName =
    'proto.airchat.message.v2.GetMessagesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.DeleteMessageRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.DeleteMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.DeleteMessageRequest.displayName =
    'proto.airchat.message.v2.DeleteMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.DeleteMessageResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.DeleteMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.DeleteMessageResponse.displayName =
    'proto.airchat.message.v2.DeleteMessageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CreateMessageThreadRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.CreateMessageThreadRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CreateMessageThreadRequest.displayName =
    'proto.airchat.message.v2.CreateMessageThreadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CreateMessageThreadResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.CreateMessageThreadResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CreateMessageThreadResponse.displayName =
    'proto.airchat.message.v2.CreateMessageThreadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessageThreadsRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetMessageThreadsRequest.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.GetMessageThreadsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessageThreadsRequest.displayName =
    'proto.airchat.message.v2.GetMessageThreadsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessageThreadsResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetMessageThreadsResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.GetMessageThreadsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessageThreadsResponse.displayName =
    'proto.airchat.message.v2.GetMessageThreadsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceRequest = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.GetMessageThreadsByReferenceRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.displayName =
    'proto.airchat.message.v2.GetMessageThreadsByReferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceResponse = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetMessageThreadsByReferenceResponse
      .repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.GetMessageThreadsByReferenceResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.displayName =
    'proto.airchat.message.v2.GetMessageThreadsByReferenceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.displayName =
    'proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse
      .repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.displayName =
    'proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetThreadMessagesByIndexRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.GetThreadMessagesByIndexRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetThreadMessagesByIndexRequest.displayName =
    'proto.airchat.message.v2.GetThreadMessagesByIndexRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetThreadMessagesByIndexResponse = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetThreadMessagesByIndexResponse.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.GetThreadMessagesByIndexResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetThreadMessagesByIndexResponse.displayName =
    'proto.airchat.message.v2.GetThreadMessagesByIndexResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetThreadDeletedIndexesRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.GetThreadDeletedIndexesRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetThreadDeletedIndexesRequest.displayName =
    'proto.airchat.message.v2.GetThreadDeletedIndexesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetThreadDeletedIndexesResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetThreadDeletedIndexesResponse.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.GetThreadDeletedIndexesResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetThreadDeletedIndexesResponse.displayName =
    'proto.airchat.message.v2.GetThreadDeletedIndexesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.SendMessageEventRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.SendMessageEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.SendMessageEventRequest.displayName =
    'proto.airchat.message.v2.SendMessageEventRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.SendMessageEventResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.SendMessageEventResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.SendMessageEventResponse.displayName =
    'proto.airchat.message.v2.SendMessageEventResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessageEventLogRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetMessageEventLogRequest.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.GetMessageEventLogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessageEventLogRequest.displayName =
    'proto.airchat.message.v2.GetMessageEventLogRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessageEventLogResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetMessageEventLogResponse.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.GetMessageEventLogResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessageEventLogResponse.displayName =
    'proto.airchat.message.v2.GetMessageEventLogResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessageAnalyticsRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetMessageAnalyticsRequest.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.GetMessageAnalyticsRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessageAnalyticsRequest.displayName =
    'proto.airchat.message.v2.GetMessageAnalyticsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessageAnalyticsResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetMessageAnalyticsResponse.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.GetMessageAnalyticsResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessageAnalyticsResponse.displayName =
    'proto.airchat.message.v2.GetMessageAnalyticsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessageFeedRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.GetMessageFeedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessageFeedRequest.displayName =
    'proto.airchat.message.v2.GetMessageFeedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMessageFeedResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetMessageFeedResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.GetMessageFeedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMessageFeedResponse.displayName =
    'proto.airchat.message.v2.GetMessageFeedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetUserFeedRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.GetUserFeedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetUserFeedRequest.displayName =
    'proto.airchat.message.v2.GetUserFeedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetUserFeedResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetUserFeedResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.GetUserFeedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetUserFeedResponse.displayName =
    'proto.airchat.message.v2.GetUserFeedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetHighlightFeedRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.GetHighlightFeedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetHighlightFeedRequest.displayName =
    'proto.airchat.message.v2.GetHighlightFeedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetHighlightFeedResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetHighlightFeedResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.GetHighlightFeedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetHighlightFeedResponse.displayName =
    'proto.airchat.message.v2.GetHighlightFeedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetChannelFeedRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.GetChannelFeedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetChannelFeedRequest.displayName =
    'proto.airchat.message.v2.GetChannelFeedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetChannelFeedResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetChannelFeedResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.GetChannelFeedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetChannelFeedResponse.displayName =
    'proto.airchat.message.v2.GetChannelFeedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetHighlightsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.GetHighlightsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetHighlightsRequest.displayName =
    'proto.airchat.message.v2.GetHighlightsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetHighlightsResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetHighlightsResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.GetHighlightsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetHighlightsResponse.displayName =
    'proto.airchat.message.v2.GetHighlightsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.SaveHighlightRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.message.v2.SaveHighlightRequest.oneofGroups_
  );
};
goog.inherits(proto.airchat.message.v2.SaveHighlightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.SaveHighlightRequest.displayName =
    'proto.airchat.message.v2.SaveHighlightRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.SaveHighlightResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.SaveHighlightResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.SaveHighlightResponse.displayName =
    'proto.airchat.message.v2.SaveHighlightResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.RemoveHighlightRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.message.v2.RemoveHighlightRequest.oneofGroups_
  );
};
goog.inherits(proto.airchat.message.v2.RemoveHighlightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.RemoveHighlightRequest.displayName =
    'proto.airchat.message.v2.RemoveHighlightRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.RemoveHighlightResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.RemoveHighlightResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.RemoveHighlightResponse.displayName =
    'proto.airchat.message.v2.RemoveHighlightResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetBookmarksRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.GetBookmarksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetBookmarksRequest.displayName =
    'proto.airchat.message.v2.GetBookmarksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetBookmarksResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetBookmarksResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.GetBookmarksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetBookmarksResponse.displayName =
    'proto.airchat.message.v2.GetBookmarksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.SaveBookmarkRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.message.v2.SaveBookmarkRequest.oneofGroups_
  );
};
goog.inherits(proto.airchat.message.v2.SaveBookmarkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.SaveBookmarkRequest.displayName =
    'proto.airchat.message.v2.SaveBookmarkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.SaveBookmarkResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.SaveBookmarkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.SaveBookmarkResponse.displayName =
    'proto.airchat.message.v2.SaveBookmarkResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.RemoveBookmarkRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.message.v2.RemoveBookmarkRequest.oneofGroups_
  );
};
goog.inherits(proto.airchat.message.v2.RemoveBookmarkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.RemoveBookmarkRequest.displayName =
    'proto.airchat.message.v2.RemoveBookmarkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.RemoveBookmarkResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.RemoveBookmarkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.RemoveBookmarkResponse.displayName =
    'proto.airchat.message.v2.RemoveBookmarkResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.UpdateMessageLinkMetadataRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.displayName =
    'proto.airchat.message.v2.UpdateMessageLinkMetadataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataResponse = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.UpdateMessageLinkMetadataResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.displayName =
    'proto.airchat.message.v2.UpdateMessageLinkMetadataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CreateTranscriptionRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.CreateTranscriptionRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CreateTranscriptionRequest.displayName =
    'proto.airchat.message.v2.CreateTranscriptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CreateTranscriptionResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.CreateTranscriptionResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CreateTranscriptionResponse.displayName =
    'proto.airchat.message.v2.CreateTranscriptionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CreateImageUploadRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.CreateImageUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CreateImageUploadRequest.displayName =
    'proto.airchat.message.v2.CreateImageUploadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CreateImageUploadResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.CreateImageUploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CreateImageUploadResponse.displayName =
    'proto.airchat.message.v2.CreateImageUploadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CompleteImageUploadRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.CompleteImageUploadRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CompleteImageUploadRequest.displayName =
    'proto.airchat.message.v2.CompleteImageUploadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CompleteImageUploadResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.CompleteImageUploadResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CompleteImageUploadResponse.displayName =
    'proto.airchat.message.v2.CompleteImageUploadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.AbortImageUploadRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.AbortImageUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.AbortImageUploadRequest.displayName =
    'proto.airchat.message.v2.AbortImageUploadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.AbortImageUploadResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.AbortImageUploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.AbortImageUploadResponse.displayName =
    'proto.airchat.message.v2.AbortImageUploadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.UpdateMessageImageReferencesRequest
      .repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.UpdateMessageImageReferencesRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.UpdateMessageImageReferencesRequest.displayName =
    'proto.airchat.message.v2.UpdateMessageImageReferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.UpdateMessageImageReferencesResponse = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.UpdateMessageImageReferencesResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.UpdateMessageImageReferencesResponse.displayName =
    'proto.airchat.message.v2.UpdateMessageImageReferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.UpdateMessageMentionsRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.UpdateMessageMentionsRequest.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.UpdateMessageMentionsRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.UpdateMessageMentionsRequest.displayName =
    'proto.airchat.message.v2.UpdateMessageMentionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.UpdateMessageMentionsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.UpdateMessageMentionsResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.UpdateMessageMentionsResponse.displayName =
    'proto.airchat.message.v2.UpdateMessageMentionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMentionCandidatesRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.GetMentionCandidatesRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMentionCandidatesRequest.displayName =
    'proto.airchat.message.v2.GetMentionCandidatesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetMentionCandidatesResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetMentionCandidatesResponse.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.GetMentionCandidatesResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetMentionCandidatesResponse.displayName =
    'proto.airchat.message.v2.GetMentionCandidatesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CreatePrivateUploadRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.CreatePrivateUploadRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CreatePrivateUploadRequest.displayName =
    'proto.airchat.message.v2.CreatePrivateUploadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CreatePrivateUploadResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.CreatePrivateUploadResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CreatePrivateUploadResponse.displayName =
    'proto.airchat.message.v2.CreatePrivateUploadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CreatePrivateRoomRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.CreatePrivateRoomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CreatePrivateRoomRequest.displayName =
    'proto.airchat.message.v2.CreatePrivateRoomRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.CreatePrivateRoomResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.CreatePrivateRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.CreatePrivateRoomResponse.displayName =
    'proto.airchat.message.v2.CreatePrivateRoomResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetPrivateRoomRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.message.v2.GetPrivateRoomRequest.oneofGroups_
  );
};
goog.inherits(proto.airchat.message.v2.GetPrivateRoomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetPrivateRoomRequest.displayName =
    'proto.airchat.message.v2.GetPrivateRoomRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetPrivateRoomResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.GetPrivateRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetPrivateRoomResponse.displayName =
    'proto.airchat.message.v2.GetPrivateRoomResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetPrivateRoomsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.message.v2.GetPrivateRoomsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetPrivateRoomsRequest.displayName =
    'proto.airchat.message.v2.GetPrivateRoomsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetPrivateRoomsResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetPrivateRoomsResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.message.v2.GetPrivateRoomsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetPrivateRoomsResponse.displayName =
    'proto.airchat.message.v2.GetPrivateRoomsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest.displayName =
    'proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse.displayName =
    'proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexRequest = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.GetPrivateMessagesByIndexRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.displayName =
    'proto.airchat.message.v2.GetPrivateMessagesByIndexRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexResponse = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.GetPrivateMessagesByIndexResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.displayName =
    'proto.airchat.message.v2.GetPrivateMessagesByIndexResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.displayName =
    'proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse
      .repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.displayName =
    'proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CreateUploadRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.CreateUploadRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CreateUploadRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CreateUploadRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        messageThreadId: jspb.Message.getFieldWithDefault(msg, 2, ''),
        playlistConfig:
          (f = msg.getPlaylistConfig()) &&
          airchat_message_v2_message_pb.Playlist.toObject(includeInstance, f),
        playlistHeader:
          (f = msg.getPlaylistHeader()) &&
          airchat_message_v2_message_pb.PlaylistHeader.toObject(
            includeInstance,
            f
          ),
        createdTime:
          (f = msg.getCreatedTime()) &&
          google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
        channelId: jspb.Message.getFieldWithDefault(msg, 6, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CreateUploadRequest}
 */
proto.airchat.message.v2.CreateUploadRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.CreateUploadRequest();
  return proto.airchat.message.v2.CreateUploadRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CreateUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CreateUploadRequest}
 */
proto.airchat.message.v2.CreateUploadRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setMessageThreadId(value);
          break;
        case 3:
          var value = new airchat_message_v2_message_pb.Playlist();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.Playlist.deserializeBinaryFromReader
          );
          msg.setPlaylistConfig(value);
          break;
        case 4:
          var value = new airchat_message_v2_message_pb.PlaylistHeader();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.PlaylistHeader
              .deserializeBinaryFromReader
          );
          msg.setPlaylistHeader(value);
          break;
        case 5:
          var value = new google_protobuf_timestamp_pb.Timestamp();
          reader.readMessage(
            value,
            google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader
          );
          msg.setCreatedTime(value);
          break;
        case 6:
          var value = /** @type {string} */ (reader.readString());
          msg.setChannelId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CreateUploadRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CreateUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CreateUploadRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getMessageThreadId();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getPlaylistConfig();
    if (f != null) {
      writer.writeMessage(
        3,
        f,
        airchat_message_v2_message_pb.Playlist.serializeBinaryToWriter
      );
    }
    f = message.getPlaylistHeader();
    if (f != null) {
      writer.writeMessage(
        4,
        f,
        airchat_message_v2_message_pb.PlaylistHeader.serializeBinaryToWriter
      );
    }
    f = message.getCreatedTime();
    if (f != null) {
      writer.writeMessage(
        5,
        f,
        google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
      );
    }
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(6, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreateUploadRequest} returns this
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string message_thread_id = 2;
 * @return {string}
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.getMessageThreadId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreateUploadRequest} returns this
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.setMessageThreadId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * optional Playlist playlist_config = 3;
 * @return {?proto.airchat.message.v2.Playlist}
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.getPlaylistConfig =
  function () {
    return /** @type{?proto.airchat.message.v2.Playlist} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.Playlist,
        3
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.Playlist|undefined} value
 * @return {!proto.airchat.message.v2.CreateUploadRequest} returns this
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.setPlaylistConfig =
  function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.CreateUploadRequest} returns this
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.clearPlaylistConfig =
  function () {
    return this.setPlaylistConfig(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.hasPlaylistConfig =
  function () {
    return jspb.Message.getField(this, 3) != null;
  };

/**
 * optional PlaylistHeader playlist_header = 4;
 * @return {?proto.airchat.message.v2.PlaylistHeader}
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.getPlaylistHeader =
  function () {
    return /** @type{?proto.airchat.message.v2.PlaylistHeader} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.PlaylistHeader,
        4
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.PlaylistHeader|undefined} value
 * @return {!proto.airchat.message.v2.CreateUploadRequest} returns this
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.setPlaylistHeader =
  function (value) {
    return jspb.Message.setWrapperField(this, 4, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.CreateUploadRequest} returns this
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.clearPlaylistHeader =
  function () {
    return this.setPlaylistHeader(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.hasPlaylistHeader =
  function () {
    return jspb.Message.getField(this, 4) != null;
  };

/**
 * optional google.protobuf.Timestamp created_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.getCreatedTime =
  function () {
    return /** @type{?proto.google.protobuf.Timestamp} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_timestamp_pb.Timestamp,
        5
      )
    );
  };

/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.airchat.message.v2.CreateUploadRequest} returns this
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.setCreatedTime =
  function (value) {
    return jspb.Message.setWrapperField(this, 5, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.CreateUploadRequest} returns this
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.clearCreatedTime =
  function () {
    return this.setCreatedTime(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.hasCreatedTime =
  function () {
    return jspb.Message.getField(this, 5) != null;
  };

/**
 * optional string channel_id = 6;
 * @return {string}
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 6, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreateUploadRequest} returns this
 */
proto.airchat.message.v2.CreateUploadRequest.prototype.setChannelId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CreateUploadResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.CreateUploadResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CreateUploadResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CreateUploadResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CreateUploadResponse}
 */
proto.airchat.message.v2.CreateUploadResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.CreateUploadResponse();
  return proto.airchat.message.v2.CreateUploadResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CreateUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CreateUploadResponse}
 */
proto.airchat.message.v2.CreateUploadResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CreateUploadResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CreateUploadResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CreateUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CreateUploadResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.ReadyUploadSegmentRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.ReadyUploadSegmentRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.ReadyUploadSegmentRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.ReadyUploadSegmentRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        duration: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
        segmentIndex: jspb.Message.getFieldWithDefault(msg, 3, 0),
        isMessagePrivate: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.ReadyUploadSegmentRequest}
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.ReadyUploadSegmentRequest();
    return proto.airchat.message.v2.ReadyUploadSegmentRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.ReadyUploadSegmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.ReadyUploadSegmentRequest}
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {number} */ (reader.readDouble());
          msg.setDuration(value);
          break;
        case 3:
          var value = /** @type {number} */ (reader.readInt32());
          msg.setSegmentIndex(value);
          break;
        case 4:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsMessagePrivate(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.ReadyUploadSegmentRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.ReadyUploadSegmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getDuration();
    if (f !== 0.0) {
      writer.writeDouble(2, f);
    }
    f = message.getSegmentIndex();
    if (f !== 0) {
      writer.writeInt32(3, f);
    }
    f = message.getIsMessagePrivate();
    if (f) {
      writer.writeBool(4, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.ReadyUploadSegmentRequest} returns this
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional double duration = 2;
 * @return {number}
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest.prototype.getDuration =
  function () {
    return /** @type {number} */ (
      jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0)
    );
  };

/**
 * @param {number} value
 * @return {!proto.airchat.message.v2.ReadyUploadSegmentRequest} returns this
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest.prototype.setDuration =
  function (value) {
    return jspb.Message.setProto3FloatField(this, 2, value);
  };

/**
 * optional int32 segment_index = 3;
 * @return {number}
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest.prototype.getSegmentIndex =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
  };

/**
 * @param {number} value
 * @return {!proto.airchat.message.v2.ReadyUploadSegmentRequest} returns this
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest.prototype.setSegmentIndex =
  function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
  };

/**
 * optional bool is_message_private = 4;
 * @return {boolean}
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest.prototype.getIsMessagePrivate =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 4, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.ReadyUploadSegmentRequest} returns this
 */
proto.airchat.message.v2.ReadyUploadSegmentRequest.prototype.setIsMessagePrivate =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 4, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.ReadyUploadSegmentResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.ReadyUploadSegmentResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.ReadyUploadSegmentResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.ReadyUploadSegmentResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        index: jspb.Message.getFieldWithDefault(msg, 1, 0),
        uploadUrl: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.ReadyUploadSegmentResponse}
 */
proto.airchat.message.v2.ReadyUploadSegmentResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.ReadyUploadSegmentResponse();
    return proto.airchat.message.v2.ReadyUploadSegmentResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.ReadyUploadSegmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.ReadyUploadSegmentResponse}
 */
proto.airchat.message.v2.ReadyUploadSegmentResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {number} */ (reader.readInt32());
          msg.setIndex(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setUploadUrl(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.ReadyUploadSegmentResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.ReadyUploadSegmentResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.ReadyUploadSegmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.ReadyUploadSegmentResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getIndex();
    if (f !== 0) {
      writer.writeInt32(1, f);
    }
    f = message.getUploadUrl();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * optional int32 index = 1;
 * @return {number}
 */
proto.airchat.message.v2.ReadyUploadSegmentResponse.prototype.getIndex =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
  };

/**
 * @param {number} value
 * @return {!proto.airchat.message.v2.ReadyUploadSegmentResponse} returns this
 */
proto.airchat.message.v2.ReadyUploadSegmentResponse.prototype.setIndex =
  function (value) {
    return jspb.Message.setProto3IntField(this, 1, value);
  };

/**
 * optional string upload_url = 2;
 * @return {string}
 */
proto.airchat.message.v2.ReadyUploadSegmentResponse.prototype.getUploadUrl =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.ReadyUploadSegmentResponse} returns this
 */
proto.airchat.message.v2.ReadyUploadSegmentResponse.prototype.setUploadUrl =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.CompleteUploadRequest.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CompleteUploadRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.CompleteUploadRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CompleteUploadRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CompleteUploadRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        numSegments: jspb.Message.getFieldWithDefault(msg, 2, 0),
        mentionedUserIdsList:
          (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
        isMessagePrivate: jspb.Message.getBooleanFieldWithDefault(
          msg,
          4,
          false
        ),
        thumbnailImage: msg.getThumbnailImage_asB64()
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CompleteUploadRequest}
 */
proto.airchat.message.v2.CompleteUploadRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.CompleteUploadRequest();
  return proto.airchat.message.v2.CompleteUploadRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CompleteUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CompleteUploadRequest}
 */
proto.airchat.message.v2.CompleteUploadRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {number} */ (reader.readInt32());
          msg.setNumSegments(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.addMentionedUserIds(value);
          break;
        case 4:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsMessagePrivate(value);
          break;
        case 5:
          var value = /** @type {!Uint8Array} */ (reader.readBytes());
          msg.setThumbnailImage(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CompleteUploadRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CompleteUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CompleteUploadRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getNumSegments();
    if (f !== 0) {
      writer.writeInt32(2, f);
    }
    f = message.getMentionedUserIdsList();
    if (f.length > 0) {
      writer.writeRepeatedString(3, f);
    }
    f = message.getIsMessagePrivate();
    if (f) {
      writer.writeBool(4, f);
    }
    f = message.getThumbnailImage_asU8();
    if (f.length > 0) {
      writer.writeBytes(5, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CompleteUploadRequest} returns this
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional int32 num_segments = 2;
 * @return {number}
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.getNumSegments =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
  };

/**
 * @param {number} value
 * @return {!proto.airchat.message.v2.CompleteUploadRequest} returns this
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.setNumSegments =
  function (value) {
    return jspb.Message.setProto3IntField(this, 2, value);
  };

/**
 * repeated string mentioned_user_ids = 3;
 * @return {!Array<string>}
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.getMentionedUserIdsList =
  function () {
    return /** @type {!Array<string>} */ (
      jspb.Message.getRepeatedField(this, 3)
    );
  };

/**
 * @param {!Array<string>} value
 * @return {!proto.airchat.message.v2.CompleteUploadRequest} returns this
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.setMentionedUserIdsList =
  function (value) {
    return jspb.Message.setField(this, 3, value || []);
  };

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.CompleteUploadRequest} returns this
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.addMentionedUserIds =
  function (value, opt_index) {
    return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.CompleteUploadRequest} returns this
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.clearMentionedUserIdsList =
  function () {
    return this.setMentionedUserIdsList([]);
  };

/**
 * optional bool is_message_private = 4;
 * @return {boolean}
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.getIsMessagePrivate =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 4, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.CompleteUploadRequest} returns this
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.setIsMessagePrivate =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 4, value);
  };

/**
 * optional bytes thumbnail_image = 5;
 * @return {!(string|Uint8Array)}
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.getThumbnailImage =
  function () {
    return /** @type {!(string|Uint8Array)} */ (
      jspb.Message.getFieldWithDefault(this, 5, '')
    );
  };

/**
 * optional bytes thumbnail_image = 5;
 * This is a type-conversion wrapper around `getThumbnailImage()`
 * @return {string}
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.getThumbnailImage_asB64 =
  function () {
    return /** @type {string} */ (
      jspb.Message.bytesAsB64(this.getThumbnailImage())
    );
  };

/**
 * optional bytes thumbnail_image = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getThumbnailImage()`
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.getThumbnailImage_asU8 =
  function () {
    return /** @type {!Uint8Array} */ (
      jspb.Message.bytesAsU8(this.getThumbnailImage())
    );
  };

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.airchat.message.v2.CompleteUploadRequest} returns this
 */
proto.airchat.message.v2.CompleteUploadRequest.prototype.setThumbnailImage =
  function (value) {
    return jspb.Message.setProto3BytesField(this, 5, value);
  };

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.airchat.message.v2.CompleteUploadResponse.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.airchat.message.v2.CompleteUploadResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  MESSAGE: 1,
  SEGMENTS: 2
};

/**
 * @return {proto.airchat.message.v2.CompleteUploadResponse.PayloadCase}
 */
proto.airchat.message.v2.CompleteUploadResponse.prototype.getPayloadCase =
  function () {
    return /** @type {proto.airchat.message.v2.CompleteUploadResponse.PayloadCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.message.v2.CompleteUploadResponse.oneofGroups_[0]
      )
    );
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CompleteUploadResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CompleteUploadResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CompleteUploadResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CompleteUploadResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        message:
          (f = msg.getMessage()) &&
          airchat_message_v2_message_pb.Message.toObject(includeInstance, f),
        segments:
          (f = msg.getSegments()) &&
          airchat_message_v2_message_pb.Segments.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CompleteUploadResponse}
 */
proto.airchat.message.v2.CompleteUploadResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.CompleteUploadResponse();
  return proto.airchat.message.v2.CompleteUploadResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CompleteUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CompleteUploadResponse}
 */
proto.airchat.message.v2.CompleteUploadResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.Message();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.Message.deserializeBinaryFromReader
          );
          msg.setMessage(value);
          break;
        case 2:
          var value = new airchat_message_v2_message_pb.Segments();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.Segments.deserializeBinaryFromReader
          );
          msg.setSegments(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CompleteUploadResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CompleteUploadResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CompleteUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CompleteUploadResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessage();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_message_v2_message_pb.Message.serializeBinaryToWriter
      );
    }
    f = message.getSegments();
    if (f != null) {
      writer.writeMessage(
        2,
        f,
        airchat_message_v2_message_pb.Segments.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Message message = 1;
 * @return {?proto.airchat.message.v2.Message}
 */
proto.airchat.message.v2.CompleteUploadResponse.prototype.getMessage =
  function () {
    return /** @type{?proto.airchat.message.v2.Message} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.Message,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.Message|undefined} value
 * @return {!proto.airchat.message.v2.CompleteUploadResponse} returns this
 */
proto.airchat.message.v2.CompleteUploadResponse.prototype.setMessage =
  function (value) {
    return jspb.Message.setOneofWrapperField(
      this,
      1,
      proto.airchat.message.v2.CompleteUploadResponse.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.CompleteUploadResponse} returns this
 */
proto.airchat.message.v2.CompleteUploadResponse.prototype.clearMessage =
  function () {
    return this.setMessage(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.CompleteUploadResponse.prototype.hasMessage =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * optional Segments segments = 2;
 * @return {?proto.airchat.message.v2.Segments}
 */
proto.airchat.message.v2.CompleteUploadResponse.prototype.getSegments =
  function () {
    return /** @type{?proto.airchat.message.v2.Segments} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.Segments,
        2
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.Segments|undefined} value
 * @return {!proto.airchat.message.v2.CompleteUploadResponse} returns this
 */
proto.airchat.message.v2.CompleteUploadResponse.prototype.setSegments =
  function (value) {
    return jspb.Message.setOneofWrapperField(
      this,
      2,
      proto.airchat.message.v2.CompleteUploadResponse.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.CompleteUploadResponse} returns this
 */
proto.airchat.message.v2.CompleteUploadResponse.prototype.clearSegments =
  function () {
    return this.setSegments(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.CompleteUploadResponse.prototype.hasSegments =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.AbortUploadRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.AbortUploadRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.AbortUploadRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.AbortUploadRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        isMessagePrivate: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.AbortUploadRequest}
 */
proto.airchat.message.v2.AbortUploadRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.AbortUploadRequest();
  return proto.airchat.message.v2.AbortUploadRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.AbortUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.AbortUploadRequest}
 */
proto.airchat.message.v2.AbortUploadRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsMessagePrivate(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.AbortUploadRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.AbortUploadRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.AbortUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.AbortUploadRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getRecordingId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getIsMessagePrivate();
  if (f) {
    writer.writeBool(2, f);
  }
};

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.AbortUploadRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.AbortUploadRequest} returns this
 */
proto.airchat.message.v2.AbortUploadRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional bool is_message_private = 2;
 * @return {boolean}
 */
proto.airchat.message.v2.AbortUploadRequest.prototype.getIsMessagePrivate =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 2, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.AbortUploadRequest} returns this
 */
proto.airchat.message.v2.AbortUploadRequest.prototype.setIsMessagePrivate =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 2, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.AbortUploadResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.AbortUploadResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.AbortUploadResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.AbortUploadResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.AbortUploadResponse}
 */
proto.airchat.message.v2.AbortUploadResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.AbortUploadResponse();
  return proto.airchat.message.v2.AbortUploadResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.AbortUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.AbortUploadResponse}
 */
proto.airchat.message.v2.AbortUploadResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.AbortUploadResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.AbortUploadResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.AbortUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.AbortUploadResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetMessagesRequest.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessagesRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.GetMessagesRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessagesRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessagesRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingIdList:
          (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessagesRequest}
 */
proto.airchat.message.v2.GetMessagesRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetMessagesRequest();
  return proto.airchat.message.v2.GetMessagesRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessagesRequest}
 */
proto.airchat.message.v2.GetMessagesRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.addRecordingId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessagesRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessagesRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessagesRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getRecordingIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(1, f);
  }
};

/**
 * repeated string recording_id = 1;
 * @return {!Array<string>}
 */
proto.airchat.message.v2.GetMessagesRequest.prototype.getRecordingIdList =
  function () {
    return /** @type {!Array<string>} */ (
      jspb.Message.getRepeatedField(this, 1)
    );
  };

/**
 * @param {!Array<string>} value
 * @return {!proto.airchat.message.v2.GetMessagesRequest} returns this
 */
proto.airchat.message.v2.GetMessagesRequest.prototype.setRecordingIdList =
  function (value) {
    return jspb.Message.setField(this, 1, value || []);
  };

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.GetMessagesRequest} returns this
 */
proto.airchat.message.v2.GetMessagesRequest.prototype.addRecordingId =
  function (value, opt_index) {
    return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMessagesRequest} returns this
 */
proto.airchat.message.v2.GetMessagesRequest.prototype.clearRecordingIdList =
  function () {
    return this.setRecordingIdList([]);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetMessagesResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessagesResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.GetMessagesResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessagesResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessagesResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        messageList: jspb.Message.toObjectList(
          msg.getMessageList(),
          airchat_message_v2_message_pb.Message.toObject,
          includeInstance
        )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessagesResponse}
 */
proto.airchat.message.v2.GetMessagesResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetMessagesResponse();
  return proto.airchat.message.v2.GetMessagesResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessagesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessagesResponse}
 */
proto.airchat.message.v2.GetMessagesResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.Message();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.Message.deserializeBinaryFromReader
          );
          msg.addMessage(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessagesResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessagesResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessagesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessagesResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.Message.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated Message message = 1;
 * @return {!Array<!proto.airchat.message.v2.Message>}
 */
proto.airchat.message.v2.GetMessagesResponse.prototype.getMessageList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.Message>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.Message,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.Message>} value
 * @return {!proto.airchat.message.v2.GetMessagesResponse} returns this
 */
proto.airchat.message.v2.GetMessagesResponse.prototype.setMessageList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.Message}
 */
proto.airchat.message.v2.GetMessagesResponse.prototype.addMessage = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.airchat.message.v2.Message,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMessagesResponse} returns this
 */
proto.airchat.message.v2.GetMessagesResponse.prototype.clearMessageList =
  function () {
    return this.setMessageList([]);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.DeleteMessageRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.DeleteMessageRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.DeleteMessageRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.DeleteMessageRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        isMessagePrivate: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.DeleteMessageRequest}
 */
proto.airchat.message.v2.DeleteMessageRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.DeleteMessageRequest();
  return proto.airchat.message.v2.DeleteMessageRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.DeleteMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.DeleteMessageRequest}
 */
proto.airchat.message.v2.DeleteMessageRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsMessagePrivate(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.DeleteMessageRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.DeleteMessageRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.DeleteMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.DeleteMessageRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getIsMessagePrivate();
    if (f) {
      writer.writeBool(2, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.DeleteMessageRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.DeleteMessageRequest} returns this
 */
proto.airchat.message.v2.DeleteMessageRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional bool is_message_private = 2;
 * @return {boolean}
 */
proto.airchat.message.v2.DeleteMessageRequest.prototype.getIsMessagePrivate =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 2, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.DeleteMessageRequest} returns this
 */
proto.airchat.message.v2.DeleteMessageRequest.prototype.setIsMessagePrivate =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 2, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.DeleteMessageResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.DeleteMessageResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.DeleteMessageResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.DeleteMessageResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.DeleteMessageResponse}
 */
proto.airchat.message.v2.DeleteMessageResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.DeleteMessageResponse();
  return proto.airchat.message.v2.DeleteMessageResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.DeleteMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.DeleteMessageResponse}
 */
proto.airchat.message.v2.DeleteMessageResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.DeleteMessageResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.DeleteMessageResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.DeleteMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.DeleteMessageResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CreateMessageThreadRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CreateMessageThreadRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CreateMessageThreadRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CreateMessageThreadRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        referenceRecordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        messageThreadId: jspb.Message.getFieldWithDefault(msg, 2, ''),
        participantOnlyVisibility: jspb.Message.getBooleanFieldWithDefault(
          msg,
          3,
          false
        )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CreateMessageThreadRequest}
 */
proto.airchat.message.v2.CreateMessageThreadRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.CreateMessageThreadRequest();
    return proto.airchat.message.v2.CreateMessageThreadRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CreateMessageThreadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CreateMessageThreadRequest}
 */
proto.airchat.message.v2.CreateMessageThreadRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setReferenceRecordingId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setMessageThreadId(value);
          break;
        case 3:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setParticipantOnlyVisibility(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CreateMessageThreadRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CreateMessageThreadRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CreateMessageThreadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CreateMessageThreadRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getReferenceRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getMessageThreadId();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getParticipantOnlyVisibility();
    if (f) {
      writer.writeBool(3, f);
    }
  };

/**
 * optional string reference_recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.CreateMessageThreadRequest.prototype.getReferenceRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreateMessageThreadRequest} returns this
 */
proto.airchat.message.v2.CreateMessageThreadRequest.prototype.setReferenceRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string message_thread_id = 2;
 * @return {string}
 */
proto.airchat.message.v2.CreateMessageThreadRequest.prototype.getMessageThreadId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreateMessageThreadRequest} returns this
 */
proto.airchat.message.v2.CreateMessageThreadRequest.prototype.setMessageThreadId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * optional bool participant_only_visibility = 3;
 * @return {boolean}
 */
proto.airchat.message.v2.CreateMessageThreadRequest.prototype.getParticipantOnlyVisibility =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 3, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.CreateMessageThreadRequest} returns this
 */
proto.airchat.message.v2.CreateMessageThreadRequest.prototype.setParticipantOnlyVisibility =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 3, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CreateMessageThreadResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CreateMessageThreadResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CreateMessageThreadResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CreateMessageThreadResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        messageThread:
          (f = msg.getMessageThread()) &&
          airchat_message_v2_message_pb.MessageThread.toObject(
            includeInstance,
            f
          )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CreateMessageThreadResponse}
 */
proto.airchat.message.v2.CreateMessageThreadResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.CreateMessageThreadResponse();
    return proto.airchat.message.v2.CreateMessageThreadResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CreateMessageThreadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CreateMessageThreadResponse}
 */
proto.airchat.message.v2.CreateMessageThreadResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageThread();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageThread
              .deserializeBinaryFromReader
          );
          msg.setMessageThread(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CreateMessageThreadResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CreateMessageThreadResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CreateMessageThreadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CreateMessageThreadResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageThread();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageThread.serializeBinaryToWriter
      );
    }
  };

/**
 * optional MessageThread message_thread = 1;
 * @return {?proto.airchat.message.v2.MessageThread}
 */
proto.airchat.message.v2.CreateMessageThreadResponse.prototype.getMessageThread =
  function () {
    return /** @type{?proto.airchat.message.v2.MessageThread} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.MessageThread,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.MessageThread|undefined} value
 * @return {!proto.airchat.message.v2.CreateMessageThreadResponse} returns this
 */
proto.airchat.message.v2.CreateMessageThreadResponse.prototype.setMessageThread =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.CreateMessageThreadResponse} returns this
 */
proto.airchat.message.v2.CreateMessageThreadResponse.prototype.clearMessageThread =
  function () {
    return this.setMessageThread(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.CreateMessageThreadResponse.prototype.hasMessageThread =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetMessageThreadsRequest.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessageThreadsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMessageThreadsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessageThreadsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessageThreadsRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        messageThreadIdList:
          (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessageThreadsRequest}
 */
proto.airchat.message.v2.GetMessageThreadsRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetMessageThreadsRequest();
  return proto.airchat.message.v2.GetMessageThreadsRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessageThreadsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessageThreadsRequest}
 */
proto.airchat.message.v2.GetMessageThreadsRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.addMessageThreadId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessageThreadsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessageThreadsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessageThreadsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessageThreadsRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageThreadIdList();
    if (f.length > 0) {
      writer.writeRepeatedString(1, f);
    }
  };

/**
 * repeated string message_thread_id = 1;
 * @return {!Array<string>}
 */
proto.airchat.message.v2.GetMessageThreadsRequest.prototype.getMessageThreadIdList =
  function () {
    return /** @type {!Array<string>} */ (
      jspb.Message.getRepeatedField(this, 1)
    );
  };

/**
 * @param {!Array<string>} value
 * @return {!proto.airchat.message.v2.GetMessageThreadsRequest} returns this
 */
proto.airchat.message.v2.GetMessageThreadsRequest.prototype.setMessageThreadIdList =
  function (value) {
    return jspb.Message.setField(this, 1, value || []);
  };

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.GetMessageThreadsRequest} returns this
 */
proto.airchat.message.v2.GetMessageThreadsRequest.prototype.addMessageThreadId =
  function (value, opt_index) {
    return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMessageThreadsRequest} returns this
 */
proto.airchat.message.v2.GetMessageThreadsRequest.prototype.clearMessageThreadIdList =
  function () {
    return this.setMessageThreadIdList([]);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetMessageThreadsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessageThreadsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMessageThreadsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessageThreadsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessageThreadsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        messageThreadList: jspb.Message.toObjectList(
          msg.getMessageThreadList(),
          airchat_message_v2_message_pb.MessageThread.toObject,
          includeInstance
        )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessageThreadsResponse}
 */
proto.airchat.message.v2.GetMessageThreadsResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetMessageThreadsResponse();
    return proto.airchat.message.v2.GetMessageThreadsResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessageThreadsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessageThreadsResponse}
 */
proto.airchat.message.v2.GetMessageThreadsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageThread();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageThread
              .deserializeBinaryFromReader
          );
          msg.addMessageThread(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessageThreadsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessageThreadsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessageThreadsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessageThreadsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageThreadList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageThread.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated MessageThread message_thread = 1;
 * @return {!Array<!proto.airchat.message.v2.MessageThread>}
 */
proto.airchat.message.v2.GetMessageThreadsResponse.prototype.getMessageThreadList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MessageThread>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MessageThread,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageThread>} value
 * @return {!proto.airchat.message.v2.GetMessageThreadsResponse} returns this
 */
proto.airchat.message.v2.GetMessageThreadsResponse.prototype.setMessageThreadList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.MessageThread=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MessageThread}
 */
proto.airchat.message.v2.GetMessageThreadsResponse.prototype.addMessageThread =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.message.v2.MessageThread,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMessageThreadsResponse} returns this
 */
proto.airchat.message.v2.GetMessageThreadsResponse.prototype.clearMessageThreadList =
  function () {
    return this.setMessageThreadList([]);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessageThreadsByReferenceRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          referenceRecordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
          pageKey: jspb.Message.getFieldWithDefault(msg, 2, '')
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessageThreadsByReferenceRequest}
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.message.v2.GetMessageThreadsByReferenceRequest();
    return proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessageThreadsByReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessageThreadsByReferenceRequest}
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setReferenceRecordingId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessageThreadsByReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getReferenceRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string reference_recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.prototype.getReferenceRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetMessageThreadsByReferenceRequest} returns this
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.prototype.setReferenceRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetMessageThreadsByReferenceRequest} returns this
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceRequest.prototype.setPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.repeatedFields_ =
  [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessageThreadsByReferenceResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          messageThreadList: jspb.Message.toObjectList(
            msg.getMessageThreadList(),
            airchat_message_v2_message_pb.MessageThread.toObject,
            includeInstance
          ),
          nextPageKey: jspb.Message.getFieldWithDefault(msg, 2, '')
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessageThreadsByReferenceResponse}
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.message.v2.GetMessageThreadsByReferenceResponse();
    return proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessageThreadsByReferenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessageThreadsByReferenceResponse}
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageThread();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageThread
              .deserializeBinaryFromReader
          );
          msg.addMessageThread(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setNextPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessageThreadsByReferenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageThreadList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageThread.serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated MessageThread message_thread = 1;
 * @return {!Array<!proto.airchat.message.v2.MessageThread>}
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.prototype.getMessageThreadList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MessageThread>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MessageThread,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageThread>} value
 * @return {!proto.airchat.message.v2.GetMessageThreadsByReferenceResponse} returns this
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.prototype.setMessageThreadList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.MessageThread=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MessageThread}
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.prototype.addMessageThread =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.message.v2.MessageThread,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMessageThreadsByReferenceResponse} returns this
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.prototype.clearMessageThreadList =
  function () {
    return this.setMessageThreadList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetMessageThreadsByReferenceResponse} returns this
 */
proto.airchat.message.v2.GetMessageThreadsByReferenceResponse.prototype.setNextPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          referenceRecordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
          pageKey: jspb.Message.getFieldWithDefault(msg, 2, ''),
          includeAll: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest}
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest();
    return proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest}
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setReferenceRecordingId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setPageKey(value);
          break;
        case 3:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIncludeAll(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getReferenceRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getIncludeAll();
    if (f) {
      writer.writeBool(3, f);
    }
  };

/**
 * optional string reference_recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.prototype.getReferenceRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest} returns this
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.prototype.setReferenceRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest} returns this
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.prototype.setPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * optional bool include_all = 3;
 * @return {boolean}
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.prototype.getIncludeAll =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 3, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest} returns this
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceRequest.prototype.setIncludeAll =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 3, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.repeatedFields_ =
  [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          messageThreadDetailsList: jspb.Message.toObjectList(
            msg.getMessageThreadDetailsList(),
            airchat_message_v2_message_pb.MessageThreadDetails.toObject,
            includeInstance
          ),
          nextPageKey: jspb.Message.getFieldWithDefault(msg, 2, '')
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse}
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse();
    return proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse}
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageThreadDetails();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageThreadDetails
              .deserializeBinaryFromReader
          );
          msg.addMessageThreadDetails(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setNextPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageThreadDetailsList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageThreadDetails
          .serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated MessageThreadDetails message_thread_details = 1;
 * @return {!Array<!proto.airchat.message.v2.MessageThreadDetails>}
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.prototype.getMessageThreadDetailsList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MessageThreadDetails>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MessageThreadDetails,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageThreadDetails>} value
 * @return {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse} returns this
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.prototype.setMessageThreadDetailsList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.MessageThreadDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MessageThreadDetails}
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.prototype.addMessageThreadDetails =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.message.v2.MessageThreadDetails,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse} returns this
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.prototype.clearMessageThreadDetailsList =
  function () {
    return this.setMessageThreadDetailsList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse} returns this
 */
proto.airchat.message.v2.GetMessageThreadDetailsByReferenceResponse.prototype.setNextPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetThreadMessagesByIndexRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetThreadMessagesByIndexRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetThreadMessagesByIndexRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetThreadMessagesByIndexRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        messageThreadId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        startIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
        endIndex: jspb.Message.getFieldWithDefault(msg, 3, 0)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetThreadMessagesByIndexRequest}
 */
proto.airchat.message.v2.GetThreadMessagesByIndexRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetThreadMessagesByIndexRequest();
    return proto.airchat.message.v2.GetThreadMessagesByIndexRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetThreadMessagesByIndexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetThreadMessagesByIndexRequest}
 */
proto.airchat.message.v2.GetThreadMessagesByIndexRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setMessageThreadId(value);
          break;
        case 2:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setStartIndex(value);
          break;
        case 3:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setEndIndex(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetThreadMessagesByIndexRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetThreadMessagesByIndexRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetThreadMessagesByIndexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetThreadMessagesByIndexRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageThreadId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getStartIndex();
    if (f !== 0) {
      writer.writeInt64(2, f);
    }
    f = message.getEndIndex();
    if (f !== 0) {
      writer.writeInt64(3, f);
    }
  };

/**
 * optional string message_thread_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetThreadMessagesByIndexRequest.prototype.getMessageThreadId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetThreadMessagesByIndexRequest} returns this
 */
proto.airchat.message.v2.GetThreadMessagesByIndexRequest.prototype.setMessageThreadId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional int64 start_index = 2;
 * @return {number}
 */
proto.airchat.message.v2.GetThreadMessagesByIndexRequest.prototype.getStartIndex =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
  };

/**
 * @param {number} value
 * @return {!proto.airchat.message.v2.GetThreadMessagesByIndexRequest} returns this
 */
proto.airchat.message.v2.GetThreadMessagesByIndexRequest.prototype.setStartIndex =
  function (value) {
    return jspb.Message.setProto3IntField(this, 2, value);
  };

/**
 * optional int64 end_index = 3;
 * @return {number}
 */
proto.airchat.message.v2.GetThreadMessagesByIndexRequest.prototype.getEndIndex =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
  };

/**
 * @param {number} value
 * @return {!proto.airchat.message.v2.GetThreadMessagesByIndexRequest} returns this
 */
proto.airchat.message.v2.GetThreadMessagesByIndexRequest.prototype.setEndIndex =
  function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetThreadMessagesByIndexResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetThreadMessagesByIndexResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetThreadMessagesByIndexResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetThreadMessagesByIndexResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetThreadMessagesByIndexResponse.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          messageList: jspb.Message.toObjectList(
            msg.getMessageList(),
            airchat_message_v2_message_pb.Message.toObject,
            includeInstance
          )
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetThreadMessagesByIndexResponse}
 */
proto.airchat.message.v2.GetThreadMessagesByIndexResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetThreadMessagesByIndexResponse();
    return proto.airchat.message.v2.GetThreadMessagesByIndexResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetThreadMessagesByIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetThreadMessagesByIndexResponse}
 */
proto.airchat.message.v2.GetThreadMessagesByIndexResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.Message();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.Message.deserializeBinaryFromReader
          );
          msg.addMessage(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetThreadMessagesByIndexResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetThreadMessagesByIndexResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetThreadMessagesByIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetThreadMessagesByIndexResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.Message.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated Message message = 1;
 * @return {!Array<!proto.airchat.message.v2.Message>}
 */
proto.airchat.message.v2.GetThreadMessagesByIndexResponse.prototype.getMessageList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.Message>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.Message,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.Message>} value
 * @return {!proto.airchat.message.v2.GetThreadMessagesByIndexResponse} returns this
 */
proto.airchat.message.v2.GetThreadMessagesByIndexResponse.prototype.setMessageList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.Message}
 */
proto.airchat.message.v2.GetThreadMessagesByIndexResponse.prototype.addMessage =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.message.v2.Message,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetThreadMessagesByIndexResponse} returns this
 */
proto.airchat.message.v2.GetThreadMessagesByIndexResponse.prototype.clearMessageList =
  function () {
    return this.setMessageList([]);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetThreadDeletedIndexesRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetThreadDeletedIndexesRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetThreadDeletedIndexesRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetThreadDeletedIndexesRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        messageThreadId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        startIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
        endIndex: jspb.Message.getFieldWithDefault(msg, 3, 0)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetThreadDeletedIndexesRequest}
 */
proto.airchat.message.v2.GetThreadDeletedIndexesRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetThreadDeletedIndexesRequest();
    return proto.airchat.message.v2.GetThreadDeletedIndexesRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetThreadDeletedIndexesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetThreadDeletedIndexesRequest}
 */
proto.airchat.message.v2.GetThreadDeletedIndexesRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setMessageThreadId(value);
          break;
        case 2:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setStartIndex(value);
          break;
        case 3:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setEndIndex(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetThreadDeletedIndexesRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetThreadDeletedIndexesRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetThreadDeletedIndexesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetThreadDeletedIndexesRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageThreadId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getStartIndex();
    if (f !== 0) {
      writer.writeInt64(2, f);
    }
    f = message.getEndIndex();
    if (f !== 0) {
      writer.writeInt64(3, f);
    }
  };

/**
 * optional string message_thread_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetThreadDeletedIndexesRequest.prototype.getMessageThreadId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetThreadDeletedIndexesRequest} returns this
 */
proto.airchat.message.v2.GetThreadDeletedIndexesRequest.prototype.setMessageThreadId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional int64 start_index = 2;
 * @return {number}
 */
proto.airchat.message.v2.GetThreadDeletedIndexesRequest.prototype.getStartIndex =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
  };

/**
 * @param {number} value
 * @return {!proto.airchat.message.v2.GetThreadDeletedIndexesRequest} returns this
 */
proto.airchat.message.v2.GetThreadDeletedIndexesRequest.prototype.setStartIndex =
  function (value) {
    return jspb.Message.setProto3IntField(this, 2, value);
  };

/**
 * optional int64 end_index = 3;
 * @return {number}
 */
proto.airchat.message.v2.GetThreadDeletedIndexesRequest.prototype.getEndIndex =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
  };

/**
 * @param {number} value
 * @return {!proto.airchat.message.v2.GetThreadDeletedIndexesRequest} returns this
 */
proto.airchat.message.v2.GetThreadDeletedIndexesRequest.prototype.setEndIndex =
  function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetThreadDeletedIndexesResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetThreadDeletedIndexesResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetThreadDeletedIndexesResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetThreadDeletedIndexesResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetThreadDeletedIndexesResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        messageThreadDeletedIndexList: jspb.Message.toObjectList(
          msg.getMessageThreadDeletedIndexList(),
          airchat_message_v2_message_pb.MessageThreadDeletedIndex.toObject,
          includeInstance
        )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetThreadDeletedIndexesResponse}
 */
proto.airchat.message.v2.GetThreadDeletedIndexesResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetThreadDeletedIndexesResponse();
    return proto.airchat.message.v2.GetThreadDeletedIndexesResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetThreadDeletedIndexesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetThreadDeletedIndexesResponse}
 */
proto.airchat.message.v2.GetThreadDeletedIndexesResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value =
            new airchat_message_v2_message_pb.MessageThreadDeletedIndex();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageThreadDeletedIndex
              .deserializeBinaryFromReader
          );
          msg.addMessageThreadDeletedIndex(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetThreadDeletedIndexesResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetThreadDeletedIndexesResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetThreadDeletedIndexesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetThreadDeletedIndexesResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageThreadDeletedIndexList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageThreadDeletedIndex
          .serializeBinaryToWriter
      );
    }
  };

/**
 * repeated MessageThreadDeletedIndex message_thread_deleted_index = 1;
 * @return {!Array<!proto.airchat.message.v2.MessageThreadDeletedIndex>}
 */
proto.airchat.message.v2.GetThreadDeletedIndexesResponse.prototype.getMessageThreadDeletedIndexList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MessageThreadDeletedIndex>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MessageThreadDeletedIndex,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageThreadDeletedIndex>} value
 * @return {!proto.airchat.message.v2.GetThreadDeletedIndexesResponse} returns this
 */
proto.airchat.message.v2.GetThreadDeletedIndexesResponse.prototype.setMessageThreadDeletedIndexList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.MessageThreadDeletedIndex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MessageThreadDeletedIndex}
 */
proto.airchat.message.v2.GetThreadDeletedIndexesResponse.prototype.addMessageThreadDeletedIndex =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.message.v2.MessageThreadDeletedIndex,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetThreadDeletedIndexesResponse} returns this
 */
proto.airchat.message.v2.GetThreadDeletedIndexesResponse.prototype.clearMessageThreadDeletedIndexList =
  function () {
    return this.setMessageThreadDeletedIndexList([]);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.SendMessageEventRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.SendMessageEventRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.SendMessageEventRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.SendMessageEventRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        eventType: jspb.Message.getFieldWithDefault(msg, 2, 0),
        isMessagePrivate: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.SendMessageEventRequest}
 */
proto.airchat.message.v2.SendMessageEventRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.SendMessageEventRequest();
  return proto.airchat.message.v2.SendMessageEventRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.SendMessageEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.SendMessageEventRequest}
 */
proto.airchat.message.v2.SendMessageEventRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value =
            /** @type {!proto.airchat.message.v2.MessageEventType} */ (
              reader.readEnum()
            );
          msg.setEventType(value);
          break;
        case 3:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsMessagePrivate(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.SendMessageEventRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.SendMessageEventRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.SendMessageEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.SendMessageEventRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getEventType();
    if (f !== 0.0) {
      writer.writeEnum(2, f);
    }
    f = message.getIsMessagePrivate();
    if (f) {
      writer.writeBool(3, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.SendMessageEventRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.SendMessageEventRequest} returns this
 */
proto.airchat.message.v2.SendMessageEventRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional MessageEventType event_type = 2;
 * @return {!proto.airchat.message.v2.MessageEventType}
 */
proto.airchat.message.v2.SendMessageEventRequest.prototype.getEventType =
  function () {
    return /** @type {!proto.airchat.message.v2.MessageEventType} */ (
      jspb.Message.getFieldWithDefault(this, 2, 0)
    );
  };

/**
 * @param {!proto.airchat.message.v2.MessageEventType} value
 * @return {!proto.airchat.message.v2.SendMessageEventRequest} returns this
 */
proto.airchat.message.v2.SendMessageEventRequest.prototype.setEventType =
  function (value) {
    return jspb.Message.setProto3EnumField(this, 2, value);
  };

/**
 * optional bool is_message_private = 3;
 * @return {boolean}
 */
proto.airchat.message.v2.SendMessageEventRequest.prototype.getIsMessagePrivate =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 3, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.SendMessageEventRequest} returns this
 */
proto.airchat.message.v2.SendMessageEventRequest.prototype.setIsMessagePrivate =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 3, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.SendMessageEventResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.SendMessageEventResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.SendMessageEventResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.SendMessageEventResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.SendMessageEventResponse}
 */
proto.airchat.message.v2.SendMessageEventResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.SendMessageEventResponse();
  return proto.airchat.message.v2.SendMessageEventResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.SendMessageEventResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.SendMessageEventResponse}
 */
proto.airchat.message.v2.SendMessageEventResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.SendMessageEventResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.SendMessageEventResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.SendMessageEventResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.SendMessageEventResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetMessageEventLogRequest.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessageEventLogRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMessageEventLogRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessageEventLogRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessageEventLogRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        messageEventTypeList:
          (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessageEventLogRequest}
 */
proto.airchat.message.v2.GetMessageEventLogRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetMessageEventLogRequest();
    return proto.airchat.message.v2.GetMessageEventLogRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessageEventLogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessageEventLogRequest}
 */
proto.airchat.message.v2.GetMessageEventLogRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var values =
            /** @type {!Array<!proto.airchat.message.v2.MessageEventType>} */ (
              reader.isDelimited()
                ? reader.readPackedEnum()
                : [reader.readEnum()]
            );
          for (var i = 0; i < values.length; i++) {
            msg.addMessageEventType(values[i]);
          }
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessageEventLogRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessageEventLogRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessageEventLogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessageEventLogRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getMessageEventTypeList();
    if (f.length > 0) {
      writer.writePackedEnum(2, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetMessageEventLogRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetMessageEventLogRequest} returns this
 */
proto.airchat.message.v2.GetMessageEventLogRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * repeated MessageEventType message_event_type = 2;
 * @return {!Array<!proto.airchat.message.v2.MessageEventType>}
 */
proto.airchat.message.v2.GetMessageEventLogRequest.prototype.getMessageEventTypeList =
  function () {
    return /** @type {!Array<!proto.airchat.message.v2.MessageEventType>} */ (
      jspb.Message.getRepeatedField(this, 2)
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageEventType>} value
 * @return {!proto.airchat.message.v2.GetMessageEventLogRequest} returns this
 */
proto.airchat.message.v2.GetMessageEventLogRequest.prototype.setMessageEventTypeList =
  function (value) {
    return jspb.Message.setField(this, 2, value || []);
  };

/**
 * @param {!proto.airchat.message.v2.MessageEventType} value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.GetMessageEventLogRequest} returns this
 */
proto.airchat.message.v2.GetMessageEventLogRequest.prototype.addMessageEventType =
  function (value, opt_index) {
    return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMessageEventLogRequest} returns this
 */
proto.airchat.message.v2.GetMessageEventLogRequest.prototype.clearMessageEventTypeList =
  function () {
    return this.setMessageEventTypeList([]);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetMessageEventLogResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessageEventLogResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMessageEventLogResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessageEventLogResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessageEventLogResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        messageEventItemList: jspb.Message.toObjectList(
          msg.getMessageEventItemList(),
          airchat_message_v2_message_pb.MessageEventItem.toObject,
          includeInstance
        )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessageEventLogResponse}
 */
proto.airchat.message.v2.GetMessageEventLogResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetMessageEventLogResponse();
    return proto.airchat.message.v2.GetMessageEventLogResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessageEventLogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessageEventLogResponse}
 */
proto.airchat.message.v2.GetMessageEventLogResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageEventItem();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageEventItem
              .deserializeBinaryFromReader
          );
          msg.addMessageEventItem(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessageEventLogResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessageEventLogResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessageEventLogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessageEventLogResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageEventItemList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageEventItem.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated MessageEventItem message_event_item = 1;
 * @return {!Array<!proto.airchat.message.v2.MessageEventItem>}
 */
proto.airchat.message.v2.GetMessageEventLogResponse.prototype.getMessageEventItemList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MessageEventItem>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MessageEventItem,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageEventItem>} value
 * @return {!proto.airchat.message.v2.GetMessageEventLogResponse} returns this
 */
proto.airchat.message.v2.GetMessageEventLogResponse.prototype.setMessageEventItemList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.MessageEventItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MessageEventItem}
 */
proto.airchat.message.v2.GetMessageEventLogResponse.prototype.addMessageEventItem =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.message.v2.MessageEventItem,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMessageEventLogResponse} returns this
 */
proto.airchat.message.v2.GetMessageEventLogResponse.prototype.clearMessageEventItemList =
  function () {
    return this.setMessageEventItemList([]);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetMessageAnalyticsRequest.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessageAnalyticsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMessageAnalyticsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessageAnalyticsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessageAnalyticsRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingIdList:
          (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessageAnalyticsRequest}
 */
proto.airchat.message.v2.GetMessageAnalyticsRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetMessageAnalyticsRequest();
    return proto.airchat.message.v2.GetMessageAnalyticsRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessageAnalyticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessageAnalyticsRequest}
 */
proto.airchat.message.v2.GetMessageAnalyticsRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.addRecordingId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessageAnalyticsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessageAnalyticsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessageAnalyticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessageAnalyticsRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingIdList();
    if (f.length > 0) {
      writer.writeRepeatedString(1, f);
    }
  };

/**
 * repeated string recording_id = 1;
 * @return {!Array<string>}
 */
proto.airchat.message.v2.GetMessageAnalyticsRequest.prototype.getRecordingIdList =
  function () {
    return /** @type {!Array<string>} */ (
      jspb.Message.getRepeatedField(this, 1)
    );
  };

/**
 * @param {!Array<string>} value
 * @return {!proto.airchat.message.v2.GetMessageAnalyticsRequest} returns this
 */
proto.airchat.message.v2.GetMessageAnalyticsRequest.prototype.setRecordingIdList =
  function (value) {
    return jspb.Message.setField(this, 1, value || []);
  };

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.GetMessageAnalyticsRequest} returns this
 */
proto.airchat.message.v2.GetMessageAnalyticsRequest.prototype.addRecordingId =
  function (value, opt_index) {
    return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMessageAnalyticsRequest} returns this
 */
proto.airchat.message.v2.GetMessageAnalyticsRequest.prototype.clearRecordingIdList =
  function () {
    return this.setRecordingIdList([]);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetMessageAnalyticsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessageAnalyticsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMessageAnalyticsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessageAnalyticsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessageAnalyticsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        messageAnalyticsList: jspb.Message.toObjectList(
          msg.getMessageAnalyticsList(),
          airchat_message_v2_message_pb.MessageAnalytics.toObject,
          includeInstance
        )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessageAnalyticsResponse}
 */
proto.airchat.message.v2.GetMessageAnalyticsResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetMessageAnalyticsResponse();
    return proto.airchat.message.v2.GetMessageAnalyticsResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessageAnalyticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessageAnalyticsResponse}
 */
proto.airchat.message.v2.GetMessageAnalyticsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageAnalytics();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageAnalytics
              .deserializeBinaryFromReader
          );
          msg.addMessageAnalytics(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessageAnalyticsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessageAnalyticsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessageAnalyticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessageAnalyticsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageAnalyticsList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageAnalytics.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated MessageAnalytics message_analytics = 1;
 * @return {!Array<!proto.airchat.message.v2.MessageAnalytics>}
 */
proto.airchat.message.v2.GetMessageAnalyticsResponse.prototype.getMessageAnalyticsList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MessageAnalytics>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MessageAnalytics,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageAnalytics>} value
 * @return {!proto.airchat.message.v2.GetMessageAnalyticsResponse} returns this
 */
proto.airchat.message.v2.GetMessageAnalyticsResponse.prototype.setMessageAnalyticsList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.MessageAnalytics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MessageAnalytics}
 */
proto.airchat.message.v2.GetMessageAnalyticsResponse.prototype.addMessageAnalytics =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.message.v2.MessageAnalytics,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMessageAnalyticsResponse} returns this
 */
proto.airchat.message.v2.GetMessageAnalyticsResponse.prototype.clearMessageAnalyticsList =
  function () {
    return this.setMessageAnalyticsList([]);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessageFeedRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.GetMessageFeedRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessageFeedRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessageFeedRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        pageKey: jspb.Message.getFieldWithDefault(msg, 1, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessageFeedRequest}
 */
proto.airchat.message.v2.GetMessageFeedRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetMessageFeedRequest();
  return proto.airchat.message.v2.GetMessageFeedRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessageFeedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessageFeedRequest}
 */
proto.airchat.message.v2.GetMessageFeedRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessageFeedRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessageFeedRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessageFeedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessageFeedRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getPageKey();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string page_key = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetMessageFeedRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetMessageFeedRequest} returns this
 */
proto.airchat.message.v2.GetMessageFeedRequest.prototype.setPageKey = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetMessageFeedResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMessageFeedResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMessageFeedResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMessageFeedResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMessageFeedResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        itemsList: jspb.Message.toObjectList(
          msg.getItemsList(),
          airchat_message_v2_message_pb.MessageFeedItem.toObject,
          includeInstance
        ),
        nextPageKey: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMessageFeedResponse}
 */
proto.airchat.message.v2.GetMessageFeedResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetMessageFeedResponse();
  return proto.airchat.message.v2.GetMessageFeedResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMessageFeedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMessageFeedResponse}
 */
proto.airchat.message.v2.GetMessageFeedResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageFeedItem();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageFeedItem
              .deserializeBinaryFromReader
          );
          msg.addItems(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setNextPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMessageFeedResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMessageFeedResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMessageFeedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMessageFeedResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getItemsList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageFeedItem.serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated MessageFeedItem items = 1;
 * @return {!Array<!proto.airchat.message.v2.MessageFeedItem>}
 */
proto.airchat.message.v2.GetMessageFeedResponse.prototype.getItemsList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MessageFeedItem>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MessageFeedItem,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageFeedItem>} value
 * @return {!proto.airchat.message.v2.GetMessageFeedResponse} returns this
 */
proto.airchat.message.v2.GetMessageFeedResponse.prototype.setItemsList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.MessageFeedItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MessageFeedItem}
 */
proto.airchat.message.v2.GetMessageFeedResponse.prototype.addItems = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.airchat.message.v2.MessageFeedItem,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMessageFeedResponse} returns this
 */
proto.airchat.message.v2.GetMessageFeedResponse.prototype.clearItemsList =
  function () {
    return this.setItemsList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetMessageFeedResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetMessageFeedResponse} returns this
 */
proto.airchat.message.v2.GetMessageFeedResponse.prototype.setNextPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetUserFeedRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.GetUserFeedRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetUserFeedRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetUserFeedRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        pageKey: jspb.Message.getFieldWithDefault(msg, 2, ''),
        hideReposts: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetUserFeedRequest}
 */
proto.airchat.message.v2.GetUserFeedRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetUserFeedRequest();
  return proto.airchat.message.v2.GetUserFeedRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetUserFeedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetUserFeedRequest}
 */
proto.airchat.message.v2.GetUserFeedRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setUserId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setPageKey(value);
          break;
        case 3:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setHideReposts(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetUserFeedRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetUserFeedRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetUserFeedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetUserFeedRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getPageKey();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getHideReposts();
  if (f) {
    writer.writeBool(3, f);
  }
};

/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetUserFeedRequest.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetUserFeedRequest} returns this
 */
proto.airchat.message.v2.GetUserFeedRequest.prototype.setUserId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetUserFeedRequest.prototype.getPageKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetUserFeedRequest} returns this
 */
proto.airchat.message.v2.GetUserFeedRequest.prototype.setPageKey = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional bool hide_reposts = 3;
 * @return {boolean}
 */
proto.airchat.message.v2.GetUserFeedRequest.prototype.getHideReposts =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 3, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.GetUserFeedRequest} returns this
 */
proto.airchat.message.v2.GetUserFeedRequest.prototype.setHideReposts =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 3, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetUserFeedResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetUserFeedResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.GetUserFeedResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetUserFeedResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetUserFeedResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        itemsList: jspb.Message.toObjectList(
          msg.getItemsList(),
          airchat_message_v2_message_pb.MessageFeedItem.toObject,
          includeInstance
        ),
        nextPageKey: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetUserFeedResponse}
 */
proto.airchat.message.v2.GetUserFeedResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetUserFeedResponse();
  return proto.airchat.message.v2.GetUserFeedResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetUserFeedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetUserFeedResponse}
 */
proto.airchat.message.v2.GetUserFeedResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageFeedItem();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageFeedItem
              .deserializeBinaryFromReader
          );
          msg.addItems(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setNextPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetUserFeedResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetUserFeedResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetUserFeedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetUserFeedResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getItemsList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageFeedItem.serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated MessageFeedItem items = 1;
 * @return {!Array<!proto.airchat.message.v2.MessageFeedItem>}
 */
proto.airchat.message.v2.GetUserFeedResponse.prototype.getItemsList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MessageFeedItem>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MessageFeedItem,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageFeedItem>} value
 * @return {!proto.airchat.message.v2.GetUserFeedResponse} returns this
 */
proto.airchat.message.v2.GetUserFeedResponse.prototype.setItemsList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.airchat.message.v2.MessageFeedItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MessageFeedItem}
 */
proto.airchat.message.v2.GetUserFeedResponse.prototype.addItems = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.airchat.message.v2.MessageFeedItem,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetUserFeedResponse} returns this
 */
proto.airchat.message.v2.GetUserFeedResponse.prototype.clearItemsList =
  function () {
    return this.setItemsList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetUserFeedResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetUserFeedResponse} returns this
 */
proto.airchat.message.v2.GetUserFeedResponse.prototype.setNextPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetHighlightFeedRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetHighlightFeedRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetHighlightFeedRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetHighlightFeedRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        pageKey: jspb.Message.getFieldWithDefault(msg, 1, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetHighlightFeedRequest}
 */
proto.airchat.message.v2.GetHighlightFeedRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetHighlightFeedRequest();
  return proto.airchat.message.v2.GetHighlightFeedRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetHighlightFeedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetHighlightFeedRequest}
 */
proto.airchat.message.v2.GetHighlightFeedRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetHighlightFeedRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetHighlightFeedRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetHighlightFeedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetHighlightFeedRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getPageKey();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string page_key = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetHighlightFeedRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetHighlightFeedRequest} returns this
 */
proto.airchat.message.v2.GetHighlightFeedRequest.prototype.setPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetHighlightFeedResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetHighlightFeedResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetHighlightFeedResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetHighlightFeedResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetHighlightFeedResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        itemsList: jspb.Message.toObjectList(
          msg.getItemsList(),
          airchat_message_v2_message_pb.MessageFeedItem.toObject,
          includeInstance
        ),
        nextPageKey: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetHighlightFeedResponse}
 */
proto.airchat.message.v2.GetHighlightFeedResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetHighlightFeedResponse();
  return proto.airchat.message.v2.GetHighlightFeedResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetHighlightFeedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetHighlightFeedResponse}
 */
proto.airchat.message.v2.GetHighlightFeedResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageFeedItem();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageFeedItem
              .deserializeBinaryFromReader
          );
          msg.addItems(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setNextPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetHighlightFeedResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetHighlightFeedResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetHighlightFeedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetHighlightFeedResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getItemsList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageFeedItem.serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated MessageFeedItem items = 1;
 * @return {!Array<!proto.airchat.message.v2.MessageFeedItem>}
 */
proto.airchat.message.v2.GetHighlightFeedResponse.prototype.getItemsList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MessageFeedItem>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MessageFeedItem,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageFeedItem>} value
 * @return {!proto.airchat.message.v2.GetHighlightFeedResponse} returns this
 */
proto.airchat.message.v2.GetHighlightFeedResponse.prototype.setItemsList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.MessageFeedItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MessageFeedItem}
 */
proto.airchat.message.v2.GetHighlightFeedResponse.prototype.addItems =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.message.v2.MessageFeedItem,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetHighlightFeedResponse} returns this
 */
proto.airchat.message.v2.GetHighlightFeedResponse.prototype.clearItemsList =
  function () {
    return this.setItemsList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetHighlightFeedResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetHighlightFeedResponse} returns this
 */
proto.airchat.message.v2.GetHighlightFeedResponse.prototype.setNextPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetChannelFeedRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.GetChannelFeedRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetChannelFeedRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetChannelFeedRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        pageKey: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetChannelFeedRequest}
 */
proto.airchat.message.v2.GetChannelFeedRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetChannelFeedRequest();
  return proto.airchat.message.v2.GetChannelFeedRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetChannelFeedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetChannelFeedRequest}
 */
proto.airchat.message.v2.GetChannelFeedRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setChannelId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetChannelFeedRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetChannelFeedRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetChannelFeedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetChannelFeedRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetChannelFeedRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetChannelFeedRequest} returns this
 */
proto.airchat.message.v2.GetChannelFeedRequest.prototype.setChannelId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetChannelFeedRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetChannelFeedRequest} returns this
 */
proto.airchat.message.v2.GetChannelFeedRequest.prototype.setPageKey = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetChannelFeedResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetChannelFeedResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetChannelFeedResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetChannelFeedResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetChannelFeedResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        itemsList: jspb.Message.toObjectList(
          msg.getItemsList(),
          airchat_message_v2_message_pb.MessageFeedItem.toObject,
          includeInstance
        ),
        nextPageKey: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetChannelFeedResponse}
 */
proto.airchat.message.v2.GetChannelFeedResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetChannelFeedResponse();
  return proto.airchat.message.v2.GetChannelFeedResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetChannelFeedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetChannelFeedResponse}
 */
proto.airchat.message.v2.GetChannelFeedResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageFeedItem();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageFeedItem
              .deserializeBinaryFromReader
          );
          msg.addItems(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setNextPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetChannelFeedResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetChannelFeedResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetChannelFeedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetChannelFeedResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getItemsList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageFeedItem.serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated MessageFeedItem items = 1;
 * @return {!Array<!proto.airchat.message.v2.MessageFeedItem>}
 */
proto.airchat.message.v2.GetChannelFeedResponse.prototype.getItemsList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MessageFeedItem>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MessageFeedItem,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageFeedItem>} value
 * @return {!proto.airchat.message.v2.GetChannelFeedResponse} returns this
 */
proto.airchat.message.v2.GetChannelFeedResponse.prototype.setItemsList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.MessageFeedItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MessageFeedItem}
 */
proto.airchat.message.v2.GetChannelFeedResponse.prototype.addItems = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.airchat.message.v2.MessageFeedItem,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetChannelFeedResponse} returns this
 */
proto.airchat.message.v2.GetChannelFeedResponse.prototype.clearItemsList =
  function () {
    return this.setItemsList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetChannelFeedResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetChannelFeedResponse} returns this
 */
proto.airchat.message.v2.GetChannelFeedResponse.prototype.setNextPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetHighlightsRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.GetHighlightsRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetHighlightsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetHighlightsRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        pageKey: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetHighlightsRequest}
 */
proto.airchat.message.v2.GetHighlightsRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetHighlightsRequest();
  return proto.airchat.message.v2.GetHighlightsRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetHighlightsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetHighlightsRequest}
 */
proto.airchat.message.v2.GetHighlightsRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setUserId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetHighlightsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetHighlightsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetHighlightsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetHighlightsRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getUserId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetHighlightsRequest.prototype.getUserId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetHighlightsRequest} returns this
 */
proto.airchat.message.v2.GetHighlightsRequest.prototype.setUserId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetHighlightsRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetHighlightsRequest} returns this
 */
proto.airchat.message.v2.GetHighlightsRequest.prototype.setPageKey = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetHighlightsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetHighlightsResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.GetHighlightsResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetHighlightsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetHighlightsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        itemsList: jspb.Message.toObjectList(
          msg.getItemsList(),
          airchat_message_v2_message_pb.MessageFeedItem.toObject,
          includeInstance
        ),
        nextPageKey: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetHighlightsResponse}
 */
proto.airchat.message.v2.GetHighlightsResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetHighlightsResponse();
  return proto.airchat.message.v2.GetHighlightsResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetHighlightsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetHighlightsResponse}
 */
proto.airchat.message.v2.GetHighlightsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageFeedItem();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageFeedItem
              .deserializeBinaryFromReader
          );
          msg.addItems(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setNextPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetHighlightsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetHighlightsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetHighlightsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetHighlightsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getItemsList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageFeedItem.serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated MessageFeedItem items = 1;
 * @return {!Array<!proto.airchat.message.v2.MessageFeedItem>}
 */
proto.airchat.message.v2.GetHighlightsResponse.prototype.getItemsList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MessageFeedItem>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MessageFeedItem,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageFeedItem>} value
 * @return {!proto.airchat.message.v2.GetHighlightsResponse} returns this
 */
proto.airchat.message.v2.GetHighlightsResponse.prototype.setItemsList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.MessageFeedItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MessageFeedItem}
 */
proto.airchat.message.v2.GetHighlightsResponse.prototype.addItems = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.airchat.message.v2.MessageFeedItem,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetHighlightsResponse} returns this
 */
proto.airchat.message.v2.GetHighlightsResponse.prototype.clearItemsList =
  function () {
    return this.setItemsList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetHighlightsResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetHighlightsResponse} returns this
 */
proto.airchat.message.v2.GetHighlightsResponse.prototype.setNextPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.airchat.message.v2.SaveHighlightRequest.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.airchat.message.v2.SaveHighlightRequest.ContextCase = {
  CONTEXT_NOT_SET: 0,
  RECORDING_ID: 1,
  MESSAGE_THREAD_ID: 2
};

/**
 * @return {proto.airchat.message.v2.SaveHighlightRequest.ContextCase}
 */
proto.airchat.message.v2.SaveHighlightRequest.prototype.getContextCase =
  function () {
    return /** @type {proto.airchat.message.v2.SaveHighlightRequest.ContextCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.message.v2.SaveHighlightRequest.oneofGroups_[0]
      )
    );
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.SaveHighlightRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.SaveHighlightRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.SaveHighlightRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.SaveHighlightRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        messageThreadId: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.SaveHighlightRequest}
 */
proto.airchat.message.v2.SaveHighlightRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.SaveHighlightRequest();
  return proto.airchat.message.v2.SaveHighlightRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.SaveHighlightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.SaveHighlightRequest}
 */
proto.airchat.message.v2.SaveHighlightRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setMessageThreadId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.SaveHighlightRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.SaveHighlightRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.SaveHighlightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.SaveHighlightRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = /** @type {string} */ (jspb.Message.getField(message, 1));
    if (f != null) {
      writer.writeString(1, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 2));
    if (f != null) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.SaveHighlightRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.SaveHighlightRequest} returns this
 */
proto.airchat.message.v2.SaveHighlightRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.message.v2.SaveHighlightRequest.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.message.v2.SaveHighlightRequest} returns this
 */
proto.airchat.message.v2.SaveHighlightRequest.prototype.clearRecordingId =
  function () {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.message.v2.SaveHighlightRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.SaveHighlightRequest.prototype.hasRecordingId =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * optional string message_thread_id = 2;
 * @return {string}
 */
proto.airchat.message.v2.SaveHighlightRequest.prototype.getMessageThreadId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.SaveHighlightRequest} returns this
 */
proto.airchat.message.v2.SaveHighlightRequest.prototype.setMessageThreadId =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      2,
      proto.airchat.message.v2.SaveHighlightRequest.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.message.v2.SaveHighlightRequest} returns this
 */
proto.airchat.message.v2.SaveHighlightRequest.prototype.clearMessageThreadId =
  function () {
    return jspb.Message.setOneofField(
      this,
      2,
      proto.airchat.message.v2.SaveHighlightRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.SaveHighlightRequest.prototype.hasMessageThreadId =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.SaveHighlightResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.SaveHighlightResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.SaveHighlightResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.SaveHighlightResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        item:
          (f = msg.getItem()) &&
          airchat_message_v2_message_pb.MessageFeedItem.toObject(
            includeInstance,
            f
          )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.SaveHighlightResponse}
 */
proto.airchat.message.v2.SaveHighlightResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.SaveHighlightResponse();
  return proto.airchat.message.v2.SaveHighlightResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.SaveHighlightResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.SaveHighlightResponse}
 */
proto.airchat.message.v2.SaveHighlightResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageFeedItem();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageFeedItem
              .deserializeBinaryFromReader
          );
          msg.setItem(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.SaveHighlightResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.SaveHighlightResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.SaveHighlightResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.SaveHighlightResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getItem();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageFeedItem.serializeBinaryToWriter
      );
    }
  };

/**
 * optional MessageFeedItem item = 1;
 * @return {?proto.airchat.message.v2.MessageFeedItem}
 */
proto.airchat.message.v2.SaveHighlightResponse.prototype.getItem = function () {
  return /** @type{?proto.airchat.message.v2.MessageFeedItem} */ (
    jspb.Message.getWrapperField(
      this,
      airchat_message_v2_message_pb.MessageFeedItem,
      1
    )
  );
};

/**
 * @param {?proto.airchat.message.v2.MessageFeedItem|undefined} value
 * @return {!proto.airchat.message.v2.SaveHighlightResponse} returns this
 */
proto.airchat.message.v2.SaveHighlightResponse.prototype.setItem = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.SaveHighlightResponse} returns this
 */
proto.airchat.message.v2.SaveHighlightResponse.prototype.clearItem =
  function () {
    return this.setItem(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.SaveHighlightResponse.prototype.hasItem = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.airchat.message.v2.RemoveHighlightRequest.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.airchat.message.v2.RemoveHighlightRequest.ContextCase = {
  CONTEXT_NOT_SET: 0,
  RECORDING_ID: 1,
  MESSAGE_THREAD_ID: 2
};

/**
 * @return {proto.airchat.message.v2.RemoveHighlightRequest.ContextCase}
 */
proto.airchat.message.v2.RemoveHighlightRequest.prototype.getContextCase =
  function () {
    return /** @type {proto.airchat.message.v2.RemoveHighlightRequest.ContextCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.message.v2.RemoveHighlightRequest.oneofGroups_[0]
      )
    );
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.RemoveHighlightRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.RemoveHighlightRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.RemoveHighlightRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.RemoveHighlightRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        messageThreadId: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.RemoveHighlightRequest}
 */
proto.airchat.message.v2.RemoveHighlightRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.RemoveHighlightRequest();
  return proto.airchat.message.v2.RemoveHighlightRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.RemoveHighlightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.RemoveHighlightRequest}
 */
proto.airchat.message.v2.RemoveHighlightRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setMessageThreadId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.RemoveHighlightRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.RemoveHighlightRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.RemoveHighlightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.RemoveHighlightRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = /** @type {string} */ (jspb.Message.getField(message, 1));
    if (f != null) {
      writer.writeString(1, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 2));
    if (f != null) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.RemoveHighlightRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.RemoveHighlightRequest} returns this
 */
proto.airchat.message.v2.RemoveHighlightRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.message.v2.RemoveHighlightRequest.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.message.v2.RemoveHighlightRequest} returns this
 */
proto.airchat.message.v2.RemoveHighlightRequest.prototype.clearRecordingId =
  function () {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.message.v2.RemoveHighlightRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.RemoveHighlightRequest.prototype.hasRecordingId =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * optional string message_thread_id = 2;
 * @return {string}
 */
proto.airchat.message.v2.RemoveHighlightRequest.prototype.getMessageThreadId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.RemoveHighlightRequest} returns this
 */
proto.airchat.message.v2.RemoveHighlightRequest.prototype.setMessageThreadId =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      2,
      proto.airchat.message.v2.RemoveHighlightRequest.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.message.v2.RemoveHighlightRequest} returns this
 */
proto.airchat.message.v2.RemoveHighlightRequest.prototype.clearMessageThreadId =
  function () {
    return jspb.Message.setOneofField(
      this,
      2,
      proto.airchat.message.v2.RemoveHighlightRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.RemoveHighlightRequest.prototype.hasMessageThreadId =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.RemoveHighlightResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.RemoveHighlightResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.RemoveHighlightResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.RemoveHighlightResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.RemoveHighlightResponse}
 */
proto.airchat.message.v2.RemoveHighlightResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.RemoveHighlightResponse();
  return proto.airchat.message.v2.RemoveHighlightResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.RemoveHighlightResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.RemoveHighlightResponse}
 */
proto.airchat.message.v2.RemoveHighlightResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.RemoveHighlightResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.RemoveHighlightResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.RemoveHighlightResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.RemoveHighlightResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetBookmarksRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.GetBookmarksRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetBookmarksRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetBookmarksRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        pageKey: jspb.Message.getFieldWithDefault(msg, 1, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetBookmarksRequest}
 */
proto.airchat.message.v2.GetBookmarksRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetBookmarksRequest();
  return proto.airchat.message.v2.GetBookmarksRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetBookmarksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetBookmarksRequest}
 */
proto.airchat.message.v2.GetBookmarksRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetBookmarksRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetBookmarksRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetBookmarksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetBookmarksRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getPageKey();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string page_key = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetBookmarksRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetBookmarksRequest} returns this
 */
proto.airchat.message.v2.GetBookmarksRequest.prototype.setPageKey = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetBookmarksResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetBookmarksResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.GetBookmarksResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetBookmarksResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetBookmarksResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        itemsList: jspb.Message.toObjectList(
          msg.getItemsList(),
          airchat_message_v2_message_pb.MessageFeedItem.toObject,
          includeInstance
        ),
        nextPageKey: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetBookmarksResponse}
 */
proto.airchat.message.v2.GetBookmarksResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetBookmarksResponse();
  return proto.airchat.message.v2.GetBookmarksResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetBookmarksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetBookmarksResponse}
 */
proto.airchat.message.v2.GetBookmarksResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageFeedItem();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageFeedItem
              .deserializeBinaryFromReader
          );
          msg.addItems(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setNextPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetBookmarksResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetBookmarksResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetBookmarksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetBookmarksResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getItemsList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageFeedItem.serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated MessageFeedItem items = 1;
 * @return {!Array<!proto.airchat.message.v2.MessageFeedItem>}
 */
proto.airchat.message.v2.GetBookmarksResponse.prototype.getItemsList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MessageFeedItem>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MessageFeedItem,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MessageFeedItem>} value
 * @return {!proto.airchat.message.v2.GetBookmarksResponse} returns this
 */
proto.airchat.message.v2.GetBookmarksResponse.prototype.setItemsList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.MessageFeedItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MessageFeedItem}
 */
proto.airchat.message.v2.GetBookmarksResponse.prototype.addItems = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.airchat.message.v2.MessageFeedItem,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetBookmarksResponse} returns this
 */
proto.airchat.message.v2.GetBookmarksResponse.prototype.clearItemsList =
  function () {
    return this.setItemsList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetBookmarksResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetBookmarksResponse} returns this
 */
proto.airchat.message.v2.GetBookmarksResponse.prototype.setNextPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.airchat.message.v2.SaveBookmarkRequest.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.airchat.message.v2.SaveBookmarkRequest.ContextCase = {
  CONTEXT_NOT_SET: 0,
  RECORDING_ID: 1,
  MESSAGE_THREAD_ID: 2
};

/**
 * @return {proto.airchat.message.v2.SaveBookmarkRequest.ContextCase}
 */
proto.airchat.message.v2.SaveBookmarkRequest.prototype.getContextCase =
  function () {
    return /** @type {proto.airchat.message.v2.SaveBookmarkRequest.ContextCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.message.v2.SaveBookmarkRequest.oneofGroups_[0]
      )
    );
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.SaveBookmarkRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.SaveBookmarkRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.SaveBookmarkRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.SaveBookmarkRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        messageThreadId: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.SaveBookmarkRequest}
 */
proto.airchat.message.v2.SaveBookmarkRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.SaveBookmarkRequest();
  return proto.airchat.message.v2.SaveBookmarkRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.SaveBookmarkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.SaveBookmarkRequest}
 */
proto.airchat.message.v2.SaveBookmarkRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setMessageThreadId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.SaveBookmarkRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.SaveBookmarkRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.SaveBookmarkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.SaveBookmarkRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = /** @type {string} */ (jspb.Message.getField(message, 1));
    if (f != null) {
      writer.writeString(1, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 2));
    if (f != null) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.SaveBookmarkRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.SaveBookmarkRequest} returns this
 */
proto.airchat.message.v2.SaveBookmarkRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.message.v2.SaveBookmarkRequest.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.message.v2.SaveBookmarkRequest} returns this
 */
proto.airchat.message.v2.SaveBookmarkRequest.prototype.clearRecordingId =
  function () {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.message.v2.SaveBookmarkRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.SaveBookmarkRequest.prototype.hasRecordingId =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * optional string message_thread_id = 2;
 * @return {string}
 */
proto.airchat.message.v2.SaveBookmarkRequest.prototype.getMessageThreadId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.SaveBookmarkRequest} returns this
 */
proto.airchat.message.v2.SaveBookmarkRequest.prototype.setMessageThreadId =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      2,
      proto.airchat.message.v2.SaveBookmarkRequest.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.message.v2.SaveBookmarkRequest} returns this
 */
proto.airchat.message.v2.SaveBookmarkRequest.prototype.clearMessageThreadId =
  function () {
    return jspb.Message.setOneofField(
      this,
      2,
      proto.airchat.message.v2.SaveBookmarkRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.SaveBookmarkRequest.prototype.hasMessageThreadId =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.SaveBookmarkResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.SaveBookmarkResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.SaveBookmarkResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.SaveBookmarkResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        item:
          (f = msg.getItem()) &&
          airchat_message_v2_message_pb.MessageFeedItem.toObject(
            includeInstance,
            f
          )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.SaveBookmarkResponse}
 */
proto.airchat.message.v2.SaveBookmarkResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.SaveBookmarkResponse();
  return proto.airchat.message.v2.SaveBookmarkResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.SaveBookmarkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.SaveBookmarkResponse}
 */
proto.airchat.message.v2.SaveBookmarkResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.MessageFeedItem();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MessageFeedItem
              .deserializeBinaryFromReader
          );
          msg.setItem(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.SaveBookmarkResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.SaveBookmarkResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.SaveBookmarkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.SaveBookmarkResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getItem();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_message_v2_message_pb.MessageFeedItem.serializeBinaryToWriter
      );
    }
  };

/**
 * optional MessageFeedItem item = 1;
 * @return {?proto.airchat.message.v2.MessageFeedItem}
 */
proto.airchat.message.v2.SaveBookmarkResponse.prototype.getItem = function () {
  return /** @type{?proto.airchat.message.v2.MessageFeedItem} */ (
    jspb.Message.getWrapperField(
      this,
      airchat_message_v2_message_pb.MessageFeedItem,
      1
    )
  );
};

/**
 * @param {?proto.airchat.message.v2.MessageFeedItem|undefined} value
 * @return {!proto.airchat.message.v2.SaveBookmarkResponse} returns this
 */
proto.airchat.message.v2.SaveBookmarkResponse.prototype.setItem = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.SaveBookmarkResponse} returns this
 */
proto.airchat.message.v2.SaveBookmarkResponse.prototype.clearItem =
  function () {
    return this.setItem(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.SaveBookmarkResponse.prototype.hasItem = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.airchat.message.v2.RemoveBookmarkRequest.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.airchat.message.v2.RemoveBookmarkRequest.ContextCase = {
  CONTEXT_NOT_SET: 0,
  RECORDING_ID: 1,
  MESSAGE_THREAD_ID: 2
};

/**
 * @return {proto.airchat.message.v2.RemoveBookmarkRequest.ContextCase}
 */
proto.airchat.message.v2.RemoveBookmarkRequest.prototype.getContextCase =
  function () {
    return /** @type {proto.airchat.message.v2.RemoveBookmarkRequest.ContextCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.message.v2.RemoveBookmarkRequest.oneofGroups_[0]
      )
    );
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.RemoveBookmarkRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.RemoveBookmarkRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.RemoveBookmarkRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.RemoveBookmarkRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        messageThreadId: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.RemoveBookmarkRequest}
 */
proto.airchat.message.v2.RemoveBookmarkRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.RemoveBookmarkRequest();
  return proto.airchat.message.v2.RemoveBookmarkRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.RemoveBookmarkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.RemoveBookmarkRequest}
 */
proto.airchat.message.v2.RemoveBookmarkRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setMessageThreadId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.RemoveBookmarkRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.RemoveBookmarkRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.RemoveBookmarkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.RemoveBookmarkRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = /** @type {string} */ (jspb.Message.getField(message, 1));
    if (f != null) {
      writer.writeString(1, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 2));
    if (f != null) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.RemoveBookmarkRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.RemoveBookmarkRequest} returns this
 */
proto.airchat.message.v2.RemoveBookmarkRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.message.v2.RemoveBookmarkRequest.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.message.v2.RemoveBookmarkRequest} returns this
 */
proto.airchat.message.v2.RemoveBookmarkRequest.prototype.clearRecordingId =
  function () {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.message.v2.RemoveBookmarkRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.RemoveBookmarkRequest.prototype.hasRecordingId =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * optional string message_thread_id = 2;
 * @return {string}
 */
proto.airchat.message.v2.RemoveBookmarkRequest.prototype.getMessageThreadId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.RemoveBookmarkRequest} returns this
 */
proto.airchat.message.v2.RemoveBookmarkRequest.prototype.setMessageThreadId =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      2,
      proto.airchat.message.v2.RemoveBookmarkRequest.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.message.v2.RemoveBookmarkRequest} returns this
 */
proto.airchat.message.v2.RemoveBookmarkRequest.prototype.clearMessageThreadId =
  function () {
    return jspb.Message.setOneofField(
      this,
      2,
      proto.airchat.message.v2.RemoveBookmarkRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.RemoveBookmarkRequest.prototype.hasMessageThreadId =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.RemoveBookmarkResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.RemoveBookmarkResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.RemoveBookmarkResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.RemoveBookmarkResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.RemoveBookmarkResponse}
 */
proto.airchat.message.v2.RemoveBookmarkResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.RemoveBookmarkResponse();
  return proto.airchat.message.v2.RemoveBookmarkResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.RemoveBookmarkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.RemoveBookmarkResponse}
 */
proto.airchat.message.v2.RemoveBookmarkResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.RemoveBookmarkResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.RemoveBookmarkResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.RemoveBookmarkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.RemoveBookmarkResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.UpdateMessageLinkMetadataRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
          isMessagePrivate: jspb.Message.getBooleanFieldWithDefault(
            msg,
            2,
            false
          ),
          linkMetadataUploadList: jspb.Message.toObjectList(
            msg.getLinkMetadataUploadList(),
            airchat_message_v2_message_pb.LinkMetadataUpload.toObject,
            includeInstance
          )
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.UpdateMessageLinkMetadataRequest}
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.UpdateMessageLinkMetadataRequest();
    return proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.UpdateMessageLinkMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.UpdateMessageLinkMetadataRequest}
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsMessagePrivate(value);
          break;
        case 3:
          var value = new airchat_message_v2_message_pb.LinkMetadataUpload();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.LinkMetadataUpload
              .deserializeBinaryFromReader
          );
          msg.addLinkMetadataUpload(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.UpdateMessageLinkMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getIsMessagePrivate();
    if (f) {
      writer.writeBool(2, f);
    }
    f = message.getLinkMetadataUploadList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        3,
        f,
        airchat_message_v2_message_pb.LinkMetadataUpload.serializeBinaryToWriter
      );
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.UpdateMessageLinkMetadataRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional bool is_message_private = 2;
 * @return {boolean}
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.prototype.getIsMessagePrivate =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 2, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.UpdateMessageLinkMetadataRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.prototype.setIsMessagePrivate =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 2, value);
  };

/**
 * repeated LinkMetadataUpload link_metadata_upload = 3;
 * @return {!Array<!proto.airchat.message.v2.LinkMetadataUpload>}
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.prototype.getLinkMetadataUploadList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.LinkMetadataUpload>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.LinkMetadataUpload,
        3
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.LinkMetadataUpload>} value
 * @return {!proto.airchat.message.v2.UpdateMessageLinkMetadataRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.prototype.setLinkMetadataUploadList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 3, value);
  };

/**
 * @param {!proto.airchat.message.v2.LinkMetadataUpload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.LinkMetadataUpload}
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.prototype.addLinkMetadataUpload =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      3,
      opt_value,
      proto.airchat.message.v2.LinkMetadataUpload,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.UpdateMessageLinkMetadataRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataRequest.prototype.clearLinkMetadataUploadList =
  function () {
    return this.setLinkMetadataUploadList([]);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.UpdateMessageLinkMetadataResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          message:
            (f = msg.getMessage()) &&
            airchat_message_v2_message_pb.Message.toObject(includeInstance, f)
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.UpdateMessageLinkMetadataResponse}
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.UpdateMessageLinkMetadataResponse();
    return proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.UpdateMessageLinkMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.UpdateMessageLinkMetadataResponse}
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.Message();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.Message.deserializeBinaryFromReader
          );
          msg.setMessage(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.UpdateMessageLinkMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessage();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_message_v2_message_pb.Message.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Message message = 1;
 * @return {?proto.airchat.message.v2.Message}
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.prototype.getMessage =
  function () {
    return /** @type{?proto.airchat.message.v2.Message} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.Message,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.Message|undefined} value
 * @return {!proto.airchat.message.v2.UpdateMessageLinkMetadataResponse} returns this
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.prototype.setMessage =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.UpdateMessageLinkMetadataResponse} returns this
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.prototype.clearMessage =
  function () {
    return this.setMessage(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.UpdateMessageLinkMetadataResponse.prototype.hasMessage =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CreateTranscriptionRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CreateTranscriptionRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CreateTranscriptionRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CreateTranscriptionRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        transcriptionText: jspb.Message.getFieldWithDefault(msg, 2, ''),
        transcriptionModel: jspb.Message.getFieldWithDefault(msg, 3, ''),
        isMessagePrivate: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CreateTranscriptionRequest}
 */
proto.airchat.message.v2.CreateTranscriptionRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.CreateTranscriptionRequest();
    return proto.airchat.message.v2.CreateTranscriptionRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CreateTranscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CreateTranscriptionRequest}
 */
proto.airchat.message.v2.CreateTranscriptionRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setTranscriptionText(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.setTranscriptionModel(value);
          break;
        case 4:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsMessagePrivate(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CreateTranscriptionRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CreateTranscriptionRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CreateTranscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CreateTranscriptionRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getTranscriptionText();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getTranscriptionModel();
    if (f.length > 0) {
      writer.writeString(3, f);
    }
    f = message.getIsMessagePrivate();
    if (f) {
      writer.writeBool(4, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.CreateTranscriptionRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreateTranscriptionRequest} returns this
 */
proto.airchat.message.v2.CreateTranscriptionRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string transcription_text = 2;
 * @return {string}
 */
proto.airchat.message.v2.CreateTranscriptionRequest.prototype.getTranscriptionText =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreateTranscriptionRequest} returns this
 */
proto.airchat.message.v2.CreateTranscriptionRequest.prototype.setTranscriptionText =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * optional string transcription_model = 3;
 * @return {string}
 */
proto.airchat.message.v2.CreateTranscriptionRequest.prototype.getTranscriptionModel =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 3, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreateTranscriptionRequest} returns this
 */
proto.airchat.message.v2.CreateTranscriptionRequest.prototype.setTranscriptionModel =
  function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
  };

/**
 * optional bool is_message_private = 4;
 * @return {boolean}
 */
proto.airchat.message.v2.CreateTranscriptionRequest.prototype.getIsMessagePrivate =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 4, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.CreateTranscriptionRequest} returns this
 */
proto.airchat.message.v2.CreateTranscriptionRequest.prototype.setIsMessagePrivate =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 4, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CreateTranscriptionResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CreateTranscriptionResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CreateTranscriptionResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CreateTranscriptionResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CreateTranscriptionResponse}
 */
proto.airchat.message.v2.CreateTranscriptionResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.CreateTranscriptionResponse();
    return proto.airchat.message.v2.CreateTranscriptionResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CreateTranscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CreateTranscriptionResponse}
 */
proto.airchat.message.v2.CreateTranscriptionResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CreateTranscriptionResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CreateTranscriptionResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CreateTranscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CreateTranscriptionResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CreateImageUploadRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CreateImageUploadRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CreateImageUploadRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CreateImageUploadRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        isMessagePrivate: jspb.Message.getBooleanFieldWithDefault(
          msg,
          2,
          false
        ),
        resolution:
          (f = msg.getResolution()) &&
          airchat_message_v2_message_pb.Resolution.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CreateImageUploadRequest}
 */
proto.airchat.message.v2.CreateImageUploadRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.CreateImageUploadRequest();
  return proto.airchat.message.v2.CreateImageUploadRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CreateImageUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CreateImageUploadRequest}
 */
proto.airchat.message.v2.CreateImageUploadRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsMessagePrivate(value);
          break;
        case 3:
          var value = new airchat_message_v2_message_pb.Resolution();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.Resolution.deserializeBinaryFromReader
          );
          msg.setResolution(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CreateImageUploadRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CreateImageUploadRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CreateImageUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CreateImageUploadRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getIsMessagePrivate();
    if (f) {
      writer.writeBool(2, f);
    }
    f = message.getResolution();
    if (f != null) {
      writer.writeMessage(
        3,
        f,
        airchat_message_v2_message_pb.Resolution.serializeBinaryToWriter
      );
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.CreateImageUploadRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreateImageUploadRequest} returns this
 */
proto.airchat.message.v2.CreateImageUploadRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional bool is_message_private = 2;
 * @return {boolean}
 */
proto.airchat.message.v2.CreateImageUploadRequest.prototype.getIsMessagePrivate =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 2, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.CreateImageUploadRequest} returns this
 */
proto.airchat.message.v2.CreateImageUploadRequest.prototype.setIsMessagePrivate =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 2, value);
  };

/**
 * optional Resolution resolution = 3;
 * @return {?proto.airchat.message.v2.Resolution}
 */
proto.airchat.message.v2.CreateImageUploadRequest.prototype.getResolution =
  function () {
    return /** @type{?proto.airchat.message.v2.Resolution} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.Resolution,
        3
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.Resolution|undefined} value
 * @return {!proto.airchat.message.v2.CreateImageUploadRequest} returns this
 */
proto.airchat.message.v2.CreateImageUploadRequest.prototype.setResolution =
  function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.CreateImageUploadRequest} returns this
 */
proto.airchat.message.v2.CreateImageUploadRequest.prototype.clearResolution =
  function () {
    return this.setResolution(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.CreateImageUploadRequest.prototype.hasResolution =
  function () {
    return jspb.Message.getField(this, 3) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CreateImageUploadResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CreateImageUploadResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CreateImageUploadResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CreateImageUploadResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        imageReferenceId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        uploadUrl: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CreateImageUploadResponse}
 */
proto.airchat.message.v2.CreateImageUploadResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.CreateImageUploadResponse();
    return proto.airchat.message.v2.CreateImageUploadResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CreateImageUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CreateImageUploadResponse}
 */
proto.airchat.message.v2.CreateImageUploadResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setImageReferenceId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setUploadUrl(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CreateImageUploadResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CreateImageUploadResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CreateImageUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CreateImageUploadResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getImageReferenceId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getUploadUrl();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string image_reference_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.CreateImageUploadResponse.prototype.getImageReferenceId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreateImageUploadResponse} returns this
 */
proto.airchat.message.v2.CreateImageUploadResponse.prototype.setImageReferenceId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string upload_url = 2;
 * @return {string}
 */
proto.airchat.message.v2.CreateImageUploadResponse.prototype.getUploadUrl =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreateImageUploadResponse} returns this
 */
proto.airchat.message.v2.CreateImageUploadResponse.prototype.setUploadUrl =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CompleteImageUploadRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CompleteImageUploadRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CompleteImageUploadRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CompleteImageUploadRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        isMessagePrivate: jspb.Message.getBooleanFieldWithDefault(
          msg,
          2,
          false
        ),
        imageReferenceId: jspb.Message.getFieldWithDefault(msg, 3, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CompleteImageUploadRequest}
 */
proto.airchat.message.v2.CompleteImageUploadRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.CompleteImageUploadRequest();
    return proto.airchat.message.v2.CompleteImageUploadRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CompleteImageUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CompleteImageUploadRequest}
 */
proto.airchat.message.v2.CompleteImageUploadRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsMessagePrivate(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.setImageReferenceId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CompleteImageUploadRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CompleteImageUploadRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CompleteImageUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CompleteImageUploadRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getIsMessagePrivate();
    if (f) {
      writer.writeBool(2, f);
    }
    f = message.getImageReferenceId();
    if (f.length > 0) {
      writer.writeString(3, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.CompleteImageUploadRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CompleteImageUploadRequest} returns this
 */
proto.airchat.message.v2.CompleteImageUploadRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional bool is_message_private = 2;
 * @return {boolean}
 */
proto.airchat.message.v2.CompleteImageUploadRequest.prototype.getIsMessagePrivate =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 2, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.CompleteImageUploadRequest} returns this
 */
proto.airchat.message.v2.CompleteImageUploadRequest.prototype.setIsMessagePrivate =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 2, value);
  };

/**
 * optional string image_reference_id = 3;
 * @return {string}
 */
proto.airchat.message.v2.CompleteImageUploadRequest.prototype.getImageReferenceId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 3, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CompleteImageUploadRequest} returns this
 */
proto.airchat.message.v2.CompleteImageUploadRequest.prototype.setImageReferenceId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CompleteImageUploadResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CompleteImageUploadResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CompleteImageUploadResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CompleteImageUploadResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CompleteImageUploadResponse}
 */
proto.airchat.message.v2.CompleteImageUploadResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.CompleteImageUploadResponse();
    return proto.airchat.message.v2.CompleteImageUploadResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CompleteImageUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CompleteImageUploadResponse}
 */
proto.airchat.message.v2.CompleteImageUploadResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CompleteImageUploadResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CompleteImageUploadResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CompleteImageUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CompleteImageUploadResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.AbortImageUploadRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.AbortImageUploadRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.AbortImageUploadRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.AbortImageUploadRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        isMessagePrivate: jspb.Message.getBooleanFieldWithDefault(
          msg,
          2,
          false
        ),
        imageReferenceId: jspb.Message.getFieldWithDefault(msg, 3, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.AbortImageUploadRequest}
 */
proto.airchat.message.v2.AbortImageUploadRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.AbortImageUploadRequest();
  return proto.airchat.message.v2.AbortImageUploadRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.AbortImageUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.AbortImageUploadRequest}
 */
proto.airchat.message.v2.AbortImageUploadRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsMessagePrivate(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.setImageReferenceId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.AbortImageUploadRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.AbortImageUploadRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.AbortImageUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.AbortImageUploadRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getIsMessagePrivate();
    if (f) {
      writer.writeBool(2, f);
    }
    f = message.getImageReferenceId();
    if (f.length > 0) {
      writer.writeString(3, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.AbortImageUploadRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.AbortImageUploadRequest} returns this
 */
proto.airchat.message.v2.AbortImageUploadRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional bool is_message_private = 2;
 * @return {boolean}
 */
proto.airchat.message.v2.AbortImageUploadRequest.prototype.getIsMessagePrivate =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 2, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.AbortImageUploadRequest} returns this
 */
proto.airchat.message.v2.AbortImageUploadRequest.prototype.setIsMessagePrivate =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 2, value);
  };

/**
 * optional string image_reference_id = 3;
 * @return {string}
 */
proto.airchat.message.v2.AbortImageUploadRequest.prototype.getImageReferenceId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 3, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.AbortImageUploadRequest} returns this
 */
proto.airchat.message.v2.AbortImageUploadRequest.prototype.setImageReferenceId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.AbortImageUploadResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.AbortImageUploadResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.AbortImageUploadResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.AbortImageUploadResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.AbortImageUploadResponse}
 */
proto.airchat.message.v2.AbortImageUploadResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.AbortImageUploadResponse();
  return proto.airchat.message.v2.AbortImageUploadResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.AbortImageUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.AbortImageUploadResponse}
 */
proto.airchat.message.v2.AbortImageUploadResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.AbortImageUploadResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.AbortImageUploadResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.AbortImageUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.AbortImageUploadResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.repeatedFields_ = [
  3
];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.UpdateMessageImageReferencesRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.UpdateMessageImageReferencesRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.UpdateMessageImageReferencesRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.UpdateMessageImageReferencesRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
          isMessagePrivate: jspb.Message.getBooleanFieldWithDefault(
            msg,
            2,
            false
          ),
          imageReferenceIdsList:
            (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.UpdateMessageImageReferencesRequest}
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.message.v2.UpdateMessageImageReferencesRequest();
    return proto.airchat.message.v2.UpdateMessageImageReferencesRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.UpdateMessageImageReferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.UpdateMessageImageReferencesRequest}
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsMessagePrivate(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.addImageReferenceIds(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.UpdateMessageImageReferencesRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.UpdateMessageImageReferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getIsMessagePrivate();
    if (f) {
      writer.writeBool(2, f);
    }
    f = message.getImageReferenceIdsList();
    if (f.length > 0) {
      writer.writeRepeatedString(3, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.UpdateMessageImageReferencesRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional bool is_message_private = 2;
 * @return {boolean}
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.prototype.getIsMessagePrivate =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 2, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.message.v2.UpdateMessageImageReferencesRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.prototype.setIsMessagePrivate =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 2, value);
  };

/**
 * repeated string image_reference_ids = 3;
 * @return {!Array<string>}
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.prototype.getImageReferenceIdsList =
  function () {
    return /** @type {!Array<string>} */ (
      jspb.Message.getRepeatedField(this, 3)
    );
  };

/**
 * @param {!Array<string>} value
 * @return {!proto.airchat.message.v2.UpdateMessageImageReferencesRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.prototype.setImageReferenceIdsList =
  function (value) {
    return jspb.Message.setField(this, 3, value || []);
  };

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.UpdateMessageImageReferencesRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.prototype.addImageReferenceIds =
  function (value, opt_index) {
    return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.UpdateMessageImageReferencesRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageImageReferencesRequest.prototype.clearImageReferenceIdsList =
  function () {
    return this.setImageReferenceIdsList([]);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.UpdateMessageImageReferencesResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.UpdateMessageImageReferencesResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.UpdateMessageImageReferencesResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.UpdateMessageImageReferencesResponse.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          message:
            (f = msg.getMessage()) &&
            airchat_message_v2_message_pb.Message.toObject(includeInstance, f)
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.UpdateMessageImageReferencesResponse}
 */
proto.airchat.message.v2.UpdateMessageImageReferencesResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.message.v2.UpdateMessageImageReferencesResponse();
    return proto.airchat.message.v2.UpdateMessageImageReferencesResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.UpdateMessageImageReferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.UpdateMessageImageReferencesResponse}
 */
proto.airchat.message.v2.UpdateMessageImageReferencesResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.Message();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.Message.deserializeBinaryFromReader
          );
          msg.setMessage(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.UpdateMessageImageReferencesResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.UpdateMessageImageReferencesResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.UpdateMessageImageReferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.UpdateMessageImageReferencesResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessage();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_message_v2_message_pb.Message.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Message message = 1;
 * @return {?proto.airchat.message.v2.Message}
 */
proto.airchat.message.v2.UpdateMessageImageReferencesResponse.prototype.getMessage =
  function () {
    return /** @type{?proto.airchat.message.v2.Message} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.Message,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.Message|undefined} value
 * @return {!proto.airchat.message.v2.UpdateMessageImageReferencesResponse} returns this
 */
proto.airchat.message.v2.UpdateMessageImageReferencesResponse.prototype.setMessage =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.UpdateMessageImageReferencesResponse} returns this
 */
proto.airchat.message.v2.UpdateMessageImageReferencesResponse.prototype.clearMessage =
  function () {
    return this.setMessage(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.UpdateMessageImageReferencesResponse.prototype.hasMessage =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.UpdateMessageMentionsRequest.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.UpdateMessageMentionsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.UpdateMessageMentionsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.UpdateMessageMentionsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.UpdateMessageMentionsRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        mentionedUserIdList:
          (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.UpdateMessageMentionsRequest}
 */
proto.airchat.message.v2.UpdateMessageMentionsRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.UpdateMessageMentionsRequest();
    return proto.airchat.message.v2.UpdateMessageMentionsRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.UpdateMessageMentionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.UpdateMessageMentionsRequest}
 */
proto.airchat.message.v2.UpdateMessageMentionsRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.addMentionedUserId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.UpdateMessageMentionsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.UpdateMessageMentionsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.UpdateMessageMentionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.UpdateMessageMentionsRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getMentionedUserIdList();
    if (f.length > 0) {
      writer.writeRepeatedString(2, f);
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.UpdateMessageMentionsRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.UpdateMessageMentionsRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageMentionsRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * repeated string mentioned_user_id = 2;
 * @return {!Array<string>}
 */
proto.airchat.message.v2.UpdateMessageMentionsRequest.prototype.getMentionedUserIdList =
  function () {
    return /** @type {!Array<string>} */ (
      jspb.Message.getRepeatedField(this, 2)
    );
  };

/**
 * @param {!Array<string>} value
 * @return {!proto.airchat.message.v2.UpdateMessageMentionsRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageMentionsRequest.prototype.setMentionedUserIdList =
  function (value) {
    return jspb.Message.setField(this, 2, value || []);
  };

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.UpdateMessageMentionsRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageMentionsRequest.prototype.addMentionedUserId =
  function (value, opt_index) {
    return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.UpdateMessageMentionsRequest} returns this
 */
proto.airchat.message.v2.UpdateMessageMentionsRequest.prototype.clearMentionedUserIdList =
  function () {
    return this.setMentionedUserIdList([]);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.UpdateMessageMentionsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.UpdateMessageMentionsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.UpdateMessageMentionsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.UpdateMessageMentionsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        message:
          (f = msg.getMessage()) &&
          airchat_message_v2_message_pb.Message.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.UpdateMessageMentionsResponse}
 */
proto.airchat.message.v2.UpdateMessageMentionsResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.UpdateMessageMentionsResponse();
    return proto.airchat.message.v2.UpdateMessageMentionsResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.UpdateMessageMentionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.UpdateMessageMentionsResponse}
 */
proto.airchat.message.v2.UpdateMessageMentionsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.Message();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.Message.deserializeBinaryFromReader
          );
          msg.setMessage(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.UpdateMessageMentionsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.UpdateMessageMentionsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.UpdateMessageMentionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.UpdateMessageMentionsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessage();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_message_v2_message_pb.Message.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Message message = 1;
 * @return {?proto.airchat.message.v2.Message}
 */
proto.airchat.message.v2.UpdateMessageMentionsResponse.prototype.getMessage =
  function () {
    return /** @type{?proto.airchat.message.v2.Message} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.Message,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.Message|undefined} value
 * @return {!proto.airchat.message.v2.UpdateMessageMentionsResponse} returns this
 */
proto.airchat.message.v2.UpdateMessageMentionsResponse.prototype.setMessage =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.UpdateMessageMentionsResponse} returns this
 */
proto.airchat.message.v2.UpdateMessageMentionsResponse.prototype.clearMessage =
  function () {
    return this.setMessage(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.UpdateMessageMentionsResponse.prototype.hasMessage =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMentionCandidatesRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMentionCandidatesRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMentionCandidatesRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMentionCandidatesRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        messageId: jspb.Message.getFieldWithDefault(msg, 1, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMentionCandidatesRequest}
 */
proto.airchat.message.v2.GetMentionCandidatesRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetMentionCandidatesRequest();
    return proto.airchat.message.v2.GetMentionCandidatesRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMentionCandidatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMentionCandidatesRequest}
 */
proto.airchat.message.v2.GetMentionCandidatesRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setMessageId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMentionCandidatesRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMentionCandidatesRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMentionCandidatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMentionCandidatesRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string message_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetMentionCandidatesRequest.prototype.getMessageId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetMentionCandidatesRequest} returns this
 */
proto.airchat.message.v2.GetMentionCandidatesRequest.prototype.setMessageId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.repeatedFields_ = [1, 2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetMentionCandidatesResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetMentionCandidatesResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetMentionCandidatesResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetMentionCandidatesResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        candidatesList: jspb.Message.toObjectList(
          msg.getCandidatesList(),
          airchat_user_v2_user_pb.User.toObject,
          includeInstance
        ),
        mentionCandidatesList: jspb.Message.toObjectList(
          msg.getMentionCandidatesList(),
          airchat_message_v2_message_pb.MentionCandidate.toObject,
          includeInstance
        )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetMentionCandidatesResponse}
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetMentionCandidatesResponse();
    return proto.airchat.message.v2.GetMentionCandidatesResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetMentionCandidatesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetMentionCandidatesResponse}
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_user_v2_user_pb.User();
          reader.readMessage(
            value,
            airchat_user_v2_user_pb.User.deserializeBinaryFromReader
          );
          msg.addCandidates(value);
          break;
        case 2:
          var value = new airchat_message_v2_message_pb.MentionCandidate();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.MentionCandidate
              .deserializeBinaryFromReader
          );
          msg.addMentionCandidates(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetMentionCandidatesResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetMentionCandidatesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getCandidatesList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_user_v2_user_pb.User.serializeBinaryToWriter
      );
    }
    f = message.getMentionCandidatesList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        2,
        f,
        airchat_message_v2_message_pb.MentionCandidate.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated airchat.user.v2.User candidates = 1;
 * @return {!Array<!proto.airchat.user.v2.User>}
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.prototype.getCandidatesList =
  function () {
    return /** @type{!Array<!proto.airchat.user.v2.User>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_user_v2_user_pb.User,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.user.v2.User>} value
 * @return {!proto.airchat.message.v2.GetMentionCandidatesResponse} returns this
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.prototype.setCandidatesList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.user.v2.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.User}
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.prototype.addCandidates =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.user.v2.User,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMentionCandidatesResponse} returns this
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.prototype.clearCandidatesList =
  function () {
    return this.setCandidatesList([]);
  };

/**
 * repeated MentionCandidate mention_candidates = 2;
 * @return {!Array<!proto.airchat.message.v2.MentionCandidate>}
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.prototype.getMentionCandidatesList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.MentionCandidate>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.MentionCandidate,
        2
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.MentionCandidate>} value
 * @return {!proto.airchat.message.v2.GetMentionCandidatesResponse} returns this
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.prototype.setMentionCandidatesList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 2, value);
  };

/**
 * @param {!proto.airchat.message.v2.MentionCandidate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.MentionCandidate}
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.prototype.addMentionCandidates =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      2,
      opt_value,
      proto.airchat.message.v2.MentionCandidate,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetMentionCandidatesResponse} returns this
 */
proto.airchat.message.v2.GetMentionCandidatesResponse.prototype.clearMentionCandidatesList =
  function () {
    return this.setMentionCandidatesList([]);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CreatePrivateUploadRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CreatePrivateUploadRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CreatePrivateUploadRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        recordingId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        privateRoomId: jspb.Message.getFieldWithDefault(msg, 2, ''),
        playlistConfig:
          (f = msg.getPlaylistConfig()) &&
          airchat_message_v2_message_pb.Playlist.toObject(includeInstance, f),
        playlistHeader:
          (f = msg.getPlaylistHeader()) &&
          airchat_message_v2_message_pb.PlaylistHeader.toObject(
            includeInstance,
            f
          ),
        createdTime:
          (f = msg.getCreatedTime()) &&
          google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CreatePrivateUploadRequest}
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.CreatePrivateUploadRequest();
    return proto.airchat.message.v2.CreatePrivateUploadRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CreatePrivateUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CreatePrivateUploadRequest}
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setRecordingId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setPrivateRoomId(value);
          break;
        case 3:
          var value = new airchat_message_v2_message_pb.Playlist();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.Playlist.deserializeBinaryFromReader
          );
          msg.setPlaylistConfig(value);
          break;
        case 4:
          var value = new airchat_message_v2_message_pb.PlaylistHeader();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.PlaylistHeader
              .deserializeBinaryFromReader
          );
          msg.setPlaylistHeader(value);
          break;
        case 5:
          var value = new google_protobuf_timestamp_pb.Timestamp();
          reader.readMessage(
            value,
            google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader
          );
          msg.setCreatedTime(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CreatePrivateUploadRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CreatePrivateUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getPrivateRoomId();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getPlaylistConfig();
    if (f != null) {
      writer.writeMessage(
        3,
        f,
        airchat_message_v2_message_pb.Playlist.serializeBinaryToWriter
      );
    }
    f = message.getPlaylistHeader();
    if (f != null) {
      writer.writeMessage(
        4,
        f,
        airchat_message_v2_message_pb.PlaylistHeader.serializeBinaryToWriter
      );
    }
    f = message.getCreatedTime();
    if (f != null) {
      writer.writeMessage(
        5,
        f,
        google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
      );
    }
  };

/**
 * optional string recording_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreatePrivateUploadRequest} returns this
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string private_room_id = 2;
 * @return {string}
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.getPrivateRoomId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreatePrivateUploadRequest} returns this
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.setPrivateRoomId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * optional Playlist playlist_config = 3;
 * @return {?proto.airchat.message.v2.Playlist}
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.getPlaylistConfig =
  function () {
    return /** @type{?proto.airchat.message.v2.Playlist} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.Playlist,
        3
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.Playlist|undefined} value
 * @return {!proto.airchat.message.v2.CreatePrivateUploadRequest} returns this
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.setPlaylistConfig =
  function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.CreatePrivateUploadRequest} returns this
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.clearPlaylistConfig =
  function () {
    return this.setPlaylistConfig(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.hasPlaylistConfig =
  function () {
    return jspb.Message.getField(this, 3) != null;
  };

/**
 * optional PlaylistHeader playlist_header = 4;
 * @return {?proto.airchat.message.v2.PlaylistHeader}
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.getPlaylistHeader =
  function () {
    return /** @type{?proto.airchat.message.v2.PlaylistHeader} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.PlaylistHeader,
        4
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.PlaylistHeader|undefined} value
 * @return {!proto.airchat.message.v2.CreatePrivateUploadRequest} returns this
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.setPlaylistHeader =
  function (value) {
    return jspb.Message.setWrapperField(this, 4, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.CreatePrivateUploadRequest} returns this
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.clearPlaylistHeader =
  function () {
    return this.setPlaylistHeader(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.hasPlaylistHeader =
  function () {
    return jspb.Message.getField(this, 4) != null;
  };

/**
 * optional google.protobuf.Timestamp created_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.getCreatedTime =
  function () {
    return /** @type{?proto.google.protobuf.Timestamp} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_timestamp_pb.Timestamp,
        5
      )
    );
  };

/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.airchat.message.v2.CreatePrivateUploadRequest} returns this
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.setCreatedTime =
  function (value) {
    return jspb.Message.setWrapperField(this, 5, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.CreatePrivateUploadRequest} returns this
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.clearCreatedTime =
  function () {
    return this.setCreatedTime(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.CreatePrivateUploadRequest.prototype.hasCreatedTime =
  function () {
    return jspb.Message.getField(this, 5) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CreatePrivateUploadResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CreatePrivateUploadResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CreatePrivateUploadResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CreatePrivateUploadResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CreatePrivateUploadResponse}
 */
proto.airchat.message.v2.CreatePrivateUploadResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.CreatePrivateUploadResponse();
    return proto.airchat.message.v2.CreatePrivateUploadResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CreatePrivateUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CreatePrivateUploadResponse}
 */
proto.airchat.message.v2.CreatePrivateUploadResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CreatePrivateUploadResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CreatePrivateUploadResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CreatePrivateUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CreatePrivateUploadResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CreatePrivateRoomRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CreatePrivateRoomRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CreatePrivateRoomRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CreatePrivateRoomRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userId: jspb.Message.getFieldWithDefault(msg, 1, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CreatePrivateRoomRequest}
 */
proto.airchat.message.v2.CreatePrivateRoomRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.CreatePrivateRoomRequest();
  return proto.airchat.message.v2.CreatePrivateRoomRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CreatePrivateRoomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CreatePrivateRoomRequest}
 */
proto.airchat.message.v2.CreatePrivateRoomRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setUserId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CreatePrivateRoomRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CreatePrivateRoomRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CreatePrivateRoomRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CreatePrivateRoomRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getUserId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.CreatePrivateRoomRequest.prototype.getUserId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.CreatePrivateRoomRequest} returns this
 */
proto.airchat.message.v2.CreatePrivateRoomRequest.prototype.setUserId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.CreatePrivateRoomResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.CreatePrivateRoomResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.CreatePrivateRoomResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.CreatePrivateRoomResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        privateRoom:
          (f = msg.getPrivateRoom()) &&
          airchat_message_v2_message_pb.PrivateRoom.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.CreatePrivateRoomResponse}
 */
proto.airchat.message.v2.CreatePrivateRoomResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.CreatePrivateRoomResponse();
    return proto.airchat.message.v2.CreatePrivateRoomResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.CreatePrivateRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.CreatePrivateRoomResponse}
 */
proto.airchat.message.v2.CreatePrivateRoomResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.PrivateRoom();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.PrivateRoom
              .deserializeBinaryFromReader
          );
          msg.setPrivateRoom(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.CreatePrivateRoomResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.CreatePrivateRoomResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.CreatePrivateRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.CreatePrivateRoomResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getPrivateRoom();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_message_v2_message_pb.PrivateRoom.serializeBinaryToWriter
      );
    }
  };

/**
 * optional PrivateRoom private_room = 1;
 * @return {?proto.airchat.message.v2.PrivateRoom}
 */
proto.airchat.message.v2.CreatePrivateRoomResponse.prototype.getPrivateRoom =
  function () {
    return /** @type{?proto.airchat.message.v2.PrivateRoom} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.PrivateRoom,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.PrivateRoom|undefined} value
 * @return {!proto.airchat.message.v2.CreatePrivateRoomResponse} returns this
 */
proto.airchat.message.v2.CreatePrivateRoomResponse.prototype.setPrivateRoom =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.CreatePrivateRoomResponse} returns this
 */
proto.airchat.message.v2.CreatePrivateRoomResponse.prototype.clearPrivateRoom =
  function () {
    return this.setPrivateRoom(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.CreatePrivateRoomResponse.prototype.hasPrivateRoom =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.airchat.message.v2.GetPrivateRoomRequest.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.airchat.message.v2.GetPrivateRoomRequest.IdCase = {
  ID_NOT_SET: 0,
  PRIVATE_ROOM_ID: 1,
  USER_ID: 2
};

/**
 * @return {proto.airchat.message.v2.GetPrivateRoomRequest.IdCase}
 */
proto.airchat.message.v2.GetPrivateRoomRequest.prototype.getIdCase =
  function () {
    return /** @type {proto.airchat.message.v2.GetPrivateRoomRequest.IdCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.message.v2.GetPrivateRoomRequest.oneofGroups_[0]
      )
    );
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetPrivateRoomRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.message.v2.GetPrivateRoomRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetPrivateRoomRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetPrivateRoomRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        privateRoomId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        userId: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetPrivateRoomRequest}
 */
proto.airchat.message.v2.GetPrivateRoomRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetPrivateRoomRequest();
  return proto.airchat.message.v2.GetPrivateRoomRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetPrivateRoomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetPrivateRoomRequest}
 */
proto.airchat.message.v2.GetPrivateRoomRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setPrivateRoomId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setUserId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetPrivateRoomRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetPrivateRoomRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetPrivateRoomRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetPrivateRoomRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = /** @type {string} */ (jspb.Message.getField(message, 1));
    if (f != null) {
      writer.writeString(1, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 2));
    if (f != null) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string private_room_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetPrivateRoomRequest.prototype.getPrivateRoomId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetPrivateRoomRequest} returns this
 */
proto.airchat.message.v2.GetPrivateRoomRequest.prototype.setPrivateRoomId =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.message.v2.GetPrivateRoomRequest.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.message.v2.GetPrivateRoomRequest} returns this
 */
proto.airchat.message.v2.GetPrivateRoomRequest.prototype.clearPrivateRoomId =
  function () {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.message.v2.GetPrivateRoomRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.GetPrivateRoomRequest.prototype.hasPrivateRoomId =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetPrivateRoomRequest.prototype.getUserId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetPrivateRoomRequest} returns this
 */
proto.airchat.message.v2.GetPrivateRoomRequest.prototype.setUserId = function (
  value
) {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.airchat.message.v2.GetPrivateRoomRequest.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.message.v2.GetPrivateRoomRequest} returns this
 */
proto.airchat.message.v2.GetPrivateRoomRequest.prototype.clearUserId =
  function () {
    return jspb.Message.setOneofField(
      this,
      2,
      proto.airchat.message.v2.GetPrivateRoomRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.GetPrivateRoomRequest.prototype.hasUserId =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetPrivateRoomResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetPrivateRoomResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetPrivateRoomResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetPrivateRoomResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        privateRoom:
          (f = msg.getPrivateRoom()) &&
          airchat_message_v2_message_pb.PrivateRoom.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetPrivateRoomResponse}
 */
proto.airchat.message.v2.GetPrivateRoomResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetPrivateRoomResponse();
  return proto.airchat.message.v2.GetPrivateRoomResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetPrivateRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetPrivateRoomResponse}
 */
proto.airchat.message.v2.GetPrivateRoomResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.PrivateRoom();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.PrivateRoom
              .deserializeBinaryFromReader
          );
          msg.setPrivateRoom(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetPrivateRoomResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetPrivateRoomResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetPrivateRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetPrivateRoomResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getPrivateRoom();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_message_v2_message_pb.PrivateRoom.serializeBinaryToWriter
      );
    }
  };

/**
 * optional PrivateRoom private_room = 1;
 * @return {?proto.airchat.message.v2.PrivateRoom}
 */
proto.airchat.message.v2.GetPrivateRoomResponse.prototype.getPrivateRoom =
  function () {
    return /** @type{?proto.airchat.message.v2.PrivateRoom} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_message_v2_message_pb.PrivateRoom,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.message.v2.PrivateRoom|undefined} value
 * @return {!proto.airchat.message.v2.GetPrivateRoomResponse} returns this
 */
proto.airchat.message.v2.GetPrivateRoomResponse.prototype.setPrivateRoom =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.message.v2.GetPrivateRoomResponse} returns this
 */
proto.airchat.message.v2.GetPrivateRoomResponse.prototype.clearPrivateRoom =
  function () {
    return this.setPrivateRoom(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.message.v2.GetPrivateRoomResponse.prototype.hasPrivateRoom =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetPrivateRoomsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetPrivateRoomsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetPrivateRoomsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetPrivateRoomsRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        pageKey: jspb.Message.getFieldWithDefault(msg, 1, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetPrivateRoomsRequest}
 */
proto.airchat.message.v2.GetPrivateRoomsRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetPrivateRoomsRequest();
  return proto.airchat.message.v2.GetPrivateRoomsRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetPrivateRoomsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetPrivateRoomsRequest}
 */
proto.airchat.message.v2.GetPrivateRoomsRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetPrivateRoomsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetPrivateRoomsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetPrivateRoomsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetPrivateRoomsRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getPageKey();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string page_key = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetPrivateRoomsRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetPrivateRoomsRequest} returns this
 */
proto.airchat.message.v2.GetPrivateRoomsRequest.prototype.setPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetPrivateRoomsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetPrivateRoomsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetPrivateRoomsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetPrivateRoomsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetPrivateRoomsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        privateRoomList: jspb.Message.toObjectList(
          msg.getPrivateRoomList(),
          airchat_message_v2_message_pb.PrivateRoom.toObject,
          includeInstance
        ),
        nextPageKey: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetPrivateRoomsResponse}
 */
proto.airchat.message.v2.GetPrivateRoomsResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.message.v2.GetPrivateRoomsResponse();
  return proto.airchat.message.v2.GetPrivateRoomsResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetPrivateRoomsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetPrivateRoomsResponse}
 */
proto.airchat.message.v2.GetPrivateRoomsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.PrivateRoom();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.PrivateRoom
              .deserializeBinaryFromReader
          );
          msg.addPrivateRoom(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setNextPageKey(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetPrivateRoomsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetPrivateRoomsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetPrivateRoomsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetPrivateRoomsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getPrivateRoomList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.PrivateRoom.serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated PrivateRoom private_room = 1;
 * @return {!Array<!proto.airchat.message.v2.PrivateRoom>}
 */
proto.airchat.message.v2.GetPrivateRoomsResponse.prototype.getPrivateRoomList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.PrivateRoom>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.PrivateRoom,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.PrivateRoom>} value
 * @return {!proto.airchat.message.v2.GetPrivateRoomsResponse} returns this
 */
proto.airchat.message.v2.GetPrivateRoomsResponse.prototype.setPrivateRoomList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.PrivateRoom=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.PrivateRoom}
 */
proto.airchat.message.v2.GetPrivateRoomsResponse.prototype.addPrivateRoom =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.message.v2.PrivateRoom,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetPrivateRoomsResponse} returns this
 */
proto.airchat.message.v2.GetPrivateRoomsResponse.prototype.clearPrivateRoomList =
  function () {
    return this.setPrivateRoomList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.message.v2.GetPrivateRoomsResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetPrivateRoomsResponse} returns this
 */
proto.airchat.message.v2.GetPrivateRoomsResponse.prototype.setNextPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          privateRoomId: jspb.Message.getFieldWithDefault(msg, 1, '')
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest}
 */
proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest();
    return proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest}
 */
proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setPrivateRoomId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getPrivateRoomId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string private_room_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest.prototype.getPrivateRoomId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest} returns this
 */
proto.airchat.message.v2.ClearPrivateRoomUnreadCountRequest.prototype.setPrivateRoomId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {};

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse}
 */
proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse();
    return proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse}
 */
proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.ClearPrivateRoomUnreadCountResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetPrivateMessagesByIndexRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          privateRoomId: jspb.Message.getFieldWithDefault(msg, 1, ''),
          startIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
          endIndex: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetPrivateMessagesByIndexRequest}
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetPrivateMessagesByIndexRequest();
    return proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetPrivateMessagesByIndexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetPrivateMessagesByIndexRequest}
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setPrivateRoomId(value);
          break;
        case 2:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setStartIndex(value);
          break;
        case 3:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setEndIndex(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetPrivateMessagesByIndexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getPrivateRoomId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getStartIndex();
    if (f !== 0) {
      writer.writeInt64(2, f);
    }
    f = message.getEndIndex();
    if (f !== 0) {
      writer.writeInt64(3, f);
    }
  };

/**
 * optional string private_room_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.prototype.getPrivateRoomId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetPrivateMessagesByIndexRequest} returns this
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.prototype.setPrivateRoomId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional int64 start_index = 2;
 * @return {number}
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.prototype.getStartIndex =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
  };

/**
 * @param {number} value
 * @return {!proto.airchat.message.v2.GetPrivateMessagesByIndexRequest} returns this
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.prototype.setStartIndex =
  function (value) {
    return jspb.Message.setProto3IntField(this, 2, value);
  };

/**
 * optional int64 end_index = 3;
 * @return {number}
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.prototype.getEndIndex =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
  };

/**
 * @param {number} value
 * @return {!proto.airchat.message.v2.GetPrivateMessagesByIndexRequest} returns this
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexRequest.prototype.setEndIndex =
  function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.repeatedFields_ = [
  1
];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetPrivateMessagesByIndexResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          messageList: jspb.Message.toObjectList(
            msg.getMessageList(),
            airchat_message_v2_message_pb.Message.toObject,
            includeInstance
          )
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetPrivateMessagesByIndexResponse}
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.message.v2.GetPrivateMessagesByIndexResponse();
    return proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetPrivateMessagesByIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetPrivateMessagesByIndexResponse}
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_message_v2_message_pb.Message();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.Message.deserializeBinaryFromReader
          );
          msg.addMessage(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetPrivateMessagesByIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.Message.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated Message message = 1;
 * @return {!Array<!proto.airchat.message.v2.Message>}
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.prototype.getMessageList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.Message>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.Message,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.Message>} value
 * @return {!proto.airchat.message.v2.GetPrivateMessagesByIndexResponse} returns this
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.prototype.setMessageList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.Message}
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.prototype.addMessage =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.message.v2.Message,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetPrivateMessagesByIndexResponse} returns this
 */
proto.airchat.message.v2.GetPrivateMessagesByIndexResponse.prototype.clearMessageList =
  function () {
    return this.setMessageList([]);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          privateRoomId: jspb.Message.getFieldWithDefault(msg, 1, ''),
          startIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
          endIndex: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest}
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest();
    return proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest}
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setPrivateRoomId(value);
          break;
        case 2:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setStartIndex(value);
          break;
        case 3:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setEndIndex(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getPrivateRoomId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getStartIndex();
    if (f !== 0) {
      writer.writeInt64(2, f);
    }
    f = message.getEndIndex();
    if (f !== 0) {
      writer.writeInt64(3, f);
    }
  };

/**
 * optional string private_room_id = 1;
 * @return {string}
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.prototype.getPrivateRoomId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest} returns this
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.prototype.setPrivateRoomId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional int64 start_index = 2;
 * @return {number}
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.prototype.getStartIndex =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
  };

/**
 * @param {number} value
 * @return {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest} returns this
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.prototype.setStartIndex =
  function (value) {
    return jspb.Message.setProto3IntField(this, 2, value);
  };

/**
 * optional int64 end_index = 3;
 * @return {number}
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.prototype.getEndIndex =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
  };

/**
 * @param {number} value
 * @return {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest} returns this
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesRequest.prototype.setEndIndex =
  function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.repeatedFields_ =
  [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          privateRoomDeletedIndexList: jspb.Message.toObjectList(
            msg.getPrivateRoomDeletedIndexList(),
            airchat_message_v2_message_pb.PrivateRoomDeletedIndex.toObject,
            includeInstance
          )
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse}
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse();
    return proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse}
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value =
            new airchat_message_v2_message_pb.PrivateRoomDeletedIndex();
          reader.readMessage(
            value,
            airchat_message_v2_message_pb.PrivateRoomDeletedIndex
              .deserializeBinaryFromReader
          );
          msg.addPrivateRoomDeletedIndex(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getPrivateRoomDeletedIndexList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_message_v2_message_pb.PrivateRoomDeletedIndex
          .serializeBinaryToWriter
      );
    }
  };

/**
 * repeated PrivateRoomDeletedIndex private_room_deleted_index = 1;
 * @return {!Array<!proto.airchat.message.v2.PrivateRoomDeletedIndex>}
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.prototype.getPrivateRoomDeletedIndexList =
  function () {
    return /** @type{!Array<!proto.airchat.message.v2.PrivateRoomDeletedIndex>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_message_v2_message_pb.PrivateRoomDeletedIndex,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.message.v2.PrivateRoomDeletedIndex>} value
 * @return {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse} returns this
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.prototype.setPrivateRoomDeletedIndexList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.message.v2.PrivateRoomDeletedIndex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.message.v2.PrivateRoomDeletedIndex}
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.prototype.addPrivateRoomDeletedIndex =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.message.v2.PrivateRoomDeletedIndex,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse} returns this
 */
proto.airchat.message.v2.GetPrivateRoomDeletedIndexesResponse.prototype.clearPrivateRoomDeletedIndexList =
  function () {
    return this.setPrivateRoomDeletedIndexList([]);
  };

goog.object.extend(exports, proto.airchat.message.v2);
