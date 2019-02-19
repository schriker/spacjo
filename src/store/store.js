import React from 'react';
import * as actionTypes from './actionTypes';

export const initialState = {
  player: {
    lives: 4,
    score: 0,
    userName: 'Player name',
    selectedShip: 'blue'
  },
  game: {
    isStarted: false
  }
}

export const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.SET_USERNAME: {
      return {
        ...state,
        player: {
          ...state.player,
          userName: action.userName
        }
      }
    }
    case actionTypes.SET_BATTLESHIP: {
      return {
        ...state,
        player: {
          ...state.player,
          selectedShip: action.selectedShip
        }
      }
    }
    case actionTypes.START_GAME: {
      console.log('test')
      return {
        ...state,
        game: {
          ...state.game,
          isStarted: true
        }
      }
    }
    default: return state
  }
}

export const StateContext = React.createContext();