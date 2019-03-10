import React from 'react'
import * as actionTypes from './actionTypes'

export const initialState = {
  player: {
    lives: 4,
    score: 0,
    gun: 'laser',
    userName: 'Player name',
    selectedShip: 'blue'
  },
  game: {
    isStarted: false,
    arenaHeight: 0,
    arenaWidth: 0,
    playerPosition: {
      x: 0,
      y: 0
    },
    playerBullets: []
  },
  enemies: [
    {
      type: 'asteroid',
      style: 1,
      x: 250,
      y: -37,
      width: 39,
      height: 37
    }
  ]
}

export const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.INIT_GAME: {
      return {
        ...state,
        game: {
          ...state.game,
          arenaHeight: action.payload.arenaHeight,
          arenaWidth: action.payload.arenaWidth,
          playerPosition: {
            ...state.game.playerPosition,
            x: action.payload.playerPosition.x,
            y: action.payload.playerPosition.y
          }
        }
      }
    }
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
      return {
        ...state,
        player: {
          ...state.player,
          userName: action.userName
        },
        game: {
          ...state.game,
          isStarted: true
        }
      }
    }
    case actionTypes.MOVE_LEFT: {
      return {
        ...state, 
        game: {
          ...state.game, 
          playerPosition: {
            ...state.game.playerPosition,
            x: state.game.playerPosition.x - 10
          } 
        }
      }
    }
    case actionTypes.MOVE_RIGHT: {
      return {
        ...state, 
        game: {
          ...state.game, 
          playerPosition: {
            ...state.game.playerPosition,
            x: state.game.playerPosition.x + 10
          } 
        }
      }
    }
    case actionTypes.BULLET_CREATE: {
      return {
        ...state,
        game: {
          ...state.game,
          playerBullets: [
            ...state.game.playerBullets,
            action.payload
          ]
        }
      }
    }
    case actionTypes.BULLET_MOVE: {
      const updatedArr = state.game.playerBullets.map((item, index) => {
        if (index === action.payload.index) {
          return {
            ...action.payload.bullet
          }
        }
        else {
          return item
        }
      })
      return {
        ...state,
        game: {
          ...state.game,
          playerBullets: [
            ...updatedArr
          ]
        }
      }
    }
    case actionTypes.ENEMY_ADD: {
      return {
        ...state,
        enemies: [
          ...state.enemies,
          action.payload
        ]
      }
    }
    default: return state
  }
}

export const StateContext = React.createContext()