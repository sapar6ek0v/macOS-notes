import { Note } from '@/db/types';
import { useNotesContext } from '@/utils/hooks/useNotesContext';
import { showDateOrTime } from '@/utils/showDateOrTime';
import {
  ItemDate,
  ItemFooterGroup,
  ItemText,
  ItemTitle,
  ItemWrapper,
} from './styles';

interface Props {
  note: Note;
}

const Item = ({ note }: Props) => {
  const { id, title, description, createdAt } = note;

  const { currentNote, setCurrentNote, isNoteUpdate, setIsNoteUpdate } =
    useNotesContext();

  const handleSelectNote = () => {
    setCurrentNote(note);
    if (isNoteUpdate) setIsNoteUpdate(false);
  };

  return (
    <ItemWrapper onClick={handleSelectNote} $isActive={id === currentNote?.id}>
      <ItemTitle>{title || <span>Title...</span>}</ItemTitle>
      <ItemFooterGroup>
        <ItemDate>{showDateOrTime(createdAt)}</ItemDate>
        <ItemText>{description || <span>Description...</span>}</ItemText>
      </ItemFooterGroup>
    </ItemWrapper>
  );
};

export default Item;
