// source: airchat/user/v2/user_api.proto
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
goog.exportSymbol('proto.airchat.user.v2.BlockUserRequest', null, global);
goog.exportSymbol('proto.airchat.user.v2.BlockUserResponse', null, global);
goog.exportSymbol(
  'proto.airchat.user.v2.CheckUsernameAvailableRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.user.v2.CheckUsernameAvailableResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.user.v2.DeleteUserRequest', null, global);
goog.exportSymbol('proto.airchat.user.v2.DeleteUserResponse', null, global);
goog.exportSymbol('proto.airchat.user.v2.FollowUserRequest', null, global);
goog.exportSymbol(
  'proto.airchat.user.v2.FollowUserRequest.IdentifierCase',
  null,
  global
);
goog.exportSymbol('proto.airchat.user.v2.FollowUserResponse', null, global);
goog.exportSymbol('proto.airchat.user.v2.GetBlockedUsersRequest', null, global);
goog.exportSymbol(
  'proto.airchat.user.v2.GetBlockedUsersResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.user.v2.GetCurrentUserRestrictionsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.user.v2.GetCurrentUserRestrictionsResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.user.v2.GetFeaturedUsersRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.user.v2.GetFeaturedUsersResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.user.v2.GetFollowersRequest', null, global);
goog.exportSymbol(
  'proto.airchat.user.v2.GetFollowersRequest.RequestByCase',
  null,
  global
);
goog.exportSymbol('proto.airchat.user.v2.GetFollowersResponse', null, global);
goog.exportSymbol('proto.airchat.user.v2.GetFollowingRequest', null, global);
goog.exportSymbol(
  'proto.airchat.user.v2.GetFollowingRequest.RequestByCase',
  null,
  global
);
goog.exportSymbol('proto.airchat.user.v2.GetFollowingResponse', null, global);
goog.exportSymbol('proto.airchat.user.v2.GetInterestsRequest', null, global);
goog.exportSymbol('proto.airchat.user.v2.GetInterestsResponse', null, global);
goog.exportSymbol(
  'proto.airchat.user.v2.GetMultipleUsersRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.user.v2.GetMultipleUsersResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.user.v2.GetMutedUsersRequest', null, global);
goog.exportSymbol('proto.airchat.user.v2.GetMutedUsersResponse', null, global);
goog.exportSymbol('proto.airchat.user.v2.GetUserRequest', null, global);
goog.exportSymbol(
  'proto.airchat.user.v2.GetUserRequest.IdentifierCase',
  null,
  global
);
goog.exportSymbol('proto.airchat.user.v2.GetUserResponse', null, global);
goog.exportSymbol(
  'proto.airchat.user.v2.GetUserRestrictionsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.user.v2.GetUserRestrictionsResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.user.v2.GetUserWithAnalyticsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.user.v2.GetUserWithAnalyticsResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.user.v2.InviteContactWithAttributionRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.user.v2.InviteContactWithAttributionResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.user.v2.MuteUserRequest', null, global);
goog.exportSymbol('proto.airchat.user.v2.MuteUserResponse', null, global);
goog.exportSymbol('proto.airchat.user.v2.ReportUserRequest', null, global);
goog.exportSymbol('proto.airchat.user.v2.ReportUserResponse', null, global);
goog.exportSymbol(
  'proto.airchat.user.v2.SetUserInterestsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.user.v2.SetUserInterestsResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.user.v2.SuspendUserRequest', null, global);
goog.exportSymbol('proto.airchat.user.v2.SuspendUserResponse', null, global);
goog.exportSymbol('proto.airchat.user.v2.UnblockUserRequest', null, global);
goog.exportSymbol('proto.airchat.user.v2.UnblockUserResponse', null, global);
goog.exportSymbol('proto.airchat.user.v2.UnfollowUserRequest', null, global);
goog.exportSymbol('proto.airchat.user.v2.UnfollowUserResponse', null, global);
goog.exportSymbol('proto.airchat.user.v2.UnmuteUserRequest', null, global);
goog.exportSymbol('proto.airchat.user.v2.UnmuteUserResponse', null, global);
goog.exportSymbol('proto.airchat.user.v2.UpdateUserRequest', null, global);
goog.exportSymbol('proto.airchat.user.v2.UpdateUserResponse', null, global);
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
proto.airchat.user.v2.UpdateUserRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.user.v2.UpdateUserRequest.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.user.v2.UpdateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.UpdateUserRequest.displayName =
    'proto.airchat.user.v2.UpdateUserRequest';
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
proto.airchat.user.v2.UpdateUserResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.UpdateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.UpdateUserResponse.displayName =
    'proto.airchat.user.v2.UpdateUserResponse';
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
proto.airchat.user.v2.GetUserRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.user.v2.GetUserRequest.oneofGroups_
  );
};
goog.inherits(proto.airchat.user.v2.GetUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetUserRequest.displayName =
    'proto.airchat.user.v2.GetUserRequest';
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
proto.airchat.user.v2.GetUserResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.GetUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetUserResponse.displayName =
    'proto.airchat.user.v2.GetUserResponse';
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
proto.airchat.user.v2.GetMultipleUsersRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.user.v2.GetMultipleUsersRequest.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.user.v2.GetMultipleUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetMultipleUsersRequest.displayName =
    'proto.airchat.user.v2.GetMultipleUsersRequest';
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
proto.airchat.user.v2.GetMultipleUsersResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.user.v2.GetMultipleUsersResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.user.v2.GetMultipleUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetMultipleUsersResponse.displayName =
    'proto.airchat.user.v2.GetMultipleUsersResponse';
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
proto.airchat.user.v2.GetUserRestrictionsRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.user.v2.GetUserRestrictionsRequest.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.user.v2.GetUserRestrictionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetUserRestrictionsRequest.displayName =
    'proto.airchat.user.v2.GetUserRestrictionsRequest';
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
proto.airchat.user.v2.GetUserRestrictionsResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.user.v2.GetUserRestrictionsResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.user.v2.GetUserRestrictionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetUserRestrictionsResponse.displayName =
    'proto.airchat.user.v2.GetUserRestrictionsResponse';
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
proto.airchat.user.v2.CheckUsernameAvailableRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.user.v2.CheckUsernameAvailableRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.CheckUsernameAvailableRequest.displayName =
    'proto.airchat.user.v2.CheckUsernameAvailableRequest';
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
proto.airchat.user.v2.CheckUsernameAvailableResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.user.v2.CheckUsernameAvailableResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.CheckUsernameAvailableResponse.displayName =
    'proto.airchat.user.v2.CheckUsernameAvailableResponse';
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
proto.airchat.user.v2.GetCurrentUserRestrictionsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.user.v2.GetCurrentUserRestrictionsRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetCurrentUserRestrictionsRequest.displayName =
    'proto.airchat.user.v2.GetCurrentUserRestrictionsRequest';
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
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.user.v2.GetCurrentUserRestrictionsResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.displayName =
    'proto.airchat.user.v2.GetCurrentUserRestrictionsResponse';
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
proto.airchat.user.v2.ReportUserRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.ReportUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.ReportUserRequest.displayName =
    'proto.airchat.user.v2.ReportUserRequest';
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
proto.airchat.user.v2.ReportUserResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.ReportUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.ReportUserResponse.displayName =
    'proto.airchat.user.v2.ReportUserResponse';
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
proto.airchat.user.v2.FollowUserRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.user.v2.FollowUserRequest.oneofGroups_
  );
};
goog.inherits(proto.airchat.user.v2.FollowUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.FollowUserRequest.displayName =
    'proto.airchat.user.v2.FollowUserRequest';
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
proto.airchat.user.v2.FollowUserResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.FollowUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.FollowUserResponse.displayName =
    'proto.airchat.user.v2.FollowUserResponse';
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
proto.airchat.user.v2.UnfollowUserRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.UnfollowUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.UnfollowUserRequest.displayName =
    'proto.airchat.user.v2.UnfollowUserRequest';
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
proto.airchat.user.v2.UnfollowUserResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.UnfollowUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.UnfollowUserResponse.displayName =
    'proto.airchat.user.v2.UnfollowUserResponse';
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
proto.airchat.user.v2.GetFollowersRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.user.v2.GetFollowersRequest.oneofGroups_
  );
};
goog.inherits(proto.airchat.user.v2.GetFollowersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetFollowersRequest.displayName =
    'proto.airchat.user.v2.GetFollowersRequest';
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
proto.airchat.user.v2.GetFollowersResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.user.v2.GetFollowersResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.user.v2.GetFollowersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetFollowersResponse.displayName =
    'proto.airchat.user.v2.GetFollowersResponse';
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
proto.airchat.user.v2.GetFollowingRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.user.v2.GetFollowingRequest.oneofGroups_
  );
};
goog.inherits(proto.airchat.user.v2.GetFollowingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetFollowingRequest.displayName =
    'proto.airchat.user.v2.GetFollowingRequest';
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
proto.airchat.user.v2.GetFollowingResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.user.v2.GetFollowingResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.user.v2.GetFollowingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetFollowingResponse.displayName =
    'proto.airchat.user.v2.GetFollowingResponse';
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
proto.airchat.user.v2.DeleteUserRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.DeleteUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.DeleteUserRequest.displayName =
    'proto.airchat.user.v2.DeleteUserRequest';
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
proto.airchat.user.v2.DeleteUserResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.DeleteUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.DeleteUserResponse.displayName =
    'proto.airchat.user.v2.DeleteUserResponse';
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
proto.airchat.user.v2.BlockUserRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.BlockUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.BlockUserRequest.displayName =
    'proto.airchat.user.v2.BlockUserRequest';
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
proto.airchat.user.v2.BlockUserResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.BlockUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.BlockUserResponse.displayName =
    'proto.airchat.user.v2.BlockUserResponse';
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
proto.airchat.user.v2.UnblockUserRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.UnblockUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.UnblockUserRequest.displayName =
    'proto.airchat.user.v2.UnblockUserRequest';
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
proto.airchat.user.v2.UnblockUserResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.UnblockUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.UnblockUserResponse.displayName =
    'proto.airchat.user.v2.UnblockUserResponse';
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
proto.airchat.user.v2.GetBlockedUsersRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.GetBlockedUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetBlockedUsersRequest.displayName =
    'proto.airchat.user.v2.GetBlockedUsersRequest';
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
proto.airchat.user.v2.GetBlockedUsersResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.user.v2.GetBlockedUsersResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.user.v2.GetBlockedUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetBlockedUsersResponse.displayName =
    'proto.airchat.user.v2.GetBlockedUsersResponse';
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
proto.airchat.user.v2.MuteUserRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.MuteUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.MuteUserRequest.displayName =
    'proto.airchat.user.v2.MuteUserRequest';
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
proto.airchat.user.v2.MuteUserResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.MuteUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.MuteUserResponse.displayName =
    'proto.airchat.user.v2.MuteUserResponse';
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
proto.airchat.user.v2.UnmuteUserRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.UnmuteUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.UnmuteUserRequest.displayName =
    'proto.airchat.user.v2.UnmuteUserRequest';
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
proto.airchat.user.v2.UnmuteUserResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.UnmuteUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.UnmuteUserResponse.displayName =
    'proto.airchat.user.v2.UnmuteUserResponse';
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
proto.airchat.user.v2.GetMutedUsersRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.GetMutedUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetMutedUsersRequest.displayName =
    'proto.airchat.user.v2.GetMutedUsersRequest';
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
proto.airchat.user.v2.GetMutedUsersResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.user.v2.GetMutedUsersResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.user.v2.GetMutedUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetMutedUsersResponse.displayName =
    'proto.airchat.user.v2.GetMutedUsersResponse';
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
proto.airchat.user.v2.SuspendUserRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.SuspendUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.SuspendUserRequest.displayName =
    'proto.airchat.user.v2.SuspendUserRequest';
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
proto.airchat.user.v2.SuspendUserResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.SuspendUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.SuspendUserResponse.displayName =
    'proto.airchat.user.v2.SuspendUserResponse';
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
proto.airchat.user.v2.GetUserWithAnalyticsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.GetUserWithAnalyticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetUserWithAnalyticsRequest.displayName =
    'proto.airchat.user.v2.GetUserWithAnalyticsRequest';
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
proto.airchat.user.v2.GetUserWithAnalyticsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.GetUserWithAnalyticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetUserWithAnalyticsResponse.displayName =
    'proto.airchat.user.v2.GetUserWithAnalyticsResponse';
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
proto.airchat.user.v2.GetInterestsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.GetInterestsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetInterestsRequest.displayName =
    'proto.airchat.user.v2.GetInterestsRequest';
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
proto.airchat.user.v2.GetInterestsResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.user.v2.GetInterestsResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.user.v2.GetInterestsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetInterestsResponse.displayName =
    'proto.airchat.user.v2.GetInterestsResponse';
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
proto.airchat.user.v2.SetUserInterestsRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.user.v2.SetUserInterestsRequest.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.user.v2.SetUserInterestsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.SetUserInterestsRequest.displayName =
    'proto.airchat.user.v2.SetUserInterestsRequest';
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
proto.airchat.user.v2.SetUserInterestsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.SetUserInterestsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.SetUserInterestsResponse.displayName =
    'proto.airchat.user.v2.SetUserInterestsResponse';
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
proto.airchat.user.v2.GetFeaturedUsersRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.user.v2.GetFeaturedUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetFeaturedUsersRequest.displayName =
    'proto.airchat.user.v2.GetFeaturedUsersRequest';
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
proto.airchat.user.v2.GetFeaturedUsersResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.user.v2.GetFeaturedUsersResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.user.v2.GetFeaturedUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.GetFeaturedUsersResponse.displayName =
    'proto.airchat.user.v2.GetFeaturedUsersResponse';
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
proto.airchat.user.v2.InviteContactWithAttributionRequest = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.user.v2.InviteContactWithAttributionRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.InviteContactWithAttributionRequest.displayName =
    'proto.airchat.user.v2.InviteContactWithAttributionRequest';
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
proto.airchat.user.v2.InviteContactWithAttributionResponse = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.airchat.user.v2.InviteContactWithAttributionResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.user.v2.InviteContactWithAttributionResponse.displayName =
    'proto.airchat.user.v2.InviteContactWithAttributionResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.user.v2.UpdateUserRequest.repeatedFields_ = [1];

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
  proto.airchat.user.v2.UpdateUserRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.UpdateUserRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.UpdateUserRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.UpdateUserRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        itemList: jspb.Message.toObjectList(
          msg.getItemList(),
          airchat_user_v2_user_pb.UpdateUserItem.toObject,
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
 * @return {!proto.airchat.user.v2.UpdateUserRequest}
 */
proto.airchat.user.v2.UpdateUserRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.UpdateUserRequest();
  return proto.airchat.user.v2.UpdateUserRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.UpdateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.UpdateUserRequest}
 */
proto.airchat.user.v2.UpdateUserRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new airchat_user_v2_user_pb.UpdateUserItem();
        reader.readMessage(
          value,
          airchat_user_v2_user_pb.UpdateUserItem.deserializeBinaryFromReader
        );
        msg.addItem(value);
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
proto.airchat.user.v2.UpdateUserRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.UpdateUserRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.UpdateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.UpdateUserRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getItemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      airchat_user_v2_user_pb.UpdateUserItem.serializeBinaryToWriter
    );
  }
};

