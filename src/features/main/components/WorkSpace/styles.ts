import styled from 'styled-components';

export const WorkSpaceWrapper = styled.section`
  ${({ theme }) => theme.mixins.column};
  flex: 1;
  gap: 15px;
  padding: 15px 40px;
`;

export const WorkSpaceDate = styled.h1`
  color: var(--dark-gray);
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 500;
  opacity: 0.7;
  text-align: center;
`;

export const WorkSpaceText = styled.p`
  color: var(--black);
  ${({ theme }) => theme.mixins.fs16};

  &.title {
    font-weight: 500;
    opacity: 0.9;

    span {
      opacity: 0.7;
    }
  }

  &.text {
    height: calc(100vh - 184px);
    overflow: auto;
    font-weight: 400;
    opacity: 0.8;
    white-space: pre;

    span {
      opacity: 0.6;
    }
  }

  span {
    font-style: italic;
  }
`;
