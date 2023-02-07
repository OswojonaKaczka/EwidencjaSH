import { protectedResources } from "../services/authConfig";
import { msalInstance } from "../index";

export const getToken = async () => {
  const account = msalInstance.getActiveAccount();

  if (!account) {
    throw Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }

  const response = await msalInstance.acquireTokenSilent({
    account: account,
    scopes: protectedResources.API.scopes,
  });

  return response.accessToken;
};

export const getAllMessages = async () => {
  const accessToken = await getToken();

  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(protectedResources.API.message, options).then((response) =>
    response.json()
  );
};

export const getAllMessagesToTable = async (data) => {
  const accessToken = await getToken();

  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  headers.append("Content-Type", "application/json");

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  };

  return fetch(
    protectedResources.messagesTable.message,
    options
  ).then((response) => response.json());
};

export const getAllMessagesCategories = async () => {
  const accessToken = await getToken();

  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(protectedResources.messagesCategories.endpoint, options).then((response) =>
    response.json()
  );
};

export const addMessage = async (data) => {
  const accessToken = await getToken();

  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  headers.append("Content-Type", "application/json");

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  };

  return fetch(
    protectedResources.messagesAdd.endpoint,
    options
  ).then((response) => response.json());
};
