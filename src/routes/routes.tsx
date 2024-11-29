import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '../page/Home.page';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])
