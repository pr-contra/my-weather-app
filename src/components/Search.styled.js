import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid var(--colors-darkGrey);

  @media ${({ theme }) => theme.devices.tablet} {
    ${({ theme }) => theme.fonts.textMedium}
  }
`;

export const Input = styled.input`
  padding: 6px;
  color: var(--colors-darkGrey);
  border: none;
  outline: none;
  flex-grow: 1;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--colors-lightestGrey);
  }

  @media only screen and ${({ theme }) => theme.devices.mobileL} {
    padding: 10px;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 12px;
  }
`;

export const SearchButton = styled.button`
  padding: 6px;
  background-color: var(--colors-darkGrey);
  border: none;
  color: var(--colors-lightGrey);
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--colors-text);
  }

  @media only screen and ${({ theme }) => theme.devices.mobileL} {
    padding: 10px;
  }

  @media only screen and ${({ theme }) => theme.devices.tablet} {
    padding: 12px;
  }
`;
