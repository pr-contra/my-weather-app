import React, { useContext, useEffect, useMemo, useState } from 'react';
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

  useEffect(() => {
    setSelectedLocation(userLocation);
  }, [userLocation]);

  const value = useMemo(
    () => ({
      locations,
      setLocations,
      selectedLocation,
      setSelectedLocation,
    }),
    [locations, selectedLocation],
  );

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
