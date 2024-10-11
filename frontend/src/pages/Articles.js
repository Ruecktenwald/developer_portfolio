import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

// Mock data for blog articles
const articles = [
  {
    id: 1,
    title: 'What does it take to become a web developer?',
    description: 'An exploration of the skills required to become a successful web developer in today’s market.',
    date: 'October 10, 2024',
    image: '/path-to-image.jpg', // Replace with the path to your blog image
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    description: 'A look into the trends shaping the future of the web development industry.',
    date: 'October 8, 2024',
    image: '/path-to-image.jpg',
  },
  // Add more articles here
];

const Articles = () => {
  return (
    <Container>
      {/* Heading Section */}
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ color: '#f5f5f7' }}>
          Blogs
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#a5a5a5' }}>
          My thoughts on technology, development, and innovation.
        </Typography>
        <Button variant="contained" color="primary" sx={{ my: 2 }}>
          Subscribe to My Blogs
        </Button>
      </Box>

      {/* Blog Articles Section */}
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} md={6} key={article.id}>
            <Card sx={{ backgroundColor: '#2c2c2e', color: '#f5f5f7' }}>
              <CardMedia
                component="img"
                height="200"
                image={article.image}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" paragraph color="textSecondary">
                  {article.date}
                </Typography>
                <Typography variant="body2" paragraph>
                  {article.description}
                </Typography>
                <Button variant="outlined" color="primary">Read More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Articles;
