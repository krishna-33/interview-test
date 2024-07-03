import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavLink } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomBreadCum() {
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
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
