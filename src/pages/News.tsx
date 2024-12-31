import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

const newsItems = [
  {
    title: 'Lancement de la Campagne 2025',
    date: '31 Décembre 2024',
    image: 'https://via.placeholder.com/800x400',
    category: 'Événement',
    content: 'Cabral Libii lance officiellement sa campagne présidentielle pour 2025...',
  },
  {
    title: 'Rencontre avec la Jeunesse',
    date: '30 Décembre 2024',
    image: 'https://via.placeholder.com/800x400',
    category: 'Rencontre',
    content: "Une session interactive avec les jeunes sur l'avenir du Cameroun...",
  },
  {
    title: 'Programme Économique',
    date: '29 Décembre 2024',
    image: 'https://via.placeholder.com/800x400',
    category: 'Programme',
    content: 'Présentation détaillée du programme économique pour le développement...',
  },
];

const News = () => {
  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Actualités
        </Typography>
        <Typography variant="h6" paragraph align="center" color="text.secondary">
          Restez informé des dernières nouvelles de la campagne
        </Typography>

        <Grid container spacing={4}>
          {newsItems.map((item, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <Grid container>
                    <Grid item xs={12} md={4}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={item.image}
                        alt={item.title}
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Chip label={item.category} color="primary" />
                          <Typography variant="body2" color="text.secondary">
                            {item.date}
                          </Typography>
                        </Box>
                        <Typography variant="h5" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {item.content}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default News;
