import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt='' />
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p className={style.calories}>{calories.toFixed(0)} calories</p>
    </div>
  );
};

export default Recipe;
