import { IconType } from 'react-icons';

import SearchBox from '../SearchBox';
import { ButtonTypes, useButtonsData } from './lib/useButtonsData';
import { ApartContainer, Button, ButtonGroup, HeaderWrapper } from './styles';

const Header = () => {
  const buttonsData = useButtonsData();

  return (
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
  );
};

export default Header;
