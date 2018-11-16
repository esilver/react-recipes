import React from 'react'

/** 
 * displayes each ingrident rounded to two decimal points
 */
const Ingredients = ({ingredients}) => (
  <ul>
    {ingredients.map((ingredient, i) =>
      <li key={i}>{Math.round(ingredient.quantity * 100) / 100} {ingredient.measure} {ingredient.ingredient || ingredient.text }</li>
    )}
  </ul>
)

export default Ingredients
