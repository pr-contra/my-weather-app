import { useEffect, useState } from 'react';
import { DEFAULT_LAT, DEFAULT_LON } from '../utils';

export const useUserLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: '', lon: '' },
  });

  const onSuccess = location => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      },
    });
  };

  const onError = error => {
    setLocation({
      loaded: true,
      error,
      coordinates: {
        lat: DEFAULT_LAT,
        lon: DEFAULT_LON,
      },
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
  }, []);

  return location;
};
