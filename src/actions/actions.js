import config from '../config'

export const REQUEST_INGREDIENTS = 'REQUEST_INGREDIENTS'
export const RECEIVE_INGREDIENTS = 'RECEIVE_INGREDIENTS'
export const SELECT_RECIPE = 'SELECT_RECIPE'
export const INCREMENT_SERVINGS = 'INCREMENT_SERVINGS'
export const DECREMENT_SERVINGS = 'DECREMENT_SERVINGS'

const baseUrl = config.baseUrl;

export const incrementServings = { 
  type: INCREMENT_SERVINGS,
 }
export const decrementServings  = { 
  type: DECREMENT_SERVINGS,
 }

export const selectRecipe = recipe => ({
  type: SELECT_RECIPE,
  recipe
})

export const requestIngredients = recipe => ({
  type: REQUEST_INGREDIENTS,
  recipe
})


/**
 * Format ingridients response when reciving new ingridiens
 * 
 * @param {string} recipe The current recipe URL
 * @param {object} json The response as a json 
 * 
 * @returns {object} newly fetched ingridents formatted 
 */

export const receiveIngredients = (recipe, json) => ({
  type: RECEIVE_INGREDIENTS,
  recipe,
  ingredients: json.settings.recipe.ingredient_lines,
  name: json.settings.recipe.name,
  servings: json.settings.recipe.servings,
})

/**
 * Fetches ingridients
 * 
 * @param {string} recipe The recipe URL
 * @param {funtion} dispatch a disptach method to be called on request 
 * and recive to invoke the right actions
 * 
 * @returns {object} newly fetched ingridents formatted 
 */
const fetchIngredients = recipe => dispatch => {
  dispatch(requestIngredients(recipe))
  return fetch(`${baseUrl}${recipe}`)
    .then(response => response.json())
    .then(json => dispatch(receiveIngredients(recipe, json)))
}

const shouldFetchIngredients = (state) => {
  const ingredients = state.ingredientsByRecipe;
  if (ingredients.isFetching) {
    return false
  } else {
    return true;
  }
}

export const fetchIngredientsIfNeeded = recipe => (dispatch, getState) => {
  if (shouldFetchIngredients(getState(), recipe)) {
    return dispatch(fetchIngredients(recipe))
  }
}
