import React, { useState } from 'react';
import { addRecipe } from '../services/api';
import {
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Container,
  CircularProgress,
} from '@mui/material';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    category: '',
    favorite: false,
    imageUrl: '', 
  });

  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRecipe({
      ...recipe,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true while the request is being processed
    addRecipe(recipe)
      .then(() => {
        setRecipe({
          title: '',
          ingredients: '',
          instructions: '',
          category: '',
          favorite: false,
          imageUrl: '',
        });
      })
      .catch((error) => {
        console.error("Error adding recipe:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false once the request is complete
      });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box
        sx={{
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
          Add New Recipe
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Recipe Title"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            fullWidth
            multiline
            rows={6}
            margin="normal"
            variant="outlined"
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={recipe.category}
              onChange={handleChange}
              required
              variant="outlined"
            >
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Dinner">Dinner</MenuItem>
            </Select>
          </FormControl>
         
          {/* Image URL Input */}
          <TextField
            label="Image URL"
            name="imageUrl"
            value={recipe.imageUrl}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          
          {/* Display Image Preview */}
          {recipe.imageUrl && (
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <img
                src={recipe.imageUrl}
                alt="Recipe"
                style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
              />
            </Box>
          )}
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1.5 }}
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: 'white' }} />
            ) : (
              'Add Recipe'
            )}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddRecipe;
