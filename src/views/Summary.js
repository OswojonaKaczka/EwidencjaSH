import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Footer from "../components/layout/Footer";
import ProfileToolbar from "../components/layout/ProfileToolbar";
import { Alert } from "@mui/material";
import DrawerMenu from "../components/layout/DrawerMenu";
import { Helmet } from "react-helmet";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Navigate } from 'react-router-dom';
import Messages from "../components/Messages";

function Content() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AuthenticatedTemplate>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Helmet>
            <title>Podsumowanie | Ewidencja SH</title>
          </Helmet>
          <ProfileToolbar trigger={toggleDrawer} open={open} />
          <DrawerMenu trigger={toggleDrawer} open={open} />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Alert severity="warning">Testowy komunikat</Alert>
                </Grid>
                <Grid item xs={12}>
                  <Messages />
                </Grid>
              </Grid>
              <Footer sx={{ pt: 4 }} />
            </Container>
          </Box>
        </Box>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate><Navigate to="/login" /></UnauthenticatedTemplate>
    </>
  );
}

export default function Summary() {
  return <Content />;
}