/**
 * repeated UpdateUserItem item = 1;
 * @return {!Array<!proto.airchat.user.v2.UpdateUserItem>}
 */
proto.airchat.user.v2.UpdateUserRequest.prototype.getItemList = function () {
  return /** @type{!Array<!proto.airchat.user.v2.UpdateUserItem>} */ (
    jspb.Message.getRepeatedWrapperField(
      this,
      airchat_user_v2_user_pb.UpdateUserItem,
      1
    )
  );
};

/**
 * @param {!Array<!proto.airchat.user.v2.UpdateUserItem>} value
 * @return {!proto.airchat.user.v2.UpdateUserRequest} returns this
 */
proto.airchat.user.v2.UpdateUserRequest.prototype.setItemList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.airchat.user.v2.UpdateUserItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.UpdateUserItem}
 */
proto.airchat.user.v2.UpdateUserRequest.prototype.addItem = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.airchat.user.v2.UpdateUserItem,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.user.v2.UpdateUserRequest} returns this
 */
proto.airchat.user.v2.UpdateUserRequest.prototype.clearItemList = function () {
  return this.setItemList([]);
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
  proto.airchat.user.v2.UpdateUserResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.UpdateUserResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.UpdateUserResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.UpdateUserResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        user:
          (f = msg.getUser()) &&
          airchat_user_v2_user_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.airchat.user.v2.UpdateUserResponse}
 */
proto.airchat.user.v2.UpdateUserResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.UpdateUserResponse();
  return proto.airchat.user.v2.UpdateUserResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.UpdateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.UpdateUserResponse}
 */
proto.airchat.user.v2.UpdateUserResponse.deserializeBinaryFromReader =
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
          msg.setUser(value);
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
proto.airchat.user.v2.UpdateUserResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.UpdateUserResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.UpdateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.UpdateUserResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      airchat_user_v2_user_pb.User.serializeBinaryToWriter
    );
  }
};

/**
 * optional User user = 1;
 * @return {?proto.airchat.user.v2.User}
 */
proto.airchat.user.v2.UpdateUserResponse.prototype.getUser = function () {
  return /** @type{?proto.airchat.user.v2.User} */ (
    jspb.Message.getWrapperField(this, airchat_user_v2_user_pb.User, 1)
  );
};

/**
 * @param {?proto.airchat.user.v2.User|undefined} value
 * @return {!proto.airchat.user.v2.UpdateUserResponse} returns this
 */
proto.airchat.user.v2.UpdateUserResponse.prototype.setUser = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.user.v2.UpdateUserResponse} returns this
 */
