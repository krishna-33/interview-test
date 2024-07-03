import React, { useState, Fragment } from "react";
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import AccountingIcon from "../../assets/accountingicon.svg";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;
const routes = [
  {
    name: "Accounting",
    path: "/",
    icon: (
      <Avatar
        src={AccountingIcon}
        alt="accouting-icon"
        style={{ height: "20px", width: "20px" }}
      />
    ),

    submenu: [
      {
        name: "Purchase Order",
        path: "purchase-order",
      },
    ],
  },
];
const SideBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = (path) => {
    setOpen(!open);
      navigate(path);
  };
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#011FCB",
            color: "#FFF",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {routes.map((item, index) => (
              <Fragment key={item.name + "-" + index}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleClick(item.path)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                    {item.submenu &&
                      (open ? (
                        <ExpandMoreIcon sx={{ color: "#FFF" }} />
                      ) : (
                        <ChevronRightIcon sx={{ color: "#FFF" }} />
                      ))}
                  </ListItemButton>
                </ListItem>
                {item.submenu && (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List sx={{ paddingLeft: 3 }}>
                      {item.submenu.map((sub_item, sub_index) => (
                        <ListItem
                          key={sub_item.name + "-" + sub_index}
                          disablePadding
                        >
                          <ListItemButton
                            onClick={() => handleClick(sub_item.path)}
                            sx={{ paddingLeft: 4 }}
                          >
                            <ListItemText primary={sub_item.name} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Fragment>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
