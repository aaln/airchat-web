// source: airchat/gateway/v2/status_stream.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var airchat_gateway_v2_gateway_pb = require('../../../airchat/gateway/v2/gateway_pb.js');
goog.object.extend(proto, airchat_gateway_v2_gateway_pb);
goog.exportSymbol('proto.airchat.gateway.v2.Status', null, global);
goog.exportSymbol('proto.airchat.gateway.v2.StatusSubscription', null, global);
goog.exportSymbol('proto.airchat.gateway.v2.StatusType', null, global);
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
proto.airchat.gateway.v2.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.gateway.v2.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.gateway.v2.Status.displayName = 'proto.airchat.gateway.v2.Status';
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
proto.airchat.gateway.v2.StatusSubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.airchat.gateway.v2.StatusSubscription.repeatedFields_, null);
};
goog.inherits(proto.airchat.gateway.v2.StatusSubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.gateway.v2.StatusSubscription.displayName = 'proto.airchat.gateway.v2.StatusSubscription';
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
proto.airchat.gateway.v2.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.airchat.gateway.v2.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.airchat.gateway.v2.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.gateway.v2.Status.toObject = function(includeInstance, msg) {
  var f, obj = {
    to: jspb.Message.getFieldWithDefault(msg, 1, ""),
    from: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    value: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    createdTime: (f = msg.getCreatedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.airchat.gateway.v2.Status}
 */
proto.airchat.gateway.v2.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.gateway.v2.Status;
  return proto.airchat.gateway.v2.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.gateway.v2.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.gateway.v2.Status}
 */
proto.airchat.gateway.v2.Status.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 3:
      var value = /** @type {!proto.airchat.gateway.v2.StatusType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
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
proto.airchat.gateway.v2.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.airchat.gateway.v2.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.gateway.v2.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.gateway.v2.Status.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getValue();
  if (f) {
    writer.writeBool(
      4,
      f
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
 * optional string to = 1;
 * @return {string}
 */
proto.airchat.gateway.v2.Status.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.airchat.gateway.v2.Status} returns this
 */
proto.airchat.gateway.v2.Status.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string from = 2;
 * @return {string}
 */
proto.airchat.gateway.v2.Status.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.airchat.gateway.v2.Status} returns this
 */
proto.airchat.gateway.v2.Status.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional StatusType type = 3;
 * @return {!proto.airchat.gateway.v2.StatusType}
 */
proto.airchat.gateway.v2.Status.prototype.getType = function() {
  return /** @type {!proto.airchat.gateway.v2.StatusType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.airchat.gateway.v2.StatusType} value
 * @return {!proto.airchat.gateway.v2.Status} returns this
 */
proto.airchat.gateway.v2.Status.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool value = 4;
 * @return {boolean}
 */
proto.airchat.gateway.v2.Status.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.airchat.gateway.v2.Status} returns this
 */
proto.airchat.gateway.v2.Status.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.airchat.gateway.v2.Status.prototype.getCreatedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.airchat.gateway.v2.Status} returns this
*/
proto.airchat.gateway.v2.Status.prototype.setCreatedTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.gateway.v2.Status} returns this
 */
proto.airchat.gateway.v2.Status.prototype.clearCreatedTime = function() {
  return this.setCreatedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.gateway.v2.Status.prototype.hasCreatedTime = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.gateway.v2.StatusSubscription.repeatedFields_ = [2];



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
proto.airchat.gateway.v2.StatusSubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.airchat.gateway.v2.StatusSubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.airchat.gateway.v2.StatusSubscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.gateway.v2.StatusSubscription.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamId: (f = msg.getStreamId()) && airchat_gateway_v2_gateway_pb.StreamIdentifier.toObject(includeInstance, f),
    userIdList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    subscriberUserId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    action: jspb.Message.getFieldWithDefault(msg, 4, 0),
    append: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    newConnection: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.airchat.gateway.v2.StatusSubscription}
 */
