// source: airchat/channel/v2/channel_api.proto
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
var airchat_channel_v2_channel_pb = require('../../../airchat/channel/v2/channel_pb.js');
goog.object.extend(proto, airchat_channel_v2_channel_pb);
var airchat_message_v2_message_pb = require('../../../airchat/message/v2/message_pb.js');
goog.object.extend(proto, airchat_message_v2_message_pb);
goog.exportSymbol(
  'proto.airchat.channel.v2.AddChannelParticipantRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.AddChannelParticipantResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.CreateChannelParticipantInviteRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.CreateChannelParticipantInviteResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.CreateChannelRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.CreateChannelResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.DeleteChannelRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.DeleteChannelResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GenerateChannelInviteCodeRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GenerateChannelInviteCodeResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetChannelInviteCodesRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetChannelInviteCodesResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetChannelParticipantsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetChannelParticipantsResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.channel.v2.GetChannelRequest', null, global);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetChannelRequest.IdentifierCase',
  null,
  global
);
goog.exportSymbol('proto.airchat.channel.v2.GetChannelResponse', null, global);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetOwnerChannelsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetOwnerChannelsResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetParticipantChannelsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetParticipantChannelsResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.HideChannelMessageRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.HideChannelMessageResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.channel.v2.JoinChannelRequest', null, global);
goog.exportSymbol('proto.airchat.channel.v2.JoinChannelResponse', null, global);
goog.exportSymbol('proto.airchat.channel.v2.LeaveChannelRequest', null, global);
goog.exportSymbol(
  'proto.airchat.channel.v2.LeaveChannelResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.RejectChannelParticipantInviteRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.RejectChannelParticipantInviteResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.RemoveChannelInviteCodeRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.RemoveChannelInviteCodeResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.RemoveChannelParticipantRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.RemoveChannelParticipantResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.RetractChannelParticipantInviteRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.RetractChannelParticipantInviteResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.UpdateChannelRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.v2.UpdateChannelResponse',
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
proto.airchat.channel.v2.CreateChannelRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.CreateChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.CreateChannelRequest.displayName =
    'proto.airchat.channel.v2.CreateChannelRequest';
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
proto.airchat.channel.v2.CreateChannelResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.CreateChannelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.CreateChannelResponse.displayName =
    'proto.airchat.channel.v2.CreateChannelResponse';
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
proto.airchat.channel.v2.UpdateChannelRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.UpdateChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.UpdateChannelRequest.displayName =
    'proto.airchat.channel.v2.UpdateChannelRequest';
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
proto.airchat.channel.v2.UpdateChannelResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.UpdateChannelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.UpdateChannelResponse.displayName =
    'proto.airchat.channel.v2.UpdateChannelResponse';
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
proto.airchat.channel.v2.DeleteChannelRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.DeleteChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.DeleteChannelRequest.displayName =
    'proto.airchat.channel.v2.DeleteChannelRequest';
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
proto.airchat.channel.v2.DeleteChannelResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.DeleteChannelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.DeleteChannelResponse.displayName =
    'proto.airchat.channel.v2.DeleteChannelResponse';
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
proto.airchat.channel.v2.AddChannelParticipantRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.AddChannelParticipantRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.AddChannelParticipantRequest.displayName =
    'proto.airchat.channel.v2.AddChannelParticipantRequest';
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
proto.airchat.channel.v2.AddChannelParticipantResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.AddChannelParticipantResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.AddChannelParticipantResponse.displayName =
    'proto.airchat.channel.v2.AddChannelParticipantResponse';
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
proto.airchat.channel.v2.RemoveChannelParticipantRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.RemoveChannelParticipantRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.RemoveChannelParticipantRequest.displayName =
    'proto.airchat.channel.v2.RemoveChannelParticipantRequest';
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
proto.airchat.channel.v2.RemoveChannelParticipantResponse = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.RemoveChannelParticipantResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.RemoveChannelParticipantResponse.displayName =
    'proto.airchat.channel.v2.RemoveChannelParticipantResponse';
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
proto.airchat.channel.v2.GetChannelParticipantsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.GetChannelParticipantsRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetChannelParticipantsRequest.displayName =
    'proto.airchat.channel.v2.GetChannelParticipantsRequest';
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
proto.airchat.channel.v2.GetChannelParticipantsResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.channel.v2.GetChannelParticipantsResponse.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.channel.v2.GetChannelParticipantsResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetChannelParticipantsResponse.displayName =
    'proto.airchat.channel.v2.GetChannelParticipantsResponse';
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
proto.airchat.channel.v2.JoinChannelRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.JoinChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.JoinChannelRequest.displayName =
    'proto.airchat.channel.v2.JoinChannelRequest';
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
proto.airchat.channel.v2.JoinChannelResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.JoinChannelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.JoinChannelResponse.displayName =
    'proto.airchat.channel.v2.JoinChannelResponse';
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
proto.airchat.channel.v2.LeaveChannelRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.LeaveChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.LeaveChannelRequest.displayName =
    'proto.airchat.channel.v2.LeaveChannelRequest';
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
proto.airchat.channel.v2.LeaveChannelResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.LeaveChannelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.LeaveChannelResponse.displayName =
    'proto.airchat.channel.v2.LeaveChannelResponse';
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
proto.airchat.channel.v2.GetChannelRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.channel.v2.GetChannelRequest.oneofGroups_
  );
};
goog.inherits(proto.airchat.channel.v2.GetChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetChannelRequest.displayName =
    'proto.airchat.channel.v2.GetChannelRequest';
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
proto.airchat.channel.v2.GetChannelResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.GetChannelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetChannelResponse.displayName =
    'proto.airchat.channel.v2.GetChannelResponse';
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
proto.airchat.channel.v2.GetOwnerChannelsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.GetOwnerChannelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetOwnerChannelsRequest.displayName =
    'proto.airchat.channel.v2.GetOwnerChannelsRequest';
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
proto.airchat.channel.v2.GetOwnerChannelsResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.channel.v2.GetOwnerChannelsResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.channel.v2.GetOwnerChannelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetOwnerChannelsResponse.displayName =
    'proto.airchat.channel.v2.GetOwnerChannelsResponse';
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
proto.airchat.channel.v2.GetParticipantChannelsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.GetParticipantChannelsRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetParticipantChannelsRequest.displayName =
    'proto.airchat.channel.v2.GetParticipantChannelsRequest';
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
proto.airchat.channel.v2.GetParticipantChannelsResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.channel.v2.GetParticipantChannelsResponse.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.channel.v2.GetParticipantChannelsResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetParticipantChannelsResponse.displayName =
    'proto.airchat.channel.v2.GetParticipantChannelsResponse';
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
proto.airchat.channel.v2.GenerateChannelInviteCodeRequest = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.GenerateChannelInviteCodeRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GenerateChannelInviteCodeRequest.displayName =
    'proto.airchat.channel.v2.GenerateChannelInviteCodeRequest';
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
proto.airchat.channel.v2.GenerateChannelInviteCodeResponse = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.GenerateChannelInviteCodeResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.displayName =
    'proto.airchat.channel.v2.GenerateChannelInviteCodeResponse';
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
proto.airchat.channel.v2.RemoveChannelInviteCodeRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.RemoveChannelInviteCodeRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.displayName =
    'proto.airchat.channel.v2.RemoveChannelInviteCodeRequest';
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
proto.airchat.channel.v2.RemoveChannelInviteCodeResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.RemoveChannelInviteCodeResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.RemoveChannelInviteCodeResponse.displayName =
    'proto.airchat.channel.v2.RemoveChannelInviteCodeResponse';
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
proto.airchat.channel.v2.GetChannelInviteCodesRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.GetChannelInviteCodesRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetChannelInviteCodesRequest.displayName =
    'proto.airchat.channel.v2.GetChannelInviteCodesRequest';
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
proto.airchat.channel.v2.GetChannelInviteCodesResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.channel.v2.GetChannelInviteCodesResponse.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.channel.v2.GetChannelInviteCodesResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetChannelInviteCodesResponse.displayName =
    'proto.airchat.channel.v2.GetChannelInviteCodesResponse';
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
proto.airchat.channel.v2.HideChannelMessageRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.channel.v2.HideChannelMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.HideChannelMessageRequest.displayName =
    'proto.airchat.channel.v2.HideChannelMessageRequest';
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
proto.airchat.channel.v2.HideChannelMessageResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.HideChannelMessageResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.HideChannelMessageResponse.displayName =
    'proto.airchat.channel.v2.HideChannelMessageResponse';
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
proto.airchat.channel.v2.CreateChannelParticipantInviteRequest = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.CreateChannelParticipantInviteRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.displayName =
    'proto.airchat.channel.v2.CreateChannelParticipantInviteRequest';
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
proto.airchat.channel.v2.CreateChannelParticipantInviteResponse = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.CreateChannelParticipantInviteResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.displayName =
    'proto.airchat.channel.v2.CreateChannelParticipantInviteResponse';
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
proto.airchat.channel.v2.RetractChannelParticipantInviteRequest = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.RetractChannelParticipantInviteRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.displayName =
    'proto.airchat.channel.v2.RetractChannelParticipantInviteRequest';
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
proto.airchat.channel.v2.RetractChannelParticipantInviteResponse = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.RetractChannelParticipantInviteResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.RetractChannelParticipantInviteResponse.displayName =
    'proto.airchat.channel.v2.RetractChannelParticipantInviteResponse';
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
proto.airchat.channel.v2.RejectChannelParticipantInviteRequest = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.RejectChannelParticipantInviteRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.RejectChannelParticipantInviteRequest.displayName =
    'proto.airchat.channel.v2.RejectChannelParticipantInviteRequest';
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
proto.airchat.channel.v2.RejectChannelParticipantInviteResponse = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.RejectChannelParticipantInviteResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.RejectChannelParticipantInviteResponse.displayName =
    'proto.airchat.channel.v2.RejectChannelParticipantInviteResponse';
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
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.displayName =
    'proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest';
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
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse =
  function (opt_data) {
    jspb.Message.initialize(
      this,
      opt_data,
      0,
      -1,
      proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse
        .repeatedFields_,
      null
    );
  };
goog.inherits(
  proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.displayName =
    'proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse';
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
proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest.displayName =
    'proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest';
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
proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse
      .repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.displayName =
    'proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse';
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
  proto.airchat.channel.v2.CreateChannelRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.channel.v2.CreateChannelRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.CreateChannelRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.CreateChannelRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        name: jspb.Message.getFieldWithDefault(msg, 1, ''),
        summary: jspb.Message.getFieldWithDefault(msg, 2, ''),
        avatarData: msg.getAvatarData_asB64(),
        isOpen: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.airchat.channel.v2.CreateChannelRequest}
 */
proto.airchat.channel.v2.CreateChannelRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.CreateChannelRequest();
  return proto.airchat.channel.v2.CreateChannelRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.CreateChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.CreateChannelRequest}
 */
