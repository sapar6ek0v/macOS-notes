import styled, { css } from 'styled-components';

type ConfirmModalProps = {
  $isShow: boolean;
};

export const ConfirmModalWrapper = styled.div<ConfirmModalProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  display: ${(props) => (props.$isShow ? 'block' : 'none')};
  background-color: rgba(var(--rgb-black), 0.7);
`;

export const ConfirmModalContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mixins.fCenter};
`;

export const ConfirmModalContent = styled.div<ConfirmModalProps>`
  position: relative;
  ${({ theme }) => theme.mixins.column};
  gap: 25px;
  padding: 40px 50px;
  background-color: var(--gray);
  border-radius: var(--border-rds);
  animation-fill-mode: forwards;

  ${(props) =>
    props.$isShow
      ? css`
          animation: ${({ theme }) => theme.mixins.fadeIn} 0.5s;
        `
      : css`
          animation: ${({ theme }) => theme.mixins.fadeOut} 0.5s;
        `}
`;

export const ConfirmModalCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 14px;
  color: var(--dark-gray);
  padding: 3px;
  ${({ theme }) => theme.mixins.fCenter};
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: transparent;
  transition: var(--ease-out);

  &:is(:hover, :active, :focus) {
    color: var(--white);
    border-color: var(--dark-gray);
    background-color: var(--dark-gray);
  }
`;

export const ConfirmModalTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.5px;
  color: var(--black);
  opacity: 0.9;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => theme.mixins.fCenter};
  gap: 10px;
`;

export const Button = styled.button`
  font-size: 16px;
  color: var(--white);
  background-color: var(--dark-gray);
  border: 1px solid var(--dark-gray);
  border-radius: var(--border-rds);
  padding: 5px 20px;
  transition: var(--ease-out);

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--dark-gray);
    background-color: var(--white);
  }
`;
