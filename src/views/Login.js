import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet";
import AuthService from "../services/auth.service";
import { ToastContainer, toast } from "react-toastify";
import logoSH from "../img/SH_280_60.png";
import logoMS from "../img/ms.svg";
import illustration from "../img/illustration.png";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../services/authConfig";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Navigate } from "react-router-dom";
const Login = () => {
  const { instance } = useMsal();

  return (
    <>
      <UnauthenticatedTemplate>
        <Helmet>
          <title>Logowanie | Ewidencja SH</title>
        </Helmet>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <ToastContainer />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(" + illustration + ")",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={logoSH} loading="lazy" />
              <Box sx={{ mt: 1, pt: 5 }} style={{ textAlign: "center" }}>
                <Typography variant="h2">Ewidencja SH</Typography>
                <Typography sx={{ mt: 3 }}>
                  Wybierz sposób logowania:
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() => instance.loginRedirect(loginRequest)}
                >
                  <img src={logoMS} height="25" />{" "}
                  <span
                    style={{
                      marginTop: "3px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <strong>MICROSOFT 365</strong>
                  </span>
                </Button>

                <Footer sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Navigate to="/" />
      </AuthenticatedTemplate>
    </>
  );
};

export default Login;
