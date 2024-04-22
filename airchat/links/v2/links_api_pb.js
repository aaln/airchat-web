// source: airchat/links/v2/links_api.proto
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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var airchat_links_v2_links_pb = require('../../../airchat/links/v2/links_pb.js');
goog.object.extend(proto, airchat_links_v2_links_pb);
goog.exportSymbol('proto.airchat.links.v2.CreateShortLinkRequest', null, global);
goog.exportSymbol('proto.airchat.links.v2.CreateShortLinkRequest.TypeCase', null, global);
goog.exportSymbol('proto.airchat.links.v2.CreateShortLinkResponse', null, global);
goog.exportSymbol('proto.airchat.links.v2.GetFullLinkRequest', null, global);
goog.exportSymbol('proto.airchat.links.v2.GetFullLinkResponse', null, global);
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
proto.airchat.links.v2.CreateShortLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.airchat.links.v2.CreateShortLinkRequest.oneofGroups_);
};
goog.inherits(proto.airchat.links.v2.CreateShortLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.links.v2.CreateShortLinkRequest.displayName = 'proto.airchat.links.v2.CreateShortLinkRequest';
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
proto.airchat.links.v2.CreateShortLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.links.v2.CreateShortLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.links.v2.CreateShortLinkResponse.displayName = 'proto.airchat.links.v2.CreateShortLinkResponse';
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
proto.airchat.links.v2.GetFullLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.links.v2.GetFullLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.links.v2.GetFullLinkRequest.displayName = 'proto.airchat.links.v2.GetFullLinkRequest';
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
proto.airchat.links.v2.GetFullLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.links.v2.GetFullLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.links.v2.GetFullLinkResponse.displayName = 'proto.airchat.links.v2.GetFullLinkResponse';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.airchat.links.v2.CreateShortLinkRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.airchat.links.v2.CreateShortLinkRequest.TypeCase = {
  TYPE_NOT_SET: 0,
  USER_LINK: 1,
  POST_LINK: 2
};

/**
 * @return {proto.airchat.links.v2.CreateShortLinkRequest.TypeCase}
 */
proto.airchat.links.v2.CreateShortLinkRequest.prototype.getTypeCase = function() {
  return /** @type {proto.airchat.links.v2.CreateShortLinkRequest.TypeCase} */(jspb.Message.computeOneofCase(this, proto.airchat.links.v2.CreateShortLinkRequest.oneofGroups_[0]));
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
proto.airchat.links.v2.CreateShortLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.airchat.links.v2.CreateShortLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.airchat.links.v2.CreateShortLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.links.v2.CreateShortLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userLink: (f = msg.getUserLink()) && airchat_links_v2_links_pb.UserLink.toObject(includeInstance, f),
    postLink: (f = msg.getPostLink()) && airchat_links_v2_links_pb.PostLink.toObject(includeInstance, f)
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
 * @return {!proto.airchat.links.v2.CreateShortLinkRequest}
 */
proto.airchat.links.v2.CreateShortLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.links.v2.CreateShortLinkRequest;
  return proto.airchat.links.v2.CreateShortLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.links.v2.CreateShortLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.links.v2.CreateShortLinkRequest}
 */
proto.airchat.links.v2.CreateShortLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new airchat_links_v2_links_pb.UserLink;
      reader.readMessage(value,airchat_links_v2_links_pb.UserLink.deserializeBinaryFromReader);
      msg.setUserLink(value);
      break;
    case 2:
      var value = new airchat_links_v2_links_pb.PostLink;
      reader.readMessage(value,airchat_links_v2_links_pb.PostLink.deserializeBinaryFromReader);
      msg.setPostLink(value);
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
proto.airchat.links.v2.CreateShortLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.airchat.links.v2.CreateShortLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.links.v2.CreateShortLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.links.v2.CreateShortLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserLink();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      airchat_links_v2_links_pb.UserLink.serializeBinaryToWriter
    );
  }
  f = message.getPostLink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      airchat_links_v2_links_pb.PostLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserLink user_link = 1;
 * @return {?proto.airchat.links.v2.UserLink}
 */
proto.airchat.links.v2.CreateShortLinkRequest.prototype.getUserLink = function() {
  return /** @type{?proto.airchat.links.v2.UserLink} */ (
    jspb.Message.getWrapperField(this, airchat_links_v2_links_pb.UserLink, 1));
};


