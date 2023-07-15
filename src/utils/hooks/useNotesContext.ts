import { useContext } from 'react';

import { NotesContext, NotesContextType } from '@/providers/notes';

export const useNotesContext = () =>
  useContext(NotesContext) as NotesContextType;
