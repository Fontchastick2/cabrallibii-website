import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        background: 'linear-gradient(90deg, #2d3748 0%, #4a5568 100%)',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="white" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' '}
          <Link 
            color="inherit" 
            href="https://phytt.eu"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Phytt
          </Link>
          {'. All rights reserved.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