proto.airchat.channel.v2.CreateChannelRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setName(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setSummary(value);
          break;
        case 3:
          var value = /** @type {!Uint8Array} */ (reader.readBytes());
          msg.setAvatarData(value);
          break;
        case 4:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsOpen(value);
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
proto.airchat.channel.v2.CreateChannelRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.CreateChannelRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.CreateChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.CreateChannelRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getName();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getSummary();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getAvatarData_asU8();
    if (f.length > 0) {
      writer.writeBytes(3, f);
    }
    f = message.getIsOpen();
    if (f) {
      writer.writeBool(4, f);
    }
  };

/**
 * optional string name = 1;
 * @return {string}
 */
proto.airchat.channel.v2.CreateChannelRequest.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.CreateChannelRequest} returns this
 */
proto.airchat.channel.v2.CreateChannelRequest.prototype.setName = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string summary = 2;
 * @return {string}
 */
proto.airchat.channel.v2.CreateChannelRequest.prototype.getSummary =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.CreateChannelRequest} returns this
 */
proto.airchat.channel.v2.CreateChannelRequest.prototype.setSummary = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional bytes avatar_data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.airchat.channel.v2.CreateChannelRequest.prototype.getAvatarData =
  function () {
    return /** @type {!(string|Uint8Array)} */ (
      jspb.Message.getFieldWithDefault(this, 3, '')
    );
  };

/**
 * optional bytes avatar_data = 3;
 * This is a type-conversion wrapper around `getAvatarData()`
 * @return {string}
 */
proto.airchat.channel.v2.CreateChannelRequest.prototype.getAvatarData_asB64 =
  function () {
    return /** @type {string} */ (
      jspb.Message.bytesAsB64(this.getAvatarData())
    );
  };

/**
 * optional bytes avatar_data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAvatarData()`
 * @return {!Uint8Array}
 */
proto.airchat.channel.v2.CreateChannelRequest.prototype.getAvatarData_asU8 =
  function () {
    return /** @type {!Uint8Array} */ (
      jspb.Message.bytesAsU8(this.getAvatarData())
    );
  };

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.airchat.channel.v2.CreateChannelRequest} returns this
 */
proto.airchat.channel.v2.CreateChannelRequest.prototype.setAvatarData =
  function (value) {
    return jspb.Message.setProto3BytesField(this, 3, value);
  };

/**
 * optional bool is_open = 4;
 * @return {boolean}
 */
proto.airchat.channel.v2.CreateChannelRequest.prototype.getIsOpen =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 4, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.channel.v2.CreateChannelRequest} returns this
 */
proto.airchat.channel.v2.CreateChannelRequest.prototype.setIsOpen = function (
  value
) {
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
  proto.airchat.channel.v2.CreateChannelResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.channel.v2.CreateChannelResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.CreateChannelResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.CreateChannelResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channel:
          (f = msg.getChannel()) &&
          airchat_channel_v2_channel_pb.Channel.toObject(includeInstance, f)
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
 * @return {!proto.airchat.channel.v2.CreateChannelResponse}
 */
proto.airchat.channel.v2.CreateChannelResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.CreateChannelResponse();
  return proto.airchat.channel.v2.CreateChannelResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.CreateChannelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.CreateChannelResponse}
 */
proto.airchat.channel.v2.CreateChannelResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_channel_v2_channel_pb.Channel();
          reader.readMessage(
            value,
            airchat_channel_v2_channel_pb.Channel.deserializeBinaryFromReader
          );
          msg.setChannel(value);
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
proto.airchat.channel.v2.CreateChannelResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.CreateChannelResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.CreateChannelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.CreateChannelResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannel();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_channel_v2_channel_pb.Channel.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Channel channel = 1;
 * @return {?proto.airchat.channel.v2.Channel}
 */
proto.airchat.channel.v2.CreateChannelResponse.prototype.getChannel =
  function () {
    return /** @type{?proto.airchat.channel.v2.Channel} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_channel_v2_channel_pb.Channel,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.channel.v2.Channel|undefined} value
 * @return {!proto.airchat.channel.v2.CreateChannelResponse} returns this
 */
proto.airchat.channel.v2.CreateChannelResponse.prototype.setChannel = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.channel.v2.CreateChannelResponse} returns this
 */
proto.airchat.channel.v2.CreateChannelResponse.prototype.clearChannel =
  function () {
    return this.setChannel(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.channel.v2.CreateChannelResponse.prototype.hasChannel =
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
  proto.airchat.channel.v2.UpdateChannelRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.channel.v2.UpdateChannelRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.UpdateChannelRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.UpdateChannelRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        name: jspb.Message.getFieldWithDefault(msg, 2, ''),
        summary: jspb.Message.getFieldWithDefault(msg, 3, ''),
        handle: jspb.Message.getFieldWithDefault(msg, 4, ''),
        avatarData: msg.getAvatarData_asB64(),
        isOpen: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.airchat.channel.v2.UpdateChannelRequest}
 */
proto.airchat.channel.v2.UpdateChannelRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.UpdateChannelRequest();
  return proto.airchat.channel.v2.UpdateChannelRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.UpdateChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.UpdateChannelRequest}
 */
