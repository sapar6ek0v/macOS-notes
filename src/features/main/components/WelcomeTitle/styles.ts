import styled from 'styled-components';
import { BiSolidNote } from 'react-icons/bi';

import { calcHeight } from '@/utils/calcHeight';

export const WelcomeTitleWrapper = styled.section`
  ${({ theme }) => theme.mixins.fCenter};
  flex: 1;
  ${calcHeight()};
`;

export const WelcomeTitleStack = styled.div`
  ${({ theme }) => theme.mixins.column};
  align-items: center;
  gap: 10px;
`;

export const WelcomeTitleIcon = styled(BiSolidNote)`
  font-size: 80px;
  color: var(--black);
  opacity: 0.5;
`;

export const WelcomeText = styled.span`
  font-size: 22px;
  line-height: 33px;
  font-weight: 500;
  color: var(--black);
  opacity: 0.5;
`;
