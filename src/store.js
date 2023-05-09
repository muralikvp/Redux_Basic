import * as redux from 'redux';
//Action
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';
const intialstate = {
  count: 0,
};
const increment = () => {
  store.dispatch({ type: COUNTER_INCREMENT });
  console.log(store.getstate().count);
};
const decrement = () => {
  store.dispatch({ type: COUNTER_DECREMENT });
  console.log(store.getstate().count);
};
const reducer = (state = intialstate, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case COUNTER_DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};
const store = redux.createStore(reducer);
export default store;
