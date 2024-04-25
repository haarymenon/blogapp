import { AppBar, Box, Button, IconButton, Toolbar, Typography ,MenuIcon} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign={'left'}>
            BLOGAPP
          </Typography>
          <Button><Link to={'/add'} style={{color:'white'}}>ADD</Link></Button>
          <Button><Link to={'/view'} style={{color:'white'}}>VIEW</Link></Button>
          <Button><Link to={'/'}style={{color:'white'}}>LOG OUT</Link></Button>
          <Button><Link to={'/my'} style={{color:'white'}}>MYPROFILE</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar