import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          firstApp
        </Typography>
       <Link style={{color:'white'}}  to='/'> <Button color="inherit">View</Button></Link>
       <Link style={{color:'white'}}  to='/Add'> <Button color="inherit">Add</Button></Link>
       <Link style={{color:'white'}}  to='/Mcard'> <Button color="inherit">Card</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}


export default Navbar