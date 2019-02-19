import React, { useContext } from 'react';
import styles from './Start.module.css';
import { StateContext } from '../../store/store';
import Battleship from '../../components/Battleship/Battleship';
import * as actionTypes from '../../store/actionTypes';

const Platform = (props) => {

  const store = useContext(StateContext);

  return (
      <div>
        <p>Choose your battle ship!</p>
        <div className={styles.platform}>
          {props.ships.map((ship, index) => {
              const isSelected = ship === store.state.player.selectedShip;
              return (
                <div key={index} onClick={() => store.dispatch({ type: actionTypes.SET_BATTLESHIP, selectedShip: ship })}>
                  <Battleship 
                    x={index === 0 ? "105" : "200"} 
                    y={isSelected ? "40" : "60"} 
                    color={ship} 
                    selected={isSelected} 
                    withShadow={isSelected}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
  );
};

export default Platform;