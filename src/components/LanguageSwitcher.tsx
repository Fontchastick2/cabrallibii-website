import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, ButtonGroup } from '@mui/material';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{ 
        position: 'fixed', 
        bottom: 20, 
        right: 20, 
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 2,
        padding: '8px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        opacity: isHovered ? 1 : 0.5,
        transition: 'opacity 0.3s ease',
      }}
    >
      <ButtonGroup variant="contained" size="medium">
        <Button 
          onClick={() => changeLanguage('en')}
          sx={{ 
            backgroundColor: i18n.language === 'en' ? '#4a90e2' : 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            fontWeight: 'bold',
            minWidth: '48px',
            '&:hover': {
              backgroundColor: i18n.language === 'en' ? '#357abd' : 'rgba(255, 255, 255, 0.3)'
            }
          }}
        >
          EN
        </Button>
        <Button 
          onClick={() => changeLanguage('fr')}
          sx={{ 
            backgroundColor: i18n.language === 'fr' ? '#4a90e2' : 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            fontWeight: 'bold',
            minWidth: '48px',
            '&:hover': {
              backgroundColor: i18n.language === 'fr' ? '#357abd' : 'rgba(255, 255, 255, 0.3)'
            }
          }}
        >
          FR
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default LanguageSwitcher;
