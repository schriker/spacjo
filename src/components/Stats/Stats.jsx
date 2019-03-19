import React, { useContext, useEffect } from 'react'
import styles from './Stats.module.css'
import heart from '../../assests/heart_icon.png'
import { StateContext } from '../../store/store'
import * as actionTypes from '../../store/actionTypes'

const Stats = () => {

  const store = useContext(StateContext)

  useEffect(() => {
    if (store.state.player.lives === 0) {
      store.dispatch({type: actionTypes.GAME_OVER})
    }
  }, [store.state.player.lives])

  return (
    <div className={styles.wrapper}>
      <ul className={styles.lives}>
        {[...Array(store.state.player.lives)].map((el, index) => <li key={index}><img src={heart} alt="Heart"/></li>)}
      </ul>
      <div>SCORE: {store.state.player.score}</div>
    </div>
  )
}

export default Stats