import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { Trans } from 'react-i18next';

interface TimelineEvent {
  date: string;
  dateKey: string;
  titleKey: string;
  descriptionKey: string;
}

const events: TimelineEvent[] = [
  {
    date: 'March 29, 1980',
    dateKey: 'biography.events.birth.date',
    titleKey: 'biography.events.birth.title',
    descriptionKey: 'biography.events.birth.description'
  },
  {
    date: '1998–2003',
    dateKey: '1998–2003',
    titleKey: 'biography.events.university.title',
    descriptionKey: 'biography.events.university.description'
  },
  {
    date: '2005–2010',
    dateKey: '2005–2010',
    titleKey: 'biography.events.journalist.title',
    descriptionKey: 'biography.events.journalist.description'
  },
  {
    date: '2010–2015',
    dateKey: '2010–2015',
    titleKey: 'biography.events.youth.title',
    descriptionKey: 'biography.events.youth.description'
  },
  {
    date: '2017–2018',
    dateKey: '2017–2018',
    titleKey: 'biography.events.candidate.title',
    descriptionKey: 'biography.events.candidate.description'
  },
  {
    date: 'October 7, 2018',
    dateKey: 'biography.events.election.date',
    titleKey: 'biography.events.election.title',
    descriptionKey: 'biography.events.election.description'
  },
  {
    date: '2019–Present',
    dateKey: '2019–Present',
    titleKey: 'biography.events.present.title',
    descriptionKey: 'biography.events.present.description'
  }
];

const TimelineDot = styled(motion.div)(({ theme }) => ({
  width: 20,
  height: 20,
  borderRadius: '50%',
  background: 'linear-gradient(45deg, #4a90e2 30%, #805ad5 90%)',
  position: 'relative',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 30,
    height: 30,
    borderRadius: '50%',
    border: '2px solid #4a90e2',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  }
}));

const TimelineLine = styled(Box)({
  width: 2,
  background: 'linear-gradient(180deg, #4a90e2 0%, #805ad5 100%)',
  margin: '0',
  transition: 'height 0.3s ease',
});

const EventCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginLeft: theme.spacing(3),
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
  }
}));

const Timeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isTabletUp = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered) {
      interval = setInterval(() => {
        setSelectedEvent((prev) => (prev + 1) % events.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Box>
      <Grid container spacing={18}>
        {isTabletUp && (
          <Grid item sm={5} md={4} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box
                component="img"
                src="/timeline.jpg"
                alt="Timeline"
                sx={{
                  width: '150%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  position: 'sticky',
                  top: theme.spacing(4),
                  transform: 'translateX(-15%)',
                }}
              />
            </motion.div>
          </Grid>
        )}

        <Grid item xs={12} sm={7} md={8}>
          <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    mb: index === selectedEvent ? 2 : 0.5,
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TimelineDot
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{ 
                        scale: selectedEvent === index ? 1.2 : 1,
                        backgroundColor: selectedEvent === index ? '#805ad5' : '#4a90e2'
                      }}
                      onClick={() => setSelectedEvent(index)}
                    />
                    {index < events.length - 1 && (
                      <TimelineLine sx={{ height: selectedEvent === index ? 'auto' : 20 }} />
                    )}
                  </Box>
                  
                  <Box sx={{ flex: 1 }}>
                    <Box
                      sx={{ 
                        display: 'flex',
                        alignItems: 'baseline',
                        ml: 3,
                        mb: 1,
                        cursor: 'pointer',
                      }}
                      onClick={() => setSelectedEvent(index)}
                    >
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          color: selectedEvent === index ? 'primary.main' : 'text.secondary',
                          fontWeight: selectedEvent === index ? 600 : 400,
                          mr: 2,
                        }}
                      >
                        <Trans key={event.dateKey}>
                          {event.dateKey}
                        </Trans>
                      </Typography>
                      <Typography 
                        variant="h6"
                        sx={{ 
                          color: selectedEvent === index ? 'text.primary' : 'text.secondary',
                          fontWeight: selectedEvent === index ? 600 : 400,
                        }}
                      >
                        <Trans key={event.titleKey}>
                          {event.titleKey}
                        </Trans>
                      </Typography>
                    </Box>
                    
                    <AnimatePresence mode="wait">
                      {selectedEvent === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <EventCard>
                            <Typography variant="body2" color="text.secondary">
                              <Trans key={event.descriptionKey}>
                                {event.descriptionKey}
                              </Trans>
                            </Typography>
                          </EventCard>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Timeline;
