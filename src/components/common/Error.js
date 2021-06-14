import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  color: var(--colors-darkGrey);

  & a {
    ${({ theme }) => theme.fonts['textBold']}
    text-decoration: none;

    &:visited,
    &:hover,
    &:active {
      color: var(--colors-darkGrey);
    }
  }
`;
