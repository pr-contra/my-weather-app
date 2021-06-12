import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  padding-bottom: 5%;
  width: 100%;

  @media only screen and ${({ theme }) => theme.devices.mobileL} {
    padding-bottom: 6%;
  }

  @media only screen and ${({ theme }) => theme.devices.tabletS} {
    padding-bottom: 8%;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;

  @media only screen and ${({ theme }) => theme.devices.tablet} {
    flex-direction: row;
  }
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;

  & span:first-child {
    text-transform: uppercase;
  }

  @media only screen and ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 2rem;
  height: auto;

  @media ${({ theme }) => theme.devices.mobileL} {
    width: 2.5rem;
  }

  @media ${({ theme }) => theme.devices.tableS} {
    width: 3rem;
  }

  @media only screen and ${({ theme }) => theme.devices.tablet} {
    width: 5rem;
  }

  @media only screen and ${({ theme }) => theme.devices.laptop} {
    width: 7rem;
  }
`;

export const Description = styled.span`
  display: none;

  @media only screen and ${({ theme }) => theme.devices.tablet} {
    display: block;
  }
`;
