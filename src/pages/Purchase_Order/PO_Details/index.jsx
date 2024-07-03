import { useState } from "react";
import { Box, Divider, Stack, Tab, Tabs } from "@mui/material";
import GeneratePO from "./generatePO";
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
      {value === index && <Box sx={{ p: 1.5 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const PODetails = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Stack
        display={"flex"}
        direction={"row"}
        alignItems={"baseline"}
        justifyContent={"space-between"}
      >
        <Box py={0.5} px={1.5} sx={{ fontWeight: 800 }}>
          PO Details
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .MuiTab-root": {
              minWidth: 100,
              fontSize: 12,
              border: "2px solid #304FFE",
              "&.Mui-selected, &:focus": {
                borderBottom: "2px solid primary.main",
                outline: "none",
              },
            },
          }}
        >
          <Tab
            {...a11yProps(0)}
            label="Generate PO"
            sx={{
              color: "#304FFE",
              borderRadius: "6px 0px 0px 6px",
              "&:hover": {
                bgcolor: "primary.light",
              },
              "&.Mui-selected": {
                borderBottom: "2px solid primary.main",
                backgroundColor: "#304FFE",
                color: "#fff",
              },
            }}
          />
          <Tab
            {...a11yProps(1)}
            label="Upload PO"
            sx={{
              color: "#304FFE",
              borderRadius: "0px 6px 6px 0px",
              "&:hover": {
                bgcolor: "primary.light",
              },
              "&.Mui-selected": {
                borderBottom: "2px solid primary.main",
                backgroundColor: "#304FFE",
                color: "#fff",
              },
            }}
          />
        </Tabs>
      </Stack>

      <br />
      <Divider variant="middle" mt={15} />
      <CustomTabPanel value={value} index={0}>
        <GeneratePO />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Upload PO
      </CustomTabPanel>
    </Box>
  );
};

export default PODetails;
