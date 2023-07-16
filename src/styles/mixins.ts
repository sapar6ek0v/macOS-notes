import { css, keyframes } from 'styled-components';

export const mixins = {
  apart: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  column: css`
    display: flex;
    flex-direction: column;
  `,

  center: css`
    display: flex;
    align-items: center;
  `,

  fCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  oneLineText: css`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,

  fs14: css`
    font-size: var(--fs-14);
    line-height: var(--lh-18);
  `,

  fs16: css`
    font-size: var(--fs-16);
    line-height: var(--lh-20);
  `,

  // animations
  fadeIn: keyframes`
    from {
		  opacity:0;
	  }
	  to {
		  opacity:1;
    }
  `,

  fadeOut: keyframes`
    from {
      opacity: 1
    }
    to {
      opacity: 0
    }
  `,
};
