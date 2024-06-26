// source: airchat/settings/v2/settings.proto
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

goog.exportSymbol(
  'proto.airchat.settings.v2.NotificationSetting',
  null,
  global
);
goog.exportSymbol(
  'proto.airchat.settings.v2.NotificationSetting.SettingCase',
  null,
  global
);
goog.exportSymbol('proto.airchat.settings.v2.Settings', null, global);
goog.exportSymbol('proto.airchat.settings.v2.SettingsEntry', null, global);
goog.exportSymbol(
  'proto.airchat.settings.v2.SettingsEntry.SettingTypeCase',
  null,
  global
);
goog.exportSymbol('proto.airchat.settings.v2.SettingsToggle', null, global);
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
proto.airchat.settings.v2.Settings = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.airchat.settings.v2.Settings.repeatedFields_,
    null
  );
};
goog.inherits(proto.airchat.settings.v2.Settings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.settings.v2.Settings.displayName =
    'proto.airchat.settings.v2.Settings';
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
proto.airchat.settings.v2.SettingsEntry = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.settings.v2.SettingsEntry.oneofGroups_
  );
};
goog.inherits(proto.airchat.settings.v2.SettingsEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.settings.v2.SettingsEntry.displayName =
    'proto.airchat.settings.v2.SettingsEntry';
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
proto.airchat.settings.v2.NotificationSetting = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.airchat.settings.v2.NotificationSetting.oneofGroups_
  );
};
goog.inherits(proto.airchat.settings.v2.NotificationSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.airchat.settings.v2.NotificationSetting.displayName =
    'proto.airchat.settings.v2.NotificationSetting';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.airchat.settings.v2.Settings.repeatedFields_ = [1];

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
  proto.airchat.settings.v2.Settings.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.settings.v2.Settings.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.settings.v2.Settings} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.settings.v2.Settings.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        settingsEntryList: jspb.Message.toObjectList(
          msg.getSettingsEntryList(),
          proto.airchat.settings.v2.SettingsEntry.toObject,
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
 * @return {!proto.airchat.settings.v2.Settings}
 */
proto.airchat.settings.v2.Settings.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.settings.v2.Settings();
  return proto.airchat.settings.v2.Settings.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.settings.v2.Settings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.settings.v2.Settings}
 */
proto.airchat.settings.v2.Settings.deserializeBinaryFromReader = function (
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
        var value = new proto.airchat.settings.v2.SettingsEntry();
        reader.readMessage(
          value,
          proto.airchat.settings.v2.SettingsEntry.deserializeBinaryFromReader
        );
        msg.addSettingsEntry(value);
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
proto.airchat.settings.v2.Settings.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.airchat.settings.v2.Settings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.settings.v2.Settings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.settings.v2.Settings.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getSettingsEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.airchat.settings.v2.SettingsEntry.serializeBinaryToWriter
    );
  }
};

/**
 * repeated SettingsEntry settings_entry = 1;
 * @return {!Array<!proto.airchat.settings.v2.SettingsEntry>}
 */
proto.airchat.settings.v2.Settings.prototype.getSettingsEntryList =
  function () {
    return /** @type{!Array<!proto.airchat.settings.v2.SettingsEntry>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        proto.airchat.settings.v2.SettingsEntry,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.airchat.settings.v2.SettingsEntry>} value
 * @return {!proto.airchat.settings.v2.Settings} returns this
 */
proto.airchat.settings.v2.Settings.prototype.setSettingsEntryList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.airchat.settings.v2.SettingsEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.airchat.settings.v2.SettingsEntry}
 */
proto.airchat.settings.v2.Settings.prototype.addSettingsEntry = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.airchat.settings.v2.SettingsEntry,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.airchat.settings.v2.Settings} returns this
 */
proto.airchat.settings.v2.Settings.prototype.clearSettingsEntryList =
  function () {
    return this.setSettingsEntryList([]);
  };

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.airchat.settings.v2.SettingsEntry.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.airchat.settings.v2.SettingsEntry.SettingTypeCase = {
  SETTING_TYPE_NOT_SET: 0,
  NOTIFICATION_SETTING: 1
};