proto.airchat.user.v2.UpdateUserResponse.prototype.clearUser = function () {
  return this.setUser(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.UpdateUserResponse.prototype.hasUser = function () {
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
proto.airchat.user.v2.GetUserRequest.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.airchat.user.v2.GetUserRequest.IdentifierCase = {
  IDENTIFIER_NOT_SET: 0,
  USER_ID: 1,
  USERNAME: 2
};

/**
 * @return {proto.airchat.user.v2.GetUserRequest.IdentifierCase}
 */
proto.airchat.user.v2.GetUserRequest.prototype.getIdentifierCase = function () {
  return /** @type {proto.airchat.user.v2.GetUserRequest.IdentifierCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.airchat.user.v2.GetUserRequest.oneofGroups_[0]
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
  proto.airchat.user.v2.GetUserRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetUserRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetUserRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetUserRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        username: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.airchat.user.v2.GetUserRequest}
 */
proto.airchat.user.v2.GetUserRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetUserRequest();
  return proto.airchat.user.v2.GetUserRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetUserRequest}
 */
proto.airchat.user.v2.GetUserRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
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
        msg.setUsername(value);
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
proto.airchat.user.v2.GetUserRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.airchat.user.v2.GetUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetUserRequest.serializeBinaryToWriter = function (
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
 * optional string user_id = 1;
 * @return {string}
 */
proto.airchat.user.v2.GetUserRequest.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.GetUserRequest} returns this
 */
proto.airchat.user.v2.GetUserRequest.prototype.setUserId = function (value) {
  return jspb.Message.setOneofField(
    this,
    1,
    proto.airchat.user.v2.GetUserRequest.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.user.v2.GetUserRequest} returns this
 */
proto.airchat.user.v2.GetUserRequest.prototype.clearUserId = function () {
  return jspb.Message.setOneofField(
    this,
    1,
    proto.airchat.user.v2.GetUserRequest.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.GetUserRequest.prototype.hasUserId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string username = 2;
 * @return {string}
 */
proto.airchat.user.v2.GetUserRequest.prototype.getUsername = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.GetUserRequest} returns this
 */
proto.airchat.user.v2.GetUserRequest.prototype.setUsername = function (value) {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.airchat.user.v2.GetUserRequest.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.user.v2.GetUserRequest} returns this
 */
proto.airchat.user.v2.GetUserRequest.prototype.clearUsername = function () {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.airchat.user.v2.GetUserRequest.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.GetUserRequest.prototype.hasUsername = function () {
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
  proto.airchat.user.v2.GetUserResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetUserResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetUserResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetUserResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        user:
          (f = msg.getUser()) &&
          airchat_user_v2_user_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.airchat.user.v2.GetUserResponse}
 */
proto.airchat.user.v2.GetUserResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetUserResponse();
  return proto.airchat.user.v2.GetUserResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetUserResponse}
 */
proto.airchat.user.v2.GetUserResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
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
        msg.setUser(value);
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
proto.airchat.user.v2.GetUserResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.airchat.user.v2.GetUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetUserResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      airchat_user_v2_user_pb.User.serializeBinaryToWriter
    );
  }
};

/**
 * optional User user = 1;
 * @return {?proto.airchat.user.v2.User}
 */
proto.airchat.user.v2.GetUserResponse.prototype.getUser = function () {
  return /** @type{?proto.airchat.user.v2.User} */ (
    jspb.Message.getWrapperField(this, airchat_user_v2_user_pb.User, 1)
  );
};

/**
 * @param {?proto.airchat.user.v2.User|undefined} value
 * @return {!proto.airchat.user.v2.GetUserResponse} returns this
 */
proto.airchat.user.v2.GetUserResponse.prototype.setUser = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.user.v2.GetUserResponse} returns this
 */
proto.airchat.user.v2.GetUserResponse.prototype.clearUser = function () {
  return this.setUser(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.GetUserResponse.prototype.hasUser = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.user.v2.GetMultipleUsersRequest.repeatedFields_ = [1, 2];

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
  proto.airchat.user.v2.GetMultipleUsersRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetMultipleUsersRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetMultipleUsersRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetMultipleUsersRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userIdList:
          (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
        usernameList:
          (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
        omitPerspective: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.airchat.user.v2.GetMultipleUsersRequest}
 */
proto.airchat.user.v2.GetMultipleUsersRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetMultipleUsersRequest();
  return proto.airchat.user.v2.GetMultipleUsersRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetMultipleUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetMultipleUsersRequest}
 */
proto.airchat.user.v2.GetMultipleUsersRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.addUserId(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.addUsername(value);
          break;
        case 3:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setOmitPerspective(value);
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
proto.airchat.user.v2.GetMultipleUsersRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetMultipleUsersRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetMultipleUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetMultipleUsersRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getUserIdList();
    if (f.length > 0) {
      writer.writeRepeatedString(1, f);
    }
    f = message.getUsernameList();
    if (f.length > 0) {
      writer.writeRepeatedString(2, f);
    }
    f = message.getOmitPerspective();
    if (f) {
      writer.writeBool(3, f);
    }
  };

/**
 * repeated string user_id = 1;
 * @return {!Array<string>}
 */
proto.airchat.user.v2.GetMultipleUsersRequest.prototype.getUserIdList =
  function () {
    return /** @type {!Array<string>} */ (
      jspb.Message.getRepeatedField(this, 1)
    );
  };

/**
 * @param {!Array<string>} value
 * @return {!proto.airchat.user.v2.GetMultipleUsersRequest} returns this
 */
proto.airchat.user.v2.GetMultipleUsersRequest.prototype.setUserIdList =
  function (value) {
    return jspb.Message.setField(this, 1, value || []);
  };

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.GetMultipleUsersRequest} returns this
 */
proto.airchat.user.v2.GetMultipleUsersRequest.prototype.addUserId = function (
  value,
  opt_index
) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.user.v2.GetMultipleUsersRequest} returns this
 */
proto.airchat.user.v2.GetMultipleUsersRequest.prototype.clearUserIdList =
  function () {
    return this.setUserIdList([]);
  };

/**
 * repeated string username = 2;
 * @return {!Array<string>}
 */
proto.airchat.user.v2.GetMultipleUsersRequest.prototype.getUsernameList =
  function () {
    return /** @type {!Array<string>} */ (
      jspb.Message.getRepeatedField(this, 2)
    );
  };

/**
 * @param {!Array<string>} value
 * @return {!proto.airchat.user.v2.GetMultipleUsersRequest} returns this
 */
proto.airchat.user.v2.GetMultipleUsersRequest.prototype.setUsernameList =
  function (value) {
    return jspb.Message.setField(this, 2, value || []);
  };

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.GetMultipleUsersRequest} returns this
 */
proto.airchat.user.v2.GetMultipleUsersRequest.prototype.addUsername = function (
  value,
  opt_index
) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.user.v2.GetMultipleUsersRequest} returns this
 */
proto.airchat.user.v2.GetMultipleUsersRequest.prototype.clearUsernameList =
  function () {
    return this.setUsernameList([]);
  };

/**
 * optional bool omit_perspective = 3;
 * @return {boolean}
 */
proto.airchat.user.v2.GetMultipleUsersRequest.prototype.getOmitPerspective =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 3, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.user.v2.GetMultipleUsersRequest} returns this
 */
proto.airchat.user.v2.GetMultipleUsersRequest.prototype.setOmitPerspective =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 3, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.user.v2.GetMultipleUsersResponse.repeatedFields_ = [1];

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
  proto.airchat.user.v2.GetMultipleUsersResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetMultipleUsersResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetMultipleUsersResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetMultipleUsersResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userList: jspb.Message.toObjectList(
          msg.getUserList(),
          airchat_user_v2_user_pb.User.toObject,
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
 * @return {!proto.airchat.user.v2.GetMultipleUsersResponse}
 */
proto.airchat.user.v2.GetMultipleUsersResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetMultipleUsersResponse();
  return proto.airchat.user.v2.GetMultipleUsersResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetMultipleUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetMultipleUsersResponse}
 */
proto.airchat.user.v2.GetMultipleUsersResponse.deserializeBinaryFromReader =
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
          msg.addUser(value);
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
proto.airchat.user.v2.GetMultipleUsersResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetMultipleUsersResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetMultipleUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetMultipleUsersResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getUserList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_user_v2_user_pb.User.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated User user = 1;
 * @return {!Array<!proto.airchat.user.v2.User>}
 */
proto.airchat.user.v2.GetMultipleUsersResponse.prototype.getUserList =
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
 * @return {!proto.airchat.user.v2.GetMultipleUsersResponse} returns this
 */
proto.airchat.user.v2.GetMultipleUsersResponse.prototype.setUserList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.user.v2.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.User}
 */
proto.airchat.user.v2.GetMultipleUsersResponse.prototype.addUser = function (
  opt_value,
  opt_index
) {
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
 * @return {!proto.airchat.user.v2.GetMultipleUsersResponse} returns this
 */
proto.airchat.user.v2.GetMultipleUsersResponse.prototype.clearUserList =
  function () {
    return this.setUserList([]);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.user.v2.GetUserRestrictionsRequest.repeatedFields_ = [1];

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
  proto.airchat.user.v2.GetUserRestrictionsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.user.v2.GetUserRestrictionsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetUserRestrictionsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetUserRestrictionsRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        restrictionQueryList: jspb.Message.toObjectList(
          msg.getRestrictionQueryList(),
          airchat_user_v2_user_pb.UserRestrictionQuery.toObject,
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
 * @return {!proto.airchat.user.v2.GetUserRestrictionsRequest}
 */
proto.airchat.user.v2.GetUserRestrictionsRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetUserRestrictionsRequest();
  return proto.airchat.user.v2.GetUserRestrictionsRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetUserRestrictionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetUserRestrictionsRequest}
 */
proto.airchat.user.v2.GetUserRestrictionsRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_user_v2_user_pb.UserRestrictionQuery();
          reader.readMessage(
            value,
            airchat_user_v2_user_pb.UserRestrictionQuery
              .deserializeBinaryFromReader
          );
          msg.addRestrictionQuery(value);
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
proto.airchat.user.v2.GetUserRestrictionsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetUserRestrictionsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetUserRestrictionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetUserRestrictionsRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getRestrictionQueryList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_user_v2_user_pb.UserRestrictionQuery.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated UserRestrictionQuery restriction_query = 1;
 * @return {!Array<!proto.airchat.user.v2.UserRestrictionQuery>}
 */
proto.airchat.user.v2.GetUserRestrictionsRequest.prototype.getRestrictionQueryList =
  function () {
    return /** @type{!Array<!proto.airchat.user.v2.UserRestrictionQuery>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_user_v2_user_pb.UserRestrictionQuery,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.user.v2.UserRestrictionQuery>} value
 * @return {!proto.airchat.user.v2.GetUserRestrictionsRequest} returns this
 */
proto.airchat.user.v2.GetUserRestrictionsRequest.prototype.setRestrictionQueryList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.user.v2.UserRestrictionQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.UserRestrictionQuery}
 */
proto.airchat.user.v2.GetUserRestrictionsRequest.prototype.addRestrictionQuery =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.user.v2.UserRestrictionQuery,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.user.v2.GetUserRestrictionsRequest} returns this
 */
proto.airchat.user.v2.GetUserRestrictionsRequest.prototype.clearRestrictionQueryList =
  function () {
    return this.setRestrictionQueryList([]);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.user.v2.GetUserRestrictionsResponse.repeatedFields_ = [1];

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
  proto.airchat.user.v2.GetUserRestrictionsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.user.v2.GetUserRestrictionsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetUserRestrictionsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetUserRestrictionsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userRestrictionsList: jspb.Message.toObjectList(
          msg.getUserRestrictionsList(),
          airchat_user_v2_user_pb.UserRestriction.toObject,
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
 * @return {!proto.airchat.user.v2.GetUserRestrictionsResponse}
 */
proto.airchat.user.v2.GetUserRestrictionsResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetUserRestrictionsResponse();
  return proto.airchat.user.v2.GetUserRestrictionsResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetUserRestrictionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetUserRestrictionsResponse}
 */
proto.airchat.user.v2.GetUserRestrictionsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_user_v2_user_pb.UserRestriction();
          reader.readMessage(
            value,
            airchat_user_v2_user_pb.UserRestriction.deserializeBinaryFromReader
          );
          msg.addUserRestrictions(value);
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
proto.airchat.user.v2.GetUserRestrictionsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetUserRestrictionsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetUserRestrictionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetUserRestrictionsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getUserRestrictionsList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_user_v2_user_pb.UserRestriction.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated UserRestriction user_restrictions = 1;
 * @return {!Array<!proto.airchat.user.v2.UserRestriction>}
 */
proto.airchat.user.v2.GetUserRestrictionsResponse.prototype.getUserRestrictionsList =
  function () {
    return /** @type{!Array<!proto.airchat.user.v2.UserRestriction>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_user_v2_user_pb.UserRestriction,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.user.v2.UserRestriction>} value
 * @return {!proto.airchat.user.v2.GetUserRestrictionsResponse} returns this
 */
proto.airchat.user.v2.GetUserRestrictionsResponse.prototype.setUserRestrictionsList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.user.v2.UserRestriction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.UserRestriction}
 */
proto.airchat.user.v2.GetUserRestrictionsResponse.prototype.addUserRestrictions =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.user.v2.UserRestriction,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.user.v2.GetUserRestrictionsResponse} returns this
 */
proto.airchat.user.v2.GetUserRestrictionsResponse.prototype.clearUserRestrictionsList =
  function () {
    return this.setUserRestrictionsList([]);
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
  proto.airchat.user.v2.CheckUsernameAvailableRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.user.v2.CheckUsernameAvailableRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.CheckUsernameAvailableRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.CheckUsernameAvailableRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        username: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.airchat.user.v2.CheckUsernameAvailableRequest}
 */
proto.airchat.user.v2.CheckUsernameAvailableRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.user.v2.CheckUsernameAvailableRequest();
    return proto.airchat.user.v2.CheckUsernameAvailableRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.CheckUsernameAvailableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.CheckUsernameAvailableRequest}
 */
