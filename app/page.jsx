"use client"

import TabLogin from '@/components/TabLogin'
import { Box } from '@mui/material'
import NavBar from '@/components/NavBar'
import PocketBase from 'pocketbase';
import { useState } from 'react';
import { useLayoutEffect } from 'react';

export default function Home() {
  const pb = new PocketBase('http://127.0.0.1:8090');

  const [req, setreq] = useState(false);
  
  useLayoutEffect(()=> {
    try {
      const validating = pb.authStore.isValid
      setreq(!validating)
    }
    catch {
      return setreq(true)
    }
  })

  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex", justifyContent: "center", justifyItems: "center", marginTop: "2rem"}}>
        {req === true && <TabLogin/>}
      </Box>
    </>

  )
}
