import {
  getGeoLocationUrl,
  getLocationUrl,
  getWeatherByGeoLocationUrl,
} from './endpoints';

export async function getLocationByName(searchTerm) {
  const location = await fetch(getGeoLocationUrl(searchTerm));

  if (!location.ok) throw new Error(location.status);

  return location.json();
}

export async function getLocationByCoordinates(lat, lon) {
  const location = await fetch(getLocationUrl(lat, lon));

  if (!location.ok) throw new Error(location.status);

  return location.json();
}

export async function getWeather(location) {
  const weather = await fetch(
    getWeatherByGeoLocationUrl(location.lat, location.lon),
  );

  if (!weather.ok) throw new Error(weather.status);

  const json = await weather.json();
  return json;
}
