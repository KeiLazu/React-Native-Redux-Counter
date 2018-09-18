import React from 'react';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import CounterApp from './src/CounterApp'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store} >
        <CounterApp />
      </Provider>
    );
  }
}

const initialState = {
  counter: 0
}

increaseCounter = () => {
  this.setState({ counter: this.state.counter + 1 })
}

decreaseCounter = () => {
  this.setState({ counter: this.state.counter - 1 })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 }
      break;

    case 'DECREASE_COUNTER':
      return { counter: state.counter - 1 }
      break;

    default:
      break;
  }
  return state
}

const store = createStore(reducer)
