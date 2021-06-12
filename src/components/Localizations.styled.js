import styled from 'styled-components';
import { VscLocation } from 'react-icons/vsc';
import { RiDeleteBinLine } from 'react-icons/ri';

export const Section = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  margin-top: 3%;
  overflow: auto;

  @media ${({ theme }) => theme.devices.mobileL} {
    margin-top: 2.5%;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    margin-top: 2%;
  }
`;

export const Location = styled.div`
  ${({ theme }) => theme.fonts.textSmall}
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  line-height: 30px;
  margin-right: 10px;
  border-radius: 4px;
  background-color: var(--colors-lightGrey);
  cursor: pointer;

  & span {
    padding: 0 8px;
  }

  &:hover {
    background-color: var(--colors-grey);
  }

  @media ${({ theme }) => theme.devices.mobileL} {
    height: 32px;
    line-height: 32px;

    & span {
      padding: 0 10px;
    }
  }

  @media ${({ theme }) => theme.devices.tablet} {
    ${({ theme }) => theme.fonts.text}
    height: 36px;
    line-height: 36px;
    margin-right: 12px;

    & span {
      padding: 0 12px;
    }
  }
`;

export const LocationIcon = styled(VscLocation)`
  ${({ theme }) => theme.fonts.text}
  margin-right: 12px;
`;

export const DeleteButton = styled.button`
  height: 30px;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 0 8px;
  color: var(--colors-lightGrey);
  background-color: var(--colors-lightOrange);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: var(--colors-darkOrange);
  }

  @media ${({ theme }) => theme.devices.mobileL} {
    height: 32px;
    padding: 0 10px;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    height: 36px;
    padding: 0 12px;
  }
`;

export const DeleteIcon = styled(RiDeleteBinLine)`
  ${({ theme }) => theme.fonts.text}
`;
