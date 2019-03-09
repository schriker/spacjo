import React from 'react'
import styles from './Asteroid.module.css'

const Asteroid = (props) => {

  const position = {
    left: props.x + 'px',
    top: props.y + 'px'
  }

  return (
    <div 
      style={position}
      className={`${styles.body} ${styles[props.type]}`}>  
    </div>
  )
}

export default Asteroid