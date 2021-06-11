import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getGeoLocationUrl } from '../services';
import { AppStateContext } from '../context';
import { useRequest } from '../hooks';

export const Search = () => {
  const { locations, setLocations, setSelectedLocation } =
    useContext(AppStateContext);
  const [searchText, setSearchText] = useState('');
  const [newLocation, doNewLocationRequest] = useRequest();

  const handleSearchClick = useCallback(() => {
    if (
      !searchText ||
      locations.find(location => location.name === searchText)
    ) {
      setSearchText('');
      return;
    }

    (async () => {
      await doNewLocationRequest(getGeoLocationUrl(searchText));
    })();
  }, [doNewLocationRequest, locations, searchText]);

  useEffect(() => {
    if (newLocation.loaded && newLocation.data.length > 0) {
      setSelectedLocation(newLocation.data[0]);
      setLocations(prevState => [...prevState, newLocation.data[0]]);
      setSearchText('');
    }
  }, [newLocation, setSelectedLocation, setLocations]);

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
