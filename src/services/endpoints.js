const API_KEY = process.env.REACT_APP_API_KEY;
const API_DATA_BASE_URL = 'http://api.openweathermap.org/data/2.5';
const API_GEO_BASE_URL = 'http://api.openweathermap.org/geo/1.0';
const ICONS_BASE_URL = 'http://openweathermap.org/img/wn';

export const getGeoLocationUrl = searchText =>
  `${API_GEO_BASE_URL}/direct?q=${searchText}&appid=${API_KEY}`;

export const getLocationUrl = (lat, lon) =>
  `${API_GEO_BASE_URL}/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

export const getWeatherByGeoLocationUrl = (lat, lon) =>
  `${API_DATA_BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`;

export const getIconUrl = (iconCode, isBig) => {
  return `${ICONS_BASE_URL}/${iconCode}${isBig ? '@4x' : ''}.png`;
};
