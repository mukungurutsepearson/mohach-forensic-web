import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Grow,
  keyframes,
} from '@mui/material';
import {
  Science,
  Biotech,
  LocalPolice,
  Description,
  ArrowForward,
  Schedule,
  LocationOn,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      icon: <Biotech sx={{ fontSize: 40 }} />,
      title: 'Forensic Biology',
      description: 'DNA analysis, species identification, and biological material examination',
      image: '/images/forensic-biology.jpg',
    },
    {
      icon: <Science sx={{ fontSize: 40 }} />,
      title: 'Forensic Chemistry',
      description: 'Chemical analysis, toxicology, and trace evidence examination',
      image: '/images/forensic-chemistry.jpg',
    },
    {
      icon: <LocalPolice sx={{ fontSize: 40 }} />,
      title: 'Criminalistics',
      description: 'Physical evidence analysis, tool marks, and impression examination',
      image: '/images/criminalistics.jpg',
    },
    {
      icon: <Description sx={{ fontSize: 40 }} />,
      title: 'Document Examination',
      description: 'Handwriting analysis, forgery detection, and document authentication',
      image: '/images/document-examination.jpg',
    },
  ];

  const stats = [];

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  // DNA helix rotation animation
  const dnaRotation = keyframes`
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  `;

  // Flask bubble animation
  const bubbleAnimation = keyframes`
    0% {
      transform: translateY(0px);
      opacity: 0.5;
    }
    50% {
      transform: translateY(-20px);
      opacity: 1;
    }
    100% {
      transform: translateY(0px);
      opacity: 0.5;
    }
  `;

  // Flask liquid animation
  const liquidAnimation = keyframes`
    0% {
      transform: scaleY(0.8);
    }
    50% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0.8);
    }
  `;

  // DNA strand animation
  const dnaStrandAnimation = keyframes`
    0% {
      transform: translateY(0px) rotateZ(0deg);
      opacity: 0.7;
    }
    50% {
      transform: translateY(-5px) rotateZ(2deg);
      opacity: 1;
    }
    100% {
      transform: translateY(0px) rotateZ(0deg);
      opacity: 0.7;
    }
  `;

  const DNAHelix = () => {
    const helixRadius = 60; // Radius of the helix
    const helixHeight = 280; // Total height of the helix
    const numBasePairs = 20; // Number of base pairs
    const turnsPerHelix = 2; // Number of complete turns
    
    return (
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 300, md: 400 },
          height: { xs: 300, md: 400 },
          animation: `${dnaRotation} 12s linear infinite`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Create DNA double helix */}
        {[...Array(numBasePairs)].map((_, i) => {
          const t = i / (numBasePairs - 1); // Parameter from 0 to 1
          const angle = t * turnsPerHelix * 2 * Math.PI; // Angle for spiral
          const y = (t - 0.5) * helixHeight; // Y position from top to bottom
          
          // Calculate positions for both strands
          const x1 = Math.cos(angle) * helixRadius;
          const z1 = Math.sin(angle) * helixRadius;
          const x2 = Math.cos(angle + Math.PI) * helixRadius; // Opposite side
          const z2 = Math.sin(angle + Math.PI) * helixRadius;
          
          return (
            <Box key={i}>
              {/* First strand nucleotide */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: 12,
                  height: 12,
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '50%',
                  transform: `
                    translate(-50%, -50%)
                    translate3d(${x1}px, ${y}px, ${z1}px)
                  `,
                  animation: `${dnaStrandAnimation} 4s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                  boxShadow: `0 0 8px ${theme.palette.primary.main}66`,
                  zIndex: z1 > 0 ? 10 : 5,
                }}
              />
              
              {/* Second strand nucleotide */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: 12,
                  height: 12,
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: '50%',
                  transform: `
                    translate(-50%, -50%)
                    translate3d(${x2}px, ${y}px, ${z2}px)
                  `,
                  animation: `${dnaStrandAnimation} 4s ease-in-out infinite`,
                  animationDelay: `${i * 0.1 + 0.5}s`,
                  boxShadow: `0 0 8px ${theme.palette.secondary.main}66`,
                  zIndex: z2 > 0 ? 10 : 5,
                }}
              />
              
              {/* Base pair connection */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: Math.sqrt((x2-x1)**2 + (z2-z1)**2),
                  height: 2,
                  backgroundColor: theme.palette.grey[400],
                  borderRadius: 1,
                  transformOrigin: '0 50%',
                  transform: `
                    translate(-50%, -50%)
                    translate3d(${x1}px, ${y}px, ${z1}px)
                    rotateY(${Math.atan2(z2-z1, x2-x1) * 180/Math.PI}deg)
                  `,
                  animation: `${dnaStrandAnimation} 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.05}s`,
                  opacity: 0.7,
                  zIndex: Math.min(z1, z2) > 0 ? 8 : 3,
                }}
              />
              
              {/* Strand connections for helix backbone */}
              {i < numBasePairs - 1 && (
                <>
                  {/* First strand backbone */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: 3,
                      height: helixHeight / numBasePairs + 5,
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                      transformOrigin: '50% 0%',
                      transform: `
                        translate(-50%, -50%)
                        translate3d(${x1}px, ${y}px, ${z1}px)
                        rotateX(${Math.atan2(
                          Math.sqrt((x1 - Math.cos((i+1)/(numBasePairs-1) * turnsPerHelix * 2 * Math.PI) * helixRadius)**2 + 
                                   (z1 - Math.sin((i+1)/(numBasePairs-1) * turnsPerHelix * 2 * Math.PI) * helixRadius)**2),
                          helixHeight / numBasePairs
                        ) * 180/Math.PI}deg)
                      `,
                      opacity: 0.6,
                      zIndex: z1 > 0 ? 9 : 4,
                    }}
                  />
                  
                  {/* Second strand backbone */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: 3,
                      height: helixHeight / numBasePairs + 5,
                      backgroundColor: theme.palette.secondary.main,
                      borderRadius: 1.5,
                      transformOrigin: '50% 0%',
                      transform: `
                        translate(-50%, -50%)
                        translate3d(${x2}px, ${y}px, ${z2}px)
                        rotateX(${Math.atan2(
                          Math.sqrt((x2 - Math.cos((i+1)/(numBasePairs-1) * turnsPerHelix * 2 * Math.PI + Math.PI) * helixRadius)**2 + 
                                   (z2 - Math.sin((i+1)/(numBasePairs-1) * turnsPerHelix * 2 * Math.PI + Math.PI) * helixRadius)**2),
                          helixHeight / numBasePairs
                        ) * 180/Math.PI}deg)
                      `,
                      opacity: 0.6,
                      zIndex: z2 > 0 ? 9 : 4,
                    }}
                  />
                </>
              )}
            </Box>
          );
        })}
      </Box>
    );
  };

  const HeroSection = () => (
    <Box
      sx={{
        background: 'white',
        color: theme.palette.primary.main,
        py: { xs: 8, md: 12 },
        mb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1000}>
              <Box>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Department of Forensic Science Services
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 3, 
                    color: theme.palette.text.primary,
                    fontWeight: 400,
                  }}
                >
                  Delivering justice through scientific excellence
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4, 
                    color: theme.palette.text.secondary,
                    lineHeight: 1.8,
                  }}
                >
                  Expert impartial forensic science services of international best standard, 
                  facilitating equitable justice delivery through advanced scientific methods.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/services')}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                    endIcon={<ArrowForward />}
                  >
                    Our Services
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/about')}
                    sx={{
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main,
                      '&:hover': {
                        borderColor: theme.palette.primary.dark,
                        color: theme.palette.primary.dark,
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1500}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: { xs: 300, md: 400 },
                  position: 'relative',
                  perspective: '1000px',
                }}
              >
                {/* DNA Helix around Flask */}
                <DNAHelix />
                
                {/* Flask with bubbles */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <Science 
                    sx={{ 
                      fontSize: { xs: 120, md: 160 },
                      color: theme.palette.primary.main,
                      position: 'relative',
                      zIndex: 1,
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                    }} 
                  />
                  
                  {/* Animated bubbles */}
                  {[...Array(6)].map((_, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: 'absolute',
                        width: index % 2 === 0 ? 6 : 8,
                        height: index % 2 === 0 ? 6 : 8,
                        backgroundColor: theme.palette.secondary.main,
                        borderRadius: '50%',
                        top: `${55 + index * 4}%`,
                        left: `${42 + (index % 3) * 6}%`,
                        animation: `${bubbleAnimation} ${1.5 + index * 0.3}s ease-in-out infinite`,
                        animationDelay: `${index * 0.2}s`,
                        opacity: 0.7,
                        boxShadow: `0 0 6px ${theme.palette.secondary.main}44`,
                      }}
                    />
                  ))}
                  
                  {/* Liquid animation effect */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '20%',
                      left: '35%',
                      width: '30%',
                      height: '15%',
                      backgroundColor: theme.palette.secondary.main,
                      opacity: 0.6,
                      borderRadius: '0 0 50% 50%',
                      animation: `${liquidAnimation} 3s ease-in-out infinite`,
                      boxShadow: `inset 0 0 20px ${theme.palette.secondary.main}66`,
                    }}
                  />
                </Box>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  const ServicesCarousel = () => (
    <Container maxWidth="lg" sx={{ mb: 8 }}>
      <Typography 
        variant="h2" 
        sx={{ 
          textAlign: 'center', 
          mb: 2,
          color: theme.palette.primary.main,
          fontWeight: 600,
        }}
      >
        Our Services
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          textAlign: 'center', 
          mb: 6,
          color: theme.palette.text.secondary,
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        Comprehensive forensic science services supporting justice and law enforcement
      </Typography>
      
      <Box sx={{ position: 'relative', overflow: 'hidden', height: 400 }}>
        {services.map((service, index) => (
          <Slide
            key={index}
            direction="left"
            in={index === currentService}
            mountOnEnter
            unmountOnExit
            timeout={500}
          >
            <Card
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: isMobile ? '100%' : '50%',
                  height: isMobile ? 200 : '100%',
                  objectFit: 'cover',
                }}
                image={service.image}
                alt={service.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.backgroundColor = theme.palette.grey[200];
                  e.target.parentElement.style.display = 'flex';
                  e.target.parentElement.style.alignItems = 'center';
                  e.target.parentElement.style.justifyContent = 'center';
                }}
              />
              <CardContent
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  p: 4,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: theme.palette.primary.main, mr: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
                    {service.title}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => navigate('/services')}
                  sx={{ alignSelf: 'flex-start' }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Slide>
        ))}
      </Box>
      
      {/* Service indicators */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
        {services.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentService(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: index === currentService 
                ? theme.palette.primary.main 
                : theme.palette.grey[300],
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          />
        ))}
      </Box>
    </Container>
  );

  const StatsSection = () => (
    <Box sx={{ backgroundColor: theme.palette.grey[50], py: 8, mb: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Fade in={true} timeout={1000 + index * 200}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: 1,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box sx={{ color: theme.palette.primary.main, mb: 1 }}>
                    {stat.icon}
                  </Box>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: theme.palette.text.secondary,
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  const QuickAccessSection = () => (
    <Container maxWidth="lg" sx={{ mb: 8 }}>
      <Typography 
        variant="h2" 
        sx={{ 
          textAlign: 'center', 
          mb: 6,
          color: theme.palette.primary.main,
          fontWeight: 600,
        }}
      >
        Quick Access
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Grow in={true} timeout={1000}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Schedule sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Working Hours
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
                  Monday - Friday: 8:00 AM - 4:30 PM<br />
                  Saturday: 8:00 AM - 12:00 PM<br />
                  Sunday: Closed
                </Typography>
                <Button variant="outlined" onClick={() => navigate('/contacts')}>
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grow in={true} timeout={1200}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <LocationOn sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Our Location
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
                  Second Floor<br />
                  Chingaira Makoni Building<br />
                  Cnr Herbert Chitepo and L. Takawira
                </Typography>
                <Button variant="outlined" onClick={() => navigate('/contacts')}>
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grow in={true} timeout={1400}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Science sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Need Help?
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
                  Have questions about our services or need assistance? 
                  Check our frequently asked questions or contact us directly.
                </Typography>
                <Button variant="outlined" onClick={() => navigate('/faq')}>
                  View FAQ
                </Button>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
      </Grid>
    </Container>
  );

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <HeroSection />
      <ServicesCarousel />
      <StatsSection />
      <QuickAccessSection />
    </Box>
  );
};

export default HomePage;