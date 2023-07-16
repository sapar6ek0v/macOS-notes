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
  /* fon-size: 70.00px → 80.00px */
  --fs-80: clamp(4.38rem, calc(3.74rem + 1.77vw), 5rem);

  font-size: var(--fs-80);
  color: var(--black);
  opacity: 0.5;
`;

export const WelcomeText = styled.h2`
  /* font-size: 18px → 22px */
  --fs-22: clamp(1.13rem, calc(0.87rem + 0.71vw), 1.38rem);
  /* line-height: 24px → 33px */
  --lh-33: clamp(1.5rem, calc(0.93rem + 1.6vw), 2.06rem);

  font-size: var(--fs-22);
  line-height: var(--lh-33);
  font-weight: 500;
  color: var(--black);
  text-align: center;
  opacity: 0.5;
`;
