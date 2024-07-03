import React from "react";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import DetailList from "./detail_list";
import Profile from "../../../../assets/profile.svg";
import { BorderBottom } from "@mui/icons-material";
const DetailListData = [
    { label: "Street", value: "10934 Botsford Lakes" },
    { label: "Country", value: "Mexico" },
    { label: "State", value: "Botsford Lakes" },
    { label: "City", value: "Lillianafield" },
    { label: "ZIP/PIN code", value: "13198-0174" },
  ]
const Vendor = () => {
  return (
    <>
      <Box sx={{ fontWeight: 800, fontSize: "12px" }}>
        Vendor Contact information:{" "}
      </Box>
      <br />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem
          disableGutters
          secondaryAction={
            <Chip
              label="Dell technology"
              avatar={
                <Avatar
                  src={Profile}
                  alt="Dell"
                  style={{ height: "16px", width: "16px" }}
                />
              }
              variant="outlined"
              color="primary"
              style={{
                backgroundColor: "#304FFE",
                color: "#fff",
                fontSize: "12px",
              }}
            />
          }
        >
          <ListItemText primary={`Name`} />
        </ListItem>
        <ListItem
          disableGutters
          secondaryAction={
            <NavLink style={{ borderBottom: "1px solid #304FFE", textDecoration: "none", }}
            >
              #VEN2013197
            </NavLink>
          }
        >
          <ListItemText primary={`ID`} />
        </ListItem>
        <ListItem
          disableGutters
          secondaryAction={<ListItemText primary={`Troy_Lehner98@gmail.com`} />}
        >
          <ListItemText primary={`Email`} />
        </ListItem>
        <ListItem
          disableGutters
          secondaryAction={<ListItemText primary={`+71 931-465-6838`} />}
        >
          <ListItemText primary={`Phone number`} />
        </ListItem>
        {/* ))} */}
      </List>
      <Divider variant="full" />
      <Box sx={{ fontWeight: 800, fontSize: "12px", marginTop: "16px" }}>
        {" "}
        Billing details:{" "}
      </Box>
      <br />
      <DetailList
        list={DetailListData}
      />
    </>
  );
};

export default Vendor;
