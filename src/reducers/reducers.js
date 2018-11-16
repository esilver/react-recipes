import { combineReducers } from 'redux'
import {
  SELECT_RECIPE, REQUEST_INGREDIENTS, 
  RECEIVE_INGREDIENTS, INCREMENT_SERVINGS,
  DECREMENT_SERVINGS
} from '../actions/actions'

import config from '../config'

const defaultRecipe = config.defaultRecipe;

/**
 * gets a previous recipe state and an action and returns the selected recipe 
 * to be updated to the state with combineReducers()
 * 
 * @param {object} state The next recipe to be selected 
 * @param {object} action The selection action
 * 
 * @returns {string} new state with the updated recipe URL
 */
const selectedRecipe = (state = defaultRecipe, action) => {
  switch (action.type) {
    case SELECT_RECIPE:
      return action.recipe
    default:
      return state
  }
}

/**
 * gets the previous ingredients state and an action and returns an updeated ingridients 
 * to be updated to the state with combineReducers()
 * @param {object} state The current ingredients state
 * @param {object} action The action
 * 
 * @returns {object} new ingridents state 
 */
const ingredients = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case INCREMENT_SERVINGS:
      return{       
        ...state,
        servings: state.servings+1,
        items: state.items.map(item  => ({...item, quantity: item.quantity+(item.quantity/state.servings)})),
      }
    case DECREMENT_SERVINGS:
      return{
        ...state,
        servings: state.servings-1,
        items: state.items.map(item  => ({...item, quantity: item.quantity-(item.quantity/state.servings)})),
      }
    case REQUEST_INGREDIENTS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_INGREDIENTS:
      return {
        ...state,
        isFetching: false,
        items: action.ingredients,
        servings: action.servings,
        name: action.name,
      }
    default:
      return state
  }
}

/**
 * 
 * A wrapper for the ingredients function
 *  
 */
const ingredientsByRecipe = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_INGREDIENTS:
    case REQUEST_INGREDIENTS:
    case INCREMENT_SERVINGS:
    case DECREMENT_SERVINGS:
      return ingredients(state, action)
      
    default:
      return state
  }
}

const rootReducer = combineReducers({
  ingredientsByRecipe,
  selectedRecipe
})

export default rootReducer
