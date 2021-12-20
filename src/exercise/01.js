// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react';

// Ex 1

// const countReducer = (preValue, newValue) => {
//   return newValue;
// };

// function Counter({ initialCount = 0, step = 1 }) {
//   const [count, setCount] = React.useReducer(countReducer, initialCount);
//   const increment = () => {
//     setCount(count + step);
//   };

//   return <button onClick={increment}>{count}</button>;
// }

// function App() {
//   return <Counter />;
// }

// Ex 1 - extra 1

// const countReducer = (preValue, newValue) => {
//   return preValue + newValue;
// };

// function Counter({ initialCount = 0, step = 1 }) {
//   const [count, setCount] = React.useReducer(countReducer, initialCount);
//   const increment = () => {
//     setCount(step);
//   };

//   return <button onClick={increment}>{count}</button>;
// }

// function App() {
//   return <Counter />;
// }

// Ex 1 - extra 2

// const countReducer = (preValue, newValue) => {
//   return { count: newValue };
// };

// function Counter({ initialCount = 0, step = 1 }) {
//   const [state, setState] = React.useReducer(countReducer, {
//     count: initialCount,
//   });

//   // Desctructuring the state is also an option
//   // const { count } = state -> setState(count + step)
//   const increment = () => {
//     setState(state.count + step);
//   };

//   return <button onClick={increment}>{state.count}</button>;
// }

// function App() {
//   return <Counter />;
// }

// Ex 1 - extra 3

const countReducer = (preValue, newValue) => {
  if (typeof newValue === 'function') {
    return { ...preValue, ...newValue(preValue) };
  } else {
    return { ...preValue, ...newValue };
  }
};

function Counter({ initialCount = 0, step = 1 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  });

  const increment = () => setState(prev => ({ count: prev.count + step }));

  return <button onClick={increment}>{state.count}</button>;
}

function App() {
  return <Counter />;
}

export default App;
