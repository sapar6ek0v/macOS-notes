import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-ht);
  ${({ theme }) => theme.mixins.fCenter};
  padding: var(--p-15) 0;
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
  gap: var(--gap-10);
`;

export const Button = styled.button`
  ${({ theme }) => theme.mixins.fCenter};
  font-size: var(--fs-16);
  color: var(--dark-gray);
  background-color: var(--white);
  border: 1px solid transparent;
  border-radius: var(--border-rds);
  padding: 5px var(--p-10);
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
