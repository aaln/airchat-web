// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_search_v2_enhanced_search_api_pb = require('../../../airchat/search/v2/enhanced_search_api_pb.js');
var airchat_search_v2_search_pb = require('../../../airchat/search/v2/search_pb.js');

function serialize_airchat_search_v2_ChannelSearchRequest(arg) {
  if (!(arg instanceof airchat_search_v2_enhanced_search_api_pb.ChannelSearchRequest)) {
    throw new Error('Expected argument of type airchat.search.v2.ChannelSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_search_v2_ChannelSearchRequest(buffer_arg) {
  return airchat_search_v2_enhanced_search_api_pb.ChannelSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_search_v2_ChannelSearchResponse(arg) {
  if (!(arg instanceof airchat_search_v2_enhanced_search_api_pb.ChannelSearchResponse)) {
    throw new Error('Expected argument of type airchat.search.v2.ChannelSearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_search_v2_ChannelSearchResponse(buffer_arg) {
  return airchat_search_v2_enhanced_search_api_pb.ChannelSearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_search_v2_MessageSearchRequest(arg) {
  if (!(arg instanceof airchat_search_v2_enhanced_search_api_pb.MessageSearchRequest)) {
    throw new Error('Expected argument of type airchat.search.v2.MessageSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_search_v2_MessageSearchRequest(buffer_arg) {
  return airchat_search_v2_enhanced_search_api_pb.MessageSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_search_v2_MessageSearchResponse(arg) {
  if (!(arg instanceof airchat_search_v2_enhanced_search_api_pb.MessageSearchResponse)) {
    throw new Error('Expected argument of type airchat.search.v2.MessageSearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_search_v2_MessageSearchResponse(buffer_arg) {
  return airchat_search_v2_enhanced_search_api_pb.MessageSearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EnhancedSearchAPIService = exports.EnhancedSearchAPIService = {
  // The full text message search.
messageSearch: {
    path: '/airchat.search.v2.EnhancedSearchAPI/MessageSearch',
    requestStream: false,
    responseStream: false,
    requestType: airchat_search_v2_enhanced_search_api_pb.MessageSearchRequest,
    responseType: airchat_search_v2_enhanced_search_api_pb.MessageSearchResponse,
    requestSerialize: serialize_airchat_search_v2_MessageSearchRequest,
    requestDeserialize: deserialize_airchat_search_v2_MessageSearchRequest,
    responseSerialize: serialize_airchat_search_v2_MessageSearchResponse,
    responseDeserialize: deserialize_airchat_search_v2_MessageSearchResponse,
  },
  // The channel search.
channelSearch: {
    path: '/airchat.search.v2.EnhancedSearchAPI/ChannelSearch',
    requestStream: false,
    responseStream: false,
    requestType: airchat_search_v2_enhanced_search_api_pb.ChannelSearchRequest,
    responseType: airchat_search_v2_enhanced_search_api_pb.ChannelSearchResponse,
    requestSerialize: serialize_airchat_search_v2_ChannelSearchRequest,
    requestDeserialize: deserialize_airchat_search_v2_ChannelSearchRequest,
    responseSerialize: serialize_airchat_search_v2_ChannelSearchResponse,
    responseDeserialize: deserialize_airchat_search_v2_ChannelSearchResponse,
  },
};

exports.EnhancedSearchAPIClient = grpc.makeGenericClientConstructor(EnhancedSearchAPIService);
