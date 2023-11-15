import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import AppContainer from './components/AppContainer';
import Sidebar from './components/sidebar';

const App = () => {
  return (
    <Fragment>
      <Sidebar />
      <AppContainer>
        <Outlet />
      </AppContainer>
    </Fragment>
  );
};

export default App;
