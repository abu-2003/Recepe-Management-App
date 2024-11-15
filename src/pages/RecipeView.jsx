import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Box, CardMedia } from '@mui/material';
import { getRecipeById } from '../services/api';

const RecipeView = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipeById(id).then((response) => setRecipe(response.data));
  }, [id]);

  if (!recipe) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      {/* Display Recipe Image */}
      {recipe.imageUrl && (
        <CardMedia
          component="img"
          height="300"
          image={recipe.imageUrl}  // URL for the recipe image
          alt={recipe.title}
          sx={{ mb: 4, objectFit: 'cover', borderRadius: 2 }}
        />
      )}
      <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
        {recipe.title}
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Category:</Typography>
        <Typography>{recipe.category}</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          <strong>Ingredients:</strong> {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : recipe.ingredients}
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Instructions:</Typography>
        <Typography>{recipe.instructions}</Typography>
      </Box>
    </Container>
  );
};

export default RecipeView;
