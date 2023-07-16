import { IconType } from 'react-icons';

import ConfirmModal from '@/components/ConfirmModal';
import SearchBox from '../SearchBox';
import { ButtonTypes, useButtonsData } from './lib/useButtonsData';
import { ApartContainer, Button, ButtonGroup, HeaderWrapper } from './styles';

const Header = () => {
  const { buttonsData, isDelete, closeDeleteModal, deleteNote } =
    useButtonsData();

  const questionTitle = 'Are you sure you want to delete this note?';

  return (
    <>
      <ConfirmModal
        questionTitle={questionTitle}
        isOpen={isDelete}
        onClose={closeDeleteModal}
        onConfirm={deleteNote}
      />
      <HeaderWrapper>
        <ApartContainer>
          <ButtonGroup>
            {buttonsData.map((btn) => {
              const { id, svg, type, disabled, onClick } = btn;
              const Icon: IconType = svg;

              return (
                <li key={id}>
                  <Button
                    disabled={type !== ButtonTypes.CREATE && disabled}
                    onClick={onClick}
                    type="button"
                  >
                    <Icon />
                  </Button>
                </li>
              );
            })}
          </ButtonGroup>

          <SearchBox />
        </ApartContainer>
      </HeaderWrapper>
    </>
  );
};

export default Header;
