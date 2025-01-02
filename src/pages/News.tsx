import React from 'react';
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
import { useTranslation, Trans } from 'react-i18next';
import PageContainer from '../components/PageContainer';

const News: React.FC = () => {
  const { t } = useTranslation();

  const newsItems = [
    {
      titleKey: 'news.articles.campaign_launch.title',
      dateKey: 'news.articles.campaign_launch.date',
      image: 'https://via.placeholder.com/800x400',
      categoryKey: 'news.categories.event',
      contentKey: 'news.articles.campaign_launch.content',
    },
    {
      titleKey: 'news.articles.youth_meeting.title',
      dateKey: 'news.articles.youth_meeting.date',
      image: 'https://via.placeholder.com/800x400',
      categoryKey: 'news.categories.meeting',
      contentKey: 'news.articles.youth_meeting.content',
    },
    {
      titleKey: 'news.articles.economic_program.title',
      dateKey: 'news.articles.economic_program.date',
      image: 'https://via.placeholder.com/800x400',
      categoryKey: 'news.categories.program',
      contentKey: 'news.articles.economic_program.content',
    },
  ];

  return (
    <PageContainer>
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            {t('news.title')}
          </Typography>
          <Typography variant="h6" paragraph align="center" color="text.secondary">
            {t('news.subtitle')}
          </Typography>

          <Grid container spacing={4}>
            {newsItems.map((item, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card sx={{ height: { xs: '500px', md: '250px' }, display: 'flex' }}>
                    <Grid container>
                      <Grid item xs={12} md={4} sx={{ height: { xs: '250px', md: '250px' } }}>
                        <CardMedia
                          component="img"
                          height="250"
                          image={item.image}
                          alt={t(item.titleKey)}
                          sx={{
                            objectFit: 'cover',
                            height: '100%',
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <CardContent
                          sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            p: 3,
                          }}
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                            <Chip
                              label={t(item.categoryKey)}
                              color="primary"
                              size="small"
                              sx={{
                                fontWeight: 'medium',
                                '& .MuiChip-label': {
                                  px: 2,
                                },
                              }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {t(item.dateKey)}
                            </Typography>
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              mb: 1.5,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                            }}
                          >
                            {t(item.titleKey)}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              lineHeight: 1.5,
                              mb: 2,
                            }}
                          >
                            {t(item.contentKey)}
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
    </PageContainer>
  );
};

export default News;
