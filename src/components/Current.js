import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getIconUrl } from '../services';
import { AppStateContext } from '../context';
import { getFormattedFullDate } from '../utils/time';
import {
  CurrentTemp,
  Img,
  H1,
  H2,
  Section,
  Status,
  Temperature,
} from './Current.styled';

export const Current = ({ weather }) => {
  const { selectedLocation } = useContext(AppStateContext);

  return (
    <Section>
      <H1>{`${selectedLocation.name} - ${selectedLocation.country}`}</H1>
      <H2>{getFormattedFullDate(weather.dt)}</H2>
      <CurrentTemp key={weather.weather[0].id}>
        <Img
          src={getIconUrl(weather.weather[0].icon, true)}
          alt={weather.weather[0].main}
        />
        <Temperature>{Math.round(weather.temp)}°C</Temperature>
        <Status>{weather.weather[0].main}</Status>
      </CurrentTemp>
    </Section>
  );
};

Current.propTypes = {
  weather: PropTypes.shape(),
};
