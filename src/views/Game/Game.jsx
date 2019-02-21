import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from '../../store/store'
import Battleship from '../../components/Battleship/Battleship'
import * as actionTypes from '../../store/actionTypes'

const Game = (props) => {

  const store = useContext(StateContext)
  const [flyingLeft, setFlyingLeft] = useState(false)
  const [flyingRight, setFlyingRight] = useState(false)

  // Tutaj dostaje zaktualizowany obkeit za kazdym razem.
  console.log(store.state.game.playerPosition)

  useEffect(() => {
    window.addEventListener('keydown', handleMove)
    window.addEventListener('keyup', handleStop)

    if (store.state.game.isStarted) {
      const arenaWidth = props.arena.current.clientWidth
      const arenaHeight = props.arena.current.clientHeight

      const playerPosition = {
        x: (arenaWidth / 2) - 32,
        y: arenaHeight - 120
      }
      
      const payload = {
        arenaHeight,
        arenaWidth,
        playerPosition
      }
      
      store.dispatch({type: actionTypes.INIT_GAME, payload})
    }
  }, [])
  
  const handleMove = (e) => {

    // W tym miejscu dostaje poczatkowy stan cały czas.
    console.log(store.state.game.playerPosition)

    if (e.keyCode === 39) {
      store.dispatch({type: actionTypes.MOVE_RIGHT})
      if (!flyingRight) {
        setFlyingRight(true)
        setFlyingLeft(false)
      }
    }

    if (e.keyCode === 37) {
      store.dispatch({type: actionTypes.MOVE_LEFT})
      if (!flyingLeft) {
        setFlyingRight(false)
        setFlyingLeft(true)
      }
    }
  }

  const handleStop = () => {
    setFlyingRight(false)
    setFlyingLeft(false)
  }

  return (
      <React.Fragment>
        <Battleship 
          color={ store.state.player.selectedShip }
          animationTime = {1200}
          flyingLeft = {flyingLeft}
          flyingRight = {flyingRight}
          x={store.state.game.playerPosition.x === 0 ? null : store.state.game.playerPosition.x}
          y={store.state.game.playerPosition.y === 0 ? null : store.state.game.playerPosition.y}
          selected
        />
      </React.Fragment>
  )
}

export default Game