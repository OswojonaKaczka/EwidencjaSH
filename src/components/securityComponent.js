import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import LoadingScreen from 'react-loading-screen'
import logo from '../img/oreo.png';
const Protected = ({ children }) => {
  const navigate = useNavigate();
  const [render, setRender] = useState(false);
  useEffect(() => {
    const checkUser = () => {
      if (!AuthService.getCurrentUser()) navigate("/login");
      else {
        UserService.checkUser().then(
          (response) => {
            setRender(true);
          },
          (error) => {
            navigate("/login");
            //usuwanie
          }
        );
      }
    };
    checkUser();
  }, []);

  if (render)
    return (
      <>
        <LoadingScreen
          loading={true}
          bgColor="#212121"
          spinnerColor="#90caf9"
          textColor="#676767"
          logoSrc={logo}
          text="eDTO OREO PRZASNYSZ"
          style={{ borderRadius: "unset" }}
        >
          {children}
        </LoadingScreen>
      </>
    );
};
export default Protected;
