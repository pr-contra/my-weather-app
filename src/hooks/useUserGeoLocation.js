import { useEffect, useState } from 'react';
import { DEFAULT_LAT, DEFAULT_LON } from '../utils';

// export const useUserGeoLocation = (userClicked) => {
export const useUserGeoLocation = () => {
  const [location, setLocation] = useState({
    coordinates: { lat: '', lon: '' },
    loaded: false,
  });

  const onSuccess = location => {
    setLocation({
      coordinates: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      },
      accepted: true,
      loaded: true,
    });
  };

  const onError = error => {
    setLocation({
      coordinates: {
        lat: DEFAULT_LAT,
        lon: DEFAULT_LON,
      },
      error,
      loaded: true,
    });
  };

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then(result => {
      switch (result.state) {
        case 'granted':
          navigator.geolocation.getCurrentPosition(onSuccess);
          break;
        case 'prompt':
          navigator.geolocation.getCurrentPosition(onSuccess, onError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          });
          break;
        default:
          onError();
      }
    });
    // }, [userClicked]);
  }, []);

  return location;
};
