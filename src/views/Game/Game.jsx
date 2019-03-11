import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from '../../store/store'
import Battleship from '../../components/Battleship/Battleship'
import Bullets from '../../components/Bullets/Bullets'
import Enemies from '../Enemies/Enemies'
import generateID from '../../utility/generateID'
import * as actionTypes from '../../store/actionTypes'

const Game = (props) => {
  
  const store = useContext(StateContext)
  const [starting, setStarting] = useState(true)
  const [flyingLeft, setFlyingLeft] = useState(false)
  const [flyingRight, setFlyingRight] = useState(false)

  useEffect(() => {
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
    setTimeout(() => setStarting(false), 1200)
  }, [])


  useEffect(() => {
    const handleMove = (e) => {
      if (e.keyCode === 39 && store.state.game.playerPosition.x + 84 < store.state.game.arenaWidth) {
        store.dispatch({type: actionTypes.MOVE_RIGHT})
        if (!flyingRight) {
          setFlyingRight(true)
          setFlyingLeft(false)
        }
      }

      else if (e.keyCode === 37 && store.state.game.playerPosition.x - 20 > 0) {
        store.dispatch({type: actionTypes.MOVE_LEFT})
        if (!flyingLeft) {
          setFlyingRight(false)
          setFlyingLeft(true)
        }
      }

      else {
        handleStop()
      }
    }

    const handleStop = (e) => {
      setFlyingRight(false)
      setFlyingLeft(false)
    }
    
    const handleShoot = () => {

      const payload = {
        id: generateID(),
        type: store.state.player.gun,
        position: {
          x: store.state.game.playerPosition.x + 28,
          y: store.state.game.playerPosition.y - 28
        }
      }
      store.dispatch({type: actionTypes.BULLET_CREATE, payload})
    }

    window.addEventListener('keydown', handleMove)
    window.addEventListener('keyup', handleStop)
    window.addEventListener('click', handleShoot)
    return () => {
      window.removeEventListener('keydown', handleMove)
      window.removeEventListener('keyup', handleStop)
      window.removeEventListener('click', handleShoot)
    }
  }, [flyingLeft, flyingRight, store])

  return (
      <React.Fragment>
        <Enemies />
        {store.state.game.playerBullets.map((bullet) => 
          <Bullets 
            key={bullet.id}
            id={bullet.id}
            type={bullet.type} 
            x={bullet.position.x} 
            y={bullet.position.y}
          />
        )}
        <Battleship 
          color={store.state.player.selectedShip}
          animationTime = {starting ? 900 : 0}
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