import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Avatar,
  Tooltip,
  Stack,
} from "@mui/material";
import Logo from "../../assets/logo.svg";
import Profile from "../../assets/profile.svg";
import Cart from "../../assets/cart.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#011FCB",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <NavLink to="/">
            {" "}
            <img src={Logo} alt="logo" />
          </NavLink>
          <Box sx={{ flexGrow: 0 }}>
            <Stack
              display={"flex"}
              direction={"row"}
              justifyContent={"center"}
              spacing={2}
            >
              <Tooltip title="Cart">
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    src={Cart}
                    alt="cart"
                    sx={{ width: 25, height: 25 }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Profile">
                <IconButton sx={{ p: 0 }}>
                  <Avatar src={Profile} alt="profile" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
