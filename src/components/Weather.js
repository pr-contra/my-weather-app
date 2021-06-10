import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { WeatherEntry } from './WeatherEntry';
import { Forecast } from './Forecast';
import { getWeather } from '../services';

export const Weather = ({ selectedLocation }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    (async function () {
      if (selectedLocation) {
        await getWeather(selectedLocation).then(data => {
          setWeather(data);
        });
      }
    })();
  }, [selectedLocation]);

  return (
    <>
      {selectedLocation && weather.current && weather.daily && (
        <div>
          <hr />
          <h2>{`Selected Location: ${selectedLocation.name}`}</h2>
          <WeatherEntry weather={weather.current} />
          <Forecast forecast={weather.daily} />
        </div>
      )}
    </>
  );
};

Weather.propTypes = {
  selectedLocation: PropTypes.shape(),
};

Weather.defaultProps = {
  selectedLocation: undefined,
};
