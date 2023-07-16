import styled, { css, keyframes } from 'styled-components';

type MobileWorkSpaceProps = {
  $isShow: boolean;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);      
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0%);      
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

export const MobileWorkSpaceWrapper = styled.section<MobileWorkSpaceProps>`
  position: absolute;
  width: 100%;
  height: calc(100vh - var(--header-ht));
  overflow: auto;
  background-color: var(--white);
  animation-fill-mode: forwards;

  ${(props) =>
    props.$isShow
      ? css`
          animation: ${fadeIn} 0.5s;
        `
      : css`
          animation: ${fadeOut} 0.5s;
        `}
`;

export const InnerMobileWorkSpace = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 13px;
  left: 20px;
  z-index: 90;
  ${({ theme }) => theme.mixins.fCenter};
  font-size: var(--fs-16);
  color: var(--dark-gray);
  background-color: var(--white);
  border: 1px solid var(--dark-gray);
  border-radius: var(--border-rds);
  padding: 3px 6px;
  transition: var(--ease-out);

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--white);
    background-color: var(--dark-gray);
  }

  &:disabled {
    opacity: 0.5;

    &:is(:hover, :active, :focus) {
      color: var(--dark-gray);
      background-color: var(--white);
    }
  }
`;
