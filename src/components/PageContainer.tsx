import React from 'react';
import { Box } from '@mui/material';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '100%',
        position: 'relative',
        pb: { xs: 8, sm: 0 }, // Add padding bottom on mobile
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
