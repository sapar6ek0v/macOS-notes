import styled, { css } from 'styled-components';

export const ListItemWrapper = styled.ul`
  position: relative;
  height: 100%;
  ${({ theme }) => theme.mixins.column};
`;

type ItemProps = {
  $isActive?: boolean;
};

const padding = css`
  @media ${({ theme }) => theme.bp.bpTinyS} {
    padding: 15px 50px;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    padding: 15px 30px;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    padding: 15px 40px;
  }

  @media ${({ theme }) => theme.bp.bpMedium} {
    padding: 15px 50px;
  }
`;

export const ItemWrapper = styled.li<ItemProps>`
  cursor: pointer;
  ${({ theme }) => theme.mixins.column};
  gap: 2.5px;
  background-color: ${(props) =>
    props.$isActive ? 'var(--white-gray)' : 'transparent'};
  border-bottom: 1px solid var(--gray);
  transition: var(--ease-out);

  &:is(:hover, :active, :focus) {
    background-color: var(--white-gray);
  }

  ${padding};
`;

export const ItemTitle = styled.p`
  color: var(--black);
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 600;
  ${({ theme }) => theme.mixins.oneLineText};

  span {
    font-style: italic;
    opacity: 0.65;
  }
`;

export const ItemFooterGroup = styled.div`
  /* gap: 8px → 12px */
  --gap-12: clamp(0.5rem, calc(0.4rem + 0.49vw), 0.75rem);

  ${({ theme }) => theme.mixins.center};
  gap: var(--gap-12);
`;

const BaseText = styled.p`
  color: var(--black);
  ${({ theme }) => theme.mixins.fs14};

  span {
    font-style: italic;
    opacity: 0.8;
  }
`;

export const ItemDate = styled(BaseText)`
  font-weight: 500;
  opacity: 0.9;
  white-space: nowrap;
`;

export const ItemText = styled(BaseText)`
  font-weight: 400;
  ${({ theme }) => theme.mixins.oneLineText};
`;

export const NotFoundTitle = styled.span`
  display: inline-block;
  color: var(--black);
  ${({ theme }) => theme.mixins.fs14};
  font-weight: 700;
  opacity: 0.9;
  text-align: center;

  ${padding};
`;
