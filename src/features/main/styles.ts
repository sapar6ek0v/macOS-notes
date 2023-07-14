import styled from 'styled-components';

export const MainWrapper = styled.main`
  ${({ theme }) => theme.mixins.column};
`;

export const Container = styled.div`
  width: min(90%, 1140px);
  margin-inline: auto;
`;
