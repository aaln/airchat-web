// source: airchat/onboarding/v2/onboarding_api.proto
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

var airchat_onboarding_v2_onboarding_pb = require('../../../airchat/onboarding/v2/onboarding_pb.js');
goog.object.extend(proto, airchat_onboarding_v2_onboarding_pb);
goog.exportSymbol('proto.airchat.onboarding.v2.ValidateOnboardingRequest', null, global);
goog.exportSymbol('proto.airchat.onboarding.v2.ValidateOnboardingResponse', null, global);
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
proto.airchat.onboarding.v2.ValidateOnboardingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.airchat.onboarding.v2.ValidateOnboardingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.onboarding.v2.ValidateOnboardingRequest.displayName = 'proto.airchat.onboarding.v2.ValidateOnboardingRequest';
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
proto.airchat.onboarding.v2.ValidateOnboardingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.airchat.onboarding.v2.ValidateOnboardingResponse.repeatedFields_, null);
};
goog.inherits(proto.airchat.onboarding.v2.ValidateOnboardingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.onboarding.v2.ValidateOnboardingResponse.displayName = 'proto.airchat.onboarding.v2.ValidateOnboardingResponse';
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
proto.airchat.onboarding.v2.ValidateOnboardingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.airchat.onboarding.v2.ValidateOnboardingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.airchat.onboarding.v2.ValidateOnboardingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.onboarding.v2.ValidateOnboardingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locale: (f = msg.getLocale()) && airchat_onboarding_v2_onboarding_pb.Locale.toObject(includeInstance, f)
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
 * @return {!proto.airchat.onboarding.v2.ValidateOnboardingRequest}
 */
proto.airchat.onboarding.v2.ValidateOnboardingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.onboarding.v2.ValidateOnboardingRequest;
  return proto.airchat.onboarding.v2.ValidateOnboardingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.onboarding.v2.ValidateOnboardingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.onboarding.v2.ValidateOnboardingRequest}
 */
proto.airchat.onboarding.v2.ValidateOnboardingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new airchat_onboarding_v2_onboarding_pb.Locale;
      reader.readMessage(value,airchat_onboarding_v2_onboarding_pb.Locale.deserializeBinaryFromReader);
      msg.setLocale(value);
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
proto.airchat.onboarding.v2.ValidateOnboardingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.airchat.onboarding.v2.ValidateOnboardingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.onboarding.v2.ValidateOnboardingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.onboarding.v2.ValidateOnboardingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocale();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      airchat_onboarding_v2_onboarding_pb.Locale.serializeBinaryToWriter
    );
  }
};


/**
 * optional Locale locale = 1;
 * @return {?proto.airchat.onboarding.v2.Locale}
 */
proto.airchat.onboarding.v2.ValidateOnboardingRequest.prototype.getLocale = function() {
  return /** @type{?proto.airchat.onboarding.v2.Locale} */ (
    jspb.Message.getWrapperField(this, airchat_onboarding_v2_onboarding_pb.Locale, 1));
};


/**
 * @param {?proto.airchat.onboarding.v2.Locale|undefined} value
 * @return {!proto.airchat.onboarding.v2.ValidateOnboardingRequest} returns this
*/
proto.airchat.onboarding.v2.ValidateOnboardingRequest.prototype.setLocale = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.onboarding.v2.ValidateOnboardingRequest} returns this
 */
proto.airchat.onboarding.v2.ValidateOnboardingRequest.prototype.clearLocale = function() {
  return this.setLocale(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.onboarding.v2.ValidateOnboardingRequest.prototype.hasLocale = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.onboarding.v2.ValidateOnboardingResponse.repeatedFields_ = [1];



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
proto.airchat.onboarding.v2.ValidateOnboardingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.airchat.onboarding.v2.ValidateOnboardingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.airchat.onboarding.v2.ValidateOnboardingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.onboarding.v2.ValidateOnboardingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.airchat.onboarding.v2.ValidateOnboardingResponse}
 */
proto.airchat.onboarding.v2.ValidateOnboardingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.onboarding.v2.ValidateOnboardingResponse;
  return proto.airchat.onboarding.v2.ValidateOnboardingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.onboarding.v2.ValidateOnboardingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.onboarding.v2.ValidateOnboardingResponse}
 */
proto.airchat.onboarding.v2.ValidateOnboardingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.airchat.onboarding.v2.OnboardingValidationError>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addError(values[i]);
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
proto.airchat.onboarding.v2.ValidateOnboardingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.airchat.onboarding.v2.ValidateOnboardingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.onboarding.v2.ValidateOnboardingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.onboarding.v2.ValidateOnboardingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated OnboardingValidationError error = 1;
 * @return {!Array<!proto.airchat.onboarding.v2.OnboardingValidationError>}
 */
proto.airchat.onboarding.v2.ValidateOnboardingResponse.prototype.getErrorList = function() {
  return /** @type {!Array<!proto.airchat.onboarding.v2.OnboardingValidationError>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.airchat.onboarding.v2.OnboardingValidationError>} value
 * @return {!proto.airchat.onboarding.v2.ValidateOnboardingResponse} returns this
 */
proto.airchat.onboarding.v2.ValidateOnboardingResponse.prototype.setErrorList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.airchat.onboarding.v2.OnboardingValidationError} value
 * @param {number=} opt_index
 * @return {!proto.airchat.onboarding.v2.ValidateOnboardingResponse} returns this
 */
proto.airchat.onboarding.v2.ValidateOnboardingResponse.prototype.addError = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.onboarding.v2.ValidateOnboardingResponse} returns this
 */
proto.airchat.onboarding.v2.ValidateOnboardingResponse.prototype.clearErrorList = function() {
  return this.setErrorList([]);
};


goog.object.extend(exports, proto.airchat.onboarding.v2);