/**
 * @return {proto.airchat.settings.v2.SettingsEntry.SettingTypeCase}
 */
proto.airchat.settings.v2.SettingsEntry.prototype.getSettingTypeCase =
  function () {
    return /** @type {proto.airchat.settings.v2.SettingsEntry.SettingTypeCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.settings.v2.SettingsEntry.oneofGroups_[0]
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
  proto.airchat.settings.v2.SettingsEntry.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.settings.v2.SettingsEntry.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.settings.v2.SettingsEntry} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.settings.v2.SettingsEntry.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        notificationSetting:
          (f = msg.getNotificationSetting()) &&
          proto.airchat.settings.v2.NotificationSetting.toObject(
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
 * @return {!proto.airchat.settings.v2.SettingsEntry}
 */
proto.airchat.settings.v2.SettingsEntry.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.settings.v2.SettingsEntry();
  return proto.airchat.settings.v2.SettingsEntry.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.settings.v2.SettingsEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.settings.v2.SettingsEntry}
 */
proto.airchat.settings.v2.SettingsEntry.deserializeBinaryFromReader = function (
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
        var value = new proto.airchat.settings.v2.NotificationSetting();
        reader.readMessage(
          value,
          proto.airchat.settings.v2.NotificationSetting
            .deserializeBinaryFromReader
        );
        msg.setNotificationSetting(value);
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
proto.airchat.settings.v2.SettingsEntry.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.settings.v2.SettingsEntry.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.settings.v2.SettingsEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.settings.v2.SettingsEntry.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getNotificationSetting();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.airchat.settings.v2.NotificationSetting.serializeBinaryToWriter
    );
  }
};

/**
 * optional NotificationSetting notification_setting = 1;
 * @return {?proto.airchat.settings.v2.NotificationSetting}
 */
proto.airchat.settings.v2.SettingsEntry.prototype.getNotificationSetting =
  function () {
    return /** @type{?proto.airchat.settings.v2.NotificationSetting} */ (
      jspb.Message.getWrapperField(
        this,
        proto.airchat.settings.v2.NotificationSetting,
        1
      )
    );
  };

/**
 * @param {?proto.airchat.settings.v2.NotificationSetting|undefined} value
 * @return {!proto.airchat.settings.v2.SettingsEntry} returns this
 */
