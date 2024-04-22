// source: airchat/activity/event/v2/activity.proto
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

var airchat_activity_v2_activity_pb = require('../../../../airchat/activity/v2/activity_pb.js');
goog.object.extend(proto, airchat_activity_v2_activity_pb);
goog.exportSymbol('proto.airchat.activity.event.v2.ActivityEvent', null, global);
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
proto.airchat.activity.event.v2.ActivityEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.activity.event.v2.ActivityEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.activity.event.v2.ActivityEvent.displayName = 'proto.airchat.activity.event.v2.ActivityEvent';
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
proto.airchat.activity.event.v2.ActivityEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.airchat.activity.event.v2.ActivityEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.airchat.activity.event.v2.ActivityEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.activity.event.v2.ActivityEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && airchat_activity_v2_activity_pb.ActivityItem.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.airchat.activity.event.v2.ActivityEvent}
 */
proto.airchat.activity.event.v2.ActivityEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.activity.event.v2.ActivityEvent;
  return proto.airchat.activity.event.v2.ActivityEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.activity.event.v2.ActivityEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.activity.event.v2.ActivityEvent}
 */
proto.airchat.activity.event.v2.ActivityEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new airchat_activity_v2_activity_pb.ActivityItem;
      reader.readMessage(value,airchat_activity_v2_activity_pb.ActivityItem.deserializeBinaryFromReader);
      msg.setItem(value);
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
proto.airchat.activity.event.v2.ActivityEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.airchat.activity.event.v2.ActivityEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.activity.event.v2.ActivityEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.activity.event.v2.ActivityEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      airchat_activity_v2_activity_pb.ActivityItem.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional airchat.activity.v2.ActivityItem item = 1;
 * @return {?proto.airchat.activity.v2.ActivityItem}
 */
proto.airchat.activity.event.v2.ActivityEvent.prototype.getItem = function() {
  return /** @type{?proto.airchat.activity.v2.ActivityItem} */ (
    jspb.Message.getWrapperField(this, airchat_activity_v2_activity_pb.ActivityItem, 1));
};


/**
 * @param {?proto.airchat.activity.v2.ActivityItem|undefined} value
 * @return {!proto.airchat.activity.event.v2.ActivityEvent} returns this
*/
proto.airchat.activity.event.v2.ActivityEvent.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.activity.event.v2.ActivityEvent} returns this
 */
proto.airchat.activity.event.v2.ActivityEvent.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.activity.event.v2.ActivityEvent.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.airchat.activity.event.v2.ActivityEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.airchat.activity.event.v2.ActivityEvent} returns this
 */
proto.airchat.activity.event.v2.ActivityEvent.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.airchat.activity.event.v2);
