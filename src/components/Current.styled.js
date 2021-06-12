import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${({ theme }) => theme.devices.mobileL} {
    padding-top: 4%;
  }

  @media only screen and ${({ theme }) => theme.devices.tablet} {
    padding: 2% 0;
  }
`;

export const H1 = styled.h1`
  ${({ theme }) => theme.fonts['h1xs']}

  @media ${({ theme }) => theme.devices.mobileL} {
    ${({ theme }) => theme.fonts['h1s']}
  }

  @media ${({ theme }) => theme.devices.tableS} {
    ${({ theme }) => theme.fonts['h1sm']}
  }

  @media only screen and ${({ theme }) => theme.devices.tablet} {
    ${({ theme }) => theme.fonts['h1']}
  }
`;

export const H2 = styled.h2`
  ${({ theme }) => theme.fonts['h2xs']}
  text-transform: uppercase;

  @media ${({ theme }) => theme.devices.mobileL} {
    ${({ theme }) => theme.fonts['h2s']}
  }

  @media only screen and ${({ theme }) => theme.devices.tablet} {
    ${({ theme }) => theme.fonts['h2']}
  }
`;

export const CurrentTemp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 55%;

  @media ${({ theme }) => theme.devices.mobileL} {
    width: 65%;
  }

  @media ${({ theme }) => theme.devices.tableS} {
    width: 75%;
  }

  @media only screen and ${({ theme }) => theme.devices.tablet} {
    width: 100%;
  }
`;

export const Temperature = styled.p`
  ${({ theme }) => theme.fonts['textMediumBig']}

  @media ${({ theme }) => theme.devices.mobileL} {
    ${({ theme }) => theme.fonts['textBig']}
  }

  @media only screen and ${({ theme }) => theme.devices.tablet} {
    ${({ theme }) => theme.fonts['textExtraBig']}
  }
`;

export const Status = styled.p`
  ${({ theme }) => theme.fonts['textSmall']}
  text-transform: uppercase;

  @media ${({ theme }) => theme.devices.mobileL} {
    ${({ theme }) => theme.fonts['text']}
  }
`;
