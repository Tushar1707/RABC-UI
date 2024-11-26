import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";

const Header = ({ currentTab, setCurrentTab }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          RBAC Admin Dashboard
        </Typography>
        <Tabs
          value={currentTab}
          onChange={(e, value) => setCurrentTab(value)}
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="Users" />
          <Tab label="Roles" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
