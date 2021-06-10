import React from 'react';
import PropTypes from 'prop-types';

export const Locations = ({
  handleDeleteClick,
  locations,
  setSelectedLocation,
  userLocation,
}) => {
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

Locations.propTypes = {
  handleDeleteClick: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(PropTypes.shape()),
  setSelectedLocation: PropTypes.func.isRequired,
  userLocation: PropTypes.shape(),
};

Locations.defaultProps = {
  locations: undefined,
  userLocation: undefined,
};
