import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipeById, updateRecipe } from '../services/api';
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Box, Container, Grid } from '@mui/material';

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    category: '',
    imageUrl: '', 
  });

  useEffect(() => {
    getRecipeById(id).then((response) => {
      setRecipe(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe.title && recipe.ingredients && recipe.instructions && recipe.category) {
      updateRecipe(id, recipe).then(() => {
        navigate('/');
      });
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
        Edit Recipe
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Recipe Title"
              name="title"
              value={recipe.title}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              helperText={recipe.title ? '' : 'Please fill out this field'}
            />
          </Grid>

          <Grid item xs={12}>
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
              helperText={recipe.ingredients ? '' : 'Please fill out this field'}
            />
          </Grid>

          <Grid item xs={12}>
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
              helperText={recipe.instructions ? '' : 'Please fill out this field'}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth margin="normal" variant="outlined" required>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={recipe.category}
                onChange={handleChange}
                label="Category"
              >
                <MenuItem value="Breakfast">Breakfast</MenuItem>
                <MenuItem value="Lunch">Lunch</MenuItem>
                <MenuItem value="Dinner">Dinner</MenuItem>
              </Select>
              {!recipe.category && <Typography color="error">Please fill out this field</Typography>}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Image URL"
              name="imageUrl"
              value={recipe.imageUrl}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>

          {/* Display Current Image Preview */}
          {recipe.imageUrl && (
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <Box
                sx={{
                  maxHeight: '300px',
                  width: '100%',
                  textAlign: 'center',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              >
                <img
                  src={recipe.imageUrl}
                  alt="Recipe Preview"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 3,
                padding: '12px',
                fontSize: '16px',
              }}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EditRecipe;
