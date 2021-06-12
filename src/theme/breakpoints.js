const size = {
  xs: '320px',
  s: '375px',
  sm: '480px',
  m: '768px',
  l: '1024px',
  xl: '1200px',
};

export const devices = {
  mobile: `(min-width: ${size.xs})`,
  mobileL: `(min-width: ${size.s})`,
  tabletS: `(min-width: ${size.sm})`,
  tablet: `(min-width: ${size.m})`,
  laptop: `(min-width: ${size.l})`,
  desktop: `(min-width: ${size.xl})`,
};
