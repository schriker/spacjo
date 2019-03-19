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
    gameOver: false,
    arenaHeight: 0,
    arenaWidth: 0,
    playerPosition: {
      width: 64,
      height: 64,
      x: 0,
      y: 0
    },
    playerBullets: []
  },
  enemies: []
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
    case actionTypes.GAME_OVER: {
      return {
        ...state,
        game: {
          ...state.game,
          gameOver: true
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
    case actionTypes.BULLET_REMOVE: {
      const updatedArr = state.game.playerBullets.filter(bullet => bullet.id !== action.id)
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
    case actionTypes.ENEMY_REMOVE: {
      const updatedArr = state.enemies.filter(enemy => enemy.id !== action.id)
      return {
        ...state,
        enemies: [
          ...updatedArr
        ]
      }
    }
    case actionTypes.ENEMY_CORDS: {
      const updatedArr = state.enemies.map(enemy => {
        if (enemy.id === action.payload.id) {
          return {
            ...enemy,
            cords: action.payload.cords
          }
        }
        else return enemy
      })
      return {
        ...state,
        enemies: [
          ...updatedArr
        ]
      }
    }
    case actionTypes.PLAYER_ADD_POINTS: {
      return {
        ...state,
        player: {
          ...state.player,
          score: state.player.score + action.payload
        }
      }
    }
    case actionTypes.PLAYER_REMOVE_HP: {
      return {
        ...state,
        player: {
          ...state.player,
          lives: state.player.lives - 1
        }
      }
    }
    default: return state
  }
}

export const StateContext = React.createContext()