"use client"

import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Register from './Register';
import Login from './Login';
import { Paper } from '@mui/material';

export default function TabLogin () {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    }
    return (
        <Paper sx={{ height: "max-content", width: "20rem", padding: "10px", margin: "10px", background: "transparent"}} variant='outlined'>
          <TabContext value={value} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Login" value="1" />
                <Tab label="Register" value="2" />
                
              </TabList>
            </Box>
            <TabPanel sx={{padding: "0px"}} value="1"><Login/> </TabPanel>
            <TabPanel sx={{padding: "0px"}} value="2"><Register/> </TabPanel>
          </TabContext>
        </Paper>
      );
}

