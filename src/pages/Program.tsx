import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, Modal, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import PageContainer from '../components/PageContainer';

interface ProgramCard {
  id: number;
  titleKey: string;
  descriptionKey: string;
  contentKey: string;
  image: string;
}

const Program: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedCard, setSelectedCard] = useState<ProgramCard | null>(null);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });

  const handleCardClick = (card: ProgramCard, event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    setCardPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    });
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  const programCards: ProgramCard[] = [
    {
      id: 1,
      titleKey: 'program.education.title',
      descriptionKey: 'program.education.description',
      contentKey: 'program.education.content',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 2,
      titleKey: 'program.economy.title',
      descriptionKey: 'program.economy.description',
      contentKey: 'program.economy.content',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 3,
      titleKey: 'program.governance.title',
      descriptionKey: 'program.governance.description',
      contentKey: 'program.governance.content',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 4,
      titleKey: 'program.health.title',
      descriptionKey: 'program.health.description',
      contentKey: 'program.health.content',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 5,
      titleKey: 'program.infrastructure.title',
      descriptionKey: 'program.infrastructure.description',
      contentKey: 'program.infrastructure.content',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 6,
      titleKey: 'program.youth.title',
      descriptionKey: 'program.youth.description',
      contentKey: 'program.youth.content',
      image: 'https://via.placeholder.com/400x250'
    }
  ];

  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            <Trans i18nKey="program.title" />
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          {programCards.map((card, index) => (
            <Grid item xs={12} md={4} key={card.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => handleCardClick(card, e)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.image}
                    alt={card.titleKey}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {t(card.titleKey)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {t(card.descriptionKey)}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <AnimatePresence>
          {selectedCard && (
            <Modal
              open={true}
              onClose={handleClose}
              closeAfterTransition
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <motion.div
                initial={{
                  position: 'fixed',
                  top: cardPosition.top,
                  left: cardPosition.left,
                  width: cardPosition.width,
                  height: cardPosition.height,
                  backgroundColor: '#fff',
                }}
                animate={{
                  top: '10vh',
                  left: '10vw',
                  width: '80vw',
                  height: '80vh',
                  backgroundColor: '#fff',
                }}
                exit={{
                  top: cardPosition.top,
                  left: cardPosition.left,
                  width: cardPosition.width,
                  height: cardPosition.height,
                  backgroundColor: '#fff',
                  transition: {
                    duration: 0.3,
                    backgroundColor: { duration: 0 }
                  }
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30
                }}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  overflow: 'hidden'
                }}
              >
                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    position: 'relative'
                  }}
                >
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      color: 'white',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      },
                      zIndex: 1
                    }}
                  >
                    <CloseIcon />
                  </IconButton>

                  <Box
                    sx={{
                      width: isMobile ? '100%' : '50%',
                      height: isMobile ? '40%' : '100%',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.img
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      src={selectedCard.image}
                      alt={selectedCard.titleKey}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      width: isMobile ? '100%' : '50%',
                      height: isMobile ? '60%' : '100%',
                      padding: 4,
                      overflow: 'auto'
                    }}
                  >
                    <Typography variant="h4" gutterBottom>
                      {t(selectedCard.titleKey)}
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                      {t(selectedCard.contentKey)}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </PageContainer>
  );
};

export default Program;
