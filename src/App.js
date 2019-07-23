import React, { useEffect, useState } from 'react';
import Recipe from './recipe';
import './App.css';

function App() {
  const APP_ID = 'd21ebf8e';
  const APP_KEY = '52ededc29e6babac22e1f3b514e3e466';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  // Fetch data from API
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json(); // reformats the incoming data so that we can work with it
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
