import React, { useContext, useEffect } from 'react';
import { Current } from './Current';
import { Forecast } from './Forecast';
import { getWeatherByGeoLocationUrl } from '../services';
import { AppStateContext } from '../context';
import { useRequest } from '../hooks';
import { LoadingIcon, LoadingWrapper } from './common';

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
      {weather.isLoading && (
        <LoadingWrapper>
          <LoadingIcon />
        </LoadingWrapper>
      )}
      {selectedLocation && weather.loaded && weather.data && (
        <>
          <Current weather={weather.data.current} />
          <Forecast forecast={weather.data.daily} />
        </>
      )}
    </>
  );
};
