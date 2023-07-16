import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const SearchBoxWrapper = styled.div`
  /* Step 0: 165.00px → 350.00px */
  --width: clamp(10.31rem, calc(5.8rem + 22.56vw), 21.88rem);

  position: relative;
  width: var(--width);
  background-color: var(--white);
  border-radius: var(--border-rds);
`;

export const Input = styled.input`
  /* padding-right: 18px → 24px */
  --p-24: clamp(1.13rem, calc(0.98rem + 0.73vw), 1.5rem);

  width: 100%;
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 400;
  color: var(--black);
  background: transparent;
  border-radius: var(--border-rds);
  border: 1px solid var(--white);
  padding: 5px var(--p-24) 5px var(--p-10);
  transition: var(--ease-out);

  &:is(:hover, :active, :focus) {
    outline: none;
    border-color: var(--dark-gray);

    & + svg {
      color: var(--black);
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    & + svg {
      opacity: 0.5;
    }

    &:is(:hover, :active, :focus) {
      border-color: var(--white);

      & + svg {
        color: var(--dark-gray);
      }
    }
  }
`;

export const SearchIcon = styled(BiSearch)`
  /* right: 3px → 6px */
  --rh-6: clamp(0.19rem, calc(0.11rem + 0.37vw), 0.38rem);

  position: absolute;
  top: 50%;
  right: var(--rh-6);
  transform: translateY(-50%);
  font-size: var(--fs-16);
  color: var(--dark-gray);
  transition: var(--ease-out);
`;
