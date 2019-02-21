import React, { useContext, useRef } from 'react'
import styles from './Layout.module.css'

import Start from '../../views/Start/Start'
import Stats from '../Stats/Stats'
import Game from '../../views/Game/Game'
import { StateContext } from '../../store/store'

const Layout = () => {

  const store = useContext(StateContext)

  const gameArena = useRef(null)

  let content = null

  if (!store.state.game.isStarted) {
    content = <Start />
  }

  if (store.state.game.isStarted) {
      content = <Game arena={gameArena} />
  }

  return (
      <div ref={gameArena} className={styles.wrapper}>
        <Stats />
        {content}
      </div>
  )
}

export default Layout