// source: airchat/search/v2/search.proto
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

var airchat_channel_v2_channel_pb = require('../../../airchat/channel/v2/channel_pb.js');
goog.object.extend(proto, airchat_channel_v2_channel_pb);
var airchat_message_v2_message_pb = require('../../../airchat/message/v2/message_pb.js');
goog.object.extend(proto, airchat_message_v2_message_pb);
var airchat_user_v2_user_pb = require('../../../airchat/user/v2/user_pb.js');
goog.object.extend(proto, airchat_user_v2_user_pb);
goog.exportSymbol('proto.airchat.search.v2.ChannelSearchResult', null, global);
goog.exportSymbol('proto.airchat.search.v2.MessageSearchResult', null, global);
goog.exportSymbol('proto.airchat.search.v2.SearchType', null, global);
goog.exportSymbol('proto.airchat.search.v2.SearchTypedResult', null, global);
goog.exportSymbol(
  'proto.airchat.search.v2.SearchTypedResult.ResultCase',
  null,
  global
);
goog.exportSymbol('proto.airchat.search.v2.UserResults', null, global);
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
proto.airchat.search.v2.SearchTypedResult = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.search.v2.SearchTypedResult.oneofGroups_
  );
};
goog.inherits(proto.airchat.search.v2.SearchTypedResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.search.v2.SearchTypedResult.displayName =
    'proto.airchat.search.v2.SearchTypedResult';
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
proto.airchat.search.v2.UserResults = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.search.v2.UserResults.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.search.v2.UserResults, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.search.v2.UserResults.displayName =
    'proto.airchat.search.v2.UserResults';
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
proto.airchat.search.v2.MessageSearchResult = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.search.v2.MessageSearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.search.v2.MessageSearchResult.displayName =
    'proto.airchat.search.v2.MessageSearchResult';
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
proto.airchat.search.v2.ChannelSearchResult = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.search.v2.ChannelSearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.search.v2.ChannelSearchResult.displayName =
    'proto.airchat.search.v2.ChannelSearchResult';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.airchat.search.v2.SearchTypedResult.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.airchat.search.v2.SearchTypedResult.ResultCase = {
  RESULT_NOT_SET: 0,
  USER: 1,
  SUGGESTION: 2
};

/**
 * @return {proto.airchat.search.v2.SearchTypedResult.ResultCase}
 */
proto.airchat.search.v2.SearchTypedResult.prototype.getResultCase =
  function () {
    return /** @type {proto.airchat.search.v2.SearchTypedResult.ResultCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.search.v2.SearchTypedResult.oneofGroups_[0]
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
  proto.airchat.search.v2.SearchTypedResult.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.search.v2.SearchTypedResult.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.search.v2.SearchTypedResult} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.search.v2.SearchTypedResult.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        user:
          (f = msg.getUser()) &&
          proto.airchat.search.v2.UserResults.toObject(includeInstance, f),
        suggestion:
          (f = msg.getSuggestion()) &&
          proto.airchat.search.v2.UserResults.toObject(includeInstance, f)
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
 * @return {!proto.airchat.search.v2.SearchTypedResult}
 */
proto.airchat.search.v2.SearchTypedResult.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.search.v2.SearchTypedResult();
  return proto.airchat.search.v2.SearchTypedResult.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.search.v2.SearchTypedResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.search.v2.SearchTypedResult}
 */
proto.airchat.search.v2.SearchTypedResult.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new proto.airchat.search.v2.UserResults();
          reader.readMessage(
            value,
            proto.airchat.search.v2.UserResults.deserializeBinaryFromReader
          );
          msg.setUser(value);
          break;
        case 2:
          var value = new proto.airchat.search.v2.UserResults();
          reader.readMessage(
            value,
            proto.airchat.search.v2.UserResults.deserializeBinaryFromReader
          );
          msg.setSuggestion(value);
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
proto.airchat.search.v2.SearchTypedResult.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.search.v2.SearchTypedResult.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.search.v2.SearchTypedResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.search.v2.SearchTypedResult.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.airchat.search.v2.UserResults.serializeBinaryToWriter
    );
  }
  f = message.getSuggestion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.airchat.search.v2.UserResults.serializeBinaryToWriter
    );
  }
};

/**
 * optional UserResults user = 1;
 * @return {?proto.airchat.search.v2.UserResults}
 */
proto.airchat.search.v2.SearchTypedResult.prototype.getUser = function () {
  return /** @type{?proto.airchat.search.v2.UserResults} */ (
    jspb.Message.getWrapperField(this, proto.airchat.search.v2.UserResults, 1)
  );
};

/**
 * @param {?proto.airchat.search.v2.UserResults|undefined} value
 * @return {!proto.airchat.search.v2.SearchTypedResult} returns this
 */
proto.airchat.search.v2.SearchTypedResult.prototype.setUser = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.airchat.search.v2.SearchTypedResult.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.search.v2.SearchTypedResult} returns this
 */
proto.airchat.search.v2.SearchTypedResult.prototype.clearUser = function () {
  return this.setUser(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.search.v2.SearchTypedResult.prototype.hasUser = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional UserResults suggestion = 2;
 * @return {?proto.airchat.search.v2.UserResults}
 */
proto.airchat.search.v2.SearchTypedResult.prototype.getSuggestion =
  function () {
    return /** @type{?proto.airchat.search.v2.UserResults} */ (
      jspb.Message.getWrapperField(this, proto.airchat.search.v2.UserResults, 2)
    );
  };

/**
 * @param {?proto.airchat.search.v2.UserResults|undefined} value
 * @return {!proto.airchat.search.v2.SearchTypedResult} returns this
 */
proto.airchat.search.v2.SearchTypedResult.prototype.setSuggestion = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.airchat.search.v2.SearchTypedResult.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.search.v2.SearchTypedResult} returns this
 */
proto.airchat.search.v2.SearchTypedResult.prototype.clearSuggestion =
  function () {
    return this.setSuggestion(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.search.v2.SearchTypedResult.prototype.hasSuggestion =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.search.v2.UserResults.repeatedFields_ = [1];

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
  proto.airchat.search.v2.UserResults.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.search.v2.UserResults.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.search.v2.UserResults} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.search.v2.UserResults.toObject = function (
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
 * @return {!proto.airchat.search.v2.UserResults}
 */
proto.airchat.search.v2.UserResults.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.search.v2.UserResults();
  return proto.airchat.search.v2.UserResults.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.search.v2.UserResults} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.search.v2.UserResults}
 */
proto.airchat.search.v2.UserResults.deserializeBinaryFromReader = function (
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
proto.airchat.search.v2.UserResults.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.airchat.search.v2.UserResults.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.search.v2.UserResults} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.search.v2.UserResults.serializeBinaryToWriter = function (
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
 * repeated airchat.user.v2.User user = 1;
 * @return {!Array<!proto.airchat.user.v2.User>}
 */
proto.airchat.search.v2.UserResults.prototype.getUserList = function () {
  return /** @type{!Array<!proto.airchat.user.v2.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, airchat_user_v2_user_pb.User, 1)
  );
};

/**
 * @param {!Array<!proto.airchat.user.v2.User>} value
 * @return {!proto.airchat.search.v2.UserResults} returns this
 */
proto.airchat.search.v2.UserResults.prototype.setUserList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.airchat.user.v2.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.user.v2.User}
 */
proto.airchat.search.v2.UserResults.prototype.addUser = function (
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
 * @return {!proto.airchat.search.v2.UserResults} returns this
 */
proto.airchat.search.v2.UserResults.prototype.clearUserList = function () {
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
  proto.airchat.search.v2.MessageSearchResult.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.search.v2.MessageSearchResult.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.search.v2.MessageSearchResult} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.search.v2.MessageSearchResult.toObject = function (
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
 * @return {!proto.airchat.search.v2.MessageSearchResult}
 */
proto.airchat.search.v2.MessageSearchResult.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.search.v2.MessageSearchResult();
  return proto.airchat.search.v2.MessageSearchResult.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.search.v2.MessageSearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.search.v2.MessageSearchResult}
 */
proto.airchat.search.v2.MessageSearchResult.deserializeBinaryFromReader =
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
proto.airchat.search.v2.MessageSearchResult.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.search.v2.MessageSearchResult.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.search.v2.MessageSearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.search.v2.MessageSearchResult.serializeBinaryToWriter = function (
  message,
  writer
) {
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
proto.airchat.search.v2.MessageSearchResult.prototype.getMessage = function () {
  return /** @type{?proto.airchat.message.v2.Message} */ (
    jspb.Message.getWrapperField(this, airchat_message_v2_message_pb.Message, 1)
  );
};

/**
 * @param {?proto.airchat.message.v2.Message|undefined} value
 * @return {!proto.airchat.search.v2.MessageSearchResult} returns this
 */
proto.airchat.search.v2.MessageSearchResult.prototype.setMessage = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.search.v2.MessageSearchResult} returns this
 */
proto.airchat.search.v2.MessageSearchResult.prototype.clearMessage =
  function () {
    return this.setMessage(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.search.v2.MessageSearchResult.prototype.hasMessage = function () {
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
  proto.airchat.search.v2.ChannelSearchResult.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.search.v2.ChannelSearchResult.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.search.v2.ChannelSearchResult} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.search.v2.ChannelSearchResult.toObject = function (
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
 * @return {!proto.airchat.search.v2.ChannelSearchResult}
 */
proto.airchat.search.v2.ChannelSearchResult.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.search.v2.ChannelSearchResult();
  return proto.airchat.search.v2.ChannelSearchResult.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.search.v2.ChannelSearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.search.v2.ChannelSearchResult}
 */
proto.airchat.search.v2.ChannelSearchResult.deserializeBinaryFromReader =
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
proto.airchat.search.v2.ChannelSearchResult.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.search.v2.ChannelSearchResult.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.search.v2.ChannelSearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.search.v2.ChannelSearchResult.serializeBinaryToWriter = function (
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
 * optional airchat.channel.v2.Channel channel = 1;
 * @return {?proto.airchat.channel.v2.Channel}
 */
proto.airchat.search.v2.ChannelSearchResult.prototype.getChannel = function () {
  return /** @type{?proto.airchat.channel.v2.Channel} */ (
    jspb.Message.getWrapperField(this, airchat_channel_v2_channel_pb.Channel, 1)
  );
};

/**
 * @param {?proto.airchat.channel.v2.Channel|undefined} value
 * @return {!proto.airchat.search.v2.ChannelSearchResult} returns this
 */
proto.airchat.search.v2.ChannelSearchResult.prototype.setChannel = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.search.v2.ChannelSearchResult} returns this
 */
proto.airchat.search.v2.ChannelSearchResult.prototype.clearChannel =
  function () {
    return this.setChannel(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.search.v2.ChannelSearchResult.prototype.hasChannel = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * @enum {number}
 */
proto.airchat.search.v2.SearchType = {
  SEARCH_TYPE_INVALID: 0,
  SEARCH_TYPE_USER: 1,
  SEARCH_TYPE_SUGGESTION: 2
};

goog.object.extend(exports, proto.airchat.search.v2);
