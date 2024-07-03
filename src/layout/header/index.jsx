import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../../assets/logo.svg';
import Profile from '../../assets/profile.svg'
import Cart from '../../assets/cart.svg'
import { Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#011FCB" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          <NavLink to="/" > <img src={Logo} alt="logo" /></NavLink>
          <Box sx={{ flexGrow: 0 }}>
            <Stack display={"flex"} direction={"row"} justifyContent={"center"} spacing={2}>
          <Tooltip title="Cart">
              <IconButton sx={{ p: 0 }}>
                <Avatar src={Cart} alt="cart" sx={{ width: 25, height:25 }} />
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
}
export default Header;
