import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  width: 100%;

  @media only screen and ${({ theme }) => theme.devices.mobileL} {
    padding-top: 6%;
  }

  @media only screen and ${({ theme }) => theme.devices.tablet} {
    padding-top: 4%;
  }

  @media only screen and ${({ theme }) => theme.devices.laptop} {
    padding-top: 2%;
  }
`;
