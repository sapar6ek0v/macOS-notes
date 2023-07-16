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
  /* padding: 40px → 50px */
  --p-50: clamp(2.5rem, calc(2.26rem + 1.22vw), 3.13rem);
  /* padding: 30px → 40px */
  --p-40: clamp(1.88rem, calc(1.63rem + 1.22vw), 2.5rem);
  /* gap: 20px → 25px */
  --gap-25: clamp(1.25rem, calc(1.13rem + 0.61vw), 1.56rem);

  position: relative;
  ${({ theme }) => theme.mixins.column};
  gap: var(--gap-25);
  padding: var(--p-40) var(--p-50);
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

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 80%;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 50%;
  }

  @media ${({ theme }) => theme.bp.bpMedium} {
    width: 40%;
  }
`;

export const ConfirmModalCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: var(--fs-14);
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
  /* font-size: 18.00px → 22.00px */
  --fs-22: clamp(1.13rem, calc(1.03rem + 0.49vw), 1.38rem);
  /* line-height: 24.00px → 30.00px */
  --lh-30: clamp(1.5rem, calc(1.35rem + 0.73vw), 1.88rem);

  font-size: var(--fs-22);
  font-weight: 600;
  line-height: var(--lh-30);
  letter-spacing: 0.5px;
  color: var(--black);
  opacity: 0.9;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => theme.mixins.fCenter};
  gap: var(--gap-10);
`;

export const Button = styled.button`
  /* padding: 15px → 20px */
  --p-20: clamp(0.94rem, calc(0.82rem + 0.61vw), 1.25rem);

  ${({ theme }) => theme.mixins.fs16};
  color: var(--white);
  background-color: var(--dark-gray);
  border: 1px solid var(--dark-gray);
  border-radius: var(--border-rds);
  padding: 5px var(--p-20);
  transition: var(--ease-out);

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--dark-gray);
    background-color: var(--white);
  }
`;
