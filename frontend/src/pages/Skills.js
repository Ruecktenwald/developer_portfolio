import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import ReactIcon from '@mui/icons-material/Code'; // use `Code` instead of `React`

const skills = [
  { name: 'HTML', icon: <HtmlIcon style={{ fontSize: 40, color: '#e44d26' }} /> },
  { name: 'CSS', icon: <CssIcon style={{ fontSize: 40, color: '#1572b6' }} /> },
  { name: 'JavaScript', icon: <JavascriptIcon style={{ fontSize: 40, color: '#f0db4f' }} /> },
  { name: 'React', icon: <ReactIcon style={{ fontSize: 40, color: '#61dafb' }} /> }, // replaced React icon with Code
];

const Skills = () => {
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" sx={{ mb: 4, color: '#00d1b2' }}>Skills</Typography>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={6} md={3} key={index} sx={{ textAlign: 'center' }}>
            {skill.icon}
            <Typography variant="h6" sx={{ mt: 2 }}>{skill.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
