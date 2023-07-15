import { displayDate } from '@/utils/displayDate';
import { useNotesContext } from '@/utils/hooks/useNotesContext';
import NoteForm from '../NoteForm';
import { WorkSpaceDate, WorkSpaceWrapper } from './styles';
import WorkSpaceContent from './WorkSpaceContent';

const WorkSpace = () => {
  const { currentNote, isNoteUpdate } = useNotesContext();

  return (
    <WorkSpaceWrapper>
      {currentNote ? (
        <>
          <WorkSpaceDate>{displayDate(currentNote.createdAt)}</WorkSpaceDate>
          {!isNoteUpdate ? (
            <WorkSpaceContent currentNote={currentNote} />
          ) : (
            <NoteForm />
          )}
        </>
      ) : null}
    </WorkSpaceWrapper>
  );
};

export default WorkSpace;
