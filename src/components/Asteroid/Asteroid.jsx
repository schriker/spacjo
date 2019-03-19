import React, { useRef, useEffect, useContext } from 'react'
import anime from 'animejs'
import styles from './Asteroid.module.css'
import { StateContext } from '../../store/store'
import * as actionTypes from '../../store/actionTypes'
import collisionCheck from '../../utility/collisionCheck'

const Asteroid = (props) => {

  const element = useRef()
  const store = useContext(StateContext)

  useEffect(() => {
    if (store.state.game.arenaHeight > 0) {
      anime({
        targets: element.current,
        translateY: store.state.game.arenaHeight + props.height,
        rotate: 360,
        duration: 5000,
        easing: 'linear',
        change() {
          if (element.current !== null) {
            const rect = element.current.getBoundingClientRect()
            const payload = {
              cords: rect,
              id: props.id
            }
            store.dispatch({type: actionTypes.ENEMY_CORDS, payload})
          }
        },
        complete(anim) {
          if(anim.completed) {
            store.dispatch({type: actionTypes.ENEMY_REMOVE, id: props.id})
          }
        }
      })
      if (store.state.game.gameOver) {
        anime.remove(element.current)
      }
    }
  }, [store.state.game.arenaHeight, store.state.game.gameOver])

  useEffect(() => {
    const rect = element.current.getBoundingClientRect()
    if (rect.y + rect.height >= store.state.game.arenaHeight - 120) {
      const collision = collisionCheck(rect, store.state.game.playerPosition)
      if (collision) {
        store.dispatch({type: actionTypes.ENEMY_REMOVE, id: props.id})
        store.dispatch({type: actionTypes.PLAYER_REMOVE_HP})
      }
    }
  }, [store.state.enemies])

  const position = {
    left: props.x + 'px',
    top: props.y + 'px'
  }

  let type = 'type1'

  switch(props.style) {
    case 1: 
      type = 'type1'
      break
    case 2:
      type = 'type2'
      break
    case 3:
      type = 'type3'
      break
    case 4:
      type = 'type4'
      break
    default: type = 'type1'
  }

  return (
    <div
      ref={element} 
      style={position}
      className={`${styles.body} ${styles[type]}`}>  
    </div>
  )
}

export default Asteroid