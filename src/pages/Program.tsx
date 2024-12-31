import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const programPoints = [
  {
    title: 'Éducation',
    image: 'https://via.placeholder.com/400x250',
    content: 'Une éducation de qualité accessible à tous les Camerounais.',
  },
  {
    title: 'Économie',
    image: 'https://via.placeholder.com/400x250',
    content: "Développement économique durable et création d'emplois.",
  },
  {
    title: 'Gouvernance',
    image: 'https://via.placeholder.com/400x250',
    content: 'Une administration transparente et efficace.',
  },
  {
    title: 'Santé',
    image: 'https://via.placeholder.com/400x250',
    content: 'Un système de santé moderne et accessible.',
  },
  {
    title: 'Infrastructure',
    image: 'https://via.placeholder.com/400x250',
    content: 'Modernisation des infrastructures nationales.',
  },
  {
    title: 'Jeunesse',
    image: 'https://via.placeholder.com/400x250',
    content: 'Opportunités et développement pour la jeunesse.',
  },
];

const Program = () => {
  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Notre Programme
        </Typography>
        <Typography variant="h6" paragraph align="center" color="text.secondary">
          Un projet ambitieux pour un Cameroun nouveau
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {programPoints.map((point, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={point.image}
                    alt={point.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {point.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {point.content}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Program;
