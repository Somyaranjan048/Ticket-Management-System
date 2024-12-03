// AppBar Component
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SerchIcons from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChatIcon from "@mui/icons-material/Chat";
import ForumIcon from "@mui/icons-material/Forum";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const MyAppBar = ({ toggleDrawer, drawerOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handelProfileClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, background: "#" }}>
      {" "}
      {/* Ensure AppBar is above the Drawer */}
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(!drawerOpen)}
        >
          {drawerOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        {/* Search Icons*/}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: 1,
            pl: 1,
            pr: 1,
          }}
        >
          <IconButton>
            <SerchIcons sx={{ color: "white" }} />
          </IconButton>
          <InputBase
            placeholder="Search..."
            sx={{ color: "white", ml: 1, flex: 1, input: { color: "white" } }}
          />
        </Box>
        {/*Notification*/}
        <IconButton color="inherit" sx={{ m: 2 }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {/*User Profile Icon and Name */}
        <IconButton color="inherit" sx={{ m: 1 }}>
          <Avatar sx={{ width: 40, height: 40, mr: 1 }} />
          <KeyboardArrowDownIcon onClick={handleProfileClick} />
          <Box>
            <Typography sx={{ color: "#f2f2f2", fontSize: "1rem" }}>
              Jacks Saproo
            </Typography>
            <Typography
              sx={{ color: "#f2f2f2", fontSize: "0.7rem", fontWeight: 100 }}
            >
              Jr. Software Enginner
            </Typography>
          </Box>
        </IconButton>
        {/*Profile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handelProfileClose}
          PaperProps={{
            elevation: 5,
            sx: {
              width: 450,
              marginTop:5,
            },
          
          }}
        >
          <MenuItem
            onClick={handelProfileClose}
            sx={{
              width: "100%",
              m: 0,
              display: "flex",
              justifyContent: "space-between",
              padding: 3,
              background: "#f2f2f2",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Avatar sx={{ width: "40px", height: "40px", mr: 1 }}></Avatar>
              <Box>
                <Typography>Jacks Sparrow</Typography>
                <Typography>A small description about you</Typography>
              </Box>
            </Box>
            <Button sx={{ background: "#929496", borderRadius: "25px" }}>
              Logout
            </Button>
          </MenuItem>
          <MenuItem
            onClick={handelProfileClose}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: {
                  primary: "#f2fdf3",
                },
              }}
            >
              ACTIVITY
            </Typography>
            <Box
              onClick={handelProfileClose}
              sx={{
                width: "100%",
                paddingTop: 1,
                paddingBottom: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ color: { primary: "" } }}>Chart</Typography>
              <Badge badgeContent={4} color="primary">
                <ChatIcon sx={{ color: "#929496" }} />
              </Badge>
            </Box>
            <Box>Recover Password</Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: { primary: "#333" },
                paddingTop: 1,
                paddingBottom: 1,
              }}
            >
              MY ACCOUNT
            </Typography>
          </MenuItem>
          <MenuItem sx={{ display: "flex", flexDirection:'row', borderTop:'2px solid red',borderBottom:'2px solid red',justifyContent:'space-evenly'}}>
            <Box
              sx={{
                border: "2px",
                borderColor: "#333",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  background: "#dba61f",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 2,
                }}
              >
                <ForumIcon />
                <Typography>Massage Inbox</Typography>
              </Box>
            </Box>
            <Box sx={{background :'#f2f2f2',width:'2px', height:'100px'}}></Box>
            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <Box sx={{padding:2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems:'center',
                background:'#db1f41',
                borderRadius:'10px'
              }}>
                <LocalOfferIcon />
                <Typography>Support Tickets</Typography>
              </Box>
            </Box>
          </MenuItem>
          <MenuItem sx={{display:"flex",alignItems:'center',justifyContent:'center',padding:3}}>
            <Button variant="contained">Open Message</Button>
          </MenuItem>
        </Menu>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
        >
           <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
