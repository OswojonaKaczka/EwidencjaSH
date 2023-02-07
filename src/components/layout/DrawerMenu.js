import * as React from "react";

import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";

import ListItemIcon from "@mui/material/ListItemIcon";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PeopleIcon from "@mui/icons-material/People";
import { NavLink } from "react-router-dom";
import { Collapse } from "@mui/material";
import {
  CategoryTwoTone,
  CloudSyncTwoTone,
  DashboardTwoTone,
  ExpandLess,
  ExpandMore,
  FeedTwoTone,
  GroupsTwoTone,
  Inbox,
  NewspaperTwoTone,
  PeopleTwoTone,
  PersonAddTwoTone,
  ShareTwoTone,
  StarBorder,
} from "@mui/icons-material";
import { msalInstance } from "../../index";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function DrawerMenu(props) {
  const [openAzure, setOpenAzure] = React.useState(false);

  const handleClick = (type) => {
    type == "azure" && setOpenAzure(!openAzure);
  };

  const account = msalInstance.getActiveAccount();

  return (
    <Drawer variant="permanent" open={props.open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <strong>Ewidencja SH</strong>
        <IconButton onClick={props.trigger}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardTwoTone />
            </ListItemIcon>
            <ListItemText primary="Podsumowanie" />
          </ListItemButton>
        </NavLink>
        {account.idTokenClaims.roles.includes("role.census") && (
          <>
            <Divider sx={{ my: 1 }} />
            <ListSubheader component="div" inset>
              Ewidencja SH
            </ListSubheader>
            <ListItemButton component={NavLink} to="/people">
              <ListItemIcon>
                <PeopleTwoTone />
              </ListItemIcon>
              <ListItemText primary="Osoby" />
            </ListItemButton>
            <ListItemButton component={NavLink} to="/units">
              <ListItemIcon>
                <GroupsTwoTone />
              </ListItemIcon>
              <ListItemText primary="Jednostki" />
            </ListItemButton>
          </>
        )}
        {(account.idTokenClaims.roles.includes("role.admin") ||
          account.idTokenClaims.roles.includes("role.azure")) && (
          <>
            <Divider sx={{ my: 1 }} />
            <ListSubheader component="div" inset>
              Administracja
            </ListSubheader>
            <ListItemButton component={NavLink} to="/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Użytkownicy" />
            </ListItemButton>
            <ListItemButton onClick={() => handleClick("azure")}>
              <ListItemIcon>
                <NewspaperTwoTone />
              </ListItemIcon>
              <ListItemText primary="Aktualności" />
              {openAzure ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openAzure} timeout="auto">
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={NavLink}
                  to="/admin/news/messages"
                >
                  <ListItemIcon>
                    <FeedTwoTone />
                  </ListItemIcon>
                  <ListItemText primary="Komunikaty" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={NavLink}
                  to="/admin/news/category"
                >
                  <ListItemIcon>
                    <CategoryTwoTone />
                  </ListItemIcon>
                  <ListItemText primary="Kategorie" />
                </ListItemButton>
              </List>
            </Collapse>
            {account.idTokenClaims.roles.includes("role.azure") && (
              <>
                <ListItemButton onClick={() => handleClick("azure")}>
                  <ListItemIcon>
                    <CloudSyncTwoTone />
                  </ListItemIcon>
                  <ListItemText primary="Azure AD" />
                  {openAzure ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openAzure} timeout="auto">
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <PersonAddTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="Nowe konto" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <ShareTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="Powiązania" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </>
            )}
          </>
        )}
      </List>
    </Drawer>
  );
}
