import React, { useContext, useCallback } from 'react';
import { AppStateContext, UserLocationContext } from '../context';

export const Locations = () => {
  const { userLocation } = useContext(UserLocationContext);
  const { locations, setLocations, selectedLocation, setSelectedLocation } =
    useContext(AppStateContext);

  const handleDeleteClick = useCallback(
    (e, index) => {
      e.stopPropagation();

      const newLocations = [...locations];
      const cleanAfterDelete =
        newLocations[index].name === selectedLocation.name;

      newLocations.splice(index, 1);
      setLocations([...newLocations]);

      if (cleanAfterDelete) setSelectedLocation();
    },
    [locations, setLocations, selectedLocation, setSelectedLocation],
  );

  return (
    <section className="locations">
      <div>
        <h2>Locations</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {userLocation && (
              <tr
                key={`${userLocation.country}`}
                onClick={() => setSelectedLocation(userLocation)}
              >
                <td>{`${userLocation.name} - ${userLocation.country} - Your current location`}</td>
              </tr>
            )}

            {locations.map((location, index) => (
              <tr
                key={`${location.country}${index}`}
                onClick={() => setSelectedLocation(location)}
              >
                <td>
                  {`${location.name} - ${location.country}`}
                  <button onClick={e => handleDeleteClick(e, index)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
