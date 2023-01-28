import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Login from "./Login";
import Error from "./Error";
import Profile from "./Profile";
import { MsalProvider } from "@azure/msal-react";
import LoadingSpinner from "./components/LoadingSpinner";

const App = ({ instance }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Summary />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/*",
      element: <Error />,
    },
  ]);

  return (
    <>
      <MsalProvider instance={instance}>
        <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
      </MsalProvider>
    </>
  );
};

export default App;
