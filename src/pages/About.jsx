import React from 'react';
import { Container, Typography, Box,Grid } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
        About Recipe Book
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
          Welcome to Recipe Book! This application allows you to browse, add, edit, and delete recipes. 
          Whether you are a beginner or an experienced cook, our app makes it easy to organize your favorite recipes.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={1} sm={6}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Easy to Use
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Add your favorite recipes with just a few clicks! Edit or delete them whenever needed, and even categorize them for better organization.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Stay Organized
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Whether you're cooking breakfast, lunch, or dinner, our app helps you keep all your recipes in one place for easy access.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
