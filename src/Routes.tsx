import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import CssHome from './pages/css/CssHome';
import WesBosGrid from './pages/css/courses/WebBosCssGrid/WesBosCssGrid';
import Error from './pages/Error';

import App from './App';
import AnimationHome from './pages/animation/AnimationHome';
import ComponentsHome from './pages/components/ComponentsHome';
import JavaScriptHome from './pages/javascript/JavaScriptHome';
import LessonsContainer from './pages/css/courses/WebBosCssGrid/lessons/LessonsContainer/LessonsContainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/animation', element: <AnimationHome /> },
      { path: '/components', element: <ComponentsHome /> },
      { path: '/css', element: <CssHome /> },
      { path: '/css/courses', element: <CssHome /> },
      { path: '/css/courses/wesbos-css-grid', element: <WesBosGrid /> },
      {
        path: '/css/courses/wesbos-css-grid/:lessonName',
        element: <LessonsContainer />,
      },
      { path: '/javascript', element: <JavaScriptHome /> },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
