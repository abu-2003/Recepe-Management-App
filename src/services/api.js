import axios from 'axios';

const API_URL = 'https://recepe-mng-server.onrender.com/recipes';

export const getRecipes = () => axios.get(API_URL);

export const getRecipeById = (id) => axios.get(`${API_URL}/${id}`);

export const addRecipe = (recipe) => axios.post(API_URL, recipe);

export const updateRecipe = (id, updatedRecipe) => axios.put(`${API_URL}/${id}`, updatedRecipe);

export const deleteRecipe = (id) => axios.delete(`${API_URL}/${id}`);
