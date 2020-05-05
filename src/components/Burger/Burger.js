import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {

  // Turns the state object of key/value pairs into an array of ingredients
  // key = ingredient, value = # of ingredient
  // If there is an ingredient, it will be copied to an array containing the ingr and value
  // This array will be stored into another array 'transformedIngredients'
  // If there is no ingredient, the empty array will not be stored into 'transformedIngredients'
  let transformedIngredients = Object.keys(props.ingredients)
      .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        })
      })
      //gets rid of any empty arrays (none of a certain ingredient)
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }



  return(
      <div className={classes.Burger}>
        <BurgerIngredient type='bread-top' />
        {transformedIngredients}
        <BurgerIngredient type='bread-bottom' />
      </div>
  );
}

export default burger;