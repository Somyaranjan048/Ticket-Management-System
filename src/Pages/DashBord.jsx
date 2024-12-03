// Dashboard Component
import React, { useState } from "react";
import MyAppBar from "../components/AppBar";
import MyDrawer from "../components/Drawer";
import { Box, Toolbar } from "@mui/material";


const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ display: "grid" , background:"#f2f2f2" }}>
      <MyAppBar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
      <MyDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // To compensate for the AppBar height
        }}
      >
        <Toolbar />
        <h1>Welcome to the Dashboard</h1>
        <p>This is the main content area.</p>
      </Box>
    </Box>
  );
};

export default Dashboard;