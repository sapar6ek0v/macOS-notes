import styled from 'styled-components';

import { HEADER_HEATH } from '@/utils/calcHeight';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  height: ${HEADER_HEATH}px;
  padding: 15px 0;
  background-color: var(--gray);
  border-bottom: 1.5px solid rgba(var(--rgb-black), 0.25);
  box-shadow: rgba(var(--rgb-black), 0.25) 1.95px 2.95px 2.5px;
`;

export const ApartContainer = styled.div`
  width: min(90%, 1140px);
  margin-inline: auto;
  ${({ theme }) => theme.mixins.apart};
`;

export const ButtonGroup = styled.ul`
  ${({ theme }) => theme.mixins.center};
  gap: 10px;
`;

export const Button = styled.button`
  ${({ theme }) => theme.mixins.fCenter};
  font-size: 16px;
  color: var(--dark-gray);
  background-color: var(--white);
  border: 1px solid transparent;
  border-radius: var(--border-rds);
  padding: 5px 10px;
  transition: var(--ease-out);

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--white);
    background-color: var(--dark-gray);
  }

  &:disabled {
    opacity: 0.5;

    &:is(:hover, :active, :focus) {
      color: var(--dark-gray);
      background-color: var(--white);
    }
  }
`;
