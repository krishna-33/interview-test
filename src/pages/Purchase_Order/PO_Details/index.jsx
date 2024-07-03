import { Directions } from "@mui/icons-material";
import { Box, Stack, Tab, Tabs } from "@mui/material"
import { useState } from "react";
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
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const PODetails = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Stack display={"flex"} direction={"row"} alignItems={"baseline"} justifyContent={"space-between"}>

                <Box py={0.5} sx={{ fontWeight: 800 }} >PO Details</Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                >
                    <Tab {...a11yProps(0)} label="Generate PO" />
                    <Tab {...a11yProps(1)} label="Upload PO" />
                </Tabs>

            </Stack>

            <br />
            <CustomTabPanel value={value} index={0}>
                <GeneratePO />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Upload PO
            </CustomTabPanel>
        </Box>
    )
}

export default PODetails