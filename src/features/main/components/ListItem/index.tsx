import { Note } from '@/db/types';
import { useNotesContext } from '@/utils/hooks/useNotesContext';
import { showDateOrTime } from '@/utils/showDateOrTime';

import {
  Item,
  ItemDate,
  ItemFooterGroup,
  ItemText,
  ItemTitle,
  ListItemWrapper,
  NotFoundTitle,
} from './styles';

const ListItem = () => {
  const { notes, currentNote, setCurrentNote, isNoteUpdate, setIsNoteUpdate } =
    useNotesContext();

  const handleSelectNote = (note: Note) => {
    setCurrentNote(note);
    if (isNoteUpdate) setIsNoteUpdate(false);
  };

  return (
    <ListItemWrapper>
      {notes && notes.length > 0 ? (
        notes.map((note) => (
          <Item
            key={note.id}
            onClick={() => handleSelectNote(note)}
            $isActive={note.id === currentNote?.id}
          >
            <ItemTitle>{note.title || <span>Title...</span>}</ItemTitle>
            <ItemFooterGroup>
              <ItemDate>{showDateOrTime(note.createdAt)}</ItemDate>
              <ItemText>
                {note.description || <span>Description...</span>}
              </ItemText>
            </ItemFooterGroup>
          </Item>
        ))
      ) : (
        <NotFoundTitle>Nothing found for your request!</NotFoundTitle>
      )}
    </ListItemWrapper>
  );
};

export default ListItem;
