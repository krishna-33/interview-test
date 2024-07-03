import { Avatar, Box, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack } from "@mui/material"
import { NavLink } from "react-router-dom"
import DetailList from "./detail_list"

const Vendor = () => {
    return (
        <>
            <Box  sx={{ fontWeight: 800, fontSize:"12px" }} >Vendor Contact Information: </Box><br />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {/* {[1, 2, 3].map((value) => ( */}
                    <ListItem
                        disableGutters
                        secondaryAction={
                            <ListItemText primary={`Dell Technology`} />
                        }
                    >
                        <ListItemText primary={`Name`} />
                    </ListItem>
                    <ListItem
                        disableGutters
                        secondaryAction={
                          <NavLink >#VEN2013197</NavLink>
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
            <Divider variant="full"  />
            <Box  sx={{ fontWeight: 800,  fontSize:"12px" }}> Billing Details: </Box><br />
            <DetailList list={[{ label: "Street", value: "10934 Botsford Lakes"},
                               { label: "Country", value: "Mexico"},
                               { label: "State", value: "Botsford Lakes"},
                               { label: "City", value: "Lillianafield"},
                               { label: "ZIP/PIN code", value: "13198-0174"}
            ]} />
        </>
    )
}

export default Vendor