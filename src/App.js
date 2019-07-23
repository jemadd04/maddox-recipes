import React, { useEffect, useState } from 'react';
import Recipe from './recipe';
import './App.css';

function App() {
  const APP_ID = 'd21ebf8e';
  const APP_KEY = '52ededc29e6babac22e1f3b514e3e466';

  // states
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(''); // only submits itself after we click search/submit button

  useEffect(() => {
    getRecipes();
  }, [query]);

  // Fetch data from API
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json(); // reformats the incoming data so that we can work with it
    setRecipes(data.hits);
  };

  // everytime we run an onChange, this event will happen
  const updateSearch = e => {
    setSearch(e.target.value); // this is the value of the input
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className='App'>
      <h1 className='main-header'>Maddox Recipes</h1>
      <p className='main-subheading'>
        Enter a food item in the search bar below...
      </p>
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
