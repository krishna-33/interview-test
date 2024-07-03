import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PurchaseTable from './purchase_table';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function POTable() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  sx={{
          '& .MuiTabs-scroller .MuiTabs-flexContainer .Mui-selected': {
            outline: 'none'
          },
        }}>
          <Tab label="Purchase Information" {...a11yProps(0)}  />
          <Tab label="Attachments" {...a11yProps(1)} />
          <Tab label="Terms & Conditions" {...a11yProps(2)} />
          <Tab label="Additional Information" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PurchaseTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Attachments
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Terms & Conditions
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Additional Information
      </CustomTabPanel>
    </Box>
  );
}
