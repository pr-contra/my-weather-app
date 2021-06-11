import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserLocationContext } from '../';
import { useRequest, useUserGeoLocation } from '../../hooks';
import { getLocationUrl } from '../../services';

export const UserLocationProvider = ({ children }) => {
  const userGeoLocation = useUserGeoLocation();
  const [userLocation, doUserLocationRequest] = useRequest();

  useEffect(() => {
    if (!userGeoLocation.loaded) return;

    (async () => {
      await doUserLocationRequest(
        getLocationUrl(
          userGeoLocation.coordinates.lat,
          userGeoLocation.coordinates.lon,
        ),
      );
    })();
  }, [userGeoLocation, doUserLocationRequest]);

  return (
    <UserLocationContext.Provider
      value={{ userLocation: userLocation.data[0] }}
    >
      {userLocation.isLoading && <p>Loading...</p>}
      {userLocation.loaded && userLocation.data && children}
    </UserLocationContext.Provider>
  );
};

UserLocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
