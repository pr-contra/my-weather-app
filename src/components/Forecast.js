import React from 'react';
import PropTypes from 'prop-types';
import { getIconUrl } from '../services';
import { getFormattedDateNameShort } from '../utils/time';
import { Img, Li, Section, Ul, Description } from './Forecast.styled';

export const Forecast = ({ forecast }) => {
  return (
    <Section>
      <Ul>
        {forecast.map((day, index) => {
          if (!index) return;
          return (
            <Li key={`${day.dt}${index}`}>
              <span>{getFormattedDateNameShort(day.dt)}</span>
              <Img
                key={day.weather[0].id}
                src={getIconUrl(day.weather[0].icon)}
                alt={day.weather[0].main}
              />
              <Description>{day.weather[0].main}</Description>
              <span>{`${Math.round(day.temp.min)}° | ${Math.round(
                day.temp.max,
              )}°`}</span>
            </Li>
          );
        })}
      </Ul>
    </Section>
  );
};

Forecast.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.shape()),
};

Forecast.defaultProps = {
  forecast: undefined,
};