proto.airchat.channel.v2.UpdateChannelRequest.deserializeBinaryFromReader =
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
          msg.setName(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.setSummary(value);
          break;
        case 4:
          var value = /** @type {string} */ (reader.readString());
          msg.setHandle(value);
          break;
        case 5:
          var value = /** @type {!Uint8Array} */ (reader.readBytes());
          msg.setAvatarData(value);
          break;
        case 6:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsOpen(value);
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
proto.airchat.channel.v2.UpdateChannelRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.UpdateChannelRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.UpdateChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.UpdateChannelRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getName();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getSummary();
    if (f.length > 0) {
      writer.writeString(3, f);
    }
    f = message.getHandle();
    if (f.length > 0) {
      writer.writeString(4, f);
    }
    f = message.getAvatarData_asU8();
    if (f.length > 0) {
      writer.writeBytes(5, f);
    }
    f = message.getIsOpen();
    if (f) {
      writer.writeBool(6, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.UpdateChannelRequest} returns this
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.setChannelId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string name = 2;
 * @return {string}
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.UpdateChannelRequest} returns this
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.setName = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string summary = 3;
 * @return {string}
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.getSummary =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 3, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.UpdateChannelRequest} returns this
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.setSummary = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string handle = 4;
 * @return {string}
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.getHandle =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 4, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.UpdateChannelRequest} returns this
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.setHandle = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional bytes avatar_data = 5;
 * @return {!(string|Uint8Array)}
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.getAvatarData =
  function () {
    return /** @type {!(string|Uint8Array)} */ (
      jspb.Message.getFieldWithDefault(this, 5, '')
    );
  };

/**
 * optional bytes avatar_data = 5;
 * This is a type-conversion wrapper around `getAvatarData()`
 * @return {string}
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.getAvatarData_asB64 =
  function () {
    return /** @type {string} */ (
      jspb.Message.bytesAsB64(this.getAvatarData())
    );
  };

/**
 * optional bytes avatar_data = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAvatarData()`
 * @return {!Uint8Array}
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.getAvatarData_asU8 =
  function () {
    return /** @type {!Uint8Array} */ (
      jspb.Message.bytesAsU8(this.getAvatarData())
    );
  };

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.airchat.channel.v2.UpdateChannelRequest} returns this
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.setAvatarData =
  function (value) {
    return jspb.Message.setProto3BytesField(this, 5, value);
  };

/**
 * optional bool is_open = 6;
 * @return {boolean}
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.getIsOpen =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 6, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.channel.v2.UpdateChannelRequest} returns this
 */
proto.airchat.channel.v2.UpdateChannelRequest.prototype.setIsOpen = function (
  value
) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
  proto.airchat.channel.v2.UpdateChannelResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.channel.v2.UpdateChannelResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.UpdateChannelResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.UpdateChannelResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channel:
          (f = msg.getChannel()) &&
          airchat_channel_v2_channel_pb.Channel.toObject(includeInstance, f)
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
 * @return {!proto.airchat.channel.v2.UpdateChannelResponse}
 */
proto.airchat.channel.v2.UpdateChannelResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.UpdateChannelResponse();
  return proto.airchat.channel.v2.UpdateChannelResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.UpdateChannelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.UpdateChannelResponse}
 */
proto.airchat.channel.v2.UpdateChannelResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_channel_v2_channel_pb.Channel();
          reader.readMessage(
            value,
            airchat_channel_v2_channel_pb.Channel.deserializeBinaryFromReader
          );
          msg.setChannel(value);
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
proto.airchat.channel.v2.UpdateChannelResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.UpdateChannelResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.UpdateChannelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.UpdateChannelResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannel();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_channel_v2_channel_pb.Channel.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Channel channel = 1;
 * @return {?proto.airchat.channel.v2.Channel}
 */
proto.airchat.channel.v2.UpdateChannelResponse.prototype.getChannel =
  function () {
    return /** @type{?proto.airchat.channel.v2.Channel} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_channel_v2_channel_pb.Channel,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.channel.v2.Channel|undefined} value
 * @return {!proto.airchat.channel.v2.UpdateChannelResponse} returns this
 */
proto.airchat.channel.v2.UpdateChannelResponse.prototype.setChannel = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.channel.v2.UpdateChannelResponse} returns this
 */
proto.airchat.channel.v2.UpdateChannelResponse.prototype.clearChannel =
  function () {
    return this.setChannel(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.channel.v2.UpdateChannelResponse.prototype.hasChannel =
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
  proto.airchat.channel.v2.DeleteChannelRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.channel.v2.DeleteChannelRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.DeleteChannelRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.DeleteChannelRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelId: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.airchat.channel.v2.DeleteChannelRequest}
 */
proto.airchat.channel.v2.DeleteChannelRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.DeleteChannelRequest();
  return proto.airchat.channel.v2.DeleteChannelRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.DeleteChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.DeleteChannelRequest}
 */
proto.airchat.channel.v2.DeleteChannelRequest.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.DeleteChannelRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.DeleteChannelRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.DeleteChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.DeleteChannelRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.DeleteChannelRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.DeleteChannelRequest} returns this
 */
proto.airchat.channel.v2.DeleteChannelRequest.prototype.setChannelId =
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
  proto.airchat.channel.v2.DeleteChannelResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.channel.v2.DeleteChannelResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.DeleteChannelResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.DeleteChannelResponse.toObject = function (
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
 * @return {!proto.airchat.channel.v2.DeleteChannelResponse}
 */
proto.airchat.channel.v2.DeleteChannelResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.DeleteChannelResponse();
  return proto.airchat.channel.v2.DeleteChannelResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.DeleteChannelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.DeleteChannelResponse}
 */
proto.airchat.channel.v2.DeleteChannelResponse.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.DeleteChannelResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.DeleteChannelResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.DeleteChannelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.DeleteChannelResponse.serializeBinaryToWriter =
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
  proto.airchat.channel.v2.AddChannelParticipantRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.AddChannelParticipantRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.AddChannelParticipantRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.AddChannelParticipantRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        participantUserId: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.airchat.channel.v2.AddChannelParticipantRequest}
 */
proto.airchat.channel.v2.AddChannelParticipantRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.AddChannelParticipantRequest();
    return proto.airchat.channel.v2.AddChannelParticipantRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.AddChannelParticipantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.AddChannelParticipantRequest}
 */
proto.airchat.channel.v2.AddChannelParticipantRequest.deserializeBinaryFromReader =
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
          msg.setParticipantUserId(value);
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
proto.airchat.channel.v2.AddChannelParticipantRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.AddChannelParticipantRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.AddChannelParticipantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.AddChannelParticipantRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getParticipantUserId();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.AddChannelParticipantRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.AddChannelParticipantRequest} returns this
 */
proto.airchat.channel.v2.AddChannelParticipantRequest.prototype.setChannelId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string participant_user_id = 2;
 * @return {string}
 */
proto.airchat.channel.v2.AddChannelParticipantRequest.prototype.getParticipantUserId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.AddChannelParticipantRequest} returns this
 */
proto.airchat.channel.v2.AddChannelParticipantRequest.prototype.setParticipantUserId =
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
  proto.airchat.channel.v2.AddChannelParticipantResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.AddChannelParticipantResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.AddChannelParticipantResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.AddChannelParticipantResponse.toObject = function (
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
 * @return {!proto.airchat.channel.v2.AddChannelParticipantResponse}
 */
proto.airchat.channel.v2.AddChannelParticipantResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.AddChannelParticipantResponse();
    return proto.airchat.channel.v2.AddChannelParticipantResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.AddChannelParticipantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.AddChannelParticipantResponse}
 */
proto.airchat.channel.v2.AddChannelParticipantResponse.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.AddChannelParticipantResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.AddChannelParticipantResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.AddChannelParticipantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.AddChannelParticipantResponse.serializeBinaryToWriter =
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
  proto.airchat.channel.v2.RemoveChannelParticipantRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.RemoveChannelParticipantRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.RemoveChannelParticipantRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.RemoveChannelParticipantRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        participantUserId: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.airchat.channel.v2.RemoveChannelParticipantRequest}
 */
