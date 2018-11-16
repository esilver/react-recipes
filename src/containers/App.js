import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectRecipe, fetchIngredientsIfNeeded, incrementServings, decrementServings } from '../actions/actions'
import Picker from '../components/Picker'
import Servings from '../components/Servings'
import Title from '../components/Title'
import Ingredients from '../components/Ingredients'
import config from '../config'

const recipes = config.recipes;

class App extends Component {


/**
 * a lifecycle method to fetch ingridiens on first run
 */
  componentDidMount() {
    const { dispatch, selectedRecipe } = this.props
    dispatch(fetchIngredientsIfNeeded(selectedRecipe))
  }

/**
 * a lifecycle method to fetch ingridiens if there is a new 
 * recepie selection. 
 * 
 * @param {object} nextProps The new state as props
 */
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedRecipe !== this.props.selectedRecipe) {
      const { dispatch, selectedRecipe } = nextProps
      dispatch(fetchIngredientsIfNeeded(selectedRecipe))
    }
  }

/** 
 * handles selection of a new recipe in the dropdown by 
 * dispatching a selectRecipe action
 * 
 * @param {string} nextRecipe The newly selected recipe
 */
  handleChange = nextRecipe => {
    this.props.dispatch(selectRecipe(nextRecipe))
  }

/** 
 * handles click on the increment button by 
 * dispatching an incrementServings action
 */
  handleIncrement = () => {
    const { dispatch } = this.props
    dispatch(incrementServings)
  }

/** 
 * handles click on the decrement button by 
 * dispatching an decrementServings action
 */
  handleDecrement = () => {
    const { dispatch } = this.props
    dispatch(decrementServings)
  }

  render() {
    const { selectedRecipe, ingredients, name, servings, isFetching } = this.props
    const isEmpty = ingredients.length === 0
    return (
      <div>
        <Title name={name} />   

        <Servings onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  servings={servings} />
        <Picker value={selectedRecipe}
                onChange={this.handleChange}
                options={recipes} />
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div>
              <Ingredients ingredients={ingredients} />
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedRecipe, ingredientsByRecipe } = state
  const {
    isFetching,
    name,
    servings,
    items: ingredients
  } = ingredientsByRecipe['items'] ? ingredientsByRecipe :  {
    isFetching: true,
    items: []
  }

  return {
    selectedRecipe,
    ingredients,
    isFetching,
    name,
    servings,
  }
}

export default connect(mapStateToProps)(App)
