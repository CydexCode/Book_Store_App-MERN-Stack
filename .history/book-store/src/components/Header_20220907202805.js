import React from 'react'
import { AppBar, Typography } from "@mui/material"
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
const Header = () => {
  return (
    <div>
      <AppBar position='sticky'>
        <Typography>
            <LibraryBooksIcon />
            </Typography>
      </AppBar>
    </div>
  );
};

export default Header;
