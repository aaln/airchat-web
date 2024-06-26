// source: airchat/channel/event/v2/channel_internal_api.proto
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

var airchat_channel_v2_channel_pb = require('../../../../airchat/channel/v2/channel_pb.js');
goog.object.extend(proto, airchat_channel_v2_channel_pb);
goog.exportSymbol(
  'proto.airchat.channel.event.v2.GetHydratedChannelsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.channel.event.v2.GetHydratedChannelsResponse',
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
proto.airchat.channel.event.v2.GetHydratedChannelsRequest = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.channel.event.v2.GetHydratedChannelsRequest.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.channel.event.v2.GetHydratedChannelsRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.event.v2.GetHydratedChannelsRequest.displayName =
    'proto.airchat.channel.event.v2.GetHydratedChannelsRequest';
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
proto.airchat.channel.event.v2.GetHydratedChannelsResponse = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.channel.event.v2.GetHydratedChannelsResponse.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.airchat.channel.event.v2.GetHydratedChannelsResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.channel.event.v2.GetHydratedChannelsResponse.displayName =
    'proto.airchat.channel.event.v2.GetHydratedChannelsResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.channel.event.v2.GetHydratedChannelsRequest.repeatedFields_ = [1];

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
  proto.airchat.channel.event.v2.GetHydratedChannelsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.event.v2.GetHydratedChannelsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.event.v2.GetHydratedChannelsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.event.v2.GetHydratedChannelsRequest.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          channelIdList:
            (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
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
 * @return {!proto.airchat.channel.event.v2.GetHydratedChannelsRequest}
 */
proto.airchat.channel.event.v2.GetHydratedChannelsRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.event.v2.GetHydratedChannelsRequest();
    return proto.airchat.channel.event.v2.GetHydratedChannelsRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.event.v2.GetHydratedChannelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.event.v2.GetHydratedChannelsRequest}
 */
proto.airchat.channel.event.v2.GetHydratedChannelsRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.addChannelId(value);
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
proto.airchat.channel.event.v2.GetHydratedChannelsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.event.v2.GetHydratedChannelsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.event.v2.GetHydratedChannelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.event.v2.GetHydratedChannelsRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelIdList();
    if (f.length > 0) {
      writer.writeRepeatedString(1, f);
    }
    f = message.getUserId();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated string channel_id = 1;
 * @return {!Array<string>}
 */
proto.airchat.channel.event.v2.GetHydratedChannelsRequest.prototype.getChannelIdList =
  function () {
    return /** @type {!Array<string>} */ (
      jspb.Message.getRepeatedField(this, 1)
    );
  };

/**
 * @param {!Array<string>} value
 * @return {!proto.airchat.channel.event.v2.GetHydratedChannelsRequest} returns this
 */
proto.airchat.channel.event.v2.GetHydratedChannelsRequest.prototype.setChannelIdList =
  function (value) {
    return jspb.Message.setField(this, 1, value || []);
  };

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.airchat.channel.event.v2.GetHydratedChannelsRequest} returns this
 */
proto.airchat.channel.event.v2.GetHydratedChannelsRequest.prototype.addChannelId =
  function (value, opt_index) {
    return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.channel.event.v2.GetHydratedChannelsRequest} returns this
 */
proto.airchat.channel.event.v2.GetHydratedChannelsRequest.prototype.clearChannelIdList =
  function () {
    return this.setChannelIdList([]);
  };

/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.airchat.channel.event.v2.GetHydratedChannelsRequest.prototype.getUserId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.channel.event.v2.GetHydratedChannelsRequest} returns this
 */
proto.airchat.channel.event.v2.GetHydratedChannelsRequest.prototype.setUserId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.channel.event.v2.GetHydratedChannelsResponse.repeatedFields_ = [
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
  proto.airchat.channel.event.v2.GetHydratedChannelsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.channel.event.v2.GetHydratedChannelsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.channel.event.v2.GetHydratedChannelsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.channel.event.v2.GetHydratedChannelsResponse.toObject =
    function (includeInstance, msg) {
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
 * @return {!proto.airchat.channel.event.v2.GetHydratedChannelsResponse}
 */
proto.airchat.channel.event.v2.GetHydratedChannelsResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.airchat.channel.event.v2.GetHydratedChannelsResponse();
    return proto.airchat.channel.event.v2.GetHydratedChannelsResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.channel.event.v2.GetHydratedChannelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.channel.event.v2.GetHydratedChannelsResponse}
 */
proto.airchat.channel.event.v2.GetHydratedChannelsResponse.deserializeBinaryFromReader =
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
proto.airchat.channel.event.v2.GetHydratedChannelsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.channel.event.v2.GetHydratedChannelsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.channel.event.v2.GetHydratedChannelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.channel.event.v2.GetHydratedChannelsResponse.serializeBinaryToWriter =
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
 * repeated airchat.channel.v2.Channel channel = 1;
 * @return {!Array<!proto.airchat.channel.v2.Channel>}
 */
proto.airchat.channel.event.v2.GetHydratedChannelsResponse.prototype.getChannelList =
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
 * @return {!proto.airchat.channel.event.v2.GetHydratedChannelsResponse} returns this
 */
proto.airchat.channel.event.v2.GetHydratedChannelsResponse.prototype.setChannelList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.channel.v2.Channel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.channel.v2.Channel}
 */
proto.airchat.channel.event.v2.GetHydratedChannelsResponse.prototype.addChannel =
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
 * @return {!proto.airchat.channel.event.v2.GetHydratedChannelsResponse} returns this
 */
proto.airchat.channel.event.v2.GetHydratedChannelsResponse.prototype.clearChannelList =
  function () {
    return this.setChannelList([]);
  };

goog.object.extend(exports, proto.airchat.channel.event.v2);
