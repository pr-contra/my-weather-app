import React from 'react';
import PropTypes from 'prop-types';
import { getIconUrl } from '../services';
import { convertUnixTimeToDate } from '../utils/time';

export const Forecast = ({ forecast }) => {
  return (
    <section className="forecast">
      <h2>Weekly Forecast</h2>
      <div>
        <ol style={{ whiteSpace: 'nowrap' }}>
          {forecast.map((day, index) => (
            <li key={`${day.dt}${index}`}>
              <div>
                <div>Date: {convertUnixTimeToDate(day.dt)}</div>
                <div>Sunrise: {convertUnixTimeToDate(day.sunrise)}</div>
                <div>Sunset: {convertUnixTimeToDate(day.sunset)}</div>
                <div>
                  <strong>Temp:{day.temp.day}°C</strong>
                </div>
                <div>Min Temp:{day.temp.min}°C</div>
                <div>Max Temp:{day.temp.max}°C</div>
                <div>
                  <strong>Feels like: {day.feels_like.day}°C</strong>
                </div>
                <div>Feels like in Morning:{day.feels_like.morn}°C</div>
                <div>Feels like in Evening:{day.feels_like.eve}°C</div>
                <div>Feels like in Night:{day.feels_like.night}°C</div>
                <div>Humidity: {day.humidity}%</div>
                <div>Pressure: {day.pressure}hPa</div>
                <div>Uvi: {day.uvi}</div>
                <div>Visibility: {day.visibility}</div>
                <div>Wind Speed: {day.wind_speed}</div>
                {day.weather.map(condition => (
                  <div key={condition.id}>
                    <img
                      src={getIconUrl(condition.icon)}
                      alt={condition.main}
                    />{' '}
                    {condition.main} {condition.description}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

Forecast.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.shape()),
};

Forecast.defaultProps = {
  forecast: undefined,
};
