import { MouseEventHandler } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import {
  Button,
  ButtonGroup,
  ConfirmModalCloseBtn,
  ConfirmModalContainer,
  ConfirmModalContent,
  ConfirmModalTitle,
  ConfirmModalWrapper,
} from './styles';

interface Props {
  questionTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmModal = ({ questionTitle, isOpen, onClose, onConfirm }: Props) => {
  const handleInnerClick: MouseEventHandler<HTMLDivElement> = (e) =>
    e.stopPropagation();

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <ConfirmModalWrapper $isShow={isOpen}>
      <ConfirmModalContainer onClick={handleInnerClick}>
        <ConfirmModalContent $isShow={isOpen}>
          <ConfirmModalCloseBtn onClick={onClose} type="button">
            <AiOutlineClose />
          </ConfirmModalCloseBtn>
          <ConfirmModalTitle>{questionTitle}</ConfirmModalTitle>
          <ButtonGroup>
            <Button onClick={handleConfirm} type="button">
              Yes
            </Button>
            <Button onClick={onClose} type="button">
              No
            </Button>
          </ButtonGroup>
        </ConfirmModalContent>
      </ConfirmModalContainer>
    </ConfirmModalWrapper>
  );
};

export default ConfirmModal;
