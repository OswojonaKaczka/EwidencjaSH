import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./Orders";
import Footer from "./Footer";
import ProfileToolbar from "./ProfileToolbar";
import {
  Alert,
  Badge,
  Chip,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import DrawerMenu from "./DrawerMenu";
import { Helmet } from "react-helmet";
import AuthService from "./services/auth.service";
import Title from "./components/Title";
import { msalInstance } from "./index";

function Content() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const account = msalInstance.getActiveAccount();
  console.log(account);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Helmet>
          <title>Mój profil | Ewidencja SH</title>
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
                <Typography variant="h4">Mój profil</Typography>
              </Grid>
              <Grid item xs={12}>
                <Alert severity="error">
                  Twoje dane pobierane są z Microsoft 365 i Ewidencji SH. Nie możesz ich zmienić samodzielnie.
                </Alert>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Title>Dane Microsoft 365</Title>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          label="Nazwa wyświetlana"
                          id="outlined-start-adornment"
                          defaultValue={account.name}
                          sx={{ m: 1, width: "100%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          label="Nazwa użytkownika"
                          id="outlined-start-adornment"
                          defaultValue={account.username}
                          sx={{ m: 1, width: "100%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Identyfikator obiektu"
                          id="outlined-start-adornment"
                          defaultValue={account.localAccountId}
                          sx={{ m: 1, width: "100%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Title>Role tokenu</Title>
                    </Grid>
                    <Grid item xs={12}>
                      {account.idTokenClaims.roles &&
                        account.idTokenClaims.roles.map((role, i) => {
                          return (
                              <Chip
                                color="primary"
                                style={{ margin: "5px" }}
                                key={i}
                                label={role}
                              />
                          );
                        })}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            <Footer sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default function Profile() {
  return <Content />;
}
