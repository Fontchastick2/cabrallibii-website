import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Program = () => {
  const programs = [
    {
      title: 'Éducation',
      points: [
        'Amélioration des infrastructures scolaires',
        'Formation continue des enseignants',
        'Accès gratuit à l\'éducation primaire',
        'Bourses d\'études pour les étudiants méritants'
      ]
    },
    {
      title: 'Santé',
      points: [
        'Construction de nouveaux centres de santé',
        'Accès aux soins de base pour tous',
        'Programme de vaccination gratuit',
        'Formation du personnel médical'
      ]
    },
    {
      title: 'Économie',
      points: [
        'Soutien aux petites entreprises',
        'Création d\'emplois pour les jeunes',
        'Développement des infrastructures',
        'Promotion du tourisme local'
      ]
    },
    {
      title: 'Agriculture',
      points: [
        'Modernisation des techniques agricoles',
        'Soutien aux agriculteurs locaux',
        'Développement durable',
        'Accès aux marchés internationaux'
      ]
    }
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Notre Programme
        </Typography>
        <Typography variant="h6" paragraph align="center" color="text.secondary">
          Un plan d'action concret pour un Cameroun meilleur
        </Typography>

        <Grid container spacing={4}>
          {programs.map((program, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {program.title}
                  </Typography>
                  <List>
                    {program.points.map((point, pointIndex) => (
                      <ListItem key={pointIndex}>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={point} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom align="center">
            Notre Vision
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Nous aspirons à construire un Cameroun uni, prospère et moderne, 
            où chaque citoyen a la possibilité de réaliser son plein potentiel.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Program;
