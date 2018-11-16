import reducer from './reducers'

import config from '../config'
const defaultRecipe = config.defaultRecipe;

describe('recipes reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      ingredientsByRecipe: {},
      selectedRecipe: defaultRecipe,
    })
  })

  it('should handle INCREMENT_SERVINGS', () => {
    expect(
      reducer({
        ingredientsByRecipe: {
          items: [{
            ingredient: 'banana',
            quantity: 1,
          }, ],
          servings: 2
        }
      }, {
        type: 'INCREMENT_SERVINGS',
      })
    ).toEqual({
      ingredientsByRecipe: {
        items: [{
          ingredient: 'banana',
          quantity: 1.5,
        }, ],
        servings: 3
      },
      selectedRecipe: defaultRecipe
    }, )
  })


  it('should handle DECREMENT_SERVINGS', () => {
    expect(
      reducer({
        ingredientsByRecipe: {
          items: [{
            ingredient: 'banana',
            quantity: 1.5,
          }, ],
          servings: 3
        }
      }, {
        type: 'DECREMENT_SERVINGS',
      })
    ).toEqual({
      ingredientsByRecipe: {
        items: [{
          ingredient: 'banana',
          quantity: 1,
        }, ],
        servings: 2
      },
      selectedRecipe: defaultRecipe
    }, )
  })
})