import * as React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "material-react-toastify/dist/ReactToastify.css";
import App from "./App";
import { msalConfig } from "./services/authConfig";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
export const msalInstance = new PublicClientApplication(msalConfig);
import { plPL } from '@mui/material/locale';
const accounts = msalInstance.getAllAccounts();

if (accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    msalInstance.setActiveAccount(account);
  }

  if (event.eventType === EventType.LOGIN_FAILURE) {
    console.log(JSON.stringify(event));
  }
});

const mdTheme = createTheme({
  palette: {
    mode: "dark",
  },
  plPL
});

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={mdTheme}>
      <App instance={msalInstance} />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
