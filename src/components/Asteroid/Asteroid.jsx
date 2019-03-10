import React, { useRef, useEffect, useContext } from 'react'
import anime from 'animejs'
import styles from './Asteroid.module.css'
import { StateContext } from '../../store/store'

const Asteroid = (props) => {

  const element = useRef()
  const store = useContext(StateContext)

  useEffect(() => {
    if (store.state.game.arenaHeight > 0) {
      anime({
        targets: element.current,
        translateY: store.state.game.arenaHeight + props.elementHeight,
        rotate: 360,
        duration: 3000,
        easing: 'linear',
        change() {
          console.log('test')
        }
      })
    }
  }, [store.state.game.arenaHeight])

  const position = {
    left: props.x + 'px',
    top: props.y + 'px'
  }

  return (
    <div
      ref={element} 
      style={position}
      className={`${styles.body} ${styles[props.type]}`}>  
    </div>
  )
}

export default Asteroid