import React, { useContext } from 'react';

import Start from '../../views/Start/Start';
import { StateContext } from '../../store/store';

const Layout = () => {

  const store = useContext(StateContext);
  let content = null;

  if (!store.state.game.isStarted) {
    content = <Start />
  }

  if (store.state.game.isStarted) {
      content = <div>Test</div>
  }

  return (content);
};

export default Layout;