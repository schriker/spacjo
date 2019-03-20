import React, {useContext} from 'react'
import styles from './Gameover.module.css'
import * as actionTypes from '../../store/actionTypes'
import { StateContext } from '../../store/store'

const Gameover = (props) => {

  const store = useContext(StateContext)

  const mainMenu = () => {
    store.dispatch({type: actionTypes.RESET_GAME})
    store.dispatch({type: actionTypes.MAIN_MENU})
  }

  return (
    <div className={styles.wrapper}>
      <h1>Game Over!</h1>
      <p>You scored: {props.score} </p>
      <div className={styles.menu}>
        <button onClick={() => store.dispatch({type: actionTypes.RESET_GAME})}>New Game</button>
        <button className="red-btn" onClick={mainMenu}>Main Menu</button>
      </div>
    </div>
  )
}

export default Gameover