// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_search_v2_search_api_pb = require('../../../airchat/search/v2/search_api_pb.js');
var airchat_search_v2_search_pb = require('../../../airchat/search/v2/search_pb.js');

function serialize_airchat_search_v2_SearchRequest(arg) {
  if (!(arg instanceof airchat_search_v2_search_api_pb.SearchRequest)) {
    throw new Error(
      'Expected argument of type airchat.search.v2.SearchRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_search_v2_SearchRequest(buffer_arg) {
  return airchat_search_v2_search_api_pb.SearchRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_search_v2_SearchResponse(arg) {
  if (!(arg instanceof airchat_search_v2_search_api_pb.SearchResponse)) {
    throw new Error(
      'Expected argument of type airchat.search.v2.SearchResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_search_v2_SearchResponse(buffer_arg) {
  return airchat_search_v2_search_api_pb.SearchResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// A service handling search.
var SearchAPIService = (exports.SearchAPIService = {
  // A generalized search function.
  search: {
    path: '/airchat.search.v2.SearchAPI/Search',
    requestStream: false,
    responseStream: false,
    requestType: airchat_search_v2_search_api_pb.SearchRequest,
    responseType: airchat_search_v2_search_api_pb.SearchResponse,
    requestSerialize: serialize_airchat_search_v2_SearchRequest,
    requestDeserialize: deserialize_airchat_search_v2_SearchRequest,
    responseSerialize: serialize_airchat_search_v2_SearchResponse,
    responseDeserialize: deserialize_airchat_search_v2_SearchResponse
  }
});

exports.SearchAPIClient = grpc.makeGenericClientConstructor(SearchAPIService);
