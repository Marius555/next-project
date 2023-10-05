"use client"

import Register from "@/components/Register"
import { Box } from "@mui/material"
import NavBar from "@/components/NavBar"

export default function page() {
  return (
    <>
      <NavBar />
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ width: { xl: "30%", lg: "30%", md: "40%", sm: "60%" }, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0px 10px" }}>
          <Register />
        </Box>
      </Box>
    </>
  )
}

