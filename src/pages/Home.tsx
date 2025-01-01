import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import Timeline from '../components/Timeline';
import { motion } from 'framer-motion';
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';

interface RenderProps {
  state: any;
  fullpageApi: fullpageApi;
}

const Home: React.FC = () => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      navigation={true}
      credits={{ enabled: false }}
      render={(renderProps: RenderProps) => {
        return (
          <div id="fullpage">
            {/* Hero Section */}
            <div className="section">
              <Box
                sx={{
                  height: '100vh',
                  display: 'flex',
                  alignItems: 'center',
                  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("./cabral-libii.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: 'white',
                }}
              >
                <Container>
                  <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Cabral Libii's Official Website
                  </Typography>
                  <Typography variant="h5">
                    Together for a Better Cameroon
                  </Typography>
                </Container>
              </Box>
            </div>

            {/* Vision Section */}
            <div className="section">
              <Container sx={{ py: 8 }}>
                <Typography variant="h3" align="center" gutterBottom>
                  Our Vision
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={4}>
                    <Card sx={{ height: '100%' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://via.placeholder.com/300x140"
                        alt="Democracy"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Democracy
                        </Typography>
                        <Typography>
                          Strengthening democratic institutions and ensuring fair representation.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Card sx={{ height: '100%' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://via.placeholder.com/300x140"
                        alt="Education"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Education
                        </Typography>
                        <Typography>
                          Investing in quality education and youth empowerment.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Card sx={{ height: '100%' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://via.placeholder.com/300x140"
                        alt="Economy"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Economy
                        </Typography>
                        <Typography>
                          Building a strong and inclusive economy for all Cameroonians.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </div>

            {/* Biography Timeline Section */}
            <div className="section">
              <Box sx={{ 
                background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <Container>
                  <Typography variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
                    Biographie
                  </Typography>
                  <Timeline />
                </Container>
              </Box>
            </div>

            {/* Video Section */}
            <div className="section">
              <Box sx={{ 
                background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: 'white',
              }}>
                <Container>
                  <Typography variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
                    Latest Video
                  </Typography>
                  <Box sx={{ 
                    position: 'relative',
                    paddingTop: '56.25%', // 16:9 Aspect Ratio
                    width: '100%',
                    maxWidth: '800px',
                    margin: '0 auto',
                  }}>
                    <Box
                      component="iframe"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: 2,
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      }}
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                      title="Cabral Libii Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </Box>
                </Container>
              </Box>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Home;
