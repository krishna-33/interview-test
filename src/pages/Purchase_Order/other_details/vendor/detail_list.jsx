import React from "react"
import { List, ListItem, ListItemText } from "@mui/material"

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
                <ListItemText primary={item.label} sx={{color: "#667085"}} />
            </ListItem>
        ))}
    </List>
    )
}

export default DetailList