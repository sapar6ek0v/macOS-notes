import { Navigate, useRoutes } from 'react-router-dom';

import { Paths } from '@/config';
import Layout from '@/components/Layout';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: '*',
      element: <Navigate to={Paths.MAIN} />,
    },
  ];

  const element = useRoutes([...commonRoutes, ...publicRoutes]);

  return <Layout>{element}</Layout>;
};