proto.airchat.channel.v2.RemoveChannelParticipantRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.RemoveChannelParticipantRequest();
    return proto.airchat.channel.v2.RemoveChannelParticipantRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.RemoveChannelParticipantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.RemoveChannelParticipantRequest}
 */
proto.airchat.channel.v2.RemoveChannelParticipantRequest.deserializeBinaryFromReader =
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
          msg.setParticipantUserId(value);
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
proto.airchat.channel.v2.RemoveChannelParticipantRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.RemoveChannelParticipantRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.RemoveChannelParticipantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.RemoveChannelParticipantRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getParticipantUserId();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.RemoveChannelParticipantRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.RemoveChannelParticipantRequest} returns this
 */
proto.airchat.channel.v2.RemoveChannelParticipantRequest.prototype.setChannelId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string participant_user_id = 2;
 * @return {string}
 */
proto.airchat.channel.v2.RemoveChannelParticipantRequest.prototype.getParticipantUserId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.RemoveChannelParticipantRequest} returns this
 */
proto.airchat.channel.v2.RemoveChannelParticipantRequest.prototype.setParticipantUserId =
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
  proto.airchat.channel.v2.RemoveChannelParticipantResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.RemoveChannelParticipantResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.RemoveChannelParticipantResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.RemoveChannelParticipantResponse.toObject =
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
 * @return {!proto.airchat.channel.v2.RemoveChannelParticipantResponse}
 */
proto.airchat.channel.v2.RemoveChannelParticipantResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.RemoveChannelParticipantResponse();
    return proto.airchat.channel.v2.RemoveChannelParticipantResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.RemoveChannelParticipantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.RemoveChannelParticipantResponse}
 */
proto.airchat.channel.v2.RemoveChannelParticipantResponse.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.RemoveChannelParticipantResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.RemoveChannelParticipantResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.RemoveChannelParticipantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.RemoveChannelParticipantResponse.serializeBinaryToWriter =
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
  proto.airchat.channel.v2.GetChannelParticipantsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GetChannelParticipantsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetChannelParticipantsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetChannelParticipantsRequest.toObject = function (
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
 * @return {!proto.airchat.channel.v2.GetChannelParticipantsRequest}
 */
proto.airchat.channel.v2.GetChannelParticipantsRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.GetChannelParticipantsRequest();
    return proto.airchat.channel.v2.GetChannelParticipantsRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetChannelParticipantsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetChannelParticipantsRequest}
 */
proto.airchat.channel.v2.GetChannelParticipantsRequest.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.GetChannelParticipantsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetChannelParticipantsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetChannelParticipantsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetChannelParticipantsRequest.serializeBinaryToWriter =
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
proto.airchat.channel.v2.GetChannelParticipantsRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.GetChannelParticipantsRequest} returns this
 */
proto.airchat.channel.v2.GetChannelParticipantsRequest.prototype.setChannelId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string page_key = 2;
 * @return {string}
 */
proto.airchat.channel.v2.GetChannelParticipantsRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.GetChannelParticipantsRequest} returns this
 */
proto.airchat.channel.v2.GetChannelParticipantsRequest.prototype.setPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.channel.v2.GetChannelParticipantsResponse.repeatedFields_ = [1];

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
  proto.airchat.channel.v2.GetChannelParticipantsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GetChannelParticipantsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetChannelParticipantsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetChannelParticipantsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        participantList: jspb.Message.toObjectList(
          msg.getParticipantList(),
          airchat_user_v2_user_pb.User.toObject,
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
 * @return {!proto.airchat.channel.v2.GetChannelParticipantsResponse}
 */
proto.airchat.channel.v2.GetChannelParticipantsResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.GetChannelParticipantsResponse();
    return proto.airchat.channel.v2.GetChannelParticipantsResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetChannelParticipantsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetChannelParticipantsResponse}
 */
proto.airchat.channel.v2.GetChannelParticipantsResponse.deserializeBinaryFromReader =
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
          msg.addParticipant(value);
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
proto.airchat.channel.v2.GetChannelParticipantsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetChannelParticipantsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetChannelParticipantsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetChannelParticipantsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getParticipantList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_user_v2_user_pb.User.serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated airchat.user.v2.User participant = 1;
 * @return {!Array<!proto.airchat.user.v2.User>}
 */
proto.airchat.channel.v2.GetChannelParticipantsResponse.prototype.getParticipantList =
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
 * @return {!proto.airchat.channel.v2.GetChannelParticipantsResponse} returns this
 */
proto.airchat.channel.v2.GetChannelParticipantsResponse.prototype.setParticipantList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.user.v2.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.User}
 */
proto.airchat.channel.v2.GetChannelParticipantsResponse.prototype.addParticipant =
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
 * @return {!proto.airchat.channel.v2.GetChannelParticipantsResponse} returns this
 */
proto.airchat.channel.v2.GetChannelParticipantsResponse.prototype.clearParticipantList =
  function () {
    return this.setParticipantList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.channel.v2.GetChannelParticipantsResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.GetChannelParticipantsResponse} returns this
 */
proto.airchat.channel.v2.GetChannelParticipantsResponse.prototype.setNextPageKey =
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
  proto.airchat.channel.v2.JoinChannelRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.channel.v2.JoinChannelRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.JoinChannelRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.JoinChannelRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        inviteCode: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.airchat.channel.v2.JoinChannelRequest}
 */
proto.airchat.channel.v2.JoinChannelRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.JoinChannelRequest();
  return proto.airchat.channel.v2.JoinChannelRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.JoinChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.JoinChannelRequest}
 */
proto.airchat.channel.v2.JoinChannelRequest.deserializeBinaryFromReader =
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
          msg.setInviteCode(value);
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
proto.airchat.channel.v2.JoinChannelRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.JoinChannelRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.JoinChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.JoinChannelRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getChannelId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getInviteCode();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.JoinChannelRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.JoinChannelRequest} returns this
 */
proto.airchat.channel.v2.JoinChannelRequest.prototype.setChannelId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string invite_code = 2;
 * @return {string}
 */
proto.airchat.channel.v2.JoinChannelRequest.prototype.getInviteCode =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.JoinChannelRequest} returns this
 */
proto.airchat.channel.v2.JoinChannelRequest.prototype.setInviteCode = function (
  value
) {
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
  proto.airchat.channel.v2.JoinChannelResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.channel.v2.JoinChannelResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.JoinChannelResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.JoinChannelResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channel:
          (f = msg.getChannel()) &&
          airchat_channel_v2_channel_pb.Channel.toObject(includeInstance, f)
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
 * @return {!proto.airchat.channel.v2.JoinChannelResponse}
 */
proto.airchat.channel.v2.JoinChannelResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.JoinChannelResponse();
  return proto.airchat.channel.v2.JoinChannelResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.JoinChannelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.JoinChannelResponse}
 */
proto.airchat.channel.v2.JoinChannelResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_channel_v2_channel_pb.Channel();
          reader.readMessage(
            value,
            airchat_channel_v2_channel_pb.Channel.deserializeBinaryFromReader
          );
          msg.setChannel(value);
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
proto.airchat.channel.v2.JoinChannelResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.JoinChannelResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.JoinChannelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.JoinChannelResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannel();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_channel_v2_channel_pb.Channel.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Channel channel = 1;
 * @return {?proto.airchat.channel.v2.Channel}
 */
proto.airchat.channel.v2.JoinChannelResponse.prototype.getChannel =
  function () {
    return /** @type{?proto.airchat.channel.v2.Channel} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_channel_v2_channel_pb.Channel,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.channel.v2.Channel|undefined} value
 * @return {!proto.airchat.channel.v2.JoinChannelResponse} returns this
 */
proto.airchat.channel.v2.JoinChannelResponse.prototype.setChannel = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.channel.v2.JoinChannelResponse} returns this
 */
