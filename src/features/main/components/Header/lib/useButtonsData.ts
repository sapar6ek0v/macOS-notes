import { useId, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

import { useNotesContext } from '@/utils/hooks/useNotesContext';

export enum ButtonTypes {
  CREATE = 'create',
  EDIT = 'edit',
  DELETE = 'delete',
}

export function useButtonsData() {
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const {
    createNote,
    removeNote,
    currentNote,
    setCurrentNote,
    isNoteUpdate,
    setIsNoteUpdate,
  } = useNotesContext();

  const toggleNoteUpdate = () => isNoteUpdate && setIsNoteUpdate(false);

  const saveNewNote = () => {
    createNote();
    toggleNoteUpdate();
  };

  const closeDeleteModal = () => setIsDelete(false);
  const deleteNote = () => {
    if (!currentNote) return;

    removeNote(currentNote.id);
    setCurrentNote(null);
    toggleNoteUpdate();
  };

  const buttonsData = [
    {
      id: useId(),
      type: ButtonTypes.CREATE,
      svg: AiOutlinePlus,
      onClick: saveNewNote,
      disabled: false,
    },
    {
      id: useId(),
      type: ButtonTypes.DELETE,
      svg: BsTrash,
      onClick: () => setIsDelete(true),
      disabled: !currentNote,
    },
    {
      id: useId(),
      type: ButtonTypes.EDIT,
      svg: FiEdit,
      onClick: () => setIsNoteUpdate(true),
      disabled: !currentNote || isNoteUpdate,
    },
  ];

  return { buttonsData, deleteNote, isDelete, closeDeleteModal };
}
