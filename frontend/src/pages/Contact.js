import React from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ color: '#00d1b2', mb: 4 }}>Contact Me</Typography>
        <Box component="form">
          <TextField fullWidth label="Your Name" variant="outlined" sx={{ mb: 2 }} />
          <TextField fullWidth label="Your Email" variant="outlined" sx={{ mb: 2 }} />
          <TextField fullWidth label="Your Message" variant="outlined" multiline rows={4} sx={{ mb: 2 }} />
          <Button variant="contained" color="primary">Send Message</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
