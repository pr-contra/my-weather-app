import React, { useContext, useEffect, useState } from 'react';
import { Current } from './Current';
import { Forecast } from './Forecast';
import { getWeather } from '../services';
import { AppStateContext } from '../context';

export const Weather = () => {
  const { selectedLocation } = useContext(AppStateContext);
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
          <Current weather={weather.current} />
          <Forecast forecast={weather.daily} />
        </div>
      )}
    </>
  );
};
