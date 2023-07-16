import { css } from 'styled-components';

export const variables = css`
  :root {
    --white: #ffff;
    --gray: #e5e5e5;
    --white-gray: #eeeeee;
    --secondary-gray: #b2b2b2;
    --dark-gray: #454545;
    --black: #000000;
    --rgb-black: 0, 0, 0;

    --border-rds: 5px;
    --ease-out: all 0.4s ease-out;

    /* font-size: 12.00px → 14.00px */
    --fs-14: clamp(0.75rem, calc(0.7rem + 0.24vw), 0.88rem);
    /* line-height: 14.00px → 18.00px */
    --lh-18: clamp(0.88rem, calc(0.78rem + 0.49vw), 1.13rem);
    /* font-size: 14.00px → 16.00px */
    --fs-16: clamp(0.88rem, calc(0.83rem + 0.24vw), 1rem);
    /* line-height: 16.00px → 20.00px */
    --lh-20: clamp(1rem, calc(0.9rem + 0.49vw), 1.25rem);

    /* padding: 7px → 10px */
    --p-10: clamp(0.44rem, calc(0.36rem + 0.37vw), 0.63rem);
    /* padding: 10px → 15px */
    --p-15: clamp(0.63rem, calc(0.5rem + 0.61vw), 0.94rem);
    /* height: 52px → 62px */
    --header-ht: clamp(3.25rem, calc(3.01rem + 1.22vw), 3.88rem);
    /* gap: 8px → 10px */
    --gap-10: clamp(0.5rem, calc(0.45rem + 0.24vw), 0.63rem);
  }
`;
