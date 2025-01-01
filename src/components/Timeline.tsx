import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    date: '19 sept 2021',
    title: 'Political Journey Begins',
    description: 'Launched the campaign for democratic change and social justice.'
  },
  {
    date: '19 sept 2022',
    title: 'National Movement',
    description: 'Expanded the movement nationwide, reaching all regions of Cameroon.'
  },
  {
    date: '23 sept 2022',
    title: 'Youth Engagement',
    description: 'Initiated major youth programs and educational reforms.'
  },
  {
    date: '23 sept 2022',
    title: 'Economic Vision',
    description: 'Presented comprehensive economic development plan for Cameroon.'
  },
  {
    date: '23 sept 2022',
    title: 'International Recognition',
    description: 'Gained international support and recognition for democratic initiatives.'
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
  const theme = useTheme();
  const isTabletUp = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedEvent((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Grid container spacing={4}>
        {isTabletUp && (
          <Grid item sm={5} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box
                component="img"
                src="./timeline.jpg"
                alt="Timeline"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  position: 'sticky',
                  top: theme.spacing(4),
                }}
              />
            </motion.div>
          </Grid>
        )}

        <Grid item xs={12} sm={7} md={8}>
          {events.map((event, index) => (
            <Box
              key={index}
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
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    color: selectedEvent === index ? 'primary.main' : 'text.secondary',
                    mb: selectedEvent === index ? 1 : 0,
                    ml: 3,
                    cursor: 'pointer',
                    fontWeight: selectedEvent === index ? 600 : 400,
                  }}
                  onClick={() => setSelectedEvent(index)}
                >
                  {event.date}
                </Typography>
                
                <AnimatePresence mode="wait">
                  {selectedEvent === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <EventCard>
                        <Typography variant="h6" gutterBottom>
                          {event.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {event.description}
                        </Typography>
                      </EventCard>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Timeline;