proto.airchat.user.v2.CheckUsernameAvailableRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setUsername(value);
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
proto.airchat.user.v2.CheckUsernameAvailableRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.CheckUsernameAvailableRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.CheckUsernameAvailableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.CheckUsernameAvailableRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getUsername();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string username = 1;
 * @return {string}
 */
proto.airchat.user.v2.CheckUsernameAvailableRequest.prototype.getUsername =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.CheckUsernameAvailableRequest} returns this
 */
proto.airchat.user.v2.CheckUsernameAvailableRequest.prototype.setUsername =
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
  proto.airchat.user.v2.CheckUsernameAvailableResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.user.v2.CheckUsernameAvailableResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.CheckUsernameAvailableResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.CheckUsernameAvailableResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        available: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.airchat.user.v2.CheckUsernameAvailableResponse}
 */
proto.airchat.user.v2.CheckUsernameAvailableResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.user.v2.CheckUsernameAvailableResponse();
    return proto.airchat.user.v2.CheckUsernameAvailableResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.CheckUsernameAvailableResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.CheckUsernameAvailableResponse}
 */
proto.airchat.user.v2.CheckUsernameAvailableResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setAvailable(value);
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
proto.airchat.user.v2.CheckUsernameAvailableResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.CheckUsernameAvailableResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.CheckUsernameAvailableResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.CheckUsernameAvailableResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getAvailable();
    if (f) {
      writer.writeBool(1, f);
    }
  };

/**
 * optional bool available = 1;
 * @return {boolean}
 */
proto.airchat.user.v2.CheckUsernameAvailableResponse.prototype.getAvailable =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 1, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.user.v2.CheckUsernameAvailableResponse} returns this
 */
proto.airchat.user.v2.CheckUsernameAvailableResponse.prototype.setAvailable =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 1, value);
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
  proto.airchat.user.v2.GetCurrentUserRestrictionsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.user.v2.GetCurrentUserRestrictionsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetCurrentUserRestrictionsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetCurrentUserRestrictionsRequest.toObject = function (
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
 * @return {!proto.airchat.user.v2.GetCurrentUserRestrictionsRequest}
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.user.v2.GetCurrentUserRestrictionsRequest();
    return proto.airchat.user.v2.GetCurrentUserRestrictionsRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetCurrentUserRestrictionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetCurrentUserRestrictionsRequest}
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsRequest.deserializeBinaryFromReader =
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
proto.airchat.user.v2.GetCurrentUserRestrictionsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetCurrentUserRestrictionsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetCurrentUserRestrictionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsRequest.serializeBinaryToWriter =
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
proto.airchat.user.v2.GetCurrentUserRestrictionsRequest.prototype.getUserId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.GetCurrentUserRestrictionsRequest} returns this
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsRequest.prototype.setUserId =
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
  proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetCurrentUserRestrictionsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        blocked: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
        blockedBy: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
        muted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
        suspended: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.airchat.user.v2.GetCurrentUserRestrictionsResponse}
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.user.v2.GetCurrentUserRestrictionsResponse();
    return proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetCurrentUserRestrictionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetCurrentUserRestrictionsResponse}
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setBlocked(value);
          break;
        case 2:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setBlockedBy(value);
          break;
        case 3:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setMuted(value);
          break;
        case 4:
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setSuspended(value);
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
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetCurrentUserRestrictionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getBlocked();
    if (f) {
      writer.writeBool(1, f);
    }
    f = message.getBlockedBy();
    if (f) {
      writer.writeBool(2, f);
    }
    f = message.getMuted();
    if (f) {
      writer.writeBool(3, f);
    }
    f = message.getSuspended();
    if (f) {
      writer.writeBool(4, f);
    }
  };

/**
 * optional bool blocked = 1;
 * @return {boolean}
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.prototype.getBlocked =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 1, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.user.v2.GetCurrentUserRestrictionsResponse} returns this
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.prototype.setBlocked =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 1, value);
  };

/**
 * optional bool blocked_by = 2;
 * @return {boolean}
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.prototype.getBlockedBy =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 2, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.user.v2.GetCurrentUserRestrictionsResponse} returns this
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.prototype.setBlockedBy =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 2, value);
  };

/**
 * optional bool muted = 3;
 * @return {boolean}
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.prototype.getMuted =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 3, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.user.v2.GetCurrentUserRestrictionsResponse} returns this
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.prototype.setMuted =
  function (value) {
    return jspb.Message.setProto3BooleanField(this, 3, value);
  };

/**
 * optional bool suspended = 4;
 * @return {boolean}
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.prototype.getSuspended =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 4, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.user.v2.GetCurrentUserRestrictionsResponse} returns this
 */
proto.airchat.user.v2.GetCurrentUserRestrictionsResponse.prototype.setSuspended =
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
  proto.airchat.user.v2.ReportUserRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.ReportUserRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.ReportUserRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.ReportUserRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        reason: jspb.Message.getFieldWithDefault(msg, 2, '')
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
 * @return {!proto.airchat.user.v2.ReportUserRequest}
 */
proto.airchat.user.v2.ReportUserRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.ReportUserRequest();
  return proto.airchat.user.v2.ReportUserRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.ReportUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.ReportUserRequest}
 */
proto.airchat.user.v2.ReportUserRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
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
        msg.setReason(value);
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
proto.airchat.user.v2.ReportUserRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.ReportUserRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.ReportUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.ReportUserRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.airchat.user.v2.ReportUserRequest.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.ReportUserRequest} returns this
 */
proto.airchat.user.v2.ReportUserRequest.prototype.setUserId = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string reason = 2;
 * @return {string}
 */
proto.airchat.user.v2.ReportUserRequest.prototype.getReason = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.ReportUserRequest} returns this
 */
proto.airchat.user.v2.ReportUserRequest.prototype.setReason = function (value) {
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
  proto.airchat.user.v2.ReportUserResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.ReportUserResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.ReportUserResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.ReportUserResponse.toObject = function (
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
 * @return {!proto.airchat.user.v2.ReportUserResponse}
 */
proto.airchat.user.v2.ReportUserResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.ReportUserResponse();
  return proto.airchat.user.v2.ReportUserResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.ReportUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.ReportUserResponse}
 */
proto.airchat.user.v2.ReportUserResponse.deserializeBinaryFromReader =
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
proto.airchat.user.v2.ReportUserResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.ReportUserResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.ReportUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.ReportUserResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
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
proto.airchat.user.v2.FollowUserRequest.oneofGroups_ = [[1, 3]];

/**
 * @enum {number}
 */
proto.airchat.user.v2.FollowUserRequest.IdentifierCase = {
  IDENTIFIER_NOT_SET: 0,
  USER_ID: 1,
  USERNAME: 3
};

/**
 * @return {proto.airchat.user.v2.FollowUserRequest.IdentifierCase}
 */
proto.airchat.user.v2.FollowUserRequest.prototype.getIdentifierCase =
  function () {
    return /** @type {proto.airchat.user.v2.FollowUserRequest.IdentifierCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.user.v2.FollowUserRequest.oneofGroups_[0]
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
  proto.airchat.user.v2.FollowUserRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.FollowUserRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.FollowUserRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.FollowUserRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        username: jspb.Message.getFieldWithDefault(msg, 3, '')
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
 * @return {!proto.airchat.user.v2.FollowUserRequest}
 */
proto.airchat.user.v2.FollowUserRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.FollowUserRequest();
  return proto.airchat.user.v2.FollowUserRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.FollowUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.FollowUserRequest}
 */
proto.airchat.user.v2.FollowUserRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
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
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setUsername(value);
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
proto.airchat.user.v2.FollowUserRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.FollowUserRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.FollowUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.FollowUserRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(1, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(3, f);
  }
};

/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.airchat.user.v2.FollowUserRequest.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.FollowUserRequest} returns this
 */
proto.airchat.user.v2.FollowUserRequest.prototype.setUserId = function (value) {
  return jspb.Message.setOneofField(
    this,
    1,
    proto.airchat.user.v2.FollowUserRequest.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.user.v2.FollowUserRequest} returns this
 */
proto.airchat.user.v2.FollowUserRequest.prototype.clearUserId = function () {
  return jspb.Message.setOneofField(
    this,
    1,
    proto.airchat.user.v2.FollowUserRequest.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.FollowUserRequest.prototype.hasUserId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string username = 3;
 * @return {string}
 */
proto.airchat.user.v2.FollowUserRequest.prototype.getUsername = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.FollowUserRequest} returns this
 */
proto.airchat.user.v2.FollowUserRequest.prototype.setUsername = function (
  value
) {
  return jspb.Message.setOneofField(
    this,
    3,
    proto.airchat.user.v2.FollowUserRequest.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.user.v2.FollowUserRequest} returns this
 */
proto.airchat.user.v2.FollowUserRequest.prototype.clearUsername = function () {
  return jspb.Message.setOneofField(
    this,
    3,
    proto.airchat.user.v2.FollowUserRequest.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.FollowUserRequest.prototype.hasUsername = function () {
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
  proto.airchat.user.v2.FollowUserResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.FollowUserResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.FollowUserResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.FollowUserResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        user:
          (f = msg.getUser()) &&
          airchat_user_v2_user_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.airchat.user.v2.FollowUserResponse}
 */
proto.airchat.user.v2.FollowUserResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.FollowUserResponse();
  return proto.airchat.user.v2.FollowUserResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.FollowUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.FollowUserResponse}
 */
proto.airchat.user.v2.FollowUserResponse.deserializeBinaryFromReader =
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
          msg.setUser(value);
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
proto.airchat.user.v2.FollowUserResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.FollowUserResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.FollowUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.FollowUserResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      airchat_user_v2_user_pb.User.serializeBinaryToWriter
    );
  }
};

/**
 * optional User user = 1;
 * @return {?proto.airchat.user.v2.User}
 */
proto.airchat.user.v2.FollowUserResponse.prototype.getUser = function () {
  return /** @type{?proto.airchat.user.v2.User} */ (
    jspb.Message.getWrapperField(this, airchat_user_v2_user_pb.User, 1)
  );
};

/**
 * @param {?proto.airchat.user.v2.User|undefined} value
 * @return {!proto.airchat.user.v2.FollowUserResponse} returns this
 */
proto.airchat.user.v2.FollowUserResponse.prototype.setUser = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.user.v2.FollowUserResponse} returns this
 */
