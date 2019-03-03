import React, { useEffect, useContext } from 'react'
import { StateContext } from '../../store/store'
import styles from './Bullets.module.css'
import * as actionTypes from '../../store/actionTypes'

const Bullets = (props) => {

  const store = useContext(StateContext)

  useEffect(() => {
      const payload =  {
        index: props.index,
        bullet: {
          type: props.type,
          position: {
            x: props.x,
            y: props.y - 5
          }
        }
      }
      if (props.y > -28) {
        store.dispatch({type: actionTypes.BULLET_MOVE, payload})
      }
  }, [store])

  const style = {
    left: props.x + 'px',
    top: props.y + 'px'
  }

  let bullet = null

  if (props.y > -28) {
    bullet = <div style={style} className={`${styles.body} ${styles[props.type]}`}></div>
  }

  return bullet
}

export default Bullets