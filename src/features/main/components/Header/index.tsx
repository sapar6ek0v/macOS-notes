import { useId } from 'react';
import { IconType } from 'react-icons';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

import { Container } from '../../styles';
import SearchBox from '../SearchBox';
import { ApartContainer, Button, ButtonGroup, HeaderWrapper } from './styles';

const Header = () => {
  const icons = [
    {
      id: useId(),
      svg: AiOutlinePlus,
    },
    {
      id: useId(),
      svg: BsTrash,
    },
    {
      id: useId(),
      svg: FiEdit,
    },
  ];

  return (
    <HeaderWrapper>
      <Container>
        <ApartContainer>
          <ButtonGroup>
            {icons.map((icon) => {
              const Icon: IconType = icon.svg;
              return (
                <li key={icon.id}>
                  <Button type="button">
                    <Icon />
                  </Button>
                </li>
              );
            })}
          </ButtonGroup>

          <SearchBox />
        </ApartContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
