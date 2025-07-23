import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import ClipLoader from 'react-spinners/ClipLoader'; // ✅ Replaces DNA

const LoadingSpinner = ({ message = 'Loading...', fullScreen = false }) => {
  const theme = useTheme();

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    ...(fullScreen && {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      zIndex: 9999,
    }),
    ...(!fullScreen && {
      py: 4,
    }),
  };

  return (
    <Box sx={containerStyles}>
      <ClipLoader
        color={theme.palette.primary.main}
        loading={true}
        size={80}
        aria-label="loading-spinner"
      />
      <Typography 
        variant="body1" 
        sx={{ 
          color: theme.palette.text.secondary,
          fontWeight: 500,
          textAlign: 'center',
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
