import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Basic1 from './pages/Basic 1';
import CssPage from './pages/css/CssPage';
import Error from './pages/Error';

import './App.css';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Basic1 /> },
      { path: '/css', element: <CssPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
