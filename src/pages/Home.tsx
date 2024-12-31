import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://via.placeholder.com/1920x1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Cabral Libii
            </Typography>
            <Typography variant="h4" gutterBottom>
              Ensemble, Construisons le Cameroun de Demain
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                component={RouterLink}
                to="/program"
                variant="contained"
                size="large"
                sx={{ mr: 2 }}
              >
                Découvrir le Programme
              </Button>
              <Button
                component={RouterLink}
                to="/donate"
                variant="outlined"
                size="large"
                sx={{ color: 'white', borderColor: 'white' }}
              >
                Faire un Don
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Key Points Section */}
      <Container sx={{ py: 8 }}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <Grid container spacing={4}>
            {[
              {
                title: 'Vision',
                content: 'Un Cameroun moderne, prospère et inclusif',
                image: 'https://via.placeholder.com/400x300',
              },
              {
                title: 'Engagement',
                content: 'Pour une gouvernance transparente et efficace',
                image: 'https://via.placeholder.com/400x300',
              },
              {
                title: 'Action',
                content: 'Des solutions concrètes pour le développement',
                image: 'https://via.placeholder.com/400x300',
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      mb: 2,
                    }}
                  />
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.content}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Rejoignez le Mouvement
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              Ensemble, nous pouvons faire la différence pour l'avenir du Cameroun
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button
                component={RouterLink}
                to="/scrutateurs"
                variant="contained"
                color="secondary"
                size="large"
              >
                Devenir Scrutateur
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
