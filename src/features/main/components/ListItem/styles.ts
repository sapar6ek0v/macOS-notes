import styled from 'styled-components';

export const ListItemWrapper = styled.ul`
  ${({ theme }) => theme.mixins.column};
`;

type ItemProps = {
  $isActive?: boolean;
};

export const Item = styled.li<ItemProps>`
  cursor: pointer;
  ${({ theme }) => theme.mixins.column};
  gap: 2.5px;
  background-color: ${(props) =>
    props.$isActive ? 'var(--white-gray)' : 'transparent'};
  border-bottom: 1px solid var(--gray);
  padding: 15px 50px;
  transition: var(--ease-out);

  &:is(:hover, :active, :focus) {
    background-color: var(--white-gray);
  }
`;

export const ItemTitle = styled.p`
  color: var(--black);
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 600;
`;

export const ItemFooterGroup = styled.div`
  ${({ theme }) => theme.mixins.center};
  gap: 12px;
`;

const BaseText = styled.span`
  color: var(--black);
  ${({ theme }) => theme.mixins.fs14};
  font-weight: 400;
`;

export const ItemDate = styled(BaseText)``;

export const ItemText = styled(BaseText)``;
