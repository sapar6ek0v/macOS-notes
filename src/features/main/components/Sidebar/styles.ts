import styled from 'styled-components';

import { HEADER_HEATH } from '../Header/styles';

const calculatedHeight = `100vh - ${HEADER_HEATH}px`;

export const SidebarWrapper = styled.section`
  width: min(35%, 350px);
  height: calc(${calculatedHeight});
  overflow: auto;
  background-color: var(--white);
  border-right: 1.5px solid var(--gray);
`;
