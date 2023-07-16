import Loader from '@/components/Loader';
import { displayDate } from '@/utils/displayDate';
import { useNotesContext } from '@/utils/hooks/useNotesContext';
import NoteForm from '../NoteForm';
import { WorkSpaceDate, WorkSpaceStack, WorkSpaceWrapper } from './styles';
import WorkSpaceContent from './WorkSpaceContent';

const WorkSpace = () => {
  const { currentNote, isNoteUpdate } = useNotesContext();

  return (
    <WorkSpaceWrapper>
      {currentNote ? (
        <WorkSpaceStack>
          <WorkSpaceDate>{displayDate(currentNote.createdAt)}</WorkSpaceDate>
          {!isNoteUpdate ? (
            <WorkSpaceContent currentNote={currentNote} />
          ) : (
            <NoteForm />
          )}
        </WorkSpaceStack>
      ) : (
        <Loader size={2} centered />
      )}
    </WorkSpaceWrapper>
  );
};

export default WorkSpace;
