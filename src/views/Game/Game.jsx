import React, { useContext, useEffect } from 'react'
import { StateContext } from '../../store/store'
import Battleship from '../../components/Battleship/Battleship'
import * as actionTypes from '../../store/actionTypes'

const Game = (props) => {

  const store = useContext(StateContext)

  useEffect(() => {
    if (store.state.game.isStarted) {
      const arenaWidth = props.arena.current.clientWidth
      const arenaHeight = props.arena.current.clientHeight

      const playerPosition = {
        x: (arenaWidth / 2) - 32,
        y: arenaHeight - 150
      }

      const payload = {
        arenaHeight,
        arenaWidth,
        playerPosition
      }
   
      store.dispatch({type: actionTypes.INIT_GAME, payload})
    }
  }, [])

  return (
      <React.Fragment>
        <Battleship 
          color={ store.state.player.selectedShip }
          animationTime = {1000}
          x={store.state.game.playerPosition.x === 0 ? null : store.state.game.playerPosition.x}
          y={store.state.game.playerPosition.y === 0 ? null : store.state.game.playerPosition.y}
          selected
        />
      </React.Fragment>
  )
}

export default Game