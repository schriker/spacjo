import React, { useContext } from 'react';
import styles from './Stats.module.css';
import heart from '../../assests/heart_icon.png';
import { StateContext } from '../../store/store';

const Stats = () => {

  const store = useContext(StateContext)

  return (
    <div className={styles.wrapper}>
      <ul className={styles.lives}>
        {[...Array(store.state.player.lives)].map((el, index) => <li key={index}><img src={heart} alt="Heart"/></li>)}
      </ul>
      <div>SCORE: {store.state.player.score}</div>
    </div>
  );
};

export default Stats;