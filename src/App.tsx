// import { useState } from 'react';

import './App.css';
// import Header from './components/Header';
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import Basic1 from './pages/Basic 1';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <Sidebar />
      <Container>
        <Basic1 />
      </Container>
    </Fragment>
  );
};

export default App;
