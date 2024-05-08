// source: airchat/settings/v2/settings_api.proto
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

var airchat_settings_v2_settings_pb = require('../../../airchat/settings/v2/settings_pb.js');
goog.object.extend(proto, airchat_settings_v2_settings_pb);
goog.exportSymbol('proto.airchat.settings.v2.GetSettingsRequest', null, global);
goog.exportSymbol(
  'proto.airchat.settings.v2.GetSettingsResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.settings.v2.UpdateSettingsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.settings.v2.UpdateSettingsResponse',
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
proto.airchat.settings.v2.GetSettingsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.settings.v2.GetSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.settings.v2.GetSettingsRequest.displayName =
    'proto.airchat.settings.v2.GetSettingsRequest';
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
proto.airchat.settings.v2.GetSettingsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.settings.v2.GetSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.settings.v2.GetSettingsResponse.displayName =
    'proto.airchat.settings.v2.GetSettingsResponse';
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
proto.airchat.settings.v2.UpdateSettingsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.settings.v2.UpdateSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.settings.v2.UpdateSettingsRequest.displayName =
    'proto.airchat.settings.v2.UpdateSettingsRequest';
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
proto.airchat.settings.v2.UpdateSettingsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.settings.v2.UpdateSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.settings.v2.UpdateSettingsResponse.displayName =
    'proto.airchat.settings.v2.UpdateSettingsResponse';
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
  proto.airchat.settings.v2.GetSettingsRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.settings.v2.GetSettingsRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.settings.v2.GetSettingsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.settings.v2.GetSettingsRequest.toObject = function (
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
 * @return {!proto.airchat.settings.v2.GetSettingsRequest}
 */
proto.airchat.settings.v2.GetSettingsRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.settings.v2.GetSettingsRequest();
  return proto.airchat.settings.v2.GetSettingsRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.settings.v2.GetSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.settings.v2.GetSettingsRequest}
 */
proto.airchat.settings.v2.GetSettingsRequest.deserializeBinaryFromReader =
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
proto.airchat.settings.v2.GetSettingsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.settings.v2.GetSettingsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.settings.v2.GetSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.settings.v2.GetSettingsRequest.serializeBinaryToWriter =
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
  proto.airchat.settings.v2.GetSettingsResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.settings.v2.GetSettingsResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.settings.v2.GetSettingsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.settings.v2.GetSettingsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        settings:
          (f = msg.getSettings()) &&
          airchat_settings_v2_settings_pb.Settings.toObject(includeInstance, f)
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
 * @return {!proto.airchat.settings.v2.GetSettingsResponse}
 */
proto.airchat.settings.v2.GetSettingsResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.settings.v2.GetSettingsResponse();
  return proto.airchat.settings.v2.GetSettingsResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.settings.v2.GetSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.settings.v2.GetSettingsResponse}
 */
proto.airchat.settings.v2.GetSettingsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_settings_v2_settings_pb.Settings();
          reader.readMessage(
            value,
            airchat_settings_v2_settings_pb.Settings.deserializeBinaryFromReader
          );
          msg.setSettings(value);
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
proto.airchat.settings.v2.GetSettingsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.settings.v2.GetSettingsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.settings.v2.GetSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.settings.v2.GetSettingsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getSettings();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_settings_v2_settings_pb.Settings.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Settings settings = 1;
 * @return {?proto.airchat.settings.v2.Settings}
 */
proto.airchat.settings.v2.GetSettingsResponse.prototype.getSettings =
  function () {
    return /** @type{?proto.airchat.settings.v2.Settings} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_settings_v2_settings_pb.Settings,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.settings.v2.Settings|undefined} value
 * @return {!proto.airchat.settings.v2.GetSettingsResponse} returns this
 */
proto.airchat.settings.v2.GetSettingsResponse.prototype.setSettings = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.settings.v2.GetSettingsResponse} returns this
 */
proto.airchat.settings.v2.GetSettingsResponse.prototype.clearSettings =
  function () {
    return this.setSettings(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.settings.v2.GetSettingsResponse.prototype.hasSettings =
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
  proto.airchat.settings.v2.UpdateSettingsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.settings.v2.UpdateSettingsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.settings.v2.UpdateSettingsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.settings.v2.UpdateSettingsRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        settings:
          (f = msg.getSettings()) &&
          airchat_settings_v2_settings_pb.Settings.toObject(includeInstance, f)
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
 * @return {!proto.airchat.settings.v2.UpdateSettingsRequest}
 */
proto.airchat.settings.v2.UpdateSettingsRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.settings.v2.UpdateSettingsRequest();
  return proto.airchat.settings.v2.UpdateSettingsRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.settings.v2.UpdateSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.settings.v2.UpdateSettingsRequest}
 */
proto.airchat.settings.v2.UpdateSettingsRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new airchat_settings_v2_settings_pb.Settings();
          reader.readMessage(
            value,
            airchat_settings_v2_settings_pb.Settings.deserializeBinaryFromReader
          );
          msg.setSettings(value);
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
proto.airchat.settings.v2.UpdateSettingsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.settings.v2.UpdateSettingsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.settings.v2.UpdateSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.settings.v2.UpdateSettingsRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getSettings();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        airchat_settings_v2_settings_pb.Settings.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Settings settings = 1;
 * @return {?proto.airchat.settings.v2.Settings}
 */
proto.airchat.settings.v2.UpdateSettingsRequest.prototype.getSettings =
  function () {
    return /** @type{?proto.airchat.settings.v2.Settings} */ (
      jspb.Message.getWrapperField(
        this,
        airchat_settings_v2_settings_pb.Settings,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.settings.v2.Settings|undefined} value
 * @return {!proto.airchat.settings.v2.UpdateSettingsRequest} returns this
 */
proto.airchat.settings.v2.UpdateSettingsRequest.prototype.setSettings =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.settings.v2.UpdateSettingsRequest} returns this
 */
proto.airchat.settings.v2.UpdateSettingsRequest.prototype.clearSettings =
  function () {
    return this.setSettings(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.settings.v2.UpdateSettingsRequest.prototype.hasSettings =
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
  proto.airchat.settings.v2.UpdateSettingsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.airchat.settings.v2.UpdateSettingsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.settings.v2.UpdateSettingsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.settings.v2.UpdateSettingsResponse.toObject = function (
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
 * @return {!proto.airchat.settings.v2.UpdateSettingsResponse}
 */
proto.airchat.settings.v2.UpdateSettingsResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.settings.v2.UpdateSettingsResponse();
  return proto.airchat.settings.v2.UpdateSettingsResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.settings.v2.UpdateSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.settings.v2.UpdateSettingsResponse}
 */
proto.airchat.settings.v2.UpdateSettingsResponse.deserializeBinaryFromReader =
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
proto.airchat.settings.v2.UpdateSettingsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.settings.v2.UpdateSettingsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.settings.v2.UpdateSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.settings.v2.UpdateSettingsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

goog.object.extend(exports, proto.airchat.settings.v2);
