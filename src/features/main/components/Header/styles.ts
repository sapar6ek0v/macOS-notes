import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  padding: 15px 0;
  background-color: var(--gray);
`;

export const ApartContainer = styled.div`
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
`;