/**
 * @param {?proto.airchat.links.v2.UserLink|undefined} value
 * @return {!proto.airchat.links.v2.CreateShortLinkRequest} returns this
*/
proto.airchat.links.v2.CreateShortLinkRequest.prototype.setUserLink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.airchat.links.v2.CreateShortLinkRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.links.v2.CreateShortLinkRequest} returns this
 */
proto.airchat.links.v2.CreateShortLinkRequest.prototype.clearUserLink = function() {
  return this.setUserLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.links.v2.CreateShortLinkRequest.prototype.hasUserLink = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PostLink post_link = 2;
 * @return {?proto.airchat.links.v2.PostLink}
 */
proto.airchat.links.v2.CreateShortLinkRequest.prototype.getPostLink = function() {
  return /** @type{?proto.airchat.links.v2.PostLink} */ (
    jspb.Message.getWrapperField(this, airchat_links_v2_links_pb.PostLink, 2));
};


/**
 * @param {?proto.airchat.links.v2.PostLink|undefined} value
 * @return {!proto.airchat.links.v2.CreateShortLinkRequest} returns this
*/
proto.airchat.links.v2.CreateShortLinkRequest.prototype.setPostLink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.airchat.links.v2.CreateShortLinkRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.links.v2.CreateShortLinkRequest} returns this
 */
proto.airchat.links.v2.CreateShortLinkRequest.prototype.clearPostLink = function() {
  return this.setPostLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.links.v2.CreateShortLinkRequest.prototype.hasPostLink = function() {
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
proto.airchat.links.v2.CreateShortLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.airchat.links.v2.CreateShortLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.airchat.links.v2.CreateShortLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.links.v2.CreateShortLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    shortLink: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.airchat.links.v2.CreateShortLinkResponse}
 */
proto.airchat.links.v2.CreateShortLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.links.v2.CreateShortLinkResponse;
  return proto.airchat.links.v2.CreateShortLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.links.v2.CreateShortLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.links.v2.CreateShortLinkResponse}
 */
proto.airchat.links.v2.CreateShortLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortLink(value);
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
proto.airchat.links.v2.CreateShortLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.airchat.links.v2.CreateShortLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.links.v2.CreateShortLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.links.v2.CreateShortLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShortLink();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string short_link = 1;
 * @return {string}
 */
proto.airchat.links.v2.CreateShortLinkResponse.prototype.getShortLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.airchat.links.v2.CreateShortLinkResponse} returns this
 */
proto.airchat.links.v2.CreateShortLinkResponse.prototype.setShortLink = function(value) {
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
proto.airchat.links.v2.GetFullLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.airchat.links.v2.GetFullLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.airchat.links.v2.GetFullLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.links.v2.GetFullLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    shortLinkPath: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.airchat.links.v2.GetFullLinkRequest}
 */
proto.airchat.links.v2.GetFullLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.links.v2.GetFullLinkRequest;
  return proto.airchat.links.v2.GetFullLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.links.v2.GetFullLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.links.v2.GetFullLinkRequest}
 */
proto.airchat.links.v2.GetFullLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortLinkPath(value);
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
proto.airchat.links.v2.GetFullLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.airchat.links.v2.GetFullLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.links.v2.GetFullLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.links.v2.GetFullLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShortLinkPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string short_link_path = 1;
 * @return {string}
 */
proto.airchat.links.v2.GetFullLinkRequest.prototype.getShortLinkPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.airchat.links.v2.GetFullLinkRequest} returns this
 */
proto.airchat.links.v2.GetFullLinkRequest.prototype.setShortLinkPath = function(value) {
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
proto.airchat.links.v2.GetFullLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.airchat.links.v2.GetFullLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.airchat.links.v2.GetFullLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.links.v2.GetFullLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fullLink: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.airchat.links.v2.GetFullLinkResponse}
 */
proto.airchat.links.v2.GetFullLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.links.v2.GetFullLinkResponse;
  return proto.airchat.links.v2.GetFullLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.links.v2.GetFullLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.links.v2.GetFullLinkResponse}
 */
proto.airchat.links.v2.GetFullLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullLink(value);
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
proto.airchat.links.v2.GetFullLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.airchat.links.v2.GetFullLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.links.v2.GetFullLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.links.v2.GetFullLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFullLink();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string full_link = 1;
 * @return {string}
 */
proto.airchat.links.v2.GetFullLinkResponse.prototype.getFullLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.airchat.links.v2.GetFullLinkResponse} returns this
 */
proto.airchat.links.v2.GetFullLinkResponse.prototype.setFullLink = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.airchat.links.v2);