proto.airchat.channel.v2.JoinChannelResponse.prototype.clearChannel =
  function () {
    return this.setChannel(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.channel.v2.JoinChannelResponse.prototype.hasChannel =
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
  proto.airchat.channel.v2.LeaveChannelRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.channel.v2.LeaveChannelRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.LeaveChannelRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.LeaveChannelRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelId: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.airchat.channel.v2.LeaveChannelRequest}
 */
proto.airchat.channel.v2.LeaveChannelRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.LeaveChannelRequest();
  return proto.airchat.channel.v2.LeaveChannelRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.LeaveChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.LeaveChannelRequest}
 */
proto.airchat.channel.v2.LeaveChannelRequest.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.LeaveChannelRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.LeaveChannelRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.LeaveChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.LeaveChannelRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.LeaveChannelRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.LeaveChannelRequest} returns this
 */
proto.airchat.channel.v2.LeaveChannelRequest.prototype.setChannelId = function (
  value
) {
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
  proto.airchat.channel.v2.LeaveChannelResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.channel.v2.LeaveChannelResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.LeaveChannelResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.LeaveChannelResponse.toObject = function (
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
 * @return {!proto.airchat.channel.v2.LeaveChannelResponse}
 */
proto.airchat.channel.v2.LeaveChannelResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.LeaveChannelResponse();
  return proto.airchat.channel.v2.LeaveChannelResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.LeaveChannelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.LeaveChannelResponse}
 */
proto.airchat.channel.v2.LeaveChannelResponse.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.LeaveChannelResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.LeaveChannelResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.LeaveChannelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.LeaveChannelResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.airchat.channel.v2.GetChannelRequest.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.airchat.channel.v2.GetChannelRequest.IdentifierCase = {
  IDENTIFIER_NOT_SET: 0,
  CHANNEL_ID: 1,
  HANDLE: 2
};

/**
 * @return {proto.airchat.channel.v2.GetChannelRequest.IdentifierCase}
 */
proto.airchat.channel.v2.GetChannelRequest.prototype.getIdentifierCase =
  function () {
    return /** @type {proto.airchat.channel.v2.GetChannelRequest.IdentifierCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.channel.v2.GetChannelRequest.oneofGroups_[0]
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
  proto.airchat.channel.v2.GetChannelRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.channel.v2.GetChannelRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetChannelRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetChannelRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        handle: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.airchat.channel.v2.GetChannelRequest}
 */
proto.airchat.channel.v2.GetChannelRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.GetChannelRequest();
  return proto.airchat.channel.v2.GetChannelRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetChannelRequest}
 */
proto.airchat.channel.v2.GetChannelRequest.deserializeBinaryFromReader =
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
          msg.setHandle(value);
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
proto.airchat.channel.v2.GetChannelRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetChannelRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetChannelRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
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
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.GetChannelRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.GetChannelRequest} returns this
 */
proto.airchat.channel.v2.GetChannelRequest.prototype.setChannelId = function (
  value
) {
  return jspb.Message.setOneofField(
    this,
    1,
    proto.airchat.channel.v2.GetChannelRequest.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.channel.v2.GetChannelRequest} returns this
 */
proto.airchat.channel.v2.GetChannelRequest.prototype.clearChannelId =
  function () {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.channel.v2.GetChannelRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.channel.v2.GetChannelRequest.prototype.hasChannelId =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * optional string handle = 2;
 * @return {string}
 */
proto.airchat.channel.v2.GetChannelRequest.prototype.getHandle = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.GetChannelRequest} returns this
 */
proto.airchat.channel.v2.GetChannelRequest.prototype.setHandle = function (
  value
) {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.airchat.channel.v2.GetChannelRequest.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.channel.v2.GetChannelRequest} returns this
 */
proto.airchat.channel.v2.GetChannelRequest.prototype.clearHandle = function () {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.airchat.channel.v2.GetChannelRequest.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.channel.v2.GetChannelRequest.prototype.hasHandle = function () {
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
  proto.airchat.channel.v2.GetChannelResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.channel.v2.GetChannelResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetChannelResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetChannelResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channel:
          (f = msg.getChannel()) &&
          airchat_channel_v2_channel_pb.Channel.toObject(includeInstance, f)
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
 * @return {!proto.airchat.channel.v2.GetChannelResponse}
 */
proto.airchat.channel.v2.GetChannelResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.GetChannelResponse();
  return proto.airchat.channel.v2.GetChannelResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetChannelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetChannelResponse}
 */
proto.airchat.channel.v2.GetChannelResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_channel_v2_channel_pb.Channel();
          reader.readMessage(
            value,
            airchat_channel_v2_channel_pb.Channel.deserializeBinaryFromReader
          );
          msg.setChannel(value);
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
proto.airchat.channel.v2.GetChannelResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetChannelResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetChannelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetChannelResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      airchat_channel_v2_channel_pb.Channel.serializeBinaryToWriter
    );
  }
};

/**
 * optional Channel channel = 1;
 * @return {?proto.airchat.channel.v2.Channel}
 */
proto.airchat.channel.v2.GetChannelResponse.prototype.getChannel = function () {
  return /** @type{?proto.airchat.channel.v2.Channel} */ (
    jspb.Message.getWrapperField(this, airchat_channel_v2_channel_pb.Channel, 1)
  );
};

/**
 * @param {?proto.airchat.channel.v2.Channel|undefined} value
 * @return {!proto.airchat.channel.v2.GetChannelResponse} returns this
 */
proto.airchat.channel.v2.GetChannelResponse.prototype.setChannel = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.channel.v2.GetChannelResponse} returns this
 */
