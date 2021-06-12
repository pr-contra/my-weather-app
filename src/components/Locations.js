import React, { useContext, useCallback } from 'react';
import { useToasts } from 'react-toast-notifications';
import { AppStateContext, UserLocationContext } from '../context';
import {
  DeleteButton,
  DeleteIcon,
  Location,
  LocationIcon,
  Section,
} from './Localizations.styled';
import { sendToast } from '../utils/toasts';

export const Locations = () => {
  const { addToast } = useToasts();

  const { userLocation, accepted } = useContext(UserLocationContext);
  const { locations, setLocations, selectedLocation, setSelectedLocation } =
    useContext(AppStateContext);

  const handleDeleteClick = useCallback(
    (e, index) => {
      e.stopPropagation();
      const newLocations = [...locations];
      const showDefaultLocation =
        selectedLocation && newLocations[index].name === selectedLocation.name;

      const removed = newLocations.splice(index, 1);
      setLocations([...newLocations]);

      sendToast(addToast, `Removed ${removed[0].name} with success`, 'success');

      if (showDefaultLocation) setSelectedLocation(userLocation);
    },
    [
      addToast,
      locations,
      setLocations,
      selectedLocation,
      setSelectedLocation,
      userLocation,
    ],
  );

  return (
    <Section>
      {userLocation && (
        <Location onClick={() => setSelectedLocation(userLocation)}>
          <span>{userLocation.name}</span>
          {accepted && <LocationIcon />}
        </Location>
      )}

      {locations.map((location, index) => (
        <Location
          key={`${location.country}${index}`}
          onClick={() => {
            setSelectedLocation(location);
          }}
        >
          <span>{location.name}</span>
          <DeleteButton onClick={e => handleDeleteClick(e, index)}>
            <DeleteIcon />
          </DeleteButton>
        </Location>
      ))}
    </Section>
  );
};