proto.airchat.user.v2.FollowUserResponse.prototype.clearUser = function () {
  return this.setUser(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.FollowUserResponse.prototype.hasUser = function () {
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
  proto.airchat.user.v2.UnfollowUserRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.UnfollowUserRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.UnfollowUserRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.UnfollowUserRequest.toObject = function (
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
 * @return {!proto.airchat.user.v2.UnfollowUserRequest}
 */
proto.airchat.user.v2.UnfollowUserRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.UnfollowUserRequest();
  return proto.airchat.user.v2.UnfollowUserRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.UnfollowUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.UnfollowUserRequest}
 */
proto.airchat.user.v2.UnfollowUserRequest.deserializeBinaryFromReader =
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
proto.airchat.user.v2.UnfollowUserRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.UnfollowUserRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.UnfollowUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.UnfollowUserRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
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
proto.airchat.user.v2.UnfollowUserRequest.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.UnfollowUserRequest} returns this
 */
proto.airchat.user.v2.UnfollowUserRequest.prototype.setUserId = function (
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
  proto.airchat.user.v2.UnfollowUserResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.UnfollowUserResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.UnfollowUserResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.UnfollowUserResponse.toObject = function (
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
 * @return {!proto.airchat.user.v2.UnfollowUserResponse}
 */
proto.airchat.user.v2.UnfollowUserResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.UnfollowUserResponse();
  return proto.airchat.user.v2.UnfollowUserResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.UnfollowUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.UnfollowUserResponse}
 */
proto.airchat.user.v2.UnfollowUserResponse.deserializeBinaryFromReader =
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
proto.airchat.user.v2.UnfollowUserResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.UnfollowUserResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.UnfollowUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.UnfollowUserResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
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
proto.airchat.user.v2.GetFollowersRequest.oneofGroups_ = [[2, 3]];

/**
 * @enum {number}
 */
proto.airchat.user.v2.GetFollowersRequest.RequestByCase = {
  REQUEST_BY_NOT_SET: 0,
  USER_ID: 2,
  USERNAME: 3
};

/**
 * @return {proto.airchat.user.v2.GetFollowersRequest.RequestByCase}
 */
proto.airchat.user.v2.GetFollowersRequest.prototype.getRequestByCase =
  function () {
    return /** @type {proto.airchat.user.v2.GetFollowersRequest.RequestByCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.user.v2.GetFollowersRequest.oneofGroups_[0]
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
  proto.airchat.user.v2.GetFollowersRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetFollowersRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetFollowersRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetFollowersRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        pageKey: jspb.Message.getFieldWithDefault(msg, 1, ''),
        userId: jspb.Message.getFieldWithDefault(msg, 2, ''),
        username: jspb.Message.getFieldWithDefault(msg, 3, '')
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
 * @return {!proto.airchat.user.v2.GetFollowersRequest}
 */
proto.airchat.user.v2.GetFollowersRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetFollowersRequest();
  return proto.airchat.user.v2.GetFollowersRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetFollowersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetFollowersRequest}
 */
proto.airchat.user.v2.GetFollowersRequest.deserializeBinaryFromReader =
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
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setUserId(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.setUsername(value);
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
proto.airchat.user.v2.GetFollowersRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetFollowersRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetFollowersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetFollowersRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getPageKey();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(2, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(3, f);
  }
};

/**
 * optional string page_key = 1;
 * @return {string}
 */
proto.airchat.user.v2.GetFollowersRequest.prototype.getPageKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.GetFollowersRequest} returns this
 */
proto.airchat.user.v2.GetFollowersRequest.prototype.setPageKey = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.airchat.user.v2.GetFollowersRequest.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.GetFollowersRequest} returns this
 */
proto.airchat.user.v2.GetFollowersRequest.prototype.setUserId = function (
  value
) {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.airchat.user.v2.GetFollowersRequest.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.user.v2.GetFollowersRequest} returns this
 */
proto.airchat.user.v2.GetFollowersRequest.prototype.clearUserId = function () {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.airchat.user.v2.GetFollowersRequest.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.GetFollowersRequest.prototype.hasUserId = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string username = 3;
 * @return {string}
 */
proto.airchat.user.v2.GetFollowersRequest.prototype.getUsername = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.GetFollowersRequest} returns this
 */
proto.airchat.user.v2.GetFollowersRequest.prototype.setUsername = function (
  value
) {
  return jspb.Message.setOneofField(
    this,
    3,
    proto.airchat.user.v2.GetFollowersRequest.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.user.v2.GetFollowersRequest} returns this
 */
proto.airchat.user.v2.GetFollowersRequest.prototype.clearUsername =
  function () {
    return jspb.Message.setOneofField(
      this,
      3,
      proto.airchat.user.v2.GetFollowersRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.GetFollowersRequest.prototype.hasUsername = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.user.v2.GetFollowersResponse.repeatedFields_ = [1];

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
  proto.airchat.user.v2.GetFollowersResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetFollowersResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetFollowersResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetFollowersResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userList: jspb.Message.toObjectList(
          msg.getUserList(),
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
 * @return {!proto.airchat.user.v2.GetFollowersResponse}
 */
proto.airchat.user.v2.GetFollowersResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetFollowersResponse();
  return proto.airchat.user.v2.GetFollowersResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetFollowersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetFollowersResponse}
 */
proto.airchat.user.v2.GetFollowersResponse.deserializeBinaryFromReader =
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
          msg.addUser(value);
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
proto.airchat.user.v2.GetFollowersResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetFollowersResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetFollowersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetFollowersResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getUserList();
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
 * repeated User user = 1;
 * @return {!Array<!proto.airchat.user.v2.User>}
 */
proto.airchat.user.v2.GetFollowersResponse.prototype.getUserList = function () {
  return /** @type{!Array<!proto.airchat.user.v2.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, airchat_user_v2_user_pb.User, 1)
  );
};

/**
 * @param {!Array<!proto.airchat.user.v2.User>} value
 * @return {!proto.airchat.user.v2.GetFollowersResponse} returns this
 */
proto.airchat.user.v2.GetFollowersResponse.prototype.setUserList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.airchat.user.v2.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.User}
 */
proto.airchat.user.v2.GetFollowersResponse.prototype.addUser = function (
  opt_value,
  opt_index
) {
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
 * @return {!proto.airchat.user.v2.GetFollowersResponse} returns this
 */
proto.airchat.user.v2.GetFollowersResponse.prototype.clearUserList =
  function () {
    return this.setUserList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.user.v2.GetFollowersResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.GetFollowersResponse} returns this
 */
proto.airchat.user.v2.GetFollowersResponse.prototype.setNextPageKey = function (
  value
) {
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
proto.airchat.user.v2.GetFollowingRequest.oneofGroups_ = [[2, 3]];

/**
 * @enum {number}
 */
proto.airchat.user.v2.GetFollowingRequest.RequestByCase = {
  REQUEST_BY_NOT_SET: 0,
  USER_ID: 2,
  USERNAME: 3
};

/**
 * @return {proto.airchat.user.v2.GetFollowingRequest.RequestByCase}
 */
proto.airchat.user.v2.GetFollowingRequest.prototype.getRequestByCase =
  function () {
    return /** @type {proto.airchat.user.v2.GetFollowingRequest.RequestByCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.user.v2.GetFollowingRequest.oneofGroups_[0]
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
  proto.airchat.user.v2.GetFollowingRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetFollowingRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetFollowingRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetFollowingRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        pageKey: jspb.Message.getFieldWithDefault(msg, 1, ''),
        userId: jspb.Message.getFieldWithDefault(msg, 2, ''),
        username: jspb.Message.getFieldWithDefault(msg, 3, '')
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
 * @return {!proto.airchat.user.v2.GetFollowingRequest}
 */
proto.airchat.user.v2.GetFollowingRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetFollowingRequest();
  return proto.airchat.user.v2.GetFollowingRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetFollowingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetFollowingRequest}
 */
proto.airchat.user.v2.GetFollowingRequest.deserializeBinaryFromReader =
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
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setUserId(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.setUsername(value);
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
proto.airchat.user.v2.GetFollowingRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetFollowingRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetFollowingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetFollowingRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getPageKey();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(2, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(3, f);
  }
};

/**
 * optional string page_key = 1;
 * @return {string}
 */
proto.airchat.user.v2.GetFollowingRequest.prototype.getPageKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.GetFollowingRequest} returns this
 */
proto.airchat.user.v2.GetFollowingRequest.prototype.setPageKey = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.airchat.user.v2.GetFollowingRequest.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.GetFollowingRequest} returns this
 */
proto.airchat.user.v2.GetFollowingRequest.prototype.setUserId = function (
  value
) {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.airchat.user.v2.GetFollowingRequest.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.user.v2.GetFollowingRequest} returns this
 */
proto.airchat.user.v2.GetFollowingRequest.prototype.clearUserId = function () {
  return jspb.Message.setOneofField(
    this,
    2,
    proto.airchat.user.v2.GetFollowingRequest.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.GetFollowingRequest.prototype.hasUserId = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string username = 3;
 * @return {string}
 */
proto.airchat.user.v2.GetFollowingRequest.prototype.getUsername = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.GetFollowingRequest} returns this
 */
proto.airchat.user.v2.GetFollowingRequest.prototype.setUsername = function (
  value
) {
  return jspb.Message.setOneofField(
    this,
    3,
    proto.airchat.user.v2.GetFollowingRequest.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.user.v2.GetFollowingRequest} returns this
 */
proto.airchat.user.v2.GetFollowingRequest.prototype.clearUsername =
  function () {
    return jspb.Message.setOneofField(
      this,
      3,
      proto.airchat.user.v2.GetFollowingRequest.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.GetFollowingRequest.prototype.hasUsername = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.user.v2.GetFollowingResponse.repeatedFields_ = [1];

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
  proto.airchat.user.v2.GetFollowingResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetFollowingResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetFollowingResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetFollowingResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userList: jspb.Message.toObjectList(
          msg.getUserList(),
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
 * @return {!proto.airchat.user.v2.GetFollowingResponse}
 */
proto.airchat.user.v2.GetFollowingResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetFollowingResponse();
  return proto.airchat.user.v2.GetFollowingResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetFollowingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetFollowingResponse}
 */
proto.airchat.user.v2.GetFollowingResponse.deserializeBinaryFromReader =
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
          msg.addUser(value);
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
proto.airchat.user.v2.GetFollowingResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetFollowingResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetFollowingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetFollowingResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getUserList();
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
 * repeated User user = 1;
 * @return {!Array<!proto.airchat.user.v2.User>}
 */
proto.airchat.user.v2.GetFollowingResponse.prototype.getUserList = function () {
  return /** @type{!Array<!proto.airchat.user.v2.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, airchat_user_v2_user_pb.User, 1)
  );
};

/**
 * @param {!Array<!proto.airchat.user.v2.User>} value
 * @return {!proto.airchat.user.v2.GetFollowingResponse} returns this
 */
proto.airchat.user.v2.GetFollowingResponse.prototype.setUserList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.airchat.user.v2.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.User}
 */
proto.airchat.user.v2.GetFollowingResponse.prototype.addUser = function (
  opt_value,
  opt_index
) {
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
 * @return {!proto.airchat.user.v2.GetFollowingResponse} returns this
 */
proto.airchat.user.v2.GetFollowingResponse.prototype.clearUserList =
  function () {
    return this.setUserList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.user.v2.GetFollowingResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.GetFollowingResponse} returns this
 */
proto.airchat.user.v2.GetFollowingResponse.prototype.setNextPageKey = function (
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
  proto.airchat.user.v2.DeleteUserRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.DeleteUserRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.DeleteUserRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.DeleteUserRequest.toObject = function (
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
 * @return {!proto.airchat.user.v2.DeleteUserRequest}
 */
proto.airchat.user.v2.DeleteUserRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.DeleteUserRequest();
  return proto.airchat.user.v2.DeleteUserRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.DeleteUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.DeleteUserRequest}
 */
proto.airchat.user.v2.DeleteUserRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
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
proto.airchat.user.v2.DeleteUserRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.DeleteUserRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.DeleteUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.DeleteUserRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
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
  proto.airchat.user.v2.DeleteUserResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.DeleteUserResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.DeleteUserResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.DeleteUserResponse.toObject = function (
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
 * @return {!proto.airchat.user.v2.DeleteUserResponse}
 */
proto.airchat.user.v2.DeleteUserResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.DeleteUserResponse();
  return proto.airchat.user.v2.DeleteUserResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.DeleteUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.DeleteUserResponse}
 */
proto.airchat.user.v2.DeleteUserResponse.deserializeBinaryFromReader =
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
proto.airchat.user.v2.DeleteUserResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.DeleteUserResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.DeleteUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.DeleteUserResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
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
  proto.airchat.user.v2.BlockUserRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.BlockUserRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.BlockUserRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.BlockUserRequest.toObject = function (
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
 * @return {!proto.airchat.user.v2.BlockUserRequest}
 */
proto.airchat.user.v2.BlockUserRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.BlockUserRequest();
  return proto.airchat.user.v2.BlockUserRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.BlockUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.BlockUserRequest}
 */
proto.airchat.user.v2.BlockUserRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
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
proto.airchat.user.v2.BlockUserRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.airchat.user.v2.BlockUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.BlockUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.BlockUserRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
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
proto.airchat.user.v2.BlockUserRequest.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.BlockUserRequest} returns this
 */
proto.airchat.user.v2.BlockUserRequest.prototype.setUserId = function (value) {
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
  proto.airchat.user.v2.BlockUserResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.BlockUserResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.BlockUserResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.BlockUserResponse.toObject = function (
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
 * @return {!proto.airchat.user.v2.BlockUserResponse}
 */
proto.airchat.user.v2.BlockUserResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.BlockUserResponse();
  return proto.airchat.user.v2.BlockUserResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.BlockUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.BlockUserResponse}
 */
proto.airchat.user.v2.BlockUserResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
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
proto.airchat.user.v2.BlockUserResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.BlockUserResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.BlockUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.BlockUserResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
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
  proto.airchat.user.v2.UnblockUserRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.UnblockUserRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.UnblockUserRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.UnblockUserRequest.toObject = function (
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
 * @return {!proto.airchat.user.v2.UnblockUserRequest}
 */
proto.airchat.user.v2.UnblockUserRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.UnblockUserRequest();
  return proto.airchat.user.v2.UnblockUserRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.UnblockUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.UnblockUserRequest}
 */
proto.airchat.user.v2.UnblockUserRequest.deserializeBinaryFromReader =
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
proto.airchat.user.v2.UnblockUserRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.UnblockUserRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.UnblockUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.UnblockUserRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
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
proto.airchat.user.v2.UnblockUserRequest.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.UnblockUserRequest} returns this
 */
proto.airchat.user.v2.UnblockUserRequest.prototype.setUserId = function (
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
  proto.airchat.user.v2.UnblockUserResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.UnblockUserResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.UnblockUserResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.UnblockUserResponse.toObject = function (
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
 * @return {!proto.airchat.user.v2.UnblockUserResponse}
 */
proto.airchat.user.v2.UnblockUserResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.UnblockUserResponse();
  return proto.airchat.user.v2.UnblockUserResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.UnblockUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.UnblockUserResponse}
 */
proto.airchat.user.v2.UnblockUserResponse.deserializeBinaryFromReader =
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
proto.airchat.user.v2.UnblockUserResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.UnblockUserResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.UnblockUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.UnblockUserResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
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
  proto.airchat.user.v2.GetBlockedUsersRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetBlockedUsersRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetBlockedUsersRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetBlockedUsersRequest.toObject = function (
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
 * @return {!proto.airchat.user.v2.GetBlockedUsersRequest}
 */
proto.airchat.user.v2.GetBlockedUsersRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetBlockedUsersRequest();
  return proto.airchat.user.v2.GetBlockedUsersRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetBlockedUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetBlockedUsersRequest}
 */
proto.airchat.user.v2.GetBlockedUsersRequest.deserializeBinaryFromReader =
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
proto.airchat.user.v2.GetBlockedUsersRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetBlockedUsersRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetBlockedUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetBlockedUsersRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.user.v2.GetBlockedUsersResponse.repeatedFields_ = [1];

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
  proto.airchat.user.v2.GetBlockedUsersResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetBlockedUsersResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetBlockedUsersResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetBlockedUsersResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userList: jspb.Message.toObjectList(
          msg.getUserList(),
          airchat_user_v2_user_pb.User.toObject,
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
 * @return {!proto.airchat.user.v2.GetBlockedUsersResponse}
 */
proto.airchat.user.v2.GetBlockedUsersResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetBlockedUsersResponse();
  return proto.airchat.user.v2.GetBlockedUsersResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetBlockedUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetBlockedUsersResponse}
 */
proto.airchat.user.v2.GetBlockedUsersResponse.deserializeBinaryFromReader =
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
          msg.addUser(value);
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
proto.airchat.user.v2.GetBlockedUsersResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetBlockedUsersResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetBlockedUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetBlockedUsersResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getUserList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_user_v2_user_pb.User.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated User user = 1;
 * @return {!Array<!proto.airchat.user.v2.User>}
 */
proto.airchat.user.v2.GetBlockedUsersResponse.prototype.getUserList =
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
 * @return {!proto.airchat.user.v2.GetBlockedUsersResponse} returns this
 */
proto.airchat.user.v2.GetBlockedUsersResponse.prototype.setUserList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.airchat.user.v2.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.User}
 */
proto.airchat.user.v2.GetBlockedUsersResponse.prototype.addUser = function (
  opt_value,
  opt_index
) {
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
 * @return {!proto.airchat.user.v2.GetBlockedUsersResponse} returns this
 */
proto.airchat.user.v2.GetBlockedUsersResponse.prototype.clearUserList =
  function () {
    return this.setUserList([]);
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
  proto.airchat.user.v2.MuteUserRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.MuteUserRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.MuteUserRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.MuteUserRequest.toObject = function (
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
 * @return {!proto.airchat.user.v2.MuteUserRequest}
 */
proto.airchat.user.v2.MuteUserRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.MuteUserRequest();
  return proto.airchat.user.v2.MuteUserRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.MuteUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.MuteUserRequest}
 */
proto.airchat.user.v2.MuteUserRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
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
proto.airchat.user.v2.MuteUserRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.airchat.user.v2.MuteUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.MuteUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.MuteUserRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
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
proto.airchat.user.v2.MuteUserRequest.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.MuteUserRequest} returns this
 */
proto.airchat.user.v2.MuteUserRequest.prototype.setUserId = function (value) {
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
  proto.airchat.user.v2.MuteUserResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.MuteUserResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.MuteUserResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.MuteUserResponse.toObject = function (
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
 * @return {!proto.airchat.user.v2.MuteUserResponse}
 */
proto.airchat.user.v2.MuteUserResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.MuteUserResponse();
  return proto.airchat.user.v2.MuteUserResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.MuteUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.MuteUserResponse}
 */
proto.airchat.user.v2.MuteUserResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
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
proto.airchat.user.v2.MuteUserResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.airchat.user.v2.MuteUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.MuteUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.MuteUserResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
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
  proto.airchat.user.v2.UnmuteUserRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.UnmuteUserRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.UnmuteUserRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.UnmuteUserRequest.toObject = function (
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
 * @return {!proto.airchat.user.v2.UnmuteUserRequest}
 */
proto.airchat.user.v2.UnmuteUserRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.UnmuteUserRequest();
  return proto.airchat.user.v2.UnmuteUserRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.UnmuteUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.UnmuteUserRequest}
 */
proto.airchat.user.v2.UnmuteUserRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
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
proto.airchat.user.v2.UnmuteUserRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.UnmuteUserRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.UnmuteUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.UnmuteUserRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
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
proto.airchat.user.v2.UnmuteUserRequest.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.UnmuteUserRequest} returns this
 */
proto.airchat.user.v2.UnmuteUserRequest.prototype.setUserId = function (value) {
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
  proto.airchat.user.v2.UnmuteUserResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.UnmuteUserResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.UnmuteUserResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.UnmuteUserResponse.toObject = function (
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
 * @return {!proto.airchat.user.v2.UnmuteUserResponse}
 */
proto.airchat.user.v2.UnmuteUserResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.UnmuteUserResponse();
  return proto.airchat.user.v2.UnmuteUserResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.UnmuteUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.UnmuteUserResponse}
 */
proto.airchat.user.v2.UnmuteUserResponse.deserializeBinaryFromReader =
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
proto.airchat.user.v2.UnmuteUserResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.UnmuteUserResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.UnmuteUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.UnmuteUserResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
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
  proto.airchat.user.v2.GetMutedUsersRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetMutedUsersRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetMutedUsersRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetMutedUsersRequest.toObject = function (
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
 * @return {!proto.airchat.user.v2.GetMutedUsersRequest}
 */
proto.airchat.user.v2.GetMutedUsersRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetMutedUsersRequest();
  return proto.airchat.user.v2.GetMutedUsersRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetMutedUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetMutedUsersRequest}
 */
proto.airchat.user.v2.GetMutedUsersRequest.deserializeBinaryFromReader =
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
proto.airchat.user.v2.GetMutedUsersRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetMutedUsersRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetMutedUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetMutedUsersRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.user.v2.GetMutedUsersResponse.repeatedFields_ = [1];

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
  proto.airchat.user.v2.GetMutedUsersResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetMutedUsersResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetMutedUsersResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetMutedUsersResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userList: jspb.Message.toObjectList(
          msg.getUserList(),
          airchat_user_v2_user_pb.User.toObject,
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
 * @return {!proto.airchat.user.v2.GetMutedUsersResponse}
 */
proto.airchat.user.v2.GetMutedUsersResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetMutedUsersResponse();
  return proto.airchat.user.v2.GetMutedUsersResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetMutedUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetMutedUsersResponse}
 */
proto.airchat.user.v2.GetMutedUsersResponse.deserializeBinaryFromReader =
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
          msg.addUser(value);
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
proto.airchat.user.v2.GetMutedUsersResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetMutedUsersResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetMutedUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetMutedUsersResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getUserList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      airchat_user_v2_user_pb.User.serializeBinaryToWriter
    );
  }
};

/**
 * repeated User user = 1;
 * @return {!Array<!proto.airchat.user.v2.User>}
 */
proto.airchat.user.v2.GetMutedUsersResponse.prototype.getUserList =
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
 * @return {!proto.airchat.user.v2.GetMutedUsersResponse} returns this
 */
proto.airchat.user.v2.GetMutedUsersResponse.prototype.setUserList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.airchat.user.v2.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.User}
 */
proto.airchat.user.v2.GetMutedUsersResponse.prototype.addUser = function (
  opt_value,
  opt_index
) {
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
 * @return {!proto.airchat.user.v2.GetMutedUsersResponse} returns this
 */
proto.airchat.user.v2.GetMutedUsersResponse.prototype.clearUserList =
  function () {
    return this.setUserList([]);
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
  proto.airchat.user.v2.SuspendUserRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.SuspendUserRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.SuspendUserRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.SuspendUserRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        isSuspension: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.airchat.user.v2.SuspendUserRequest}
 */
proto.airchat.user.v2.SuspendUserRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.SuspendUserRequest();
  return proto.airchat.user.v2.SuspendUserRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.SuspendUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.SuspendUserRequest}
 */
proto.airchat.user.v2.SuspendUserRequest.deserializeBinaryFromReader =
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
          var value = /** @type {boolean} */ (reader.readBool());
          msg.setIsSuspension(value);
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
proto.airchat.user.v2.SuspendUserRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.SuspendUserRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.SuspendUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.SuspendUserRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getIsSuspension();
  if (f) {
    writer.writeBool(2, f);
  }
};

/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.airchat.user.v2.SuspendUserRequest.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.SuspendUserRequest} returns this
 */
proto.airchat.user.v2.SuspendUserRequest.prototype.setUserId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional bool is_suspension = 2;
 * @return {boolean}
 */
proto.airchat.user.v2.SuspendUserRequest.prototype.getIsSuspension =
  function () {
    return /** @type {boolean} */ (
      jspb.Message.getBooleanFieldWithDefault(this, 2, false)
    );
  };

/**
 * @param {boolean} value
 * @return {!proto.airchat.user.v2.SuspendUserRequest} returns this
 */
proto.airchat.user.v2.SuspendUserRequest.prototype.setIsSuspension = function (
  value
) {
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
  proto.airchat.user.v2.SuspendUserResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.SuspendUserResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.SuspendUserResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.SuspendUserResponse.toObject = function (
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
 * @return {!proto.airchat.user.v2.SuspendUserResponse}
 */
proto.airchat.user.v2.SuspendUserResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.SuspendUserResponse();
  return proto.airchat.user.v2.SuspendUserResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.SuspendUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.SuspendUserResponse}
 */
proto.airchat.user.v2.SuspendUserResponse.deserializeBinaryFromReader =
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
proto.airchat.user.v2.SuspendUserResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.SuspendUserResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.SuspendUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.SuspendUserResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
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
  proto.airchat.user.v2.GetUserWithAnalyticsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.user.v2.GetUserWithAnalyticsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetUserWithAnalyticsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetUserWithAnalyticsRequest.toObject = function (
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
 * @return {!proto.airchat.user.v2.GetUserWithAnalyticsRequest}
 */
proto.airchat.user.v2.GetUserWithAnalyticsRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetUserWithAnalyticsRequest();
  return proto.airchat.user.v2.GetUserWithAnalyticsRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetUserWithAnalyticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetUserWithAnalyticsRequest}
 */
proto.airchat.user.v2.GetUserWithAnalyticsRequest.deserializeBinaryFromReader =
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
proto.airchat.user.v2.GetUserWithAnalyticsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetUserWithAnalyticsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetUserWithAnalyticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetUserWithAnalyticsRequest.serializeBinaryToWriter =
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
proto.airchat.user.v2.GetUserWithAnalyticsRequest.prototype.getUserId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.GetUserWithAnalyticsRequest} returns this
 */
proto.airchat.user.v2.GetUserWithAnalyticsRequest.prototype.setUserId =
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
  proto.airchat.user.v2.GetUserWithAnalyticsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.user.v2.GetUserWithAnalyticsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetUserWithAnalyticsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetUserWithAnalyticsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        user:
          (f = msg.getUser()) &&
          airchat_user_v2_user_pb.User.toObject(includeInstance, f),
        analytics:
          (f = msg.getAnalytics()) &&
          airchat_user_v2_user_pb.UserAnalytics.toObject(includeInstance, f)
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
 * @return {!proto.airchat.user.v2.GetUserWithAnalyticsResponse}
 */
proto.airchat.user.v2.GetUserWithAnalyticsResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.user.v2.GetUserWithAnalyticsResponse();
    return proto.airchat.user.v2.GetUserWithAnalyticsResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetUserWithAnalyticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetUserWithAnalyticsResponse}
 */
proto.airchat.user.v2.GetUserWithAnalyticsResponse.deserializeBinaryFromReader =
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
          msg.setUser(value);
          break;
        case 2:
          var value = new airchat_user_v2_user_pb.UserAnalytics();
          reader.readMessage(
            value,
            airchat_user_v2_user_pb.UserAnalytics.deserializeBinaryFromReader
          );
          msg.setAnalytics(value);
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
proto.airchat.user.v2.GetUserWithAnalyticsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetUserWithAnalyticsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetUserWithAnalyticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetUserWithAnalyticsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getUser();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_user_v2_user_pb.User.serializeBinaryToWriter
      );
    }
    f = message.getAnalytics();
    if (f != null) {
      writer.writeMessage(
        2,
        f,
        airchat_user_v2_user_pb.UserAnalytics.serializeBinaryToWriter
      );
    }
  };

/**
 * optional User user = 1;
 * @return {?proto.airchat.user.v2.User}
 */
proto.airchat.user.v2.GetUserWithAnalyticsResponse.prototype.getUser =
  function () {
    return /** @type{?proto.airchat.user.v2.User} */ (
      jspb.Message.getWrapperField(this, airchat_user_v2_user_pb.User, 1)
    );
  };

/**
 * @param {?proto.airchat.user.v2.User|undefined} value
 * @return {!proto.airchat.user.v2.GetUserWithAnalyticsResponse} returns this
 */
proto.airchat.user.v2.GetUserWithAnalyticsResponse.prototype.setUser =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.user.v2.GetUserWithAnalyticsResponse} returns this
 */