proto.airchat.channel.v2.GetChannelResponse.prototype.clearChannel =
  function () {
    return this.setChannel(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.channel.v2.GetChannelResponse.prototype.hasChannel = function () {
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
  proto.airchat.channel.v2.GetOwnerChannelsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GetOwnerChannelsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetOwnerChannelsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetOwnerChannelsRequest.toObject = function (
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
 * @return {!proto.airchat.channel.v2.GetOwnerChannelsRequest}
 */
proto.airchat.channel.v2.GetOwnerChannelsRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.GetOwnerChannelsRequest();
  return proto.airchat.channel.v2.GetOwnerChannelsRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetOwnerChannelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetOwnerChannelsRequest}
 */
proto.airchat.channel.v2.GetOwnerChannelsRequest.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.GetOwnerChannelsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetOwnerChannelsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetOwnerChannelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetOwnerChannelsRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.channel.v2.GetOwnerChannelsResponse.repeatedFields_ = [1];

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
  proto.airchat.channel.v2.GetOwnerChannelsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GetOwnerChannelsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetOwnerChannelsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetOwnerChannelsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelList: jspb.Message.toObjectList(
          msg.getChannelList(),
          airchat_channel_v2_channel_pb.Channel.toObject,
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
 * @return {!proto.airchat.channel.v2.GetOwnerChannelsResponse}
 */
proto.airchat.channel.v2.GetOwnerChannelsResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.channel.v2.GetOwnerChannelsResponse();
  return proto.airchat.channel.v2.GetOwnerChannelsResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetOwnerChannelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetOwnerChannelsResponse}
 */
proto.airchat.channel.v2.GetOwnerChannelsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_channel_v2_channel_pb.Channel();
          reader.readMessage(
            value,
            airchat_channel_v2_channel_pb.Channel.deserializeBinaryFromReader
          );
          msg.addChannel(value);
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
proto.airchat.channel.v2.GetOwnerChannelsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetOwnerChannelsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetOwnerChannelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetOwnerChannelsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_channel_v2_channel_pb.Channel.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated Channel channel = 1;
 * @return {!Array<!proto.airchat.channel.v2.Channel>}
 */
proto.airchat.channel.v2.GetOwnerChannelsResponse.prototype.getChannelList =
  function () {
    return /** @type{!Array<!proto.airchat.channel.v2.Channel>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_channel_v2_channel_pb.Channel,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.channel.v2.Channel>} value
 * @return {!proto.airchat.channel.v2.GetOwnerChannelsResponse} returns this
 */
proto.airchat.channel.v2.GetOwnerChannelsResponse.prototype.setChannelList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.channel.v2.Channel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.channel.v2.Channel}
 */
proto.airchat.channel.v2.GetOwnerChannelsResponse.prototype.addChannel =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.channel.v2.Channel,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.channel.v2.GetOwnerChannelsResponse} returns this
 */
proto.airchat.channel.v2.GetOwnerChannelsResponse.prototype.clearChannelList =
  function () {
    return this.setChannelList([]);
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
  proto.airchat.channel.v2.GetParticipantChannelsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GetParticipantChannelsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetParticipantChannelsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetParticipantChannelsRequest.toObject = function (
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
 * @return {!proto.airchat.channel.v2.GetParticipantChannelsRequest}
 */
proto.airchat.channel.v2.GetParticipantChannelsRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.GetParticipantChannelsRequest();
    return proto.airchat.channel.v2.GetParticipantChannelsRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetParticipantChannelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetParticipantChannelsRequest}
 */
proto.airchat.channel.v2.GetParticipantChannelsRequest.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.GetParticipantChannelsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetParticipantChannelsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetParticipantChannelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetParticipantChannelsRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.channel.v2.GetParticipantChannelsResponse.repeatedFields_ = [1];

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
  proto.airchat.channel.v2.GetParticipantChannelsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GetParticipantChannelsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetParticipantChannelsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetParticipantChannelsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelList: jspb.Message.toObjectList(
          msg.getChannelList(),
          airchat_channel_v2_channel_pb.Channel.toObject,
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
 * @return {!proto.airchat.channel.v2.GetParticipantChannelsResponse}
 */
proto.airchat.channel.v2.GetParticipantChannelsResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.GetParticipantChannelsResponse();
    return proto.airchat.channel.v2.GetParticipantChannelsResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetParticipantChannelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetParticipantChannelsResponse}
 */
proto.airchat.channel.v2.GetParticipantChannelsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_channel_v2_channel_pb.Channel();
          reader.readMessage(
            value,
            airchat_channel_v2_channel_pb.Channel.deserializeBinaryFromReader
          );
          msg.addChannel(value);
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
proto.airchat.channel.v2.GetParticipantChannelsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetParticipantChannelsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetParticipantChannelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetParticipantChannelsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_channel_v2_channel_pb.Channel.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated Channel channel = 1;
 * @return {!Array<!proto.airchat.channel.v2.Channel>}
 */
proto.airchat.channel.v2.GetParticipantChannelsResponse.prototype.getChannelList =
  function () {
    return /** @type{!Array<!proto.airchat.channel.v2.Channel>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_channel_v2_channel_pb.Channel,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.channel.v2.Channel>} value
 * @return {!proto.airchat.channel.v2.GetParticipantChannelsResponse} returns this
 */
proto.airchat.channel.v2.GetParticipantChannelsResponse.prototype.setChannelList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.channel.v2.Channel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.channel.v2.Channel}
 */
proto.airchat.channel.v2.GetParticipantChannelsResponse.prototype.addChannel =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.channel.v2.Channel,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.channel.v2.GetParticipantChannelsResponse} returns this
 */
proto.airchat.channel.v2.GetParticipantChannelsResponse.prototype.clearChannelList =
  function () {
    return this.setChannelList([]);
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
  proto.airchat.channel.v2.GenerateChannelInviteCodeRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GenerateChannelInviteCodeRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GenerateChannelInviteCodeRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GenerateChannelInviteCodeRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          channelId: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.airchat.channel.v2.GenerateChannelInviteCodeRequest}
 */
proto.airchat.channel.v2.GenerateChannelInviteCodeRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.GenerateChannelInviteCodeRequest();
    return proto.airchat.channel.v2.GenerateChannelInviteCodeRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GenerateChannelInviteCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GenerateChannelInviteCodeRequest}
 */
proto.airchat.channel.v2.GenerateChannelInviteCodeRequest.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.GenerateChannelInviteCodeRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GenerateChannelInviteCodeRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GenerateChannelInviteCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GenerateChannelInviteCodeRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.GenerateChannelInviteCodeRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.GenerateChannelInviteCodeRequest} returns this
 */
proto.airchat.channel.v2.GenerateChannelInviteCodeRequest.prototype.setChannelId =
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
  proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GenerateChannelInviteCodeResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          channelInviteCode:
            (f = msg.getChannelInviteCode()) &&
            airchat_channel_v2_channel_pb.ChannelInviteCode.toObject(
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
 * @return {!proto.airchat.channel.v2.GenerateChannelInviteCodeResponse}
 */
proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.GenerateChannelInviteCodeResponse();
    return proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GenerateChannelInviteCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GenerateChannelInviteCodeResponse}
 */
proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_channel_v2_channel_pb.ChannelInviteCode();
          reader.readMessage(
            value,
            airchat_channel_v2_channel_pb.ChannelInviteCode
              .deserializeBinaryFromReader
          );
          msg.setChannelInviteCode(value);
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
proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GenerateChannelInviteCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelInviteCode();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_channel_v2_channel_pb.ChannelInviteCode.serializeBinaryToWriter
      );
    }
  };

/**
 * optional ChannelInviteCode channel_invite_code = 1;
 * @return {?proto.airchat.channel.v2.ChannelInviteCode}
 */
proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.prototype.getChannelInviteCode =
  function () {
    return /** @type{?proto.airchat.channel.v2.ChannelInviteCode} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_channel_v2_channel_pb.ChannelInviteCode,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.channel.v2.ChannelInviteCode|undefined} value
 * @return {!proto.airchat.channel.v2.GenerateChannelInviteCodeResponse} returns this
 */
proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.prototype.setChannelInviteCode =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.channel.v2.GenerateChannelInviteCodeResponse} returns this
 */
proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.prototype.clearChannelInviteCode =
  function () {
    return this.setChannelInviteCode(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.channel.v2.GenerateChannelInviteCodeResponse.prototype.hasChannelInviteCode =
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
  proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.RemoveChannelInviteCodeRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        inviteCode: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.airchat.channel.v2.RemoveChannelInviteCodeRequest}
 */
proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.RemoveChannelInviteCodeRequest();
    return proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.RemoveChannelInviteCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.RemoveChannelInviteCodeRequest}
 */
proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.deserializeBinaryFromReader =
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
          msg.setInviteCode(value);
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
proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.RemoveChannelInviteCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getInviteCode();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.RemoveChannelInviteCodeRequest} returns this
 */
proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.prototype.setChannelId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string invite_code = 2;
 * @return {string}
 */
proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.prototype.getInviteCode =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.RemoveChannelInviteCodeRequest} returns this
 */
proto.airchat.channel.v2.RemoveChannelInviteCodeRequest.prototype.setInviteCode =
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
  proto.airchat.channel.v2.RemoveChannelInviteCodeResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.RemoveChannelInviteCodeResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.RemoveChannelInviteCodeResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.RemoveChannelInviteCodeResponse.toObject = function (
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
 * @return {!proto.airchat.channel.v2.RemoveChannelInviteCodeResponse}
 */
proto.airchat.channel.v2.RemoveChannelInviteCodeResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.RemoveChannelInviteCodeResponse();
    return proto.airchat.channel.v2.RemoveChannelInviteCodeResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.RemoveChannelInviteCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.RemoveChannelInviteCodeResponse}
 */
proto.airchat.channel.v2.RemoveChannelInviteCodeResponse.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.RemoveChannelInviteCodeResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.RemoveChannelInviteCodeResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.RemoveChannelInviteCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.RemoveChannelInviteCodeResponse.serializeBinaryToWriter =
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
  proto.airchat.channel.v2.GetChannelInviteCodesRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GetChannelInviteCodesRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetChannelInviteCodesRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetChannelInviteCodesRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelId: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.airchat.channel.v2.GetChannelInviteCodesRequest}
 */
proto.airchat.channel.v2.GetChannelInviteCodesRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.GetChannelInviteCodesRequest();
    return proto.airchat.channel.v2.GetChannelInviteCodesRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetChannelInviteCodesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetChannelInviteCodesRequest}
 */
proto.airchat.channel.v2.GetChannelInviteCodesRequest.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.GetChannelInviteCodesRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetChannelInviteCodesRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetChannelInviteCodesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetChannelInviteCodesRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.GetChannelInviteCodesRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.GetChannelInviteCodesRequest} returns this
 */
