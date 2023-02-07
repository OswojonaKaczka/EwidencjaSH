import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Footer from "../components/layout/Footer";
import { Button, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import logoSH from "../img/SH_280_60.png";

function Content() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Helmet>
          <title>Brak uprawnień | Ewidencja SH</title>
        </Helmet>
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
                <img src={logoSH} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h1">403</Typography>
                <Typography variant="h4">Brak uprawnień...</Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" href="/">
                  Wróć do strony głównej
                </Button>
              </Grid>
            </Grid>
            <Footer sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default function Unauthorized() {
  return <Content />;
}
