import React, { memo, useContext } from 'react';
import { Container } from './App.styled';
import { Locations, Search, Weather } from './components';

import { UserLocationContext } from './context';

const App = () => {
  const { userLocation } = useContext(UserLocationContext);

  return (
    <>
      <header>The Weather App ⛅</header>
      <div>
        <h2>{`User's location coordinates`}</h2>
        {userLocation && (
          <ul>
            <li>{`Lat: ${userLocation.lat}`}</li>
            <li>{`Lon: ${userLocation.lon}`}</li>
          </ul>
        )}
      </div>

      <Container>
        <Search />
        <Locations />
        <Weather />
      </Container>
    </>
  );
};

export default memo(App);
