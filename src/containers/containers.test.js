import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme';
import App from './App'



it('renders App without crashing', () => {
  shallow(
    <Provider>  
      <App />
    </Provider>
  )
});
