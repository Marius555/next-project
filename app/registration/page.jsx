"use client"

import Register from "@/components/Register"
import NavBar from "@/components/NavBar"
import { Box } from "@mui/material"

export default async function page() {
  return (
    <>
      <NavBar />
      <Box sx={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Box sx={{ width: {xl: "30%", lg: "40%", md: "50%", sm: "60%"}, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0px 10px" }}>
          <Register />
        </Box>
      </Box>
    </>
  )
}

