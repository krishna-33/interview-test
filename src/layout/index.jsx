import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Header from './header';
import SideBar from './sidebar';


const Layout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
     <SideBar />
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
      <Box component="main" sx={{flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
export default Layout
