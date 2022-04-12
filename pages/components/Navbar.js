import React, { useState } from 'react'

import { ExpandMore } from '@mui/icons-material'

import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Link, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material'

const pages = ['Features', 'Reviews', 'Blog', 'Pricing'];
const settings = ['Spanish', 'English', 'French'];

function Navbar() {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static" style={{background: 'transparent', boxShadow: '0px 0px 10px #00000022'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, color: '#000', display: { xs: 'none', md: 'flex' } }}
          >
            PADELHOST
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-owns={Boolean(anchorElNav) ? 'menu-appbar' : null }
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={'#' + page} key={page} sx={{m: 1, cursor: 'pointer', color: '#000', display: 'block', textDecoration: 'none', textTransform: 'none', '&:hover': {color: '#E26C69'}, transition: 'all .3s ease-in-out'}}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color: '#000', display: { xs: 'flex', md: 'none' } }}
          >
            PADELHOST
          </Typography>
          <Box sx={{ flexGrow: 0, margin: 'auto', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Link href={'#' + page} key={page} sx={{m: 1, cursor: 'pointer', color: '#000', display: 'block', textDecoration: 'none', textTransform: 'none', '&:hover': {color: '#E26C69'}, transition: 'all .3s ease-in-out'}}>{page}</Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 , display: 'flex', flexDirection: 'row' }}>
            <Button disableElevation color='black' onclick={handleOpenUserMenu} sx={{ p: 0, color: 'white', '&:hover': {color: '#E26C69'}, transition: 'all .3s ease-in-out' }} onClick={handleOpenUserMenu}>
              <Typography component="div" sx={{fontSize: '14px', textTransform: 'none', margin: 'auto 0 auto 10px'}}>
                <span>English</span>
              </Typography>
              <ExpandMore sx={{margin: 'auto 0'}}></ExpandMore>

            </Button>
            <Button variant='contained' color='primary' sx={{mx: 1, textTransform: 'none', boxShadow: '0 0 0'}}>Member Area</Button>
          </Box>
          <Menu
            sx={{ mt: '45px', boxShadow: '0' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center" sx={{ '&:hover': {color: '#E26C69'}, transition: 'all .3s ease-in-out' }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar