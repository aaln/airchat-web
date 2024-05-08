// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_links_v2_links_api_pb = require('../../../airchat/links/v2/links_api_pb.js');
var airchat_links_v2_links_pb = require('../../../airchat/links/v2/links_pb.js');

function serialize_airchat_links_v2_CreateShortLinkRequest(arg) {
  if (!(arg instanceof airchat_links_v2_links_api_pb.CreateShortLinkRequest)) {
    throw new Error(
      'Expected argument of type airchat.links.v2.CreateShortLinkRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_links_v2_CreateShortLinkRequest(buffer_arg) {
  return airchat_links_v2_links_api_pb.CreateShortLinkRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_links_v2_CreateShortLinkResponse(arg) {
  if (!(arg instanceof airchat_links_v2_links_api_pb.CreateShortLinkResponse)) {
    throw new Error(
      'Expected argument of type airchat.links.v2.CreateShortLinkResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_links_v2_CreateShortLinkResponse(buffer_arg) {
  return airchat_links_v2_links_api_pb.CreateShortLinkResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_links_v2_GetFullLinkRequest(arg) {
  if (!(arg instanceof airchat_links_v2_links_api_pb.GetFullLinkRequest)) {
    throw new Error(
      'Expected argument of type airchat.links.v2.GetFullLinkRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_links_v2_GetFullLinkRequest(buffer_arg) {
  return airchat_links_v2_links_api_pb.GetFullLinkRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_airchat_links_v2_GetFullLinkResponse(arg) {
  if (!(arg instanceof airchat_links_v2_links_api_pb.GetFullLinkResponse)) {
    throw new Error(
      'Expected argument of type airchat.links.v2.GetFullLinkResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_links_v2_GetFullLinkResponse(buffer_arg) {
  return airchat_links_v2_links_api_pb.GetFullLinkResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// A service handling link shortening.
var LinksAPIService = (exports.LinksAPIService = {
  // Create a shortened link which can be used to redirect to the chosen URL type at a later point in time.
  createShortLink: {
    path: '/airchat.links.v2.LinksAPI/CreateShortLink',
    requestStream: false,
    responseStream: false,
    requestType: airchat_links_v2_links_api_pb.CreateShortLinkRequest,
    responseType: airchat_links_v2_links_api_pb.CreateShortLinkResponse,
    requestSerialize: serialize_airchat_links_v2_CreateShortLinkRequest,
    requestDeserialize: deserialize_airchat_links_v2_CreateShortLinkRequest,
    responseSerialize: serialize_airchat_links_v2_CreateShortLinkResponse,
    responseDeserialize: deserialize_airchat_links_v2_CreateShortLinkResponse
  },
  // Convert the path of the short link to the full link for redirect.
  getFullLink: {
    path: '/airchat.links.v2.LinksAPI/GetFullLink',
    requestStream: false,
    responseStream: false,
    requestType: airchat_links_v2_links_api_pb.GetFullLinkRequest,
    responseType: airchat_links_v2_links_api_pb.GetFullLinkResponse,
    requestSerialize: serialize_airchat_links_v2_GetFullLinkRequest,
    requestDeserialize: deserialize_airchat_links_v2_GetFullLinkRequest,
    responseSerialize: serialize_airchat_links_v2_GetFullLinkResponse,
    responseDeserialize: deserialize_airchat_links_v2_GetFullLinkResponse
  }
});

exports.LinksAPIClient = grpc.makeGenericClientConstructor(LinksAPIService);
