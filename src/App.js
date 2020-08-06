import React from 'react';
import './App.css';
import Counter from './counter';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

const logger = store => next => action =>{
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const store = createStore(reducer,applyMiddleware(logger));
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "DECREMENT"});



const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
         <Counter/> 
        </div>
      </Provider>
    </div>
  );
}

export default App;
