import React, { useState, useEffect, Suspense } from "react";
import Summary from "./views/Summary";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Login from "./views/Login";
import Error from "./views/Error";
import Profile from "./views/Profile";
import { MsalProvider } from "@azure/msal-react";
import LoadingSpinner from "./components/LoadingSpinner";
import Messages from "./views/admin/Messages";

const App = ({ instance }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Summary />,
    },
    {
      path: "/admin/news/messages",
      element: <Messages />,
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
        <Suspense fallback={<LoadingSpinner />}>
          <RouterProvider router={router} />
        </Suspense>
      </MsalProvider>
    </>
  );
};

export default App;
