import React from 'react';
import { AppBar, Tab, Toolbar, Typography } from "@mui/material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
const Header = () => {
  return (
    <div>
      <AppBar position='sticky'>
<Toolbar>
<Typography>
            <LibraryBooksIcon />
            </Typography>
            <Tabs>
                <Tab label="Add product" />
                <Tab label="About Us" />
            </Tabs>
</Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
