import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Container from './components/Container';
import Sidebar from './components/Sidebar';

const Root = () => {
  return (
    <Fragment>
      <Sidebar />
      <Container>
        <Outlet />
      </Container>
    </Fragment>
  );
};

export default Root;
