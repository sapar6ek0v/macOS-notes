import { Note } from '@/db/types';
import { WorkSpaceText } from './styles';

interface Props {
  currentNote: Note;
}

const WorkSpaceContent = ({ currentNote }: Props) => {
  return (
    <>
      <WorkSpaceText className="title">
        {currentNote.title || <span>Title will be here...</span>}
      </WorkSpaceText>
      <WorkSpaceText className="text">
        {currentNote.description || <span>Description will be here...</span>}
      </WorkSpaceText>
    </>
  );
};

export default WorkSpaceContent;
