import React from 'react'

const Servings = ({ servings, onIncrement, onDecrement }) => (
    <span>
      <h2>Servings: {servings}</h2>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}
        disabled={servings <= 1}>
      -</button>
      <br/>
      <br/>
    </span>
  )

export default Servings
