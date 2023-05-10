import React from 'react';
import './style.css';
import store, { COUNTER_INCREMENT, COUNTER_DECREMENT } from './store';

const increment = () => {
  store.dispatch({ type: COUNTER_INCREMENT });
  console.log(store.getState());
};
const decrement = () => {
  store.dispatch({ type: COUNTER_DECREMENT });
  console.log(store.getState());
};

const push = () => {
  store.dispatch({ type: 'push', value: Math.random() });
  console.log(store.getState());
};

const pop = () => {
  store.dispatch({ type: 'pop' });
  console.log(store.getState());
};

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={increment}>Increment </button>
      <button onClick={decrement}>Decrement </button>
      <button onClick={push}>Push </button>
      <button onClick={pop}>POP </button>
    </div>
  );
}
