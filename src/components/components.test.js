import React from 'react';
import { shallow } from 'enzyme';
import Ingridients from './Ingredients';
import Title from './Title';
import Picker from './Picker';
import Servings from './Servings';


const ingredients = [
    {
        "search_query":null,
        "measure":"count",
        "text":"2 slightly overripe bananas",
        "ingredient":"bananas",
        "id":44812137,
        "quantity":2.0
    },
    {
        "search_query":null,
        "measure":"tablespoon",
        "text":"2 tablespoons sugar (you can substitute granulated Splenda, if you like)",
        "ingredient":"raw sugar",
        "id":44812138,
        "quantity":2.0
    },
    {
        "search_query":null,
        "measure":"teaspoon",
        "text":"1 teaspoon cinnamon",
        "ingredient":"cinnamon",
        "id":44812139,
        "quantity":1.0
    },
    {
        "search_query":null,
        "measure":"teaspoon",
        "text":"&frac14; teaspoon nutmeg",
        "ingredient":"nutmeg",
        "id":44812140,
        "quantity":0.25
    },
    {
        "search_query":null,
        "measure":"count",
        "text":"Olive oil spray",
        "ingredient":"olive oil",
        "id":44812141,
        "quantity":1.0
    }
  ]
it('renders Ingridients without crashing', () => {
  shallow(<Ingridients ingredients={ingredients} />)
});
it('renders Title without crashing', () => {
  shallow(<Title name={'Some recipe'} />)
});
it('renders Picker without crashing', () => {
  shallow(<Picker options={['https://www.mockurl.com', 'https://www.anothermockurl.com']} />)
});
it('renders Servings without crashing', () => {
  shallow(<Servings servings={2} />)
});

