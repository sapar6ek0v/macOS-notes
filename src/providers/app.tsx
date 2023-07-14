import * as React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import Loader from '@/components/Loader';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <React.Suspense fallback={<Loader centered />}>
      <HelmetProvider>
        <Router>{children}</Router>
      </HelmetProvider>
    </React.Suspense>
  );
};