import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  Twitter,
  Facebook,
  LinkedIn,
  Science,
  Gavel,
  Security,
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  const contactInfo = [
    { icon: <LocationOn />, text: 'Second Floor, Chingaira Makoni Building, Cnr Herbert Chitepo and L. Takawira' },
    { icon: <Phone />, text: '+263 4 123 4567' },
    { icon: <Email />, text: 'info@forensicscience.gov.zw' },
  ];

  const quickLinks = [
    { text: 'About Us', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Contacts', href: '/contacts' },
    { text: 'FAQ', href: '/faq' },
  ];

  const services = [
    { icon: <Science />, text: 'Forensic Biology' },
    { icon: <Science />, text: 'Forensic Chemistry' },
    { icon: <Security />, text: 'Criminalistics' },
    { icon: <Gavel />, text: 'Document Examination' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Department Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Science sx={{ fontSize: 40, color: theme.palette.secondary.main, mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Department of Forensic Science Services
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Providing expert impartial forensic science services of international 
              best standard, facilitating equitable justice delivery.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                sx={{ 
                  color: theme.palette.secondary.main,
                  '&:hover': { backgroundColor: 'rgba(255, 215, 0, 0.1)' }
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: theme.palette.secondary.main,
                  '&:hover': { backgroundColor: 'rgba(255, 215, 0, 0.1)' }
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: theme.palette.secondary.main,
                  '&:hover': { backgroundColor: 'rgba(255, 215, 0, 0.1)' }
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: theme.palette.secondary.main,
                      opacity: 1,
                      paddingLeft: 1,
                    },
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {services.map((service) => (
                <Box 
                  key={service.text} 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    opacity: 0.9,
                  }}
                >
                  <Box sx={{ color: theme.palette.secondary.main }}>
                    {service.icon}
                  </Box>
                  <Typography variant="body2">{service.text}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {contactInfo.map((contact, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: 1,
                    opacity: 0.9,
                  }}
                >
                  <Box sx={{ color: theme.palette.secondary.main, mt: 0.5 }}>
                    {contact.icon}
                  </Box>
                  <Typography variant="body2" sx={{ flex: 1 }}>
                    {contact.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © {new Date().getFullYear()} Ministry of Home Affairs and Cultural Heritage. 
              All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 2 }}>
              <Link 
                href="#" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  opacity: 0.8,
                  '&:hover': { opacity: 1, color: theme.palette.secondary.main }
                }}
              >
                Privacy Policy
              </Link>
              <Link 
                href="#" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  opacity: 0.8,
                  '&:hover': { opacity: 1, color: theme.palette.secondary.main }
                }}
              >
                Terms of Service
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;