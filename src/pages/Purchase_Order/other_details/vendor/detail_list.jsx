import { Avatar, Box, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack } from "@mui/material"
import { NavLink } from "react-router-dom"

const DetailList = ({list}) => {
    return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {list.map((item) => (
            <ListItem
                disableGutters
                secondaryAction={
                    <ListItemText primary={item.value} />
                }
            >
                <ListItemText primary={item.label} />
            </ListItem>
        ))}
    </List>
    )
}

export default DetailList