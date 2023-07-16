import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles, theme } from '@/styles';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
      <ToastContainer />
    </ThemeProvider>
  );
};

export default Layout;
