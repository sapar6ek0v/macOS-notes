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
  padding: 5px 10px;
  transition: var(--ease-out);

  &:is(:hover, :active, :focus) {
    outline: none;
    border-color: var(--dark-gray);

    & + svg {
      color: var(--black);
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
