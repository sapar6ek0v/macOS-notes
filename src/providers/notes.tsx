import * as React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

import { db } from '@/db';
import { Note } from '@/db/types';
import { catchError } from '@/utils/catchError';
import { useDebounce } from '@/utils/hooks/useDebounce';
import { sortByCreatedAt } from '@/utils/sortByCreatedAt';

export type NotesContextType = {
  currentNote: Note | null;
  setCurrentNote: (value: Note | null) => void;
  notes: Note[] | undefined;
  isNoteUpdate: boolean;
  setIsNoteUpdate: (value: boolean) => void;
  search: string;
  setSearch: (value: string) => void;
  createNote: () => Promise<void>;
  updateNote: (note: Note) => Promise<void>;
  removeNote: (id: number) => Promise<void>;
};

export const NotesContext = React.createContext<NotesContextType | null>(null);

export interface Props {
  children: React.ReactNode;
}

const NotesProvider = ({ children }: Props) => {
  const [currentNote, setCurrentNote] = React.useState<Note | null>(null);
  const [isNoteUpdate, setIsNoteUpdate] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>('');
  const debouncedSearch = useDebounce(search, 300);

  const notes = useLiveQuery(async () => {
    const result = await db.notes
      .where('title')
      .startsWithIgnoreCase(debouncedSearch)
      .or('description')
      .startsWithIgnoreCase(debouncedSearch)
      .toArray();

    return sortByCreatedAt(result);
  }, [debouncedSearch]);

  const createNote = React.useCallback(async () => {
    try {
      await db.notes.add({
        id: Date.now(),
        title: '',
        description: '',
        createdAt: new Date(),
      });
    } catch (err: unknown) {
      catchError(err);
    }
  }, []);

  const updateNote = React.useCallback(async (note: Note) => {
    try {
      await db.notes.update(note.id, { ...note });
    } catch (err: unknown) {
      catchError(err);
    }
  }, []);

  const removeNote = React.useCallback(async (id: number) => {
    try {
      await db.notes.delete(id);
    } catch (err: unknown) {
      catchError(err);
    }
  }, []);

  const values = React.useMemo<NotesContextType>(
    () => ({
      currentNote,
      setCurrentNote,
      notes,
      isNoteUpdate,
      setIsNoteUpdate,
      search,
      setSearch,
      createNote,
      updateNote,
      removeNote,
    }),
    [
      currentNote,
      notes,
      isNoteUpdate,
      search,
      createNote,
      updateNote,
      removeNote,
    ]
  );

  return (
    <NotesContext.Provider value={values}>{children}</NotesContext.Provider>
  );
};

export default NotesProvider;
