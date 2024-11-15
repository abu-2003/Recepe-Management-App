import './App.css'; 
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import About from './pages/About';
import EditRecipe from './pages/EditRecipe';
import RecipeView from './pages/RecipeView';

const theme = createTheme({
  
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Sour Gummy", sans-serif',
  h4: {     
      fontWeight: 600,
    },
    body2: {
      fontSize: '1rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<EditRecipe />} /> 
          <Route path="/recipe/:id" element={<RecipeView />} /> 
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
