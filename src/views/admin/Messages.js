import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Footer from "../../components/layout/Footer";
import ProfileToolbar from "../../components/layout/ProfileToolbar";
import { Alert, Chip, TableHead, TextField, Typography } from "@mui/material";
import DrawerMenu from "../../components/layout/DrawerMenu";
import { Helmet } from "react-helmet";
import Title from "../../components/Title";
import { msalInstance } from "../../index";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { visuallyHidden } from "@mui/utils";
import { alpha } from "@mui/material/styles";
import MessagesTable from "../../components/tables/messages.table";

function Content() {

  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const account = msalInstance.getActiveAccount();


  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Helmet>
          <title>Komunikaty | Ewidencja SH</title>
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
                <Typography variant="h4">Komunikaty</Typography>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <MessagesTable />
                      </Grid>
                    </Grid>
                  </Box>
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

export default function Messages() {
  return <Content />;
}
