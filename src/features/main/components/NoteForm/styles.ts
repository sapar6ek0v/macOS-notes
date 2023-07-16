import styled from 'styled-components';

export const NewNoteInput = styled.input`
  width: 100%;
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 500;
  color: var(--black);
  opacity: 0.9;
  border: none;
  border-bottom: 1px solid var(--secondary-gray);
  padding: 5px var(--p-15);
  transition: var(--ease-out);

  &:is(:hover, :active, :focus) {
    outline: none;
    border-color: var(--dark-gray);
  }
`;

export const NewNoteTextArea = styled.textarea`
  width: 100%;
  height: calc(100vh - 164px);
  overflow: auto;
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 400;
  color: var(--black);
  opacity: 0.9;
  border: 1px solid var(--secondary-gray);
  border-radius: 0;
  padding: 10px var(--p-15);

  &:is(:hover, :active, :focus) {
    outline: none;
    border-color: var(--dark-gray);
  }
`;