proto.airchat.user.v2.GetUserWithAnalyticsResponse.prototype.clearUser =
  function () {
    return this.setUser(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.GetUserWithAnalyticsResponse.prototype.hasUser =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * optional UserAnalytics analytics = 2;
 * @return {?proto.airchat.user.v2.UserAnalytics}
 */
proto.airchat.user.v2.GetUserWithAnalyticsResponse.prototype.getAnalytics =
  function () {
    return /** @type{?proto.airchat.user.v2.UserAnalytics} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_user_v2_user_pb.UserAnalytics,
        2
      )
    );
  };

/**
 * @param {?proto.airchat.user.v2.UserAnalytics|undefined} value
 * @return {!proto.airchat.user.v2.GetUserWithAnalyticsResponse} returns this
 */
proto.airchat.user.v2.GetUserWithAnalyticsResponse.prototype.setAnalytics =
  function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.user.v2.GetUserWithAnalyticsResponse} returns this
 */
proto.airchat.user.v2.GetUserWithAnalyticsResponse.prototype.clearAnalytics =
  function () {
    return this.setAnalytics(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.user.v2.GetUserWithAnalyticsResponse.prototype.hasAnalytics =
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
  proto.airchat.user.v2.GetInterestsRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetInterestsRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetInterestsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetInterestsRequest.toObject = function (
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
 * @return {!proto.airchat.user.v2.GetInterestsRequest}
 */
proto.airchat.user.v2.GetInterestsRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetInterestsRequest();
  return proto.airchat.user.v2.GetInterestsRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetInterestsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetInterestsRequest}
 */
proto.airchat.user.v2.GetInterestsRequest.deserializeBinaryFromReader =
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
proto.airchat.user.v2.GetInterestsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetInterestsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetInterestsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetInterestsRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.user.v2.GetInterestsResponse.repeatedFields_ = [1];

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
  proto.airchat.user.v2.GetInterestsResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetInterestsResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetInterestsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetInterestsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        interestList: jspb.Message.toObjectList(
          msg.getInterestList(),
          airchat_user_v2_user_pb.UserInterest.toObject,
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
 * @return {!proto.airchat.user.v2.GetInterestsResponse}
 */
proto.airchat.user.v2.GetInterestsResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetInterestsResponse();
  return proto.airchat.user.v2.GetInterestsResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetInterestsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetInterestsResponse}
 */
proto.airchat.user.v2.GetInterestsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_user_v2_user_pb.UserInterest();
          reader.readMessage(
            value,
            airchat_user_v2_user_pb.UserInterest.deserializeBinaryFromReader
          );
          msg.addInterest(value);
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
proto.airchat.user.v2.GetInterestsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetInterestsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetInterestsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetInterestsResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getInterestList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      airchat_user_v2_user_pb.UserInterest.serializeBinaryToWriter
    );
  }
};

/**
 * repeated UserInterest interest = 1;
 * @return {!Array<!proto.airchat.user.v2.UserInterest>}
 */
proto.airchat.user.v2.GetInterestsResponse.prototype.getInterestList =
  function () {
    return /** @type{!Array<!proto.airchat.user.v2.UserInterest>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_user_v2_user_pb.UserInterest,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.user.v2.UserInterest>} value
 * @return {!proto.airchat.user.v2.GetInterestsResponse} returns this
 */
proto.airchat.user.v2.GetInterestsResponse.prototype.setInterestList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.user.v2.UserInterest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.UserInterest}
 */
proto.airchat.user.v2.GetInterestsResponse.prototype.addInterest = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.airchat.user.v2.UserInterest,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.user.v2.GetInterestsResponse} returns this
 */
