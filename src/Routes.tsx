import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import CssPage from './pages/css/CssPage';
import WesBosGrid from './pages/css/courses/WebBosCssGrid/WesBosCssGrid';
import Error from './pages/Error';

import App from './App';
import Lessons from './pages/css/courses/WebBosCssGrid/lessons/Lessons';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/css', element: <CssPage /> },
      { path: '/css/courses', element: <CssPage /> },
      { path: '/css/courses/wesbos-css-grid', element: <WesBosGrid /> },
      {
        path: '/css/courses/wesbos-css-grid/:lesson',
        element: <Lessons />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
