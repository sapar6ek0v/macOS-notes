import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const SearchBoxWrapper = styled.div`
  position: relative;
  width: min(30%, 300px);
  background-color: var(--white);
  border-radius: var(--border-rds);
`;

export const Input = styled.input`
  width: 100%;
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 400;
  color: var(--black);
  background: transparent;
  border-radius: var(--border-rds);
  border: 1px solid var(--white);
  padding: 5px 24px 5px 10px;
  transition: var(--ease-out);

  &:is(:hover, :active, :focus) {
    outline: none;
    border-color: var(--dark-gray);

    & + svg {
      color: var(--black);
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    & + svg {
      opacity: 0.5;
    }

    &:is(:hover, :active, :focus) {
      border-color: var(--white);

      & + svg {
        color: var(--dark-gray);
      }
    }
  }
`;

export const SearchIcon = styled(BiSearch)`
  position: absolute;
  top: 8px;
  right: 6px;
  font-size: 16px;
  color: var(--dark-gray);
  transition: var(--ease-out);
`;
