import { css } from 'styled-components';

const getTextStyles = (fontWeight, fontSize) => {
  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    margin: 0;
  `;
};

export const fonts = {
  h1: getTextStyles(700, '2.5rem'),
  h1sm: getTextStyles(700, '2.2rem'),
  h1s: getTextStyles(700, '2rem'),
  h1xs: getTextStyles(700, '1.5rem'),
  h2: getTextStyles(300, '1.5rem'),
  h2sm: getTextStyles(300, '1.375rem'),
  h2s: getTextStyles(300, '1.25rem'),
  h2xs: getTextStyles(300, '1rem'),
  textExtraBig: getTextStyles(300, '3rem'),
  textBig: getTextStyles(300, '2rem'),
  textMediumBig: getTextStyles(300, '1.5rem'),
  textMedium: getTextStyles(300, '1.25rem'),
  text: getTextStyles(300, '1rem'),
  textBold: getTextStyles(600, '1rem'),
  textSmall: getTextStyles(300, '	0.875rem'),
  textSmallBold: getTextStyles(600, '	0.875rem'),
  loading: getTextStyles(400, '4rem'),
};
