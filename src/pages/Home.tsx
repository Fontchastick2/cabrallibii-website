import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import ReactFullpage from '@fullpage/react-fullpage';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const img = new Image();
    img.src = `${process.env.PUBLIC_URL}/images/cabral-libii.jpg`;
    img.onload = () => {
      setImageLoaded(true);
    };

    // Cleanup function to reset fullpage.js settings
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';
      document.documentElement.style.position = '';
      document.body.style.position = '';
    };
  }, []);

  return (
    <>
      <ReactFullpage
        scrollingSpeed={1000}
        navigation={true}
        credits={{ enabled: false }}
        render={({ state, fullpageApi }) => (
          <div id="fullpage-wrapper">
            <div className="section">
              <Box
                sx={{
                  position: 'relative',
                  height: '100vh',
                  overflow: 'hidden',
                  backgroundColor: 'black',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/cabral-libii.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: imageLoaded ? 0.7 : 0,
                    transition: 'opacity 2s ease-in-out',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 1,
                  }
                }}
                className={imageLoaded ? 'image-loaded' : ''}
              >
                <motion.div
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 3,
                    ease: [0.645, 0.045, 0.355, 1],
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Container
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          color: 'white',
                          textAlign: 'center',
                          fontSize: { xs: '2.5rem', md: '4rem' },
                          fontWeight: 700,
                          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                          mb: 2,
                        }}
                      >
                        {t('home.mainTitle')}
                      </Typography>
                    </motion.div>
                    
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          color: 'white',
                          textAlign: 'center',
                          fontSize: { xs: '1.5rem', md: '2rem' },
                          fontWeight: 500,
                          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        }}
                      >
                        {t('home.subtitle')}
                      </Typography>
                    </motion.div>
                  </Container>
                </motion.div>
              </Box>
            </div>

            <div className="section">
              <Box 
                sx={{ 
                  minHeight: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)',
                  py: 4
                }}
              >
                <Container>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Typography variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
                      {t('home.vision.title')}
                    </Typography>
                  </motion.div>
                  
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <Card sx={{ height: '100%' }}>
                          <CardMedia
                            component="img"
                            height="300"
                            image="https://via.placeholder.com/600x300"
                            alt="Démocratie"
                            sx={{
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease-in-out',
                              '&:hover': {
                                transform: 'scale(1.05)'
                              }
                            }}
                          />
                          <CardContent sx={{ p: 3 }}>
                            <Typography gutterBottom variant="h5" component="h2" sx={{ mb: 2 }}>
                              {t('home.vision.democracy.title')}
                            </Typography>
                            <Typography variant="body1">
                              {t('home.vision.democracy.description')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Card sx={{ height: '100%' }}>
                          <CardMedia
                            component="img"
                            height="300"
                            image="https://via.placeholder.com/600x300"
                            alt="Éducation"
                            sx={{
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease-in-out',
                              '&:hover': {
                                transform: 'scale(1.05)'
                              }
                            }}
                          />
                          <CardContent sx={{ p: 3 }}>
                            <Typography gutterBottom variant="h5" component="h2" sx={{ mb: 2 }}>
                              {t('home.vision.education.title')}
                            </Typography>
                            <Typography variant="body1">
                              {t('home.vision.education.description')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <Card sx={{ height: '100%' }}>
                          <CardMedia
                            component="img"
                            height="300"
                            image="https://via.placeholder.com/600x300"
                            alt="Économie"
                            sx={{
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease-in-out',
                              '&:hover': {
                                transform: 'scale(1.05)'
                              }
                            }}
                          />
                          <CardContent sx={{ p: 3 }}>
                            <Typography gutterBottom variant="h5" component="h2" sx={{ mb: 2 }}>
                              {t('home.vision.economy.title')}
                            </Typography>
                            <Typography variant="body1">
                              {t('home.vision.economy.description')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </div>

            <div className="section">
              <Box sx={{ 
                background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <Container>
                  <Typography variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
                    Biographie
                  </Typography>
                  <Timeline />
                </Container>
              </Box>
            </div>

            <div className="section">
              <Box sx={{ 
                background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
                minHeight: '100vh',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 6,
              }}>
                <Container maxWidth="lg" sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    '&::before': {
                      content: '""',
                      display: 'block',
                      paddingTop: '56.25%',
                    }
                  }}>
                    <Box
                      component="iframe"
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '90%',
                        height: '90%',
                        borderRadius: 2,
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      }}
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                      title="Cabral Libii Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </Box>
                </Container>
                <Box sx={{ width: '100%' }}>
                  <Footer />
                </Box>
              </Box>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default Home;
