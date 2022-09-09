import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material"
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
const Header = () => {
  return (
    <div>
      <AppBar position='sticky'>
<Toolbar>
<Typography>
            <LibraryBooksIcon />
            </Typography>
</Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
