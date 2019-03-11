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
      change() {
        if (store.state.enemies.length > 0) {
          const enemy = store.state.enemies[0]
          const bullet = element.current.getBoundingClientRect()
          const collision = collisionCheck(bullet, enemy)
          if (collision) {
            console.log('trafion!')
          }
        }
      },
      complete(anim) {
        if (anim.completed) {
          store.dispatch({type: actionTypes.BULLET_REMOVE, id: props.id})
        }
      }
    })
  }, [])

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