// source: airchat/search/v2/enhanced_search_api.proto
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

var airchat_search_v2_search_pb = require('../../../airchat/search/v2/search_pb.js');
goog.object.extend(proto, airchat_search_v2_search_pb);
goog.exportSymbol('proto.airchat.search.v2.ChannelSearchRequest', null, global);
goog.exportSymbol(
  'proto.airchat.search.v2.ChannelSearchResponse',
  null,
  global
);
goog.exportSymbol('proto.airchat.search.v2.MessageSearchRequest', null, global);
goog.exportSymbol(
  'proto.airchat.search.v2.MessageSearchResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.search.v2.MessageSearchSortOrder',
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
proto.airchat.search.v2.MessageSearchRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.search.v2.MessageSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.search.v2.MessageSearchRequest.displayName =
    'proto.airchat.search.v2.MessageSearchRequest';
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
proto.airchat.search.v2.MessageSearchResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.search.v2.MessageSearchResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.search.v2.MessageSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.search.v2.MessageSearchResponse.displayName =
    'proto.airchat.search.v2.MessageSearchResponse';
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
proto.airchat.search.v2.ChannelSearchRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.search.v2.ChannelSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.search.v2.ChannelSearchRequest.displayName =
    'proto.airchat.search.v2.ChannelSearchRequest';
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
proto.airchat.search.v2.ChannelSearchResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.search.v2.ChannelSearchResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.search.v2.ChannelSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.search.v2.ChannelSearchResponse.displayName =
    'proto.airchat.search.v2.ChannelSearchResponse';
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
  proto.airchat.search.v2.MessageSearchRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.search.v2.MessageSearchRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.search.v2.MessageSearchRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.search.v2.MessageSearchRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        query: jspb.Message.getFieldWithDefault(msg, 1, ''),
        pageKey: jspb.Message.getFieldWithDefault(msg, 2, ''),
        sortOrder: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.airchat.search.v2.MessageSearchRequest}
 */
proto.airchat.search.v2.MessageSearchRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.search.v2.MessageSearchRequest();
  return proto.airchat.search.v2.MessageSearchRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.search.v2.MessageSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.search.v2.MessageSearchRequest}
 */
proto.airchat.search.v2.MessageSearchRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setQuery(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setPageKey(value);
          break;
        case 3:
          var value =
            /** @type {!proto.airchat.search.v2.MessageSearchSortOrder} */ (
              reader.readEnum()
            );
          msg.setSortOrder(value);
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
proto.airchat.search.v2.MessageSearchRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.search.v2.MessageSearchRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.search.v2.MessageSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.search.v2.MessageSearchRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getQuery();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getSortOrder();
    if (f !== 0.0) {
      writer.writeEnum(3, f);
    }
  };

/**
 * optional string query = 1;
 * @return {string}
 */
proto.airchat.search.v2.MessageSearchRequest.prototype.getQuery = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.search.v2.MessageSearchRequest} returns this
 */
proto.airchat.search.v2.MessageSearchRequest.prototype.setQuery = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string page_key = 2;
 * @return {string}
 */
proto.airchat.search.v2.MessageSearchRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.search.v2.MessageSearchRequest} returns this
 */
proto.airchat.search.v2.MessageSearchRequest.prototype.setPageKey = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional MessageSearchSortOrder sort_order = 3;
 * @return {!proto.airchat.search.v2.MessageSearchSortOrder}
 */
proto.airchat.search.v2.MessageSearchRequest.prototype.getSortOrder =
  function () {
    return /** @type {!proto.airchat.search.v2.MessageSearchSortOrder} */ (
      jspb.Message.getFieldWithDefault(this, 3, 0)
    );
  };

/**
 * @param {!proto.airchat.search.v2.MessageSearchSortOrder} value
 * @return {!proto.airchat.search.v2.MessageSearchRequest} returns this
 */
proto.airchat.search.v2.MessageSearchRequest.prototype.setSortOrder = function (
  value
) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.search.v2.MessageSearchResponse.repeatedFields_ = [1];

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
  proto.airchat.search.v2.MessageSearchResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.search.v2.MessageSearchResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.search.v2.MessageSearchResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.search.v2.MessageSearchResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        messageSearchResultList: jspb.Message.toObjectList(
          msg.getMessageSearchResultList(),
          airchat_search_v2_search_pb.MessageSearchResult.toObject,
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
 * @return {!proto.airchat.search.v2.MessageSearchResponse}
 */
proto.airchat.search.v2.MessageSearchResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.search.v2.MessageSearchResponse();
  return proto.airchat.search.v2.MessageSearchResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.search.v2.MessageSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.search.v2.MessageSearchResponse}
 */
proto.airchat.search.v2.MessageSearchResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_search_v2_search_pb.MessageSearchResult();
          reader.readMessage(
            value,
            airchat_search_v2_search_pb.MessageSearchResult
              .deserializeBinaryFromReader
          );
          msg.addMessageSearchResult(value);
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
proto.airchat.search.v2.MessageSearchResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.search.v2.MessageSearchResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.search.v2.MessageSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.search.v2.MessageSearchResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getMessageSearchResultList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_search_v2_search_pb.MessageSearchResult.serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated MessageSearchResult message_search_result = 1;
 * @return {!Array<!proto.airchat.search.v2.MessageSearchResult>}
 */
proto.airchat.search.v2.MessageSearchResponse.prototype.getMessageSearchResultList =
  function () {
    return /** @type{!Array<!proto.airchat.search.v2.MessageSearchResult>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_search_v2_search_pb.MessageSearchResult,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.search.v2.MessageSearchResult>} value
 * @return {!proto.airchat.search.v2.MessageSearchResponse} returns this
 */
proto.airchat.search.v2.MessageSearchResponse.prototype.setMessageSearchResultList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.search.v2.MessageSearchResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.search.v2.MessageSearchResult}
 */
proto.airchat.search.v2.MessageSearchResponse.prototype.addMessageSearchResult =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.search.v2.MessageSearchResult,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.search.v2.MessageSearchResponse} returns this
 */
proto.airchat.search.v2.MessageSearchResponse.prototype.clearMessageSearchResultList =
  function () {
    return this.setMessageSearchResultList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.search.v2.MessageSearchResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.search.v2.MessageSearchResponse} returns this
 */
proto.airchat.search.v2.MessageSearchResponse.prototype.setNextPageKey =
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
  proto.airchat.search.v2.ChannelSearchRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.search.v2.ChannelSearchRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.search.v2.ChannelSearchRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.search.v2.ChannelSearchRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        query: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.airchat.search.v2.ChannelSearchRequest}
 */
proto.airchat.search.v2.ChannelSearchRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.search.v2.ChannelSearchRequest();
  return proto.airchat.search.v2.ChannelSearchRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.search.v2.ChannelSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.search.v2.ChannelSearchRequest}
 */
proto.airchat.search.v2.ChannelSearchRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setQuery(value);
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
proto.airchat.search.v2.ChannelSearchRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.search.v2.ChannelSearchRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.search.v2.ChannelSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.search.v2.ChannelSearchRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getQuery();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * optional string query = 1;
 * @return {string}
 */
proto.airchat.search.v2.ChannelSearchRequest.prototype.getQuery = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.airchat.search.v2.ChannelSearchRequest} returns this
 */
proto.airchat.search.v2.ChannelSearchRequest.prototype.setQuery = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string page_key = 2;
 * @return {string}
 */
proto.airchat.search.v2.ChannelSearchRequest.prototype.getPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.search.v2.ChannelSearchRequest} returns this
 */
proto.airchat.search.v2.ChannelSearchRequest.prototype.setPageKey = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.search.v2.ChannelSearchResponse.repeatedFields_ = [1];

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
  proto.airchat.search.v2.ChannelSearchResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.search.v2.ChannelSearchResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.search.v2.ChannelSearchResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.search.v2.ChannelSearchResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        channelSearchResultList: jspb.Message.toObjectList(
          msg.getChannelSearchResultList(),
          airchat_search_v2_search_pb.ChannelSearchResult.toObject,
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
 * @return {!proto.airchat.search.v2.ChannelSearchResponse}
 */
proto.airchat.search.v2.ChannelSearchResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.search.v2.ChannelSearchResponse();
  return proto.airchat.search.v2.ChannelSearchResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.search.v2.ChannelSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.search.v2.ChannelSearchResponse}
 */
proto.airchat.search.v2.ChannelSearchResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_search_v2_search_pb.ChannelSearchResult();
          reader.readMessage(
            value,
            airchat_search_v2_search_pb.ChannelSearchResult
              .deserializeBinaryFromReader
          );
          msg.addChannelSearchResult(value);
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
proto.airchat.search.v2.ChannelSearchResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.search.v2.ChannelSearchResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.search.v2.ChannelSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.search.v2.ChannelSearchResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getChannelSearchResultList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        airchat_search_v2_search_pb.ChannelSearchResult.serializeBinaryToWriter
      );
    }
    f = message.getNextPageKey();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
  };

/**
 * repeated ChannelSearchResult channel_search_result = 1;
 * @return {!Array<!proto.airchat.search.v2.ChannelSearchResult>}
 */
proto.airchat.search.v2.ChannelSearchResponse.prototype.getChannelSearchResultList =
  function () {
    return /** @type{!Array<!proto.airchat.search.v2.ChannelSearchResult>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        airchat_search_v2_search_pb.ChannelSearchResult,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.search.v2.ChannelSearchResult>} value
 * @return {!proto.airchat.search.v2.ChannelSearchResponse} returns this
 */
proto.airchat.search.v2.ChannelSearchResponse.prototype.setChannelSearchResultList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.airchat.search.v2.ChannelSearchResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.search.v2.ChannelSearchResult}
 */
proto.airchat.search.v2.ChannelSearchResponse.prototype.addChannelSearchResult =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.airchat.search.v2.ChannelSearchResult,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.search.v2.ChannelSearchResponse} returns this
 */
proto.airchat.search.v2.ChannelSearchResponse.prototype.clearChannelSearchResultList =
  function () {
    return this.setChannelSearchResultList([]);
  };

/**
 * optional string next_page_key = 2;
 * @return {string}
 */
proto.airchat.search.v2.ChannelSearchResponse.prototype.getNextPageKey =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.airchat.search.v2.ChannelSearchResponse} returns this
 */
proto.airchat.search.v2.ChannelSearchResponse.prototype.setNextPageKey =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * @enum {number}
 */
proto.airchat.search.v2.MessageSearchSortOrder = {
  MESSAGE_SEARCH_SORT_ORDER_INVALID: 0,
  MESSAGE_SEARCH_SORT_ORDER_RELEVANCE: 1,
  MESSAGE_SEARCH_SORT_ORDER_LATEST: 2
};

goog.object.extend(exports, proto.airchat.search.v2);
