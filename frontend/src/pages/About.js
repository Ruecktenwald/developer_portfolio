import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Hello! I’m Sinan, a passionate Full-Stack Developer with expertise in React, JavaScript, CSS, and more. I love building responsive and modern web applications.
            </Typography>
            <Typography variant="body1" paragraph>
              With a background in web development, I have worked on various projects ranging from personal websites to enterprise-level applications. My goal is to continue building high-quality software that solves real-world problems.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* You can add an image here */}
            <img src="/path-to-your-image.jpg" alt="Sinan Toknak" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
