"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import PocketBase from 'pocketbase';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';

export default function NavBar() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const [valid, setvalid] = useState();
  
  useLayoutEffect(() =>{
    if(pb.authStore.isValid){
      setvalid(true)
    }
  })

  useEffect(()=>{
    if(!pb.authStore.isValid){
      try {
        localStorage.removeItem("pocketbase_auth")
      } catch (error) {
        return
      }
    }
  },[])

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{boxShadow: "none"}}>
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
          <Link className='mui_mimic_link_home' href="/">Home</Link>
          {valid === true ?(
            <>
              <Link className='mui_mimic_link' href="/account">Account</Link>
              <Link className='mui_mimic_link' href="/logout" >Logout</Link>
            </>

          ) :
            (
              <>
                <Link className='mui_mimic_link' href="/login">Login</Link>
                <Link className='mui_mimic_link' href="/registration">Sign in</Link>
              </>
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
