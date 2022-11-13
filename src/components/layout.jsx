import React, { useState } from "react";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import {
  Search, Person, Home, CurrencyRupee, CardTravel, Leaderboard,
  Comment, ListAlt, Description, MoreHoriz, ArrowDropDown, FolderCopy,
} from "@mui/icons-material";
import {
  Box, Link, Typography, Avatar, Button,
  Menu, MenuItem, TextField, IconButton,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import BgImage from "../components/bgImage";
import { user } from "../config/constants";

const styles = {
  infoBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    color: "#fff",
    borderBottom: "1px solid #dddddd",
  },
  propertySearchButton: {
    backgroundColor: "#0047FF",
    color: "#ffffff",
    ":hover": {
      backgroundColor: "#0047DD",
    },
  },
  menuButton: {
    color: "#6c6c6c",
    borderRadius: "25px",
    display: "flex",
    columnGap: "5px",
    padding: "0.7rem",
    alignItems: "center",
    textTransform: "none",
    ":hover": {
      backgroundColor: "rgba(0, 71, 255, 0.08)",
      boxShadow: "0px 0px 35px rgba(39, 39, 39, 0.04)",
      color: "#0047dd",
    },
  },
  phoneLink: {
    display: "flex",
    alignItems: "center",
    columnGap: "5px",
    fontSize: "0.8rem",
  },
  appBar: {
    display: "flex",
    justifyContent: "space-around",
    padding: "0.5rem 2rem",
    alignItems: "center",
    zIndex: 3,
    position: "sticky",
    top: 0,
    background: "#fff",
  },
  siteTitle: {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
  },
  mainHold: {
    py: 4,
    px: 2,
    zIndex: 2,
    minHeight: "73vh",
    backgroundColor: "#EDEDED",
  },
};

const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    success: {
      main: "#14B006",
    },
    grey: {
      main: "#6C6C6C",
      light: "#EDEDED",
    },
    customBlue: {
      main: "#0047FF",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#fff"
    }
  },
});

export default function Layout({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [propertySearchQuery, setPropertySearchQuery] = React.useState("");

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.infoBar}>
        <Box sx={styles.siteTitle}>
          <Avatar
            alt="Site Logo"
            sx={{ width: 35, height: 35 }}
            src="/images/rda_logo.png"
            variant="square"
          />
          <Typography
            fontWeight="600"
            color="#D50008"
            fontSize="1.1rem"
            fontFamily="inherit"
          >
            RAIPUR DEVELOPMENT AUTHORITY
          </Typography>
        </Box>
        <Box display="flex" columnGap={4} alignItems="center">
          <form
            style={{ display: "flex", columnGap: "10px" }}
            onSubmit={() => { }}
          >
            <input
              type="text"
              value={propertySearchQuery}
              placeholder="Search property.."
              onChange={(e) => {
                setPropertySearchQuery(e.target.value);
              }}
              className="property-search-input"
            />
            <IconButton type="submit" sx={styles.propertySearchButton}>
              <Search />
            </IconButton>
          </form>
          <Box>
            <Button
              id="profile-button"
              aria-controls={open ? "profile-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <BgImage
                src={user.image}
                width="37px"
                height="37px"
                borderRadius="50%"
                mr="10px"
              />
              <MoreHoriz />
            </Button>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "profile-button" }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.appBar}>
        <Box>
          <RouteLink to="/" style={{ textDecoration: 'none' }}>
            <Button sx={styles.menuButton}>
              <Home /> <span style={{ padding: "0 3px" }}>Home</span>
            </Button>
          </RouteLink>
        </Box>
        <DropDownMenu
          icon={<CardTravel />}
          mainText="Properties"
          listItems={[
            { text: "Property List/Add", to: "/properties/list" },
            { text: "Rejected Properties", to: "/properties/rejected" },
          ]}
        />
        <DropDownMenu
          icon={<FolderCopy />}
          mainText="Documents"
          listItems={[
            { text: "Received Docs", to: "/docs/received" },
            { text: "Rejected Docs", to: "/docs/rejected" },
          ]}
        />
        <DropDownMenu
          icon={<ListAlt />}
          mainText="Services"
          listItems={[
            { text: "Bid List", to: "/services/bid" },
            { text: "Lottery List", to: "/services/lotery" },
          ]}
        />
        <DropDownMenu
          icon={<Leaderboard />}
          mainText="Information"
          listItems={[
            { text: "Search Plot", to: "/services/plot-search" },
            { text: "Search Plot", to: "/services/plot-search" },
          ]}
        />
        <DropDownMenu
          icon={<Comment />}
          mainText="Complaints"
          listItems={[
            { text: "Search Plot", to: "/services/plot-search" },
            { text: "Search Plot", to: "/services/plot-search" },
          ]}
        />
        <DropDownMenu
          icon={<CurrencyRupee />}
          mainText="Payments"
          listItems={[
            { text: "Search Plot", to: "/services/plot-search" },
            { text: "Search Plot", to: "/services/plot-search" },
          ]}
        />
      </Box>
      <Box sx={styles.mainHold}>{children}</Box>
    </ThemeProvider>
  );
}

function DropDownMenu({
  mainText,
  listItems = [],
  icon,
  variant = "standard",
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id={`${mainText}-button`}
        aria-controls={open ? `${mainText}-menu` : undefined}
        aria-haspopup="true"
        variant={variant}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={styles.menuButton}
      >
        {icon}
        <span style={{ padding: "0 3px" }}>{mainText}</span>
        <ArrowDropDown />
      </Button>
      <Menu
        className="nav-links"
        id={`${mainText}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": `${mainText}-button` }}
      >
        {listItems.map((l, i) => (
          <MenuItem key={i}>
            <RouteLink to={l.to}>{l.text}</RouteLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
