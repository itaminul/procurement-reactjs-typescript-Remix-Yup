import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

interface TopBarProps {
  isAuthenticated: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}

const TopBar = ({ isAuthenticated}: TopBarProps) => {

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ItAminul
        </Typography>
        {!isAuthenticated ? (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        ) : (
          <>           
            <Button color="inherit">Logout</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
