import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  useTheme,
  Fade,
  Chip,
} from '@mui/material';
import {
  Visibility,
  TrackChanges,
  Psychology,
  Gavel,
  Person,
  SupervisorAccount,
  Group,
  Science,
} from '@mui/icons-material';

const AboutPage = () => {
  const theme = useTheme();

  const visionMission = [
    {
      icon: <Visibility sx={{ fontSize: 40 }} />,
      title: 'OUR VISION',
      content: 'Best Forensic service provider, of international quality, delivering justice and deterring crime through good science.',
      color: theme.palette.primary.main,
    },
    {
      icon: <TrackChanges sx={{ fontSize: 40 }} />,
      title: 'OUR MISSION',
      content: 'To provide expert impartial Forensic science services of international best standard, facilitating equitable justice delivery.',
      color: theme.palette.secondary.main,
    },
    {
      icon: <Gavel sx={{ fontSize: 40 }} />,
      title: 'OUR MANDATE',
      content: 'To provide forensic science services and expertise for resolution of both criminal and civil cases.',
      color: theme.palette.error.main,
    },
  ];

  const coreValues = [
    'Professionalism',
    'Integrity',
    'Impartiality',
    'Ethical Conduct',
    'Team Spirit',
    'Competency',
    'Efficiency',
  ];

  const organogramData = [
    {
      position: 'Director',
      name: 'Mr. B. T. Mutandiro',
      icon: <Person sx={{ fontSize: 40 }} />,
      level: 1,
      description: 'Overall leadership and strategic direction of the department',
    },
    {
      position: 'Deputy Directors',
      name: '2 Deputy Directors',
      icon: <SupervisorAccount sx={{ fontSize: 40 }} />,
      level: 2,
      description: 'Assist director in operational management and oversight',
    },
    {
      position: 'Secretaries',
      name: 'Administrative Staff',
      icon: <Group sx={{ fontSize: 40 }} />,
      level: 3,
      description: 'Administrative support and coordination',
    },
    {
      position: 'Principal Forensic Scientists',
      name: 'Section Heads',
      icon: <Science sx={{ fontSize: 40 }} />,
      level: 4,
      description: 'Lead each specialized forensic section',
    },
    {
      position: 'Senior Forensic Scientists',
      name: 'Senior Staff',
      icon: <Science sx={{ fontSize: 40 }} />,
      level: 5,
      description: 'Experienced forensic analysts and specialists',
    },
    {
      position: 'Forensic Scientists',
      name: 'Scientific Staff',
      icon: <Science sx={{ fontSize: 40 }} />,
      level: 6,
      description: 'Core forensic examination and analysis team',
    },
    {
      position: 'Laboratory Technicians',
      name: 'Technical Support',
      icon: <Psychology sx={{ fontSize: 40 }} />,
      level: 7,
      description: 'Laboratory operations and technical assistance',
    },
  ];

  const HeroSection = () => (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        py: { xs: 8, md: 12 },
        mb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Fade in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 2,
                fontWeight: 700,
                background: `linear-gradient(45deg, white, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Us
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3, 
                opacity: 0.9,
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              Committed to excellence in forensic science and justice delivery
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );

  const VisionMissionSection = () => (
    <Container maxWidth="lg" sx={{ mb: 8 }}>
      <Grid container spacing={4}>
        {visionMission.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Fade in={true} timeout={1000 + index * 300}>
              <Card
                sx={{
                  height: '100%',
                  background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}05 100%)`,
                  border: `2px solid ${item.color}20`,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ color: item.color, mb: 2 }}>
                    {item.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 2, 
                      fontWeight: 600,
                      color: item.color,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.content}
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  const CoreValuesSection = () => (
    <Box sx={{ backgroundColor: theme.palette.grey[50], py: 8, mb: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 2,
            color: theme.palette.primary.main,
            fontWeight: 600,
          }}
        >
          Our Core Values
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
          The principles that guide our work and define our commitment to excellence
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 2, 
            justifyContent: 'center',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          {coreValues.map((value, index) => (
            <Fade in={true} timeout={1000 + index * 200} key={index}>
              <Chip
                label={value}
                sx={{
                  fontSize: '1rem',
                  py: 2,
                  px: 1,
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              />
            </Fade>
          ))}
        </Box>
      </Container>
    </Box>
  );

  const OrganogramSection = () => (
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
        Organizational Structure
      </Typography>
      <Grid container spacing={3}>
        {organogramData.map((position, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Fade in={true} timeout={1000 + index * 200}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        mr: 2,
                        width: 56,
                        height: 56,
                      }}
                    >
                      {position.icon}
                    </Avatar>
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        {position.position}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {position.name}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    {position.description}
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <HeroSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <OrganogramSection />
    </Box>
  );
};

export default AboutPage;