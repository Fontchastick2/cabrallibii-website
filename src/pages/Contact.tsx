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
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          {t('contact.title')}
        </Typography>
        <Typography variant="h6" paragraph align="center" color="text.secondary">
          {t('contact.subtitle')}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {t('contact.form.title')}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label={t('contact.form.first_name')}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label={t('contact.form.last_name')}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('contact.form.email')}
                      variant="outlined"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('contact.form.phone')}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('contact.form.message')}
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      {t('contact.form.submit')}
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {t('contact.info.title')}
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" paragraph>
                    {t('contact.info.address')}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {t('contact.info.phone')}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {t('contact.info.email')}
                  </Typography>
                </Box>
                <Typography variant="h6" gutterBottom>
                  {t('contact.info.follow_us')}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton color="primary" component="a" href="#">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton color="primary" component="a" href="#">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton color="primary" component="a" href="#">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton color="primary" component="a" href="#">
                    <WhatsAppIcon />
                  </IconButton>
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