proto.airchat.gateway.v2.StatusSubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.gateway.v2.StatusSubscription;
  return proto.airchat.gateway.v2.StatusSubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.gateway.v2.StatusSubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.gateway.v2.StatusSubscription}
 */
proto.airchat.gateway.v2.StatusSubscription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new airchat_gateway_v2_gateway_pb.StreamIdentifier;
      reader.readMessage(value,airchat_gateway_v2_gateway_pb.StreamIdentifier.deserializeBinaryFromReader);
      msg.setStreamId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriberUserId(value);
      break;
    case 4:
      var value = /** @type {!proto.airchat.gateway.v2.SubscriptionAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAppend(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNewConnection(value);
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
proto.airchat.gateway.v2.StatusSubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.airchat.gateway.v2.StatusSubscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.gateway.v2.StatusSubscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.gateway.v2.StatusSubscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      airchat_gateway_v2_gateway_pb.StreamIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getUserIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSubscriberUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAppend();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getNewConnection();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional StreamIdentifier stream_id = 1;
 * @return {?proto.airchat.gateway.v2.StreamIdentifier}
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.getStreamId = function() {
  return /** @type{?proto.airchat.gateway.v2.StreamIdentifier} */ (
    jspb.Message.getWrapperField(this, airchat_gateway_v2_gateway_pb.StreamIdentifier, 1));
};


/**
 * @param {?proto.airchat.gateway.v2.StreamIdentifier|undefined} value
 * @return {!proto.airchat.gateway.v2.StatusSubscription} returns this
*/
proto.airchat.gateway.v2.StatusSubscription.prototype.setStreamId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.gateway.v2.StatusSubscription} returns this
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.clearStreamId = function() {
  return this.setStreamId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.hasStreamId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string user_id = 2;
 * @return {!Array<string>}
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.getUserIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.airchat.gateway.v2.StatusSubscription} returns this
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.setUserIdList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.airchat.gateway.v2.StatusSubscription} returns this
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.addUserId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.gateway.v2.StatusSubscription} returns this
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.clearUserIdList = function() {
  return this.setUserIdList([]);
};


/**
 * optional string subscriber_user_id = 3;
 * @return {string}
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.getSubscriberUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.airchat.gateway.v2.StatusSubscription} returns this
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.setSubscriberUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SubscriptionAction action = 4;
 * @return {!proto.airchat.gateway.v2.SubscriptionAction}
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.getAction = function() {
  return /** @type {!proto.airchat.gateway.v2.SubscriptionAction} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.airchat.gateway.v2.SubscriptionAction} value
 * @return {!proto.airchat.gateway.v2.StatusSubscription} returns this
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bool append = 5;
 * @return {boolean}
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.getAppend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.airchat.gateway.v2.StatusSubscription} returns this
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.setAppend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool new_connection = 6;
 * @return {boolean}
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.getNewConnection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.airchat.gateway.v2.StatusSubscription} returns this
 */
proto.airchat.gateway.v2.StatusSubscription.prototype.setNewConnection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * @enum {number}
 */
proto.airchat.gateway.v2.StatusType = {
  STATUS_TYPE_INVALID: 0,
  STATUS_TYPE_ONLINE_STATUS: 1,
  STATUS_TYPE_LISTENING_STATUS: 2,
  STATUS_TYPE_LISTENING_HEARTBEAT: 3,
  STATUS_TYPE_RECORDING_STATUS: 4,
  STATUS_TYPE_RECORDING_HEARTBEAT: 5,
  STATUS_TYPE_RECORDING_VIDEO_STATUS: 6,
  STATUS_TYPE_RECORDING_VIDEO_HEARTBEAT: 7,
  STATUS_TYPE_WATCHING_STATUS: 8,
  STATUS_TYPE_WATCHING_STATUS_HEARTBEAT: 9,
  STATUS_TYPE_TYPING_STATUS: 10,
  STATUS_TYPE_TYPING_STATUS_HEARTBEAT: 11
};

goog.object.extend(exports, proto.airchat.gateway.v2);
