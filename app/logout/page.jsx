"use client"
import React from 'react'
import pb from '@/components/Auth'
import TabLogin from '@/components/TabLogin'
import { Box } from '@mui/material'
import NavBar from '@/components/NavBar'

const Logout = () => {
  if (pb.authStore.isValid){
    pb.authStore.clear()
  }
  return(
    <>
    <NavBar />
    <Box sx={{ display: "flex", justifyContent: "center", justifyItems: "center", marginTop: "2rem"}}>
      <TabLogin />
    </Box>
  </>
  )
}

export default Logout
