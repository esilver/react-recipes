import * as actions from './actions'

it('should create an action to select a recipe', () => {
  const recipe = 'https://dizzybusyandhungry.com/pan-fried-cinnamon-bananas'
  const expectedAction = {
    type: actions.SELECT_RECIPE,
    recipe
  }
  expect(actions.selectRecipe(recipe)).toEqual(expectedAction)
})

it('should create an action to request ingredients', () => {
  const recipe = 'https://dizzybusyandhungry.com/pan-fried-cinnamon-bananas'
  const expectedAction = {
    type: actions.REQUEST_INGREDIENTS,
    recipe
  }
  expect(actions.requestIngredients(recipe)).toEqual(expectedAction)
})