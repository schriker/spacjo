import React from 'react'
import styles from './Battleship.module.css'

const Battleship = (props) => {

  const position = {
    left: props.x + 'px',
    top: props.y + 'px',
    transition: `all linear ${props.animationTime}ms`
  }

  let withExhaust = null
  let shadow = null
  let flyingAnimation = props.flyingRight ? styles.flyright : props.flyingLeft ? styles.flyleft : null

  if (props.selected) {
    withExhaust = 
    <React.Fragment>
      <div className={`${styles.exhaust} ${styles.exhaustleft}`}></div><div className={`${styles.exhaust} ${styles.exhaustright}`}></div>
    </React.Fragment>
  }

  if (props.withShadow) {
     shadow = <div className={styles.shadow}></div>
  }

  return (
    <div style={position} className={styles.wrapper}>
      <div className={`${styles.body} ${styles[props.color]} ${flyingAnimation}`}></div>
      {withExhaust}
      {shadow}
    </div>
  )
}

export default Battleship