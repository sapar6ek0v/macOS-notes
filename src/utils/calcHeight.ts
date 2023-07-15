import { css } from 'styled-components';

export const HEADER_HEATH = 62;

const calculatedHeight = `100vh - ${HEADER_HEATH}px`;

export const calcHeight = () => css`
  height: calc(${calculatedHeight});
`;
