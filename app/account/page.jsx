"use client"
import React from 'react'
import { Box } from '@mui/material'
import NavBar from '@/components/NavBar'
import Profiler from '@/components/profiler/Profiler'

const account = () => {

  return (
    <div>
      <NavBar />
      <Box sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Box sx={{width: "max-content"}}>
          <Profiler/>
        </Box>
      </Box>
    </div>
  )
}

export default account
