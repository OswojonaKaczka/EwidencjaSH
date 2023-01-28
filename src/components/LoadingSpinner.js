import React, { Component } from "react";
import LoadingScreen from "react-loading-screen";
import logoSH from "../img/SH_280_60.png";

const LoadingSpinner = (props) => {
  return (
    <LoadingScreen
      loading={true}
      bgColor="#f1f1f1"
      spinnerColor="#136A32"
      textColor="#676767"
      logoSrc={logoSH}
      text="Trwa ładowanie..."
      style={{ borderRadius: "unset" }}
    />
  );
};

export default LoadingSpinner;
