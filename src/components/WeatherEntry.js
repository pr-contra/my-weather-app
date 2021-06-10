import React from 'react';
import PropTypes from 'prop-types';
import { getIconUrl } from '../services';
import { convertUnixTimeToDate } from '../utils/time';

export const WeatherEntry = ({ weather }) => {
  return (
    <section className="current">
      <h2>Current Weather</h2>
      <div>Date: {convertUnixTimeToDate(weather.dt)}</div>
      <div>Sunrise: {convertUnixTimeToDate(weather.sunrise)}</div>
      <div>Sunset: {convertUnixTimeToDate(weather.sunset)}</div>
      <div>
        <strong>Current Temp:{weather.temp}°C</strong>
      </div>
      <div>
        <strong>Feels like: {weather.feels_like}°C</strong>
      </div>
      <div>Humidity: {weather.humidity}%</div>
      <div>Pressure: {weather.pressure}hPa</div>
      <div>Uvi: {weather.uvi}</div>
      <div>Visibility: {weather.visibility}</div>
      <div>Wind Speed: {weather.wind_speed}</div>
      {weather.weather.map(condition => (
        <div key={condition.id}>
          <img src={getIconUrl(condition.icon)} alt={condition.main} />{' '}
          {condition.main} {condition.description}
        </div>
      ))}
    </section>
  );
};

WeatherEntry.propTypes = {
  weather: PropTypes.shape(),
};
