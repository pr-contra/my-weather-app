import React, { useContext, useEffect } from 'react';
import { Current } from './Current';
import { Forecast } from './Forecast';
import { getWeatherByGeoLocationUrl } from '../services';
import { AppStateContext } from '../context';
import { useRequest } from '../hooks';

export const Weather = () => {
  const { selectedLocation } = useContext(AppStateContext);
  const [weather, doWeatherRequest] = useRequest();

  useEffect(() => {
    if (!selectedLocation) return;

    (async () => {
      await doWeatherRequest(
        getWeatherByGeoLocationUrl(selectedLocation.lat, selectedLocation.lon),
      );
    })();
  }, [selectedLocation, doWeatherRequest]);

  return (
    <>
      {selectedLocation && weather.data.current && weather.data.daily && (
        <div>
          <hr />
          <h2>{`Selected Location: ${selectedLocation.name}`}</h2>
          <Current weather={weather.data.current} />
          <Forecast forecast={weather.data.daily} />
        </div>
      )}
    </>
  );
};
