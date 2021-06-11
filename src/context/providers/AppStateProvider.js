import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppStateContext, UserLocationContext } from '../';

export const AppStateProvider = ({ children }) => {
  const { userLocation } = useContext(UserLocationContext);

  const [locations, setLocations] = useState(() => {
    const savedLocations = localStorage.getItem('locations');
    return savedLocations ? JSON.parse(savedLocations) : [];
  });
  const [selectedLocation, setSelectedLocation] = useState();

  useEffect(
    () => localStorage.setItem('locations', JSON.stringify(locations)),
    [locations],
  );

  // Sets initially selected location as the User's geo location
  useEffect(() => {
    setSelectedLocation(userLocation);
  }, [userLocation]);

  return (
    <AppStateContext.Provider
      value={{ locations, setLocations, selectedLocation, setSelectedLocation }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