proto.airchat.channel.v2.GetChannelInviteCodesRequest.prototype.setChannelId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.channel.v2.GetChannelInviteCodesResponse.repeatedFields_ = [1];

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
  proto.airchat.channel.v2.GetChannelInviteCodesResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GetChannelInviteCodesResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetChannelInviteCodesResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetChannelInviteCodesResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelInviteCodeList: jspb.Message.toObjectList(
          msg.getChannelInviteCodeList(),
          airchat_channel_v2_channel_pb.ChannelInviteCode.toObject,
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
 * @return {!proto.airchat.channel.v2.GetChannelInviteCodesResponse}
 */
proto.airchat.channel.v2.GetChannelInviteCodesResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.GetChannelInviteCodesResponse();
    return proto.airchat.channel.v2.GetChannelInviteCodesResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetChannelInviteCodesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetChannelInviteCodesResponse}
 */
proto.airchat.channel.v2.GetChannelInviteCodesResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_channel_v2_channel_pb.ChannelInviteCode();
          reader.readMessage(
            value,
            airchat_channel_v2_channel_pb.ChannelInviteCode
              .deserializeBinaryFromReader
          );
          msg.addChannelInviteCode(value);
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
proto.airchat.channel.v2.GetChannelInviteCodesResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetChannelInviteCodesResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetChannelInviteCodesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetChannelInviteCodesResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelInviteCodeList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_channel_v2_channel_pb.ChannelInviteCode.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated ChannelInviteCode channel_invite_code = 1;
 * @return {!Array<!proto.airchat.channel.v2.ChannelInviteCode>}
 */
proto.airchat.channel.v2.GetChannelInviteCodesResponse.prototype.getChannelInviteCodeList =
  function () {
    return /** @type{!Array<!proto.airchat.channel.v2.ChannelInviteCode>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_channel_v2_channel_pb.ChannelInviteCode,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.channel.v2.ChannelInviteCode>} value
 * @return {!proto.airchat.channel.v2.GetChannelInviteCodesResponse} returns this
 */
proto.airchat.channel.v2.GetChannelInviteCodesResponse.prototype.setChannelInviteCodeList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.channel.v2.ChannelInviteCode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.channel.v2.ChannelInviteCode}
 */
proto.airchat.channel.v2.GetChannelInviteCodesResponse.prototype.addChannelInviteCode =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.channel.v2.ChannelInviteCode,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.channel.v2.GetChannelInviteCodesResponse} returns this
 */
proto.airchat.channel.v2.GetChannelInviteCodesResponse.prototype.clearChannelInviteCodeList =
  function () {
    return this.setChannelInviteCodeList([]);
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
  proto.airchat.channel.v2.HideChannelMessageRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.HideChannelMessageRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.HideChannelMessageRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.HideChannelMessageRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        recordingId: jspb.Message.getFieldWithDefault(msg, 2, ''),
        hidden: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.airchat.channel.v2.HideChannelMessageRequest}
 */
proto.airchat.channel.v2.HideChannelMessageRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.HideChannelMessageRequest();
    return proto.airchat.channel.v2.HideChannelMessageRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.HideChannelMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.HideChannelMessageRequest}
 */
proto.airchat.channel.v2.HideChannelMessageRequest.deserializeBinaryFromReader =
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
          msg.setRecordingId(value);
          break;
        case 3:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setHidden(value);
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
proto.airchat.channel.v2.HideChannelMessageRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.HideChannelMessageRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.HideChannelMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.HideChannelMessageRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getRecordingId();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getHidden();
    if (f) {
      writer.writeBool(3, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.HideChannelMessageRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.HideChannelMessageRequest} returns this
 */
proto.airchat.channel.v2.HideChannelMessageRequest.prototype.setChannelId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string recording_id = 2;
 * @return {string}
 */
proto.airchat.channel.v2.HideChannelMessageRequest.prototype.getRecordingId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.HideChannelMessageRequest} returns this
 */
proto.airchat.channel.v2.HideChannelMessageRequest.prototype.setRecordingId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * optional bool hidden = 3;
 * @return {boolean}
 */
proto.airchat.channel.v2.HideChannelMessageRequest.prototype.getHidden =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 3, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.channel.v2.HideChannelMessageRequest} returns this
 */
proto.airchat.channel.v2.HideChannelMessageRequest.prototype.setHidden =
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
  proto.airchat.channel.v2.HideChannelMessageResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.HideChannelMessageResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.HideChannelMessageResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.HideChannelMessageResponse.toObject = function (
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
 * @return {!proto.airchat.channel.v2.HideChannelMessageResponse}
 */
proto.airchat.channel.v2.HideChannelMessageResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.v2.HideChannelMessageResponse();
    return proto.airchat.channel.v2.HideChannelMessageResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.HideChannelMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.HideChannelMessageResponse}
 */
proto.airchat.channel.v2.HideChannelMessageResponse.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.HideChannelMessageResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.HideChannelMessageResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.HideChannelMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.HideChannelMessageResponse.serializeBinaryToWriter =
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
 * optional airchat.message.v2.Message message = 1;
 * @return {?proto.airchat.message.v2.Message}
 */
proto.airchat.channel.v2.HideChannelMessageResponse.prototype.getMessage =
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
 * @return {!proto.airchat.channel.v2.HideChannelMessageResponse} returns this
 */
proto.airchat.channel.v2.HideChannelMessageResponse.prototype.setMessage =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.channel.v2.HideChannelMessageResponse} returns this
 */
proto.airchat.channel.v2.HideChannelMessageResponse.prototype.clearMessage =
  function () {
    return this.setMessage(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.channel.v2.HideChannelMessageResponse.prototype.hasMessage =
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
  proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.CreateChannelParticipantInviteRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          channelId: jspb.Message.getFieldWithDefault(msg, 1, ''),
          participantUserId: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.airchat.channel.v2.CreateChannelParticipantInviteRequest}
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.channel.v2.CreateChannelParticipantInviteRequest();
    return proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.CreateChannelParticipantInviteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.CreateChannelParticipantInviteRequest}
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.deserializeBinaryFromReader =
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
          msg.setParticipantUserId(value);
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
proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.CreateChannelParticipantInviteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getParticipantUserId();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.CreateChannelParticipantInviteRequest} returns this
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.prototype.setChannelId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string participant_user_id = 2;
 * @return {string}
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.prototype.getParticipantUserId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.CreateChannelParticipantInviteRequest} returns this
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteRequest.prototype.setParticipantUserId =
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
  proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.CreateChannelParticipantInviteResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          channelParticipantInvite:
            (f = msg.getChannelParticipantInvite()) &&
            airchat_channel_v2_channel_pb.ChannelParticipantInvite.toObject(
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
 * @return {!proto.airchat.channel.v2.CreateChannelParticipantInviteResponse}
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.channel.v2.CreateChannelParticipantInviteResponse();
    return proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.CreateChannelParticipantInviteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.CreateChannelParticipantInviteResponse}
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value =
            new airchat_channel_v2_channel_pb.ChannelParticipantInvite();
          reader.readMessage(
            value,
            airchat_channel_v2_channel_pb.ChannelParticipantInvite
              .deserializeBinaryFromReader
          );
          msg.setChannelParticipantInvite(value);
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
proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.CreateChannelParticipantInviteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelParticipantInvite();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_channel_v2_channel_pb.ChannelParticipantInvite
          .serializeBinaryToWriter
      );
    }
  };

