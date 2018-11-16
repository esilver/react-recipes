import React from 'react'

/** 
 * on selection of new recipe calls the onChange method
 * that was passed as a prop from the App container
 */
const Picker = ({ value, onChange, options }) => (
  <span>
    <select onChange={e => onChange(e.target.value)}
            value={value}>
      {options.map(option =>
        <option value={option} key={option}>
          {option}
        </option>)  
      }
    </select>
  </span>
)

export default Picker
