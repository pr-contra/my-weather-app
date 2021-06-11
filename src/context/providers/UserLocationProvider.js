import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UserLocationContext } from '../';
import { useUserGeoLocation } from '../../hooks';
import { getLocationByCoordinates } from '../../services';

export const UserLocationProvider = ({ children }) => {
  const userGeoLocation = useUserGeoLocation();
  // const userGeoLocation = useUserGeoLocation(userClicked);
  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    if (!userGeoLocation.loaded) return;

    (async () => {
      await getLocationByCoordinates(
        userGeoLocation.coordinates.lat,
        userGeoLocation.coordinates.lon,
      ).then(data => {
        setUserLocation({
          userLocation: data[0],
        });
      });
    })();
  }, [userGeoLocation]);

  return (
    <UserLocationContext.Provider value={userLocation}>
      {children}
    </UserLocationContext.Provider>
  );
};

UserLocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
