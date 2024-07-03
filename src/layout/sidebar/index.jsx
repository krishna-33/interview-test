import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;
const routes = [{
  name: "Accounting",
  path: "/"
},
{
  name: "Purchase Order",
  path: "/purchase-order"
}]
const SideBar = () => {
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path)
  }
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: "#011FCB",color:"#FFF" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto'}}>
          <List>
            {routes.map((item, index) => (
              <ListItem key={item.name + "-" + index} disablePadding >
                <ListItemButton onClick={() => handleClick(item.path)}>
                  <ListItemIcon>
                    {index == 0 ? <InboxIcon sx={{fill: "#FFF"}} /> : null}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />

        </Box>
      </Drawer>
    </>
  )
}

export default SideBar