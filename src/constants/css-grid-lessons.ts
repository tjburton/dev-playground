import { Lesson } from '../types';

import CssGridFundamentals from '../pages/css/courses/css-grid/lessons/03-css-grid-fundamentals';
import CssGridDevTools from '../pages/css/courses/css-grid/lessons/04-css-grid-dev-tools';

export const CSS_GRID_LESSONS: Lesson[] = [
  {
    id: 3,
    title: 'CSS Grid Fundamentals',
    component: CssGridFundamentals,
  },
  {
    id: 4,
    title: 'CSS Grid Dev Tools',
    component: CssGridDevTools,
  },
  {
    id: 5,
    title: 'CSS Grid Implicit vs Explicit Tracks',
    component: CssGridFundamentals,
  },
];

export default CSS_GRID_LESSONS;
