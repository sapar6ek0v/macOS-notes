import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';
import NotesProvider from '@/providers/notes';

const App = () => {
  return (
    <AppProvider>
      <NotesProvider>
        <AppRoutes />
      </NotesProvider>
    </AppProvider>
  );
};

export default App;
