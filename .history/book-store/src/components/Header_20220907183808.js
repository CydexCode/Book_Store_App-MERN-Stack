import React from 'react'
import { AppBar, Typography } from "@mui/material"

const Header = () => {
  return (
    <div>
      <AppBar position='sticky'>
        <Typography>Book Sore</Typography>
      </AppBar>
    </div>
  );
};

export default Header;
