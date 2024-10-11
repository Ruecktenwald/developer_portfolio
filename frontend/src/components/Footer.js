import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 2, textAlign: 'center', borderTop: '1px solid #eaeaea' }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 Sinan Toknak | <Link href="/terms">Terms & Conditions</Link> | <Link href="/privacy">Privacy Policy</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
