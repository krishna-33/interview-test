import  React from 'react';
import {Breadcrumbs, Typography, Stack} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavLink } from 'react-router-dom';


const CustomBreadCum = () => {
  const breadcrumbs = [
    <NavLink to="/">Accounting</NavLink>,
    <NavLink to="/purchase-order">Purchase Order</NavLink>,
    <NavLink to="/purchase-order">Edit</NavLink>,
    <Typography key="4" color="text.primary">
      PO-20311
    </Typography>,


  ];

  return (
    <Stack spacing={2} mt={5}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" sx={{fill: "#304FFE"}} />}
        aria-label="breadcrumb"
        sx={{fontWeight:700}}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
export default CustomBreadCum