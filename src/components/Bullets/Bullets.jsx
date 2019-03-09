import React, { useEffect, useContext, useRef } from 'react'
import { StateContext } from '../../store/store'
import styles from './Bullets.module.css'
import anime from 'animejs'
import * as actionTypes from '../../store/actionTypes'

const Bullets = (props) => {

  const element = useRef()
  const store = useContext(StateContext)

  useEffect(() => {
    anime({
      targets: element.current,
      translateY: -store.state.game.arenaHeight,
      duration: 1500,
      easing: 'linear',
      change() {
        const enemie = store.state.enemies[0]
        const bullet = element.current.getBoundingClientRect()
        if (bullet.x < enemie.x + 30 + enemie.width &&
          bullet.x + bullet.width > enemie.x + 30 &&
          bullet.y < enemie.y + enemie.height &&
          bullet.height + bullet.y > enemie.y) {
            console.log('Trafiony!')
       }
      },
      complete(anim) {
        if (anim.completed) {
            const payload =  {
            index: props.index,
            bullet: {
              type: props.type,
              position: {
                x: 0,
                y: 0
              }
            }
          }
          store.dispatch({type: actionTypes.BULLET_MOVE, payload})
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