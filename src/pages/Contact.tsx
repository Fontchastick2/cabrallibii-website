import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Contactez-nous
        </Typography>
        <Typography variant="h6" paragraph align="center" color="text.secondary">
          Nous sommes là pour vous aider
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Formulaire de contact
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
                      label="Sujet"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Envoyer
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Informations de contact
                </Typography>
                <Typography variant="body1" paragraph>
                  123 Rue de la République, Yaoundé, Cameroun
                </Typography>
                <Typography variant="body1" paragraph>
                  Email: contact@cabrallibii.cm<br />
                  Téléphone: +237 123 456 789
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Suivez-nous
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton color="primary" aria-label="facebook">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="twitter">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="instagram">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="whatsapp">
                      <WhatsAppIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Contact;