/**
 * optional ChannelParticipantInvite channel_participant_invite = 1;
 * @return {?proto.airchat.channel.v2.ChannelParticipantInvite}
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.prototype.getChannelParticipantInvite =
  function () {
    return /** @type{?proto.airchat.channel.v2.ChannelParticipantInvite} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_channel_v2_channel_pb.ChannelParticipantInvite,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.channel.v2.ChannelParticipantInvite|undefined} value
 * @return {!proto.airchat.channel.v2.CreateChannelParticipantInviteResponse} returns this
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.prototype.setChannelParticipantInvite =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.channel.v2.CreateChannelParticipantInviteResponse} returns this
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.prototype.clearChannelParticipantInvite =
  function () {
    return this.setChannelParticipantInvite(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.channel.v2.CreateChannelParticipantInviteResponse.prototype.hasChannelParticipantInvite =
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
  proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.RetractChannelParticipantInviteRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          channelId: jspb.Message.getFieldWithDefault(msg, 1, ''),
          participantUserId: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.airchat.channel.v2.RetractChannelParticipantInviteRequest}
 */
proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.channel.v2.RetractChannelParticipantInviteRequest();
    return proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.RetractChannelParticipantInviteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.RetractChannelParticipantInviteRequest}
 */
proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.deserializeBinaryFromReader =
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
          msg.setParticipantUserId(value);
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
proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.RetractChannelParticipantInviteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getParticipantUserId();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.RetractChannelParticipantInviteRequest} returns this
 */
proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.prototype.setChannelId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string participant_user_id = 2;
 * @return {string}
 */
proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.prototype.getParticipantUserId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.RetractChannelParticipantInviteRequest} returns this
 */
proto.airchat.channel.v2.RetractChannelParticipantInviteRequest.prototype.setParticipantUserId =
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
  proto.airchat.channel.v2.RetractChannelParticipantInviteResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.RetractChannelParticipantInviteResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.RetractChannelParticipantInviteResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.RetractChannelParticipantInviteResponse.toObject =
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
 * @return {!proto.airchat.channel.v2.RetractChannelParticipantInviteResponse}
 */
proto.airchat.channel.v2.RetractChannelParticipantInviteResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.channel.v2.RetractChannelParticipantInviteResponse();
    return proto.airchat.channel.v2.RetractChannelParticipantInviteResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.RetractChannelParticipantInviteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.RetractChannelParticipantInviteResponse}
 */
proto.airchat.channel.v2.RetractChannelParticipantInviteResponse.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.RetractChannelParticipantInviteResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.RetractChannelParticipantInviteResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.RetractChannelParticipantInviteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.RetractChannelParticipantInviteResponse.serializeBinaryToWriter =
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
  proto.airchat.channel.v2.RejectChannelParticipantInviteRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.RejectChannelParticipantInviteRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.RejectChannelParticipantInviteRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.RejectChannelParticipantInviteRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          channelId: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.airchat.channel.v2.RejectChannelParticipantInviteRequest}
 */
proto.airchat.channel.v2.RejectChannelParticipantInviteRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.channel.v2.RejectChannelParticipantInviteRequest();
    return proto.airchat.channel.v2.RejectChannelParticipantInviteRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.RejectChannelParticipantInviteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.RejectChannelParticipantInviteRequest}
 */
proto.airchat.channel.v2.RejectChannelParticipantInviteRequest.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.RejectChannelParticipantInviteRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.RejectChannelParticipantInviteRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.RejectChannelParticipantInviteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.RejectChannelParticipantInviteRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.airchat.channel.v2.RejectChannelParticipantInviteRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.RejectChannelParticipantInviteRequest} returns this
 */
proto.airchat.channel.v2.RejectChannelParticipantInviteRequest.prototype.setChannelId =
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
  proto.airchat.channel.v2.RejectChannelParticipantInviteResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.RejectChannelParticipantInviteResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.RejectChannelParticipantInviteResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.RejectChannelParticipantInviteResponse.toObject =
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
 * @return {!proto.airchat.channel.v2.RejectChannelParticipantInviteResponse}
 */
proto.airchat.channel.v2.RejectChannelParticipantInviteResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.channel.v2.RejectChannelParticipantInviteResponse();
    return proto.airchat.channel.v2.RejectChannelParticipantInviteResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.RejectChannelParticipantInviteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.RejectChannelParticipantInviteResponse}
 */
proto.airchat.channel.v2.RejectChannelParticipantInviteResponse.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.RejectChannelParticipantInviteResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.RejectChannelParticipantInviteResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.RejectChannelParticipantInviteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.RejectChannelParticipantInviteResponse.serializeBinaryToWriter =
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
  proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.toObject =
    function (includeInstance, msg) {
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
 * @return {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest}
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest();
    return proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest}
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.serializeBinaryToWriter =
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
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.prototype.getChannelId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest} returns this
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.prototype.setChannelId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string page_key = 2;
 * @return {string}
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest} returns this
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesRequest.prototype.setPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.repeatedFields_ =
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
  proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          channelParticipantInviteList: jspb.Message.toObjectList(
            msg.getChannelParticipantInviteList(),
            airchat_channel_v2_channel_pb.ChannelParticipantInvite.toObject,
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
 * @return {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse}
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse();
    return proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse}
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value =
            new airchat_channel_v2_channel_pb.ChannelParticipantInvite();
          reader.readMessage(
            value,
            airchat_channel_v2_channel_pb.ChannelParticipantInvite
              .deserializeBinaryFromReader
          );
          msg.addChannelParticipantInvite(value);
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
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelParticipantInviteList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_channel_v2_channel_pb.ChannelParticipantInvite
          .serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated ChannelParticipantInvite channel_participant_invite = 1;
 * @return {!Array<!proto.airchat.channel.v2.ChannelParticipantInvite>}
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.prototype.getChannelParticipantInviteList =
  function () {
    return /** @type{!Array<!proto.airchat.channel.v2.ChannelParticipantInvite>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_channel_v2_channel_pb.ChannelParticipantInvite,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.channel.v2.ChannelParticipantInvite>} value
 * @return {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse} returns this
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.prototype.setChannelParticipantInviteList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.channel.v2.ChannelParticipantInvite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.channel.v2.ChannelParticipantInvite}
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.prototype.addChannelParticipantInvite =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.channel.v2.ChannelParticipantInvite,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse} returns this
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.prototype.clearChannelParticipantInviteList =
  function () {
    return this.setChannelParticipantInviteList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse} returns this
 */
proto.airchat.channel.v2.GetPendingChannelParticipantInvitesResponse.prototype.setNextPageKey =
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
  proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest.toObject =
    function (includeInstance, msg) {
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
 * @return {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest}
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest();
    return proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest}
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest.deserializeBinaryFromReader =
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
proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest.serializeBinaryToWriter =
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
proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest} returns this
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesRequest.prototype.setPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.repeatedFields_ =
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
  proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          channelParticipantInviteList: jspb.Message.toObjectList(
            msg.getChannelParticipantInviteList(),
            airchat_channel_v2_channel_pb.ChannelParticipantInvite.toObject,
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
 * @return {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse}
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse();
    return proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse}
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value =
            new airchat_channel_v2_channel_pb.ChannelParticipantInvite();
          reader.readMessage(
            value,
            airchat_channel_v2_channel_pb.ChannelParticipantInvite
              .deserializeBinaryFromReader
          );
          msg.addChannelParticipantInvite(value);
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
proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelParticipantInviteList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_channel_v2_channel_pb.ChannelParticipantInvite
          .serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated ChannelParticipantInvite channel_participant_invite = 1;
 * @return {!Array<!proto.airchat.channel.v2.ChannelParticipantInvite>}
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.prototype.getChannelParticipantInviteList =
  function () {
    return /** @type{!Array<!proto.airchat.channel.v2.ChannelParticipantInvite>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_channel_v2_channel_pb.ChannelParticipantInvite,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.channel.v2.ChannelParticipantInvite>} value
 * @return {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse} returns this
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.prototype.setChannelParticipantInviteList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.channel.v2.ChannelParticipantInvite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.channel.v2.ChannelParticipantInvite}
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.prototype.addChannelParticipantInvite =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.channel.v2.ChannelParticipantInvite,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse} returns this
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.prototype.clearChannelParticipantInviteList =
  function () {
    return this.setChannelParticipantInviteList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse} returns this
 */
proto.airchat.channel.v2.GetUserChannelParticipantInvitesResponse.prototype.setNextPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

goog.object.extend(exports, proto.airchat.channel.v2);
