import React, { useCallback, useEffect, useState } from 'react';
import { Container } from './App.styled';
import { Locations, Search, Weather } from './components';
import { getLocationByCoordinates, getLocationByName } from './services';
import { useUserLocation } from './hooks';

const App = () => {
  const userGeoLocation = useUserLocation();
  const [userLocation, setUserLocation] = useState();
  const [searchText, setSearchText] = useState('');
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
    if (!userGeoLocation.loaded) return;

    const fetchData = async () => {
      await getLocationByCoordinates(
        userGeoLocation.coordinates.lat,
        userGeoLocation.coordinates.lon,
      ).then(data => {
        setSelectedLocation(data[0]);
        setUserLocation(data[0]);
      });
    };

    fetchData();
  }, [userGeoLocation]);

  const handleSearchClick = useCallback(async () => {
    await getLocationByName(searchText)
      .then(data => {
        if (locations.find(location => location.name === data[0].name)) {
          // if (locations.find(location => location.name === searchText)) {
          setSearchText('');
          return;
        }
        setSelectedLocation(data[0]);
        setLocations(prevState => [...prevState, data[0]]);
      })
      .catch(error => {
        if (error === 404) {
          // Trigger Not Found notification
        }

        // if (error !== 200) throw new Error('Something on our servers went wrong!);
      });
    setSearchText('');
  }, [locations, searchText]);

  const handleDeleteClick = useCallback(
    (e, index) => {
      e.stopPropagation();

      const newLocations = [...locations];
      newLocations.splice(index, 1);
      setLocations([...newLocations]);
      setSelectedLocation();
    },
    [locations],
  );

  return (
    <>
      <header>The Weather App ⛅</header>
      <div>
        <h2>{`User's location coordinates`}</h2>
        {userGeoLocation.loaded && (
          <ul>
            <li>{`Lat: ${userGeoLocation.coordinates.lat}`}</li>
            <li>{`Lon: ${userGeoLocation.coordinates.lon}`}</li>
          </ul>
        )}
      </div>

      <Container>
        <Search
          handleSearchClick={handleSearchClick}
          handleSearchChange={value => setSearchText(value)}
          searchText={searchText}
        />
        <Locations
          handleDeleteClick={handleDeleteClick}
          locations={locations}
          setSelectedLocation={setSelectedLocation}
          userLocation={userLocation}
        />
        <Weather selectedLocation={selectedLocation} />
      </Container>
    </>
  );
};

export default App;
