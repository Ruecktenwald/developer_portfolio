import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

// Mock data for the latest blog
const latestBlog = {
  title: 'What does it take to become a web developer?',
  description: 'An exploration of the skills required to become a successful web developer in today’s market. Discover the essential tools and strategies to stay competitive in this fast-growing field.',
  date: 'October 10, 2024',
  image: '/path-to-image.jpg', // Replace with actual image path
};

const Blog = () => {
  return (
    <Container>
      {/* Heading Section */}
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ color: '#f5f5f7' }}>
          Latest Blog
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#a5a5a5' }}>
          Stay updated with the latest insights and developments in web development.
        </Typography>
      </Box>

      {/* Latest Blog Section */}
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card sx={{ backgroundColor: '#2c2c2e', color: '#f5f5f7' }}>
            <CardMedia
              component="img"
              height="400"
              image={latestBlog.image}
              alt={latestBlog.title}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {latestBlog.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {latestBlog.date}
              </Typography>
              <Typography variant="body1" paragraph>
                {latestBlog.description}
              </Typography>
              <Button variant="outlined" color="primary">Read More</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
