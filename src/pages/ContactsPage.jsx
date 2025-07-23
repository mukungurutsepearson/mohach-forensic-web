// src/pages/ContactsPage.jsx
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
  Alert,
  Snackbar,
  IconButton
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  Schedule,
  Business,
  Send,
  Person,
  Subject,
  Message,
  Twitter,
  Facebook,
  LinkedIn,
  Close,
  DirectionsCar,
  LocalParking,
  Accessibility,
  Security
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    serviceType: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSnackbar({
      open: true,
      message: 'Thank you for your message. We will get back to you soon.',
      severity: 'success'
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      serviceType: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: <LocationOn />,
      title: 'Address',
      details: [
        'Second Floor',
        'Chingaira Makoni Building',
        'Cnr Herbert Chitepo and L. Takawira',
        'Harare, Zimbabwe'
      ]
    },
    {
      icon: <Phone />,
      title: 'Phone',
      details: [
        '+263 4 123 4567',
        '+263 4 123 4568 (Lab)',
        '+263 4 123 4569 (Admin)'
      ]
    },
    {
      icon: <Email />,
      title: 'Email',
      details: [
        'forensics@mohcc.gov.zw',
        'info@forensicscience.gov.zw',
        'director@forensicscience.gov.zw'
      ]
    },
    {
      icon: <Schedule />,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 8:00 AM - 4:30 PM',
        'Saturday: 8:00 AM - 12:00 PM',
        'Sunday: Closed',
        'Emergency: 24/7 (Crime scenes only)'
      ]
    }
  ];

  const officeFeatures = [
    { icon: <DirectionsCar />, title: 'Parking Available' },
    { icon: <Accessibility />, title: 'Wheelchair Accessible' },
    { icon: <Security />, title: 'Security Clearance Required' },
    { icon: <Business />, title: 'Government Building' }
  ];

  const serviceTypes = [
    'General Inquiry',
    'Forensic Biology',
    'Forensic Chemistry',
    'Criminalistics',
    'Document Examination',
    'Consultancy Services',
    'Court Testimony',
    'Training Programs'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            Contact Us
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Get in touch with Zimbabwe's premier forensic science department
          </Typography>
        </Box>
      </motion.div>

      {/* Contact Information Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={3} mb={4}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div variants={cardVariants}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box 
                        sx={{ 
                          bgcolor: 'primary.main', 
                          color: 'white', 
                          p: 1, 
                          borderRadius: '50%',
                          mr: 2
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Typography variant="h6" component="h2">
                        {info.title}
                      </Typography>
                    </Box>
                    <List dense>
                      {info.details.map((detail, idx) => (
                        <ListItem key={idx} sx={{ pl: 0 }}>
                          <ListItemText 
                            primary={detail}
                            sx={{ 
                              '& .MuiListItemText-primary': { 
                                fontSize: '0.9rem' 
                              } 
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Main Content Grid */}
      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  <Send sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Send us a Message
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Fill out the form below and we'll get back to you as soon as possible
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        InputProps={{
                          startAdornment: <Person sx={{ mr: 1, color: 'action.active' }} />
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        InputProps={{
                          startAdornment: <Email sx={{ mr: 1, color: 'action.active' }} />
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        select
                        label="Service Type"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        SelectProps={{
                          native: true,
                        }}
                      >
                        <option value="">Select a service...</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        InputProps={{
                          startAdornment: <Subject sx={{ mr: 1, color: 'action.active' }} />
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        InputProps={{
                          startAdornment: <Message sx={{ mr: 1, color: 'action.active', alignSelf: 'flex-start', mt: 1 }} />
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Office Information */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Office Features */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Business sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Office Features
                </Typography>
                <List dense>
                  {officeFeatures.map((feature, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        {feature.icon}
                      </ListItemIcon>
                      <ListItemText primary={feature.title} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Information
                </Typography>
                <Box mb={2}>
                  <Chip 
                    label="Government Department" 
                    color="primary" 
                    size="small" 
                    sx={{ mr: 1, mb: 1 }}
                  />
                  <Chip 
                    label="Accredited Laboratory" 
                    color="secondary" 
                    size="small" 
                    sx={{ mr: 1, mb: 1 }}
                  />
                  <Chip 
                    label="24/7 Emergency" 
                    color="error" 
                    size="small" 
                    sx={{ mr: 1, mb: 1 }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Our forensic laboratory is accredited and provides expert services 
                  for criminal and civil cases. Emergency crime scene services are 
                  available 24/7.
                </Typography>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <Box display="flex" gap={1}>
                  <IconButton color="primary" aria-label="Twitter">
                    <Twitter />
                  </IconButton>
                  <IconButton color="primary" aria-label="Facebook">
                    <Facebook />
                  </IconButton>
                  <IconButton color="primary" aria-label="LinkedIn">
                    <LinkedIn />
                  </IconButton>
                </Box>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  Stay updated with our latest news and announcements
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom textAlign="center">
            Find Us
          </Typography>
          <Paper 
            elevation={3} 
            sx={{ 
              height: 300, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              bgcolor: 'grey.100',
              backgroundImage: 'linear-gradient(45deg, #f5f5f5 25%, transparent 25%), linear-gradient(-45deg, #f5f5f5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f5f5f5 75%), linear-gradient(-45deg, transparent 75%, #f5f5f5 75%)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }}
          >
            <Box textAlign="center">
              <LocationOn sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Interactive Map Coming Soon
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chingaira Makoni Building<br />
                Cnr Herbert Chitepo and L. Takawira<br />
                Harare, Zimbabwe
              </Typography>
            </Box>
          </Paper>
        </Box>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Box mt={4}>
          <Alert 
            severity="info" 
            sx={{ 
              '& .MuiAlert-icon': { 
                fontSize: 28 
              } 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Emergency Crime Scene Services
            </Typography>
            <Typography variant="body2">
              For urgent crime scene examination and evidence collection, 
              our forensic experts are available 24/7. 
              Call our emergency line: <strong>+263 4 123 4567</strong>
            </Typography>
          </Alert>
        </Box>
      </motion.div>

      {/* Snackbar for form submission */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactsPage;