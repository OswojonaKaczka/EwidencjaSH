import { Link, Typography } from "@mui/material";
import VersionNumber from "./components/versionNumber";

export default function Footer(props) {
  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Wszelkie prawa zastrzeżone © "}
        <Link color="inherit" href="https://sh.org.pl/">
          Stowarzyszenie Harcerskie
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <VersionNumber />
    </>
  );
}