proto.airchat.user.v2.GetInterestsResponse.prototype.clearInterestList =
  function () {
    return this.setInterestList([]);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.user.v2.SetUserInterestsRequest.repeatedFields_ = [1];

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
  proto.airchat.user.v2.SetUserInterestsRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.SetUserInterestsRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.SetUserInterestsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.SetUserInterestsRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        interestIdList:
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
 * @return {!proto.airchat.user.v2.SetUserInterestsRequest}
 */
proto.airchat.user.v2.SetUserInterestsRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.SetUserInterestsRequest();
  return proto.airchat.user.v2.SetUserInterestsRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.SetUserInterestsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.SetUserInterestsRequest}
 */
proto.airchat.user.v2.SetUserInterestsRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.addInterestId(value);
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
proto.airchat.user.v2.SetUserInterestsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.SetUserInterestsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.SetUserInterestsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.SetUserInterestsRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getInterestIdList();
    if (f.length > 0) {
      writer.writeRepeatedString(1, f);
    }
  };

/**
 * repeated string interest_id = 1;
 * @return {!Array<string>}
 */
proto.airchat.user.v2.SetUserInterestsRequest.prototype.getInterestIdList =
  function () {
    return /** @type {!Array<string>} */ (
      jspb.Message.getRepeatedField(this, 1)
    );
  };

