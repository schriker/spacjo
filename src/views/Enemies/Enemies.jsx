import React, { useContext } from 'react'
import Asteroid from '../../components/Asteroid/Asteroid'
import { StateContext } from '../../store/store'

const Enemies = () => {

  const store = useContext(StateContext)

  return (
    <React.Fragment>
      {store.state.enemies.map((enemie, index) => {
        return (
          <Asteroid 
            key={index}
            index={index} 
            x={enemie.x} 
            y={enemie.y} 
            type={'type1'}
          />  
          )
        })
      }
    </React.Fragment>
  )
}

export default Enemies