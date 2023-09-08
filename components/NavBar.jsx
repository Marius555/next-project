"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link  from 'next/link';



export default function NavBar() {
  
  return (
    
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link className='mui_mimic_link_home' href="/" prefetch={true}>Home</Link>
            <Link className='mui_mimic_link' href="/registration" prefetch={true}>Sign in</Link>
            <Link className='mui_mimic_link' href="/login" prefetch={true}>Login</Link>
          </Toolbar>
        </AppBar>
      </Box>
  );
}
