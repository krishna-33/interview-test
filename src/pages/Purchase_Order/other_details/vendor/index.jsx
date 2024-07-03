import { Avatar, Box, Button, Chip, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack } from "@mui/material"
import { NavLink } from "react-router-dom"
import DetailList from "./detail_list"
import Profile from '../../../../assets/profile.svg'
import styled from "styled-components";
import { BorderBottom } from "@mui/icons-material";
const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#4263eb',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#3b5bdb',
    },
  }));
const Vendor = () => {
    return (
        <>
            <Box sx={{ fontWeight: 800, fontSize: "12px" }} >Vendor Contact Information: </Box><br />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {/* {[1, 2, 3].map((value) => ( */}
                <ListItem
                    disableGutters
                    secondaryAction={
                        <Chip
                        label="Dell technology"
                        avatar={<Avatar src={Profile} alt="Dell" />}
                        variant="outlined"
                        color="primary"
                        style={{ backgroundColor: '#304FFE', color: '#fff' }}
                    />
                    }
                >
                    <ListItemText primary={`Name`} />
                </ListItem>
                <ListItem
                    disableGutters
                    secondaryAction={
                        <NavLink sx={{BorderBottom: "1px solid #304FFE"}} >#VEN2013197</NavLink>
                    }
                >
                    <ListItemText primary={`ID`} />
                </ListItem>
                <ListItem
                    disableGutters
                    secondaryAction={
                        <ListItemText primary={`Troy_Lehner98@gmail.com`} />
                    }
                >
                    <ListItemText primary={`Email`} />
                </ListItem>
                <ListItem
                    disableGutters
                    secondaryAction={
                        <ListItemText primary={`+71 931-465-6838`} />
                    }
                >
                    <ListItemText primary={`Phone number`} />
                </ListItem>
                {/* ))} */}
            </List>
            <Divider variant="full" />
            <Box sx={{ fontWeight: 800, fontSize: "12px" }}> Billing Details: </Box><br />
            <DetailList list={[{ label: "Street", value: "10934 Botsford Lakes" },
            { label: "Country", value: "Mexico" },
            { label: "State", value: "Botsford Lakes" },
            { label: "City", value: "Lillianafield" },
            { label: "ZIP/PIN code", value: "13198-0174" }
            ]} />
        </>
    )
}

export default Vendor