import React, { useEffect, useContext, useRef } from 'react'
import { StateContext } from '../../store/store'
import styles from './Bullets.module.css'
import anime from 'animejs'
import collisionCheck from '../../utility/collisionCheck'
import * as actionTypes from '../../store/actionTypes'

const Bullets = (props) => {

  const element = useRef()
  const store = useContext(StateContext)

  useEffect(() => {
    anime({
      targets: element.current,
      translateY: -store.state.game.arenaHeight + (store.state.game.arenaHeight - props.y) - 28,
      duration: 1500,
      easing: 'linear',
      complete(anim) {
        if (anim.completed) {
          store.dispatch({type: actionTypes.BULLET_REMOVE, id: props.id})
        }
      }
    })
  }, [])

  useEffect(() => {
    const bullet = element.current.getBoundingClientRect()
    if (store.state.enemies.length > 0) {
      for (let enemy of store.state.enemies) {
        if (enemy.cords !== null) {
          const collision = collisionCheck(bullet, enemy.cords)
          if (collision) {
            store.dispatch({type: actionTypes.BULLET_REMOVE, id: props.id})
            store.dispatch({type: actionTypes.ENEMY_REMOVE, id: enemy.id})
            store.dispatch({type: actionTypes.PLAYER_ADD_POINTS, payload: enemy.value})
          }
        }
      }
    }
  }, [store.state.enemies])

  const style = {
    left: props.x + 'px',
    top: props.y + 'px'
  }

  let bullet = null

  if (props.y > 0) {
    bullet = <div ref={element} style={style} className={`${styles.body} ${styles[props.type]}`}></div>
  }

  return bullet
}

export default Bullets