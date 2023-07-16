import styled from 'styled-components';

export const MainWrapper = styled.main`
  ${({ theme }) => theme.mixins.column};
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    flex-direction: row;
  }
`;
