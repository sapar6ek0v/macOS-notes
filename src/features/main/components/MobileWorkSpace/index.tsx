import { MouseEventHandler, ReactNode } from 'react';
import { BiArrowBack } from 'react-icons/bi';

import { useNotesContext } from '@/utils/hooks/useNotesContext';
import {
  BackButton,
  InnerMobileWorkSpace,
  MobileWorkSpaceWrapper,
} from './styles';

interface Props {
  children: ReactNode;
}

const MobileWorkSpace = ({ children }: Props) => {
  const { currentNote, setCurrentNote } = useNotesContext();

  const handleInnerClick: MouseEventHandler<HTMLDivElement> = (e) =>
    e.stopPropagation();

  const handleClose = () => setCurrentNote(null);

  return (
    <MobileWorkSpaceWrapper $isShow={!!currentNote}>
      <InnerMobileWorkSpace onClick={handleInnerClick}>
        <BackButton onClick={handleClose} type="button">
          <BiArrowBack />
        </BackButton>
        {children}
      </InnerMobileWorkSpace>
    </MobileWorkSpaceWrapper>
  );
};

export default MobileWorkSpace;
