import React from 'react'
import styles from './Bullets.module.css'

const Bullets = (props) => {

  return (
    <div className={`${styles.body} ${styles[props.type]}`}></div>
  )
}

export default Bullets