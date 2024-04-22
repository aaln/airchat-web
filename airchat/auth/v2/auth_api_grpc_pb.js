// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var airchat_auth_v2_auth_api_pb = require('../../../airchat/auth/v2/auth_api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var airchat_auth_v2_auth_pb = require('../../../airchat/auth/v2/auth_pb.js');

function serialize_airchat_auth_v2_AuthRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.AuthRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.AuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_AuthRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.AuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_AuthResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.AuthResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.AuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_AuthResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.AuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_CheckUserIsInvitedRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.CheckUserIsInvitedRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.CheckUserIsInvitedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_CheckUserIsInvitedRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.CheckUserIsInvitedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_CheckUserIsInvitedResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.CheckUserIsInvitedResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.CheckUserIsInvitedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_CheckUserIsInvitedResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.CheckUserIsInvitedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_DeleteSubjectRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.DeleteSubjectRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.DeleteSubjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_DeleteSubjectRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.DeleteSubjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_DeleteSubjectResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.DeleteSubjectResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.DeleteSubjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_DeleteSubjectResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.DeleteSubjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_FetchUserInvitesRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.FetchUserInvitesRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.FetchUserInvitesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_FetchUserInvitesRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.FetchUserInvitesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_FetchUserInvitesResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.FetchUserInvitesResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.FetchUserInvitesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_FetchUserInvitesResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.FetchUserInvitesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_GenerateAttestationChallengeRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.GenerateAttestationChallengeRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.GenerateAttestationChallengeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_GenerateAttestationChallengeRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.GenerateAttestationChallengeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_GenerateAttestationChallengeResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.GenerateAttestationChallengeResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.GenerateAttestationChallengeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_GenerateAttestationChallengeResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.GenerateAttestationChallengeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_GetInviteCodeRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.GetInviteCodeRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.GetInviteCodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_GetInviteCodeRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.GetInviteCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_GetInviteCodeResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.GetInviteCodeResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.GetInviteCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_GetInviteCodeResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.GetInviteCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_GetPreAppliedPhoneNumberHashesRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.GetPreAppliedPhoneNumberHashesRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.GetPreAppliedPhoneNumberHashesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_GetPreAppliedPhoneNumberHashesRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.GetPreAppliedPhoneNumberHashesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_GetPreAppliedPhoneNumberHashesResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.GetPreAppliedPhoneNumberHashesResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.GetPreAppliedPhoneNumberHashesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_GetPreAppliedPhoneNumberHashesResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.GetPreAppliedPhoneNumberHashesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_GetVerifiedFactorsRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.GetVerifiedFactorsRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.GetVerifiedFactorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_GetVerifiedFactorsRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.GetVerifiedFactorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_GetVerifiedFactorsResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.GetVerifiedFactorsResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.GetVerifiedFactorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_GetVerifiedFactorsResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.GetVerifiedFactorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_LogoutRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.LogoutRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.LogoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_LogoutRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.LogoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_LogoutResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.LogoutResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.LogoutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_LogoutResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.LogoutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_PreApplyInviteCodeRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.PreApplyInviteCodeRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.PreApplyInviteCodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_PreApplyInviteCodeRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.PreApplyInviteCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_PreApplyInviteCodeResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.PreApplyInviteCodeResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.PreApplyInviteCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_PreApplyInviteCodeResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.PreApplyInviteCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_RefreshRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.RefreshRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.RefreshRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_RefreshRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.RefreshRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_RefreshResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.RefreshResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.RefreshResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_RefreshResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.RefreshResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_UpdateSubjectStatusRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.UpdateSubjectStatusRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.UpdateSubjectStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_UpdateSubjectStatusRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.UpdateSubjectStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_UpdateSubjectStatusResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.UpdateSubjectStatusResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.UpdateSubjectStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_UpdateSubjectStatusResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.UpdateSubjectStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_ValidateAccessTokenRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.ValidateAccessTokenRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.ValidateAccessTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_ValidateAccessTokenRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.ValidateAccessTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_ValidateAccessTokenResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.ValidateAccessTokenResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.ValidateAccessTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_ValidateAccessTokenResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.ValidateAccessTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_VerifyAttestationRequest(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.VerifyAttestationRequest)) {
    throw new Error('Expected argument of type airchat.auth.v2.VerifyAttestationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_VerifyAttestationRequest(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.VerifyAttestationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_airchat_auth_v2_VerifyAttestationResponse(arg) {
  if (!(arg instanceof airchat_auth_v2_auth_api_pb.VerifyAttestationResponse)) {
    throw new Error('Expected argument of type airchat.auth.v2.VerifyAttestationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_airchat_auth_v2_VerifyAttestationResponse(buffer_arg) {
  return airchat_auth_v2_auth_api_pb.VerifyAttestationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service for authenticating users with Airchat.
var AuthAPIService = exports.AuthAPIService = {
  // Pass a user's identity factor or challenge response to receive the next step or a credential if complete.
auth: {
    path: '/airchat.auth.v2.AuthAPI/Auth',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.AuthRequest,
    responseType: airchat_auth_v2_auth_api_pb.AuthResponse,
    requestSerialize: serialize_airchat_auth_v2_AuthRequest,
    requestDeserialize: deserialize_airchat_auth_v2_AuthRequest,
    responseSerialize: serialize_airchat_auth_v2_AuthResponse,
    responseDeserialize: deserialize_airchat_auth_v2_AuthResponse,
  },
  // Exchange a refresh token for an access token.
refresh: {
    path: '/airchat.auth.v2.AuthAPI/Refresh',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.RefreshRequest,
    responseType: airchat_auth_v2_auth_api_pb.RefreshResponse,
    requestSerialize: serialize_airchat_auth_v2_RefreshRequest,
    requestDeserialize: deserialize_airchat_auth_v2_RefreshRequest,
    responseSerialize: serialize_airchat_auth_v2_RefreshResponse,
    responseDeserialize: deserialize_airchat_auth_v2_RefreshResponse,
  },
  // Find verified authentication factors associated with the current authenticated UserId.
getVerifiedFactors: {
    path: '/airchat.auth.v2.AuthAPI/GetVerifiedFactors',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.GetVerifiedFactorsRequest,
    responseType: airchat_auth_v2_auth_api_pb.GetVerifiedFactorsResponse,
    requestSerialize: serialize_airchat_auth_v2_GetVerifiedFactorsRequest,
    requestDeserialize: deserialize_airchat_auth_v2_GetVerifiedFactorsRequest,
    responseSerialize: serialize_airchat_auth_v2_GetVerifiedFactorsResponse,
    responseDeserialize: deserialize_airchat_auth_v2_GetVerifiedFactorsResponse,
  },
  // Revokes the authorization credentials used in the current context.
logout: {
    path: '/airchat.auth.v2.AuthAPI/Logout',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.LogoutRequest,
    responseType: airchat_auth_v2_auth_api_pb.LogoutResponse,
    requestSerialize: serialize_airchat_auth_v2_LogoutRequest,
    requestDeserialize: deserialize_airchat_auth_v2_LogoutRequest,
    responseSerialize: serialize_airchat_auth_v2_LogoutResponse,
    responseDeserialize: deserialize_airchat_auth_v2_LogoutResponse,
  },
  // Deletes the user's entire auth. This is intended only to be used internally!
deleteSubject: {
    path: '/airchat.auth.v2.AuthAPI/DeleteSubject',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.DeleteSubjectRequest,
    responseType: airchat_auth_v2_auth_api_pb.DeleteSubjectResponse,
    requestSerialize: serialize_airchat_auth_v2_DeleteSubjectRequest,
    requestDeserialize: deserialize_airchat_auth_v2_DeleteSubjectRequest,
    responseSerialize: serialize_airchat_auth_v2_DeleteSubjectResponse,
    responseDeserialize: deserialize_airchat_auth_v2_DeleteSubjectResponse,
  },
  // Updates the user's auth status. This is intended only to be used internally!
updateSubjectStatus: {
    path: '/airchat.auth.v2.AuthAPI/UpdateSubjectStatus',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.UpdateSubjectStatusRequest,
    responseType: airchat_auth_v2_auth_api_pb.UpdateSubjectStatusResponse,
    requestSerialize: serialize_airchat_auth_v2_UpdateSubjectStatusRequest,
    requestDeserialize: deserialize_airchat_auth_v2_UpdateSubjectStatusRequest,
    responseSerialize: serialize_airchat_auth_v2_UpdateSubjectStatusResponse,
    responseDeserialize: deserialize_airchat_auth_v2_UpdateSubjectStatusResponse,
  },
  // Gets a unique app invite code for the user, along with some metadata.
getInviteCode: {
    path: '/airchat.auth.v2.AuthAPI/GetInviteCode',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.GetInviteCodeRequest,
    responseType: airchat_auth_v2_auth_api_pb.GetInviteCodeResponse,
    requestSerialize: serialize_airchat_auth_v2_GetInviteCodeRequest,
    requestDeserialize: deserialize_airchat_auth_v2_GetInviteCodeRequest,
    responseSerialize: serialize_airchat_auth_v2_GetInviteCodeResponse,
    responseDeserialize: deserialize_airchat_auth_v2_GetInviteCodeResponse,
  },
  // Applies an invite code for a particular phone number ahead of time so it isn't needed by a user when they sign up
// with that phone number.
preApplyInviteCode: {
    path: '/airchat.auth.v2.AuthAPI/PreApplyInviteCode',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.PreApplyInviteCodeRequest,
    responseType: airchat_auth_v2_auth_api_pb.PreApplyInviteCodeResponse,
    requestSerialize: serialize_airchat_auth_v2_PreApplyInviteCodeRequest,
    requestDeserialize: deserialize_airchat_auth_v2_PreApplyInviteCodeRequest,
    responseSerialize: serialize_airchat_auth_v2_PreApplyInviteCodeResponse,
    responseDeserialize: deserialize_airchat_auth_v2_PreApplyInviteCodeResponse,
  },
  // Validates the token beyond just the expiration and the signature.
// This should be called for extremely sensitive actions, such as user deletion.
validateAccessToken: {
    path: '/airchat.auth.v2.AuthAPI/ValidateAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.ValidateAccessTokenRequest,
    responseType: airchat_auth_v2_auth_api_pb.ValidateAccessTokenResponse,
    requestSerialize: serialize_airchat_auth_v2_ValidateAccessTokenRequest,
    requestDeserialize: deserialize_airchat_auth_v2_ValidateAccessTokenRequest,
    responseSerialize: serialize_airchat_auth_v2_ValidateAccessTokenResponse,
    responseDeserialize: deserialize_airchat_auth_v2_ValidateAccessTokenResponse,
  },
  // Generate the attestation challenge
generateAttestationChallenge: {
    path: '/airchat.auth.v2.AuthAPI/GenerateAttestationChallenge',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.GenerateAttestationChallengeRequest,
    responseType: airchat_auth_v2_auth_api_pb.GenerateAttestationChallengeResponse,
    requestSerialize: serialize_airchat_auth_v2_GenerateAttestationChallengeRequest,
    requestDeserialize: deserialize_airchat_auth_v2_GenerateAttestationChallengeRequest,
    responseSerialize: serialize_airchat_auth_v2_GenerateAttestationChallengeResponse,
    responseDeserialize: deserialize_airchat_auth_v2_GenerateAttestationChallengeResponse,
  },
  // Verify the app attestation
verifyAttestation: {
    path: '/airchat.auth.v2.AuthAPI/VerifyAttestation',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.VerifyAttestationRequest,
    responseType: airchat_auth_v2_auth_api_pb.VerifyAttestationResponse,
    requestSerialize: serialize_airchat_auth_v2_VerifyAttestationRequest,
    requestDeserialize: deserialize_airchat_auth_v2_VerifyAttestationRequest,
    responseSerialize: serialize_airchat_auth_v2_VerifyAttestationResponse,
    responseDeserialize: deserialize_airchat_auth_v2_VerifyAttestationResponse,
  },
  // Get list of phone number hashes from pre-applied invite codes
getPreAppliedPhoneNumberHashes: {
    path: '/airchat.auth.v2.AuthAPI/GetPreAppliedPhoneNumberHashes',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.GetPreAppliedPhoneNumberHashesRequest,
    responseType: airchat_auth_v2_auth_api_pb.GetPreAppliedPhoneNumberHashesResponse,
    requestSerialize: serialize_airchat_auth_v2_GetPreAppliedPhoneNumberHashesRequest,
    requestDeserialize: deserialize_airchat_auth_v2_GetPreAppliedPhoneNumberHashesRequest,
    responseSerialize: serialize_airchat_auth_v2_GetPreAppliedPhoneNumberHashesResponse,
    responseDeserialize: deserialize_airchat_auth_v2_GetPreAppliedPhoneNumberHashesResponse,
  },
  // Check if user is invited
checkUserIsInvited: {
    path: '/airchat.auth.v2.AuthAPI/CheckUserIsInvited',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.CheckUserIsInvitedRequest,
    responseType: airchat_auth_v2_auth_api_pb.CheckUserIsInvitedResponse,
    requestSerialize: serialize_airchat_auth_v2_CheckUserIsInvitedRequest,
    requestDeserialize: deserialize_airchat_auth_v2_CheckUserIsInvitedRequest,
    responseSerialize: serialize_airchat_auth_v2_CheckUserIsInvitedResponse,
    responseDeserialize: deserialize_airchat_auth_v2_CheckUserIsInvitedResponse,
  },
  // Fetches number of invites
fetchUserInvites: {
    path: '/airchat.auth.v2.AuthAPI/FetchUserInvites',
    requestStream: false,
    responseStream: false,
    requestType: airchat_auth_v2_auth_api_pb.FetchUserInvitesRequest,
    responseType: airchat_auth_v2_auth_api_pb.FetchUserInvitesResponse,
    requestSerialize: serialize_airchat_auth_v2_FetchUserInvitesRequest,
    requestDeserialize: deserialize_airchat_auth_v2_FetchUserInvitesRequest,
    responseSerialize: serialize_airchat_auth_v2_FetchUserInvitesResponse,
    responseDeserialize: deserialize_airchat_auth_v2_FetchUserInvitesResponse,
  },
};

exports.AuthAPIClient = grpc.makeGenericClientConstructor(AuthAPIService);
