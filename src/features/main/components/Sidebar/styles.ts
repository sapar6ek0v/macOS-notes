import styled from 'styled-components';

import { calcHeight } from '@/utils/calcHeight';

export const SidebarWrapper = styled.section`
  width: min(35%, 350px);
  ${calcHeight()}
  overflow: auto;
  background-color: var(--white);
  border-right: 1.5px solid var(--gray);
`;
