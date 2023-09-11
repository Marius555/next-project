"use client"
import Login from "@/components/Login"
import NavBar from "@/components/NavBar"
import { Box } from "@mui/material"

export default function Log() {
  return (
    <>
      <NavBar />
      <Box sx={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Box sx={{ width: {xl: "30%", lg: "30%", md: "50%", sm:"60%"}, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0px 10px" }}>
          <Login />
        </Box>
      </Box>
    </>
  )
}

