/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel, AuthenticationScheme } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
  auth: {
    clientId: "239396c7-861b-4882-bdb0-ad107644e289", // This is the ONLY mandatory field that you need to supply.
    authority:
      "https://login.microsoftonline.com/966b0cfd-8c80-4fe4-99b6-16cc9765dacf", // Defaults to "https://login.microsoftonline.com/common"
    redirectUri: process.env.REACT_APP_URL, // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
    postLogoutRedirectUri: process.env.REACT_APP_URL, // Indicates the page to navigate after logout.
    navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
  API: {
    message: process.env.REACT_APP_API + "api/message",
    scopes: ["api://3ccbe3c0-56da-4b30-b65c-aa8b5c7336e4/access_as_user"],
  },
  messagesTable: {
    message: process.env.REACT_APP_API + "api/messageTable",
    scopes: ["api://3ccbe3c0-56da-4b30-b65c-aa8b5c7336e4/access_as_user"],
  },
  messagesCategories: {
    endpoint: process.env.REACT_APP_API + "api/messageCategories",
    scopes: ["api://3ccbe3c0-56da-4b30-b65c-aa8b5c7336e4/access_as_user"],
  },
  messagesAdd: {
    endpoint: process.env.REACT_APP_API + "api/messageAdd",
    scopes: ["api://3ccbe3c0-56da-4b30-b65c-aa8b5c7336e4/access_as_user"],
  },
  census: {
    endpoint: process.env.REACT_APP_API + "api/census",
    scopes: ["api://3ccbe3c0-56da-4b30-b65c-aa8b5c7336e4/access_as_user"],
  },
  users: {
    endpoint: process.env.REACT_APP_API + "api/users",
    scopes: ["api://3ccbe3c0-56da-4b30-b65c-aa8b5c7336e4/access_as_user"],
  },
  mail: {
    endpoint: "https://graph.microsoft.com/v1.0/.default",
    scopes: ["Mail.Send"],
  },
  graph: {
    endpoint: "https://graph.microsoft.com/v1.0/users",
    scopes: ["User.ReadWrite.All", "Group.ReadWrite.All"],
  },
  aliz: {
    endpoint: process.env.REACT_APP_API + "api/aliz",
    scopes: ["api://3ccbe3c0-56da-4b30-b65c-aa8b5c7336e4/access_as_user"],
  },
  admin: {
    endpoint: process.env.REACT_APP_API + "api/admin",
    scopes: ["api://3ccbe3c0-56da-4b30-b65c-aa8b5c7336e4/access_as_user"],
  },
  alizAdmin: {
    endpoint: process.env.REACT_APP_API + "api/aliz/admin",
    scopes: ["api://3ccbe3c0-56da-4b30-b65c-aa8b5c7336e4/access_as_user"],
  },
  profile: {
    endpoint: process.env.REACT_APP_API + "api/profile",
    scopes: ["api://3ccbe3c0-56da-4b30-b65c-aa8b5c7336e4/access_as_user"],
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: protectedResources.API.scopes,
  authenticationScheme: AuthenticationScheme.BEARER,
  resourceRequestMethod: "GET",
  resourceRequestUri: protectedResources.API.endpoint,
};

export const appRoles = {
  RoleUser: "role.user",
  RoleAdmin: "role.admin",
  RoleCensus: "role.census",
  RoleHelpdesk: "role.helpdesk",
  RoleSecretary: "role.secretary",
  RoleALiZ: "role.aliz",
  RoleLidership: "role.lidership",
  RoleAssessment: "role.aliz.assessment",
};