/**
 * @param {!Array<string>} value
 * @return {!proto.airchat.user.v2.SetUserInterestsRequest} returns this
 */
proto.airchat.user.v2.SetUserInterestsRequest.prototype.setInterestIdList =
  function (value) {
    return jspb.Message.setField(this, 1, value || []);
  };

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.SetUserInterestsRequest} returns this
 */
proto.airchat.user.v2.SetUserInterestsRequest.prototype.addInterestId =
  function (value, opt_index) {
    return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.user.v2.SetUserInterestsRequest} returns this
 */
proto.airchat.user.v2.SetUserInterestsRequest.prototype.clearInterestIdList =
  function () {
    return this.setInterestIdList([]);
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
  proto.airchat.user.v2.SetUserInterestsResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.SetUserInterestsResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.SetUserInterestsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.SetUserInterestsResponse.toObject = function (
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
 * @return {!proto.airchat.user.v2.SetUserInterestsResponse}
 */
proto.airchat.user.v2.SetUserInterestsResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.SetUserInterestsResponse();
  return proto.airchat.user.v2.SetUserInterestsResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.SetUserInterestsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.SetUserInterestsResponse}
 */
proto.airchat.user.v2.SetUserInterestsResponse.deserializeBinaryFromReader =
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
proto.airchat.user.v2.SetUserInterestsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.SetUserInterestsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.SetUserInterestsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.SetUserInterestsResponse.serializeBinaryToWriter =
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
  proto.airchat.user.v2.GetFeaturedUsersRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetFeaturedUsersRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetFeaturedUsersRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetFeaturedUsersRequest.toObject = function (
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
 * @return {!proto.airchat.user.v2.GetFeaturedUsersRequest}
 */
proto.airchat.user.v2.GetFeaturedUsersRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetFeaturedUsersRequest();
  return proto.airchat.user.v2.GetFeaturedUsersRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetFeaturedUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetFeaturedUsersRequest}
 */
proto.airchat.user.v2.GetFeaturedUsersRequest.deserializeBinaryFromReader =
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
proto.airchat.user.v2.GetFeaturedUsersRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetFeaturedUsersRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetFeaturedUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetFeaturedUsersRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.user.v2.GetFeaturedUsersResponse.repeatedFields_ = [1];

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
  proto.airchat.user.v2.GetFeaturedUsersResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.user.v2.GetFeaturedUsersResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.GetFeaturedUsersResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.GetFeaturedUsersResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        userList: jspb.Message.toObjectList(
          msg.getUserList(),
          airchat_user_v2_user_pb.FeaturedUser.toObject,
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
 * @return {!proto.airchat.user.v2.GetFeaturedUsersResponse}
 */
proto.airchat.user.v2.GetFeaturedUsersResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.user.v2.GetFeaturedUsersResponse();
  return proto.airchat.user.v2.GetFeaturedUsersResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.GetFeaturedUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.GetFeaturedUsersResponse}
 */
proto.airchat.user.v2.GetFeaturedUsersResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_user_v2_user_pb.FeaturedUser();
          reader.readMessage(
            value,
            airchat_user_v2_user_pb.FeaturedUser.deserializeBinaryFromReader
          );
          msg.addUser(value);
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
proto.airchat.user.v2.GetFeaturedUsersResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.GetFeaturedUsersResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.GetFeaturedUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.GetFeaturedUsersResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getUserList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_user_v2_user_pb.FeaturedUser.serializeBinaryToWriter
      );
    }
  };

/**
 * repeated FeaturedUser user = 1;
 * @return {!Array<!proto.airchat.user.v2.FeaturedUser>}
 */
proto.airchat.user.v2.GetFeaturedUsersResponse.prototype.getUserList =
  function () {
    return /** @type{!Array<!proto.airchat.user.v2.FeaturedUser>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_user_v2_user_pb.FeaturedUser,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.user.v2.FeaturedUser>} value
 * @return {!proto.airchat.user.v2.GetFeaturedUsersResponse} returns this
 */
proto.airchat.user.v2.GetFeaturedUsersResponse.prototype.setUserList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.user.v2.FeaturedUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.FeaturedUser}
 */
proto.airchat.user.v2.GetFeaturedUsersResponse.prototype.addUser = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.airchat.user.v2.FeaturedUser,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.user.v2.GetFeaturedUsersResponse} returns this
 */
proto.airchat.user.v2.GetFeaturedUsersResponse.prototype.clearUserList =
  function () {
    return this.setUserList([]);
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
  proto.airchat.user.v2.InviteContactWithAttributionRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.user.v2.InviteContactWithAttributionRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.InviteContactWithAttributionRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.InviteContactWithAttributionRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          phoneHash: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.airchat.user.v2.InviteContactWithAttributionRequest}
 */
proto.airchat.user.v2.InviteContactWithAttributionRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.user.v2.InviteContactWithAttributionRequest();
    return proto.airchat.user.v2.InviteContactWithAttributionRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.InviteContactWithAttributionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.InviteContactWithAttributionRequest}
 */
proto.airchat.user.v2.InviteContactWithAttributionRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setPhoneHash(value);
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
proto.airchat.user.v2.InviteContactWithAttributionRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.InviteContactWithAttributionRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.InviteContactWithAttributionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.InviteContactWithAttributionRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getPhoneHash();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string phone_hash = 1;
 * @return {string}
 */
proto.airchat.user.v2.InviteContactWithAttributionRequest.prototype.getPhoneHash =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.user.v2.InviteContactWithAttributionRequest} returns this
 */
proto.airchat.user.v2.InviteContactWithAttributionRequest.prototype.setPhoneHash =
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
  proto.airchat.user.v2.InviteContactWithAttributionResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.user.v2.InviteContactWithAttributionResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.user.v2.InviteContactWithAttributionResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.user.v2.InviteContactWithAttributionResponse.toObject =
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
 * @return {!proto.airchat.user.v2.InviteContactWithAttributionResponse}
 */
proto.airchat.user.v2.InviteContactWithAttributionResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.user.v2.InviteContactWithAttributionResponse();
    return proto.airchat.user.v2.InviteContactWithAttributionResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.user.v2.InviteContactWithAttributionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.user.v2.InviteContactWithAttributionResponse}
 */
proto.airchat.user.v2.InviteContactWithAttributionResponse.deserializeBinaryFromReader =
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
proto.airchat.user.v2.InviteContactWithAttributionResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.user.v2.InviteContactWithAttributionResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.user.v2.InviteContactWithAttributionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.user.v2.InviteContactWithAttributionResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

goog.object.extend(exports, proto.airchat.user.v2);
