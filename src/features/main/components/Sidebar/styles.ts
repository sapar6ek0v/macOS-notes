import styled from 'styled-components';

import { calcHeight } from '@/utils/calcHeight';

export const SidebarWrapper = styled.section`
  ${calcHeight()}
  overflow: auto;
  background-color: var(--white);
  border-right: 1.5px solid var(--gray);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 40%;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 35%;
  }

  @media ${({ theme }) => theme.bp.bpMedium} {
    width: 30%;
  }
`;
