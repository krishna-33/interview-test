import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './header';
import SideBar from './sidebar';


const Layout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
     <SideBar />
      <Box component="main" sx={{flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
export default Layout
