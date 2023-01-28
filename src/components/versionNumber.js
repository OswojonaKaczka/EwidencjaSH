import React from "react";
import moment from "moment";
import preval from "preval.macro";
import { Typography } from "@mui/material";

const buildTimestamp = preval`module.exports = new Date().getTime();`;

class VersionNumber extends React.Component {
  getDateString = () => {
    const lastUpdateMoment = moment.unix(buildTimestamp / 1000);
    const formattedDate = lastUpdateMoment.format("DD.MM.YYYY HH:mm:ss");

    return formattedDate;
  };

  render() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {process.env.REACT_APP_NAME}
        {" ("}
        {process.env.REACT_APP_BRANCH}
        {") "}
        {"::"} {process.env.REACT_APP_VERSION} {"::"} {this.getDateString()}
      </Typography>
    );
  }
}

VersionNumber.propTypes = {};

VersionNumber.defaultProps = {};

export default VersionNumber;