proto.airchat.settings.v2.SettingsEntry.prototype.setNotificationSetting =
  function (value) {
    return jspb.Message.setOneofWrapperField(
      this,
      1,
      proto.airchat.settings.v2.SettingsEntry.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.airchat.settings.v2.SettingsEntry} returns this
 */
proto.airchat.settings.v2.SettingsEntry.prototype.clearNotificationSetting =
  function () {
    return this.setNotificationSetting(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.settings.v2.SettingsEntry.prototype.hasNotificationSetting =
  function () {
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
proto.airchat.settings.v2.NotificationSetting.oneofGroups_ = [
  [1, 2, 3, 4, 5, 6]
];

/**
 * @enum {number}
 */
proto.airchat.settings.v2.NotificationSetting.SettingCase = {
  SETTING_NOT_SET: 0,
  NEW_CONTACT_JOINED_NOTIFICATIONS: 1,
  NEW_MESSAGES_NOTIFICATIONS: 2,
  LIKES_NOTIFICATIONS: 3,
  FOLLOWERS_NOTIFICATIONS: 4,
  MENTION_NOTIFICATIONS: 5,
  REPOST_NOTIFICATIONS: 6
};

/**
 * @return {proto.airchat.settings.v2.NotificationSetting.SettingCase}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.getSettingCase =
  function () {
    return /** @type {proto.airchat.settings.v2.NotificationSetting.SettingCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0]
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
  proto.airchat.settings.v2.NotificationSetting.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.airchat.settings.v2.NotificationSetting.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.airchat.settings.v2.NotificationSetting} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.airchat.settings.v2.NotificationSetting.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        newContactJoinedNotifications: jspb.Message.getFieldWithDefault(
          msg,
          1,
          0
        ),
        newMessagesNotifications: jspb.Message.getFieldWithDefault(msg, 2, 0),
        likesNotifications: jspb.Message.getFieldWithDefault(msg, 3, 0),
        followersNotifications: jspb.Message.getFieldWithDefault(msg, 4, 0),
        mentionNotifications: jspb.Message.getFieldWithDefault(msg, 5, 0),
        repostNotifications: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.airchat.settings.v2.NotificationSetting}
 */
proto.airchat.settings.v2.NotificationSetting.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.airchat.settings.v2.NotificationSetting();
  return proto.airchat.settings.v2.NotificationSetting.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.airchat.settings.v2.NotificationSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.airchat.settings.v2.NotificationSetting}
 */
proto.airchat.settings.v2.NotificationSetting.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
            reader.readEnum()
          );
          msg.setNewContactJoinedNotifications(value);
          break;
        case 2:
          var value = /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
            reader.readEnum()
          );
          msg.setNewMessagesNotifications(value);
          break;
        case 3:
          var value = /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
            reader.readEnum()
          );
          msg.setLikesNotifications(value);
          break;
        case 4:
          var value = /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
            reader.readEnum()
          );
          msg.setFollowersNotifications(value);
          break;
        case 5:
          var value = /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
            reader.readEnum()
          );
          msg.setMentionNotifications(value);
          break;
        case 6:
          var value = /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
            reader.readEnum()
          );
          msg.setRepostNotifications(value);
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
proto.airchat.settings.v2.NotificationSetting.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.airchat.settings.v2.NotificationSetting.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.airchat.settings.v2.NotificationSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.airchat.settings.v2.NotificationSetting.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
      jspb.Message.getField(message, 1)
    );
    if (f != null) {
      writer.writeEnum(1, f);
    }
    f = /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
      jspb.Message.getField(message, 2)
    );
    if (f != null) {
      writer.writeEnum(2, f);
    }
    f = /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
      jspb.Message.getField(message, 3)
    );
    if (f != null) {
      writer.writeEnum(3, f);
    }
    f = /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
      jspb.Message.getField(message, 4)
    );
    if (f != null) {
      writer.writeEnum(4, f);
    }
    f = /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
      jspb.Message.getField(message, 5)
    );
    if (f != null) {
      writer.writeEnum(5, f);
    }
    f = /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
      jspb.Message.getField(message, 6)
    );
    if (f != null) {
      writer.writeEnum(6, f);
    }
  };

/**
 * optional SettingsToggle new_contact_joined_notifications = 1;
 * @return {!proto.airchat.settings.v2.SettingsToggle}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.getNewContactJoinedNotifications =
  function () {
    return /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
      jspb.Message.getFieldWithDefault(this, 1, 0)
    );
  };

/**
 * @param {!proto.airchat.settings.v2.SettingsToggle} value
 * @return {!proto.airchat.settings.v2.NotificationSetting} returns this
 */
proto.airchat.settings.v2.NotificationSetting.prototype.setNewContactJoinedNotifications =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.settings.v2.NotificationSetting} returns this
 */
proto.airchat.settings.v2.NotificationSetting.prototype.clearNewContactJoinedNotifications =
  function () {
    return jspb.Message.setOneofField(
      this,
      1,
      proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.hasNewContactJoinedNotifications =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * optional SettingsToggle new_messages_notifications = 2;
 * @return {!proto.airchat.settings.v2.SettingsToggle}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.getNewMessagesNotifications =
  function () {
    return /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
      jspb.Message.getFieldWithDefault(this, 2, 0)
    );
  };

/**
 * @param {!proto.airchat.settings.v2.SettingsToggle} value
 * @return {!proto.airchat.settings.v2.NotificationSetting} returns this
 */
proto.airchat.settings.v2.NotificationSetting.prototype.setNewMessagesNotifications =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      2,
      proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.settings.v2.NotificationSetting} returns this
 */
