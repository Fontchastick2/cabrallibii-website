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
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Donate = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          {t('donate.title')}
        </Typography>
        <Typography variant="h6" paragraph align="center" color="text.secondary">
          {t('donate.subtitle')}
        </Typography>

        {/* Progress Bar */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h6" gutterBottom>
            {t('donate.campaign_goal')}
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
              {t('donate.collected')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('donate.goal')}
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {/* Donation Form */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {t('donate.form.title')}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('donate.form.amount')}
                      variant="outlined"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('donate.form.name')}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('donate.form.email')}
                      variant="outlined"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('donate.form.phone')}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      {t('donate.form.submit')}
                    </Button>
                    <Typography
                      variant="caption"
                      display="block"
                      align="center"
                      sx={{ mt: 1 }}
                    >
                      {t('donate.form.secure_payment')}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Why Donate Section */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {t('donate.why_donate.title')}
                </Typography>
                <Typography paragraph>
                  {t('donate.why_donate.description')}
                </Typography>
                <List>
                  {(t('donate.why_donate.reasons', { returnObjects: true }) as string[]).map(
                    (reason: string, index: number) => (
                      <ListItem key={index}>
                        <ListItemText primary={reason} />
                      </ListItem>
                    )
                  )}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Donate;
