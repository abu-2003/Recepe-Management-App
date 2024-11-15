import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecipes, deleteRecipe } from '../services/api';
import { Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    getRecipes().then((response) => setRecipes(response.data));
  };

  const handleDelete = (id) => {
    deleteRecipe(id).then(() => fetchRecipes()); 
  };

  return (
    <div>
      <Typography variant="h4" component="h1" sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        Recipe Collection
      </Typography>
      <Grid container spacing={3} sx={{ padding: 2 }}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <Card  sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
              {/* Recipe Image */}
              {recipe.imageUrl && (
                <CardMedia  onClick={() => navigate(`/recipe/${recipe.id}`)}
                  component="img"
                  height="200"
                  image={recipe.imageUrl}  
                  alt={recipe.title}
                  sx={{ objectFit: 'cover', borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
                />
              )}
              <CardContent  onClick={() => navigate(`/recipe/${recipe.id}`)} sx={{ padding: 2 }}>
                {/* Recipe Title */}
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '1.2rem' }}>
                  {recipe.title}
                </Typography>

                {/* Category */}
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontWeight: 'bold' }}>
                  Category: {recipe.category}
                </Typography>

                {/* Ingredients */}
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <strong>Ingredients:</strong> {recipe.ingredients.length > 100 ? recipe.ingredients.substring(0, 100) + '...' : recipe.ingredients}
                </Typography>

                {/* Instructions */}
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <strong>Instructions:</strong> {recipe.instructions.length > 100 ? recipe.instructions.substring(0, 100) + '...' : recipe.instructions}
                </Typography>
              </CardContent>
              <CardActions sx={{ padding: 2, justifyContent: 'space-between' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(`/edit/${recipe.id}`)}
                  sx={{ width: '48%' }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(recipe.id)}
                  sx={{ width: '48%' }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