proto.airchat.settings.v2.NotificationSetting.prototype.clearNewMessagesNotifications =
  function () {
    return jspb.Message.setOneofField(
      this,
      2,
      proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.hasNewMessagesNotifications =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

/**
 * optional SettingsToggle likes_notifications = 3;
 * @return {!proto.airchat.settings.v2.SettingsToggle}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.getLikesNotifications =
  function () {
    return /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
      jspb.Message.getFieldWithDefault(this, 3, 0)
    );
  };

/**
 * @param {!proto.airchat.settings.v2.SettingsToggle} value
 * @return {!proto.airchat.settings.v2.NotificationSetting} returns this
 */
proto.airchat.settings.v2.NotificationSetting.prototype.setLikesNotifications =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      3,
      proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.settings.v2.NotificationSetting} returns this
 */
proto.airchat.settings.v2.NotificationSetting.prototype.clearLikesNotifications =
  function () {
    return jspb.Message.setOneofField(
      this,
      3,
      proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.hasLikesNotifications =
  function () {
    return jspb.Message.getField(this, 3) != null;
  };

/**
 * optional SettingsToggle followers_notifications = 4;
 * @return {!proto.airchat.settings.v2.SettingsToggle}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.getFollowersNotifications =
  function () {
    return /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
      jspb.Message.getFieldWithDefault(this, 4, 0)
    );
  };

/**
 * @param {!proto.airchat.settings.v2.SettingsToggle} value
 * @return {!proto.airchat.settings.v2.NotificationSetting} returns this
 */
proto.airchat.settings.v2.NotificationSetting.prototype.setFollowersNotifications =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      4,
      proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.settings.v2.NotificationSetting} returns this
 */
proto.airchat.settings.v2.NotificationSetting.prototype.clearFollowersNotifications =
  function () {
    return jspb.Message.setOneofField(
      this,
      4,
      proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.hasFollowersNotifications =
  function () {
    return jspb.Message.getField(this, 4) != null;
  };

/**
 * optional SettingsToggle mention_notifications = 5;
 * @return {!proto.airchat.settings.v2.SettingsToggle}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.getMentionNotifications =
  function () {
    return /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
      jspb.Message.getFieldWithDefault(this, 5, 0)
    );
  };

/**
 * @param {!proto.airchat.settings.v2.SettingsToggle} value
 * @return {!proto.airchat.settings.v2.NotificationSetting} returns this
 */
proto.airchat.settings.v2.NotificationSetting.prototype.setMentionNotifications =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      5,
      proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.settings.v2.NotificationSetting} returns this
 */
proto.airchat.settings.v2.NotificationSetting.prototype.clearMentionNotifications =
  function () {
    return jspb.Message.setOneofField(
      this,
      5,
      proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.hasMentionNotifications =
  function () {
    return jspb.Message.getField(this, 5) != null;
  };

/**
 * optional SettingsToggle repost_notifications = 6;
 * @return {!proto.airchat.settings.v2.SettingsToggle}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.getRepostNotifications =
  function () {
    return /** @type {!proto.airchat.settings.v2.SettingsToggle} */ (
      jspb.Message.getFieldWithDefault(this, 6, 0)
    );
  };

/**
 * @param {!proto.airchat.settings.v2.SettingsToggle} value
 * @return {!proto.airchat.settings.v2.NotificationSetting} returns this
 */
proto.airchat.settings.v2.NotificationSetting.prototype.setRepostNotifications =
  function (value) {
    return jspb.Message.setOneofField(
      this,
      6,
      proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0],
      value
    );
  };

/**
 * Clears the field making it undefined.
 * @return {!proto.airchat.settings.v2.NotificationSetting} returns this
 */
proto.airchat.settings.v2.NotificationSetting.prototype.clearRepostNotifications =
  function () {
    return jspb.Message.setOneofField(
      this,
      6,
      proto.airchat.settings.v2.NotificationSetting.oneofGroups_[0],
      undefined
    );
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.airchat.settings.v2.NotificationSetting.prototype.hasRepostNotifications =
  function () {
    return jspb.Message.getField(this, 6) != null;
  };

/**
 * @enum {number}
 */
proto.airchat.settings.v2.SettingsToggle = {
  SETTINGS_TOGGLE_INVALID: 0,
  SETTINGS_TOGGLE_ON: 1,
  SETTINGS_TOGGLE_OFF: 2
};

goog.object.extend(exports, proto.airchat.settings.v2);
