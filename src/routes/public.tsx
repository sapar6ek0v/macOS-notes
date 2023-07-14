import { lazy } from 'react';

import { Paths } from '@/config';

const Main = lazy(() => import('@/features/main'));

export const publicRoutes = [
  {
    path: Paths.MAIN,
    element: <Main />,
  },
];