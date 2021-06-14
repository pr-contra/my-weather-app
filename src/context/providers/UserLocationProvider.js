import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserLocationContext } from '../';
import { useRequest, useUserGeoLocation } from '../../hooks';
import { getLocationUrl } from '../../services';
import {
  LoadingIcon,
  LoadingWrapper,
  ErrorMessage,
  ErrorWrapper,
} from '../../components/common';

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

  console.log(userGeoLocation);

  return (
    <>
      {userLocation.hasError && (
        <ErrorWrapper>
          <ErrorMessage>
            {`This project requires a valid API_KEY. Check`}
            <a
              href="https://openweathermap.org/"
              target="_blank"
              rel="noreferrer"
            >{` https://openweathermap.org/`}</a>
            {` for more information`}
          </ErrorMessage>
        </ErrorWrapper>
      )}
      {(!userGeoLocation.loaded || userLocation.isLoading) && (
        <LoadingWrapper>
          <LoadingIcon />
        </LoadingWrapper>
      )}
      {userLocation.loaded && userLocation.data && (
        <UserLocationContext.Provider
          value={{
            userLocation: userLocation.data[0],
            accepted: userGeoLocation.accepted,
          }}
        >
          {children}
        </UserLocationContext.Provider>
      )}
    </>
  );
};

UserLocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
