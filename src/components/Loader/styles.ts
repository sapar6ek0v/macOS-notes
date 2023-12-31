import styled, { css, keyframes } from 'styled-components';

type Props = {
  $isCentered?: boolean;
};

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderWrapper = styled.div<Props>`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.$isCentered &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
  ${flexCenter};
  z-index: 10000;
`;

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  } 
`;

type LineProps = {
  $size: number;
};

export const Line = styled.div<LineProps>`
  ${flexCenter};
  border-radius: 50%;
  margin: ${(props) => props.$size}px;
  border: 2px solid #000000;
  border-left-color: transparent;
  border-top-color: transparent;
  animation: ${rotate} 3s cubic-bezier(0.35, -0.14, 0.79, 1.22) infinite;
`;
