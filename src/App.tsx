// import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import Basic1 from './pages/Basic 1';

const App = () => {
  // const [darkMode, setDarkMode] = useState(true);

  return (
    <Container>
      <Sidebar />
      <Header />
      <Basic1 />
    </Container>
  );
};

export default App;
