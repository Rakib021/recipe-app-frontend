import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  styled,
  Typography,
  TextField,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const Styletoolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });

  const MenuItems = [
    { Name: "Home", Link: "#" },
    { Name: "Recipies", Link: "#" },
    { Name: "About us", Link: "#" },
    { Name: "subscribe", Link: "#" },
  ];

  const [openMenu,setOpenMenu] = useState(false)
  return (
    <>
    <AppBar color="default" position="sticky" elevation={0}>
      <Styletoolbar>
        <Box flex={{xs:25,md:1}}>
          <Typography variant="h4" color={"tomato"}  sx={{fontFamily:"Splash,cursive"}}>
            Recipe App
          </Typography>
        </Box>
        <MenuBox flex={1}  sx={{ display:{xs:"none",md:"flex"} }}>
          {MenuItems.map((item) => (
            <Typography variant="body2">{item.Name}</Typography>
          ))}
        </MenuBox>
        <Box flex={1}>
          <TextField
            sx={{ display:{xs:"none",md:"flex"} }}
            color="warning"
            label="Search-here"
            variant="standard"
          />

          <MenuIcon
           sx={{ display: { xs: "flex", md: "none" }, cursor:'pointer' }} onClick={()=>setOpenMenu(!openMenu)} />
        </Box>
      </Styletoolbar>

      <Drawer
      anchor={'top'}
      open={openMenu}
      onClose={()=>setOpenMenu(!openMenu)}
    
    >
      <List>
        <ListItem>
        {MenuItems.map((item) => (
            <ListItemButton >{item.Name}</ListItemButton>
          ))}
        </ListItem>
      </List>
      <TextField
            sx={{ display:{xs:"flex",md:"none"} }}
            color="warning"
            label="Search-here"
            variant="outlined"
          />
    
    </Drawer>

    </AppBar>

    <Box sx={{display:'flex',justifyContent:'center'}}>

<Typography variant="h5" mr={1}>
  Simple recipes made for Customer
</Typography>

<Typography variant="h5" color={'tomato'} sx={{fontFamily:"Splash,cursive"}}>
  Simple recipes made for Customer


</Typography>

</Box>
    </>
  );
};

export default Navbar;
