import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Avatar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Science,
  Home,
  Info,
  Build,
  Help,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'About Us', icon: <Info />, path: '/about' },
    { text: 'Services', icon: <Build />, path: '/services' },
    { text: 'Contacts', icon: <ContactMailIcon />, path: '/contacts' },
    { text: 'FAQ', icon: <Help />, path: '/faq' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const GovernmentLogo = () => (
    <Box
      sx={{
        width: 60,
        height: 60,
        mr: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src="/images/government-logo.png" // Replace with your actual logo path
        alt="Government Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
        onError={(e) => {
          // Fallback to flask icon if logo fails to load
          e.target.style.display = 'none';
          const fallbackContainer = e.target.parentElement;
          fallbackContainer.innerHTML = '';
          const avatar = document.createElement('div');
          avatar.style.cssText = `
            width: 50px;
            height: 50px;
            background-color: ${theme.palette.secondary.main};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          `;
          
          const scienceIcon = document.createElement('div');
          scienceIcon.innerHTML = '🧪'; // Flask emoji fallback
          scienceIcon.style.cssText = `
            font-size: 30px;
            color: ${theme.palette.primary.main};
          `;
          
          avatar.appendChild(scienceIcon);
          fallbackContainer.appendChild(avatar);
        }}
      />
    </Box>
  );

  // Alternative version with better fallback handling
  const GovernmentLogoWithFallback = () => {
    const [imageError, setImageError] = useState(false);

    if (imageError) {
      return (
        <Avatar
          sx={{
            width: 70,
            height: 70,
            backgroundColor: theme.palette.secondary.main,
            mr: 2,
          }}
        >
          <Science sx={{ color: theme.palette.primary.main, fontSize: 40 }} />
        </Avatar>
      );
    }

    return (
      <Box
        sx={{
          width: 70,
          height: 70,
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: `2px solid ${theme.palette.secondary.main}`,
        }}
      >
        <img
          src="/images/government-logo.png" // Replace with your actual logo path
          alt="Government of Zimbabwe Coat of Arms"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          onError={() => setImageError(true)}
        />
      </Box>
    );
  };

  const DesktopNav = () => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
      {menuItems.map((item) => (
        <Button
          key={item.text}
          onClick={() => handleNavigation(item.path)}
          startIcon={item.icon}
          sx={{
            color: isActive(item.path) ? theme.palette.secondary.main : 'white',
            mx: 1,
            px: 2,
            borderRadius: 2,
            backgroundColor: isActive(item.path) 
              ? 'rgba(255, 215, 0, 0.1)' 
              : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              color: theme.palette.secondary.main,
            },
          }}
        >
          {item.text}
        </Button>
      ))}
    </Box>
  );

  const MobileNav = () => (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      PaperProps={{
        sx: {
          width: 280,
          backgroundColor: theme.palette.primary.main,
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Menu</Typography>
        <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            onClick={() => handleNavigation(item.path)}
            sx={{
              backgroundColor: isActive(item.path) 
                ? 'rgba(255, 215, 0, 0.1)' 
                : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
              },
            }}
          >
            <Box sx={{ mr: 2, color: theme.palette.secondary.main }}>
              {item.icon}
            </Box>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                color: isActive(item.path) 
                  ? theme.palette.secondary.main 
                  : 'white' 
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: theme.palette.primary.main,
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, sm: 80 } }}>
          <GovernmentLogoWithFallback />
          
          <Box sx={{ flexGrow: 1 }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 600,
                fontSize: { xs: '1rem', sm: '1.25rem' },
                lineHeight: 1.2,
              }}
            >
              Ministry of Home Affairs and Cultural Heritage
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: theme.palette.secondary.main,
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                fontWeight: 500,
              }}
            >
              Department of Forensic Science Services
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton 
              color="inherit" 
              onClick={() => setDrawerOpen(true)}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <DesktopNav />
          )}
        </Toolbar>
      </AppBar>

      <MobileNav />
      
      {/* Spacer to push content below fixed header */}
      <Toolbar sx={{ minHeight: { xs: 64, sm: 80 } }} />
    </>
  );
};

export default Header;