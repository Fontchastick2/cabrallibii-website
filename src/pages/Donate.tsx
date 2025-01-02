import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  TextField,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';

const Donate = () => {
  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Soutenez la Campagne
        </Typography>
        <Typography variant="h6" paragraph align="center" color="text.secondary">
          Votre contribution fait la différence
        </Typography>

        {/* Progress Bar */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h6" gutterBottom>
            Objectif de la campagne: 1,000,000 FCFA
          </Typography>
          <LinearProgress
            variant="determinate"
            value={60}
            sx={{
              height: 10,
              borderRadius: 5,
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="body2" color="text.secondary">
              600,000 FCFA collectés
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1,000,000 FCFA
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {/* Donation Form */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Faire un don
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Prénom"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nom"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Montant (FCFA)"
                      variant="outlined"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Faire un don sécurisé
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Payment Methods */}
          <Grid item xs={12} md={5}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Moyens de paiement
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" paragraph>
                    Nous acceptons:
                  </Typography>
                  <ul>
                    <li>Carte de crédit</li>
                    <li>Mobile Money (Orange, MTN)</li>
                    <li>PayPal</li>
                  </ul>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Donate;
