import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  TextField,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Scrutateurs = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();

  const regions = [
    { key: 'adamawa', value: t('scrutateurs.regions.adamawa') },
    { key: 'center', value: t('scrutateurs.regions.center') },
    { key: 'east', value: t('scrutateurs.regions.east') },
    { key: 'far_north', value: t('scrutateurs.regions.far_north') },
    { key: 'littoral', value: t('scrutateurs.regions.littoral') },
    { key: 'north', value: t('scrutateurs.regions.north') },
    { key: 'northwest', value: t('scrutateurs.regions.northwest') },
    { key: 'west', value: t('scrutateurs.regions.west') },
    { key: 'south', value: t('scrutateurs.regions.south') },
    { key: 'southwest', value: t('scrutateurs.regions.southwest') },
  ];

  const steps = [
    t('scrutateurs.steps.personal'),
    t('scrutateurs.steps.location'),
    t('scrutateurs.steps.confirmation'),
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          {t('scrutateurs.title')}
        </Typography>
        <Typography variant="h6" paragraph align="center" color="text.secondary">
          {t('scrutateurs.subtitle')}
        </Typography>
        <Typography paragraph align="center" color="text.secondary">
          {t('scrutateurs.description')}
        </Typography>

        <Box sx={{ width: '100%', my: 4 }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Card>
          <CardContent>
            {activeStep === 0 && (
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={t('scrutateurs.form.personal.first_name')}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={t('scrutateurs.form.personal.last_name')}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t('scrutateurs.form.personal.email')}
                    variant="outlined"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t('scrutateurs.form.personal.phone')}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            )}

            {activeStep === 1 && (
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label={t('scrutateurs.form.location.region')}
                    variant="outlined"
                  >
                    {regions.map((region) => (
                      <MenuItem key={region.key} value={region.key}>
                        {region.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={t('scrutateurs.form.location.city')}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t('scrutateurs.form.location.polling_station')}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t('scrutateurs.form.location.availability')}
                    variant="outlined"
                    multiline
                    rows={2}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t('scrutateurs.form.location.experience')}
                    variant="outlined"
                    multiline
                    rows={3}
                  />
                </Grid>
              </Grid>
            )}

            {activeStep === 2 && (
              <Box>
                <Typography variant="h5" gutterBottom>
                  {t('scrutateurs.form.confirmation.title')}
                </Typography>
                <Typography paragraph>
                  {t('scrutateurs.form.confirmation.message')}
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Typography>
                    <label>
                      <input type="checkbox" style={{ marginRight: '8px' }} />
                      {t('scrutateurs.form.confirmation.terms')}
                    </label>
                  </Typography>
                </Box>
              </Box>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              {activeStep > 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  {t('scrutateurs.buttons.back')}
                </Button>
              )}
              <Button
                variant="contained"
                onClick={activeStep === steps.length - 1 ? undefined : handleNext}
              >
                {activeStep === steps.length - 1
                  ? t('scrutateurs.buttons.submit')
                  : t('scrutateurs.buttons.next')}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};

export default Scrutateurs;
