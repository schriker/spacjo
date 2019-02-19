import React, { useState, useEffect, useContext } from 'react';
import Platform from './Platform';
import styles from './Start.module.css';
import logo from '../../assests/logo.png';
import { StateContext } from '../../store/store';
import * as actionTypes from '../../store/actionTypes';

const Start = () => {

  const ships = ['blue', 'red'];

  const store = useContext(StateContext)

  const [userName, setUserName] = useState('Player name');
  const [isValid, setValid] = useState({touched: false, valid: false});

  useEffect(() => {
    if(isValid.valid) {
      store.dispatch({type: actionTypes.START_GAME});
    }
  }, [isValid]);

  const formValidation = (e) => {
    e.preventDefault();
    if (userName === '') {
      setValid({
        touched: true,
        valid: false
      });
    } else {
      setValid({
        touched: true,
        valid: true
      });
    }
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <img className={styles.logo} src={logo} alt="The Spacjo Strzelec"/>
      </div>
      <form onSubmit={(e) => formValidation(e)}>
        <div className={!isValid.valid && isValid.touched ? 'form-row form-row__input form-row__input--invalid' : 'form-row form-row__input'}>
          <input onChange={(e) => setUserName(e.target.value)} type="text" value={userName} />
        </div>
        <div className="form-row">
          <button type="submit">Start Game</button>
        </div>
      </form>
      <Platform ships={ships} />
    </div>
  );
};

export default Start;