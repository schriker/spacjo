import React, { useReducer } from 'react';
import styles from './App.module.css';
import { initialState, reducer, StateContext } from './store/store';
import Stats from './components/Stats/Stats';
import Layout from './components/Layout/Layout';

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.wrapper}>
      <StateContext.Provider value={{state, dispatch}}>
        <Stats />
        <Layout />
      </StateContext.Provider>
    </div>
  );
};

export default App;