import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        background: 'linear-gradient(90deg, #2d3748 0%, #4a5568 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          {'Copyright © '}
          <Link
            color="inherit"
            href="https://github.com/phytt"
            target="_blank"
            rel="noopener noreferrer"
          >
            phytt
          </Link>{' '}
          {new Date().getFullYear()}
          {'. All rights reserved.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
