
import React from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';

const DrawerComp = ({links}) => {
  const [open, setOpen] = useState(false)
  return (
 <>
 <Drawer PaperProps={{sx:{backgroundColor:'rgba(9,115,121,1)'}}} anchor='left' open={open} onClose={()=>setOpen(false)}>
 <List>
  {links.map((link,index)=>(
    <ListItemButton onClick={()=>setOpen(false)} key={index} divider>
    <ListItemIcon>
      <ListItemText sx={{color:'white'}} >
        {link}
      </ListItemText>
    </ListItemIcon>
  </ListItemButton>
  ))}
 </List>
 </Drawer>
 <IconButton sx={{marginLeft:'auto', color:'white'}} onClick={()=>setOpen(!open)}>
  <MenuRoundedIcon/>
 </IconButton>
 </>
  )
}

export default DrawerComp