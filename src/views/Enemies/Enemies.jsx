import React, { useContext, useEffect } from 'react'
import Asteroid from '../../components/Asteroid/Asteroid'
import random from '../../utility/random'
import * as actionTypes from '../../store/actionTypes'
import { StateContext } from '../../store/store'

const Enemies = () => {

  const store = useContext(StateContext)

  useEffect(() => {
    const interval = setInterval(() => {
      const style = random(1,4)
      const x = random(0, store.state.game.arenaHeight)
      let elementHeight = 0
      let elementWidth = 0

      switch(style) {
        case 1: 
          elementHeight = 37
          elementWidth = 39
          break
        case 2:
          elementHeight = 26
          elementWidth = 26
          break
        case 3:
          elementHeight = 36
          elementWidth = 37
          break
        case 4:
          elementHeight = 35
          elementWidth = 44
          break
        default: 
          elementHeight = 0 
          elementWidth = 0
      }

      const payload = {
        type: 'asteroid',
        style: style,
        x: x,
        y: -elementHeight,
        width: elementWidth,
        height: elementHeight
      }

      store.dispatch({type: actionTypes.ENEMY_ADD, payload})

    }, 2000)
    return () => clearInterval(interval)
  }, [store.state.game.arenaWidth])

  return (
    <React.Fragment>
      {store.state.enemies.map((enemy, index) => {
        return (
          <Asteroid 
            key={index}
            index={index} 
            x={enemy.x} 
            y={enemy.y} 
            elementHeight={enemy.height}
            type={enemy.style}
          />  
          )
        })
      }
    </React.Fragment>
  )
}

export default Enemies