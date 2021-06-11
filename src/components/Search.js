import React, { useCallback, useContext, useState } from 'react';
import { getLocationByName } from '../services';
import { AppStateContext } from '../context';

export const Search = () => {
  const { locations, setLocations, setSelectedLocation } =
    useContext(AppStateContext);
  const [searchText, setSearchText] = useState('');

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
  }, [locations, searchText, setSelectedLocation, setLocations]);

  return (
    <>
      <input
        name="search"
        data-testid="searchLocation"
        onChange={e => setSearchText(e.target.value)}
        placeholder="Search by city or country..."
        type="text"
        value={searchText}
      />
      <button onClick={handleSearchClick} disabled={false}>
        Search
      </button>
    </>
  );
};
