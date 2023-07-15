import { ChangeEvent, useEffect, useState } from 'react';

import { useNotesContext } from '@/utils/hooks/useNotesContext';
import { useDebounce } from '@/utils/hooks/useDebounce';
import { NewNoteInput, NewNoteTextArea } from './styles';

const NoteForm = () => {
  const { updateNote, currentNote } = useNotesContext();

  const [title, setTitle] = useState<string>(currentNote?.title || '');
  const [description, setDescription] = useState<string>(
    currentNote?.description || ''
  );

  const debouncedTitle = useDebounce<string>(title, 300);
  const debouncedDescription = useDebounce<string>(description, 300);

  const handleUpdateNote = async () => {
    if (!currentNote) return;

    try {
      await updateNote({
        id: currentNote.id,
        title: debouncedTitle,
        description: debouncedDescription,
        createdAt: new Date(),
      });
    } catch (err: unknown) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleUpdateNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedTitle, debouncedDescription]);

  return (
    <>
      {currentNote ? (
        <>
          <NewNoteInput
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            placeholder="Type title..."
            type="text"
          />
          <NewNoteTextArea
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
            placeholder="Type description..."
            rows={25}
          />
        </>
      ) : null}
    </>
  );
};

export default NoteForm;
