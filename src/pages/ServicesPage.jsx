// src/pages/ServicesPage.jsx
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Fade,
  Divider
} from '@mui/material';
import {
  Science,
  Biotech,
  Fingerprint,
  Article,
  ExpandMore,
  CheckCircle,
  Gavel,
  LocalHospital,
  Security,
  BugReport,
  Build,
  DirectionsCar,
  TextFields,
  MonetizationOn,
  Visibility,
  Assignment
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import ScienceIcon from '@mui/icons-material/Science'; // ✅


const ServicesPage = ({ section }) => {
  const [selectedService, setSelectedService] = useState(section || 'all');
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const services = [
    {
      id: 'biology',
      title: 'Forensic Biology',
      icon: <Biotech sx={{ fontSize: 40, color: '#1976d2' }} />,
      description: 'Application of biological sciences techniques in criminal and civil case investigation.',
      image: '/api/placeholder/400/250',
      color: '#e3f2fd',
      laboratory: [
        'Serological Screening',
        'Species identification',
        'Biological material identification',
        'Physiological fluid identification',
        'DNA analysis',
        'DNA database'
      ],
      otherServices: [
        'Crime scene examination and reconstruction',
        'Collection of physical forensic evidence',
        'Preparation of reports and Affidavits for Courts',
        'Expert witness testimony in Courts of law'
      ]
    },
    {
      id: 'chemistry',
      title: 'Forensic Chemistry',
      icon: <ScienceIcon sx={{ fontSize: 40, color: '#ff9800' }} />,
      description: 'Applied analytical chemistry for forensic investigations.',
      image: '/api/placeholder/400/250',
      color: '#fff3e0',
      laboratory: [
        'Illicit drugs analysis',
        'Controlled substances',
        'Explosives examination',
        'Fire debris Analysis',
        'Evidential Breath Analyser (EBA)'
      ],
      toxicology: [
        'Blood alcohol testing',
        'Poisoning analysis (Pesticides, Insecticides, Herbicides)'
      ],
      traceEvidence: [
        'Primer and gunshot residue',
        'Paint analysis',
        'Oil and lubricants examination'
      ],
      otherServices: [
        'Crime scene examination and reconstruction',
        'Collection of physical forensic evidence',
        'Preparation of reports and Affidavits for Courts',
        'Expert witness testimony in Courts of law'
      ]
    },
    {
      id: 'criminalistics',
      title: 'Criminalistics',
      icon: <Fingerprint sx={{ fontSize: 40, color: '#4caf50' }} />,
      description: 'Scientific techniques to examine, analyze and compare physical evidence.',
      image: '/api/placeholder/400/250',
      color: '#e8f5e8',
      laboratory: [
        'Biological evidence analysis',
        'Hairs and Fibers examination',
        'Trace evidence (Soil, plant materials, glass, paint flakes)',
        'Impression evidence: footwear, tool marks, tyre marks'
      ],
      toolMarks: [
        'Stolen motor vehicle examination',
        'Serial number restoration',
        'VIN restoration',
        'Paint profiling',
        'Motor vehicle wheel examination',
        'Accident cause determination',
        'Physical matching and comparisons'
      ],
      otherServices: [
        'Crime scene examination and reconstruction',
        'Collection of physical forensic evidence',
        'Preparation of reports and Affidavits for Courts',
        'Expert witness testimony in Courts of law'
      ]
    },
    {
      id: 'document',
      title: 'Document Examination',
      icon: <Article sx={{ fontSize: 40, color: '#9c27b0' }} />,
      description: 'Questioned document examination and handwriting analysis.',
      image: '/api/placeholder/400/250',
      color: '#f3e5f5',
      examinations: [
        'Handwriting and signatures analysis',
        'Paper toner and ink analysis',
        'Indented impressions',
        'Obliterated and altered documents (forgery)',
        'Counterfeit money and credit cards'
      ],
      otherServices: [
        'Crime scene examination and reconstruction',
        'Collection of physical forensic evidence',
        'Preparation of reports and Affidavits for Courts',
        'Expert witness testimony in Courts of law'
      ]
    }
  ];

  const consultancyServices = [
    { title: 'Murder cases', icon: <Security /> },
    { title: 'Motor vehicle accidents', icon: <DirectionsCar /> },
    { title: 'Sexual assault', icon: <LocalHospital /> },
    { title: 'Housebreaking', icon: <Build /> },
    { title: 'Stock theft', icon: <BugReport /> }
  ];

  const filteredServices = selectedService === 'all' 
    ? services 
    : services.filter(service => service.id === selectedService);

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
    hidden: { y: 20, opacity: 0 },
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
            Forensic Services
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Expert forensic science services of international standard
          </Typography>
        </Box>
      </motion.div>

      {/* Service Filter Buttons */}
      <Box display="flex" justifyContent="center" mb={4} flexWrap="wrap" gap={1}>
        {['all', ...services.map(s => s.id)].map((filter) => (
          <Button
            key={filter}
            variant={selectedService === filter ? 'contained' : 'outlined'}
            onClick={() => setSelectedService(filter)}
            sx={{ mb: 1 }}
          >
            {filter === 'all' ? 'All Services' : 
             services.find(s => s.id === filter)?.title || filter}
          </Button>
        ))}
      </Box>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={3}>
          {filteredServices.map((service) => (
            <Grid item xs={12} md={selectedService === 'all' ? 6 : 12} key={service.id}>
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
                  <Box sx={{ bgcolor: service.color, p: 2, textAlign: 'center' }}>
                    {service.icon}
                    <Typography variant="h5" component="h2" mt={1}>
                      {service.title}
                    </Typography>
                  </Box>
                  
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      {service.description}
                    </Typography>

                    {/* Laboratory Investigations */}
                    <Accordion 
                      expanded={expanded === `${service.id}-lab`}
                      onChange={handleAccordionChange(`${service.id}-lab`)}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="h6">
                          <Science sx={{ mr: 1, verticalAlign: 'middle' }} />
                          Laboratory Investigations
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List dense>
                          {service.laboratory?.map((item, index) => (
                            <ListItem key={index}>
                              <ListItemIcon>
                                <CheckCircle color="primary" />
                              </ListItemIcon>
                              <ListItemText primary={item} />
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>

                    {/* Toxicology (Chemistry only) */}
                    {service.toxicology && (
                      <Accordion 
                        expanded={expanded === `${service.id}-tox`}
                        onChange={handleAccordionChange(`${service.id}-tox`)}
                      >
                        <AccordionSummary expandIcon={<ExpandMore />}>
                          <Typography variant="h6">
                            <LocalHospital sx={{ mr: 1, verticalAlign: 'middle' }} />
                            Toxicology
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <List dense>
                            {service.toxicology.map((item, index) => (
                              <ListItem key={index}>
                                <ListItemIcon>
                                  <CheckCircle color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>
                            ))}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                    )}

                    {/* Trace Evidence (Chemistry only) */}
                    {service.traceEvidence && (
                      <Accordion 
                        expanded={expanded === `${service.id}-trace`}
                        onChange={handleAccordionChange(`${service.id}-trace`)}
                      >
                        <AccordionSummary expandIcon={<ExpandMore />}>
                          <Typography variant="h6">
                            <Visibility sx={{ mr: 1, verticalAlign: 'middle' }} />
                            Trace Evidence
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <List dense>
                            {service.traceEvidence.map((item, index) => (
                              <ListItem key={index}>
                                <ListItemIcon>
                                  <CheckCircle color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>
                            ))}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                    )}

                    {/* Tool Marks (Criminalistics only) */}
                    {service.toolMarks && (
                      <Accordion 
                        expanded={expanded === `${service.id}-tools`}
                        onChange={handleAccordionChange(`${service.id}-tools`)}
                      >
                        <AccordionSummary expandIcon={<ExpandMore />}>
                          <Typography variant="h6">
                            <Build sx={{ mr: 1, verticalAlign: 'middle' }} />
                            Tool Marks Examination
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <List dense>
                            {service.toolMarks.map((item, index) => (
                              <ListItem key={index}>
                                <ListItemIcon>
                                  <CheckCircle color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>
                            ))}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                    )}

                    {/* Examinations (Document only) */}
                    {service.examinations && (
                      <Accordion 
                        expanded={expanded === `${service.id}-exam`}
                        onChange={handleAccordionChange(`${service.id}-exam`)}
                      >
                        <AccordionSummary expandIcon={<ExpandMore />}>
                          <Typography variant="h6">
                            <TextFields sx={{ mr: 1, verticalAlign: 'middle' }} />
                            Common Examinations
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <List dense>
                            {service.examinations.map((item, index) => (
                              <ListItem key={index}>
                                <ListItemIcon>
                                  <CheckCircle color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>
                            ))}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                    )}

                    {/* Other Services */}
                    <Accordion 
                      expanded={expanded === `${service.id}-other`}
                      onChange={handleAccordionChange(`${service.id}-other`)}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="h6">
                          <Assignment sx={{ mr: 1, verticalAlign: 'middle' }} />
                          Other Services
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List dense>
                          {service.otherServices.map((item, index) => (
                            <ListItem key={index}>
                              <ListItemIcon>
                                <CheckCircle color="primary" />
                              </ListItemIcon>
                              <ListItemText primary={item} />
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Consultancy Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Box mt={6}>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="h4" component="h2" gutterBottom textAlign="center">
            Consultancy Services
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {consultancyServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ 
                  textAlign: 'center', 
                  p: 2,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 4
                  }
                }}>
                  <Box sx={{ color: 'primary.main', mb: 1 }}>
                    {React.cloneElement(service.icon, { sx: { fontSize: 30 } })}
                  </Box>
                  <Typography variant="h6">{service.title}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Box textAlign="center" mt={6} p={3} bgcolor="primary.main" color="white" borderRadius={2}>
          <Typography variant="h5" gutterBottom>
            Need Forensic Services?
          </Typography>
          <Typography variant="body1" paragraph>
            Contact our expert forensic scientists for professional assistance
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            sx={{ mt: 2 }}
          >
            Contact Us
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default ServicesPage;