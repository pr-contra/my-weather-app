import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { VscSearch } from 'react-icons/vsc';
import { getGeoLocationUrl } from '../services';
import { AppStateContext } from '../context';
import { useRequest } from '../hooks';
import { Input, InputContainer, SearchButton } from './Search.styled';

export const Search = () => {
  const { addToast } = useToasts();

  const { locations, setLocations, setSelectedLocation } =
    useContext(AppStateContext);
  const [searchText, setSearchText] = useState('');
  const [newLocation, doNewLocationRequest] = useRequest();

  const handleSearchClick = useCallback(() => {
    if (!searchText) return;
    if (locations.find(location => location.name === searchText)) {
      addToast(`${searchText} already exists`, {
        appearance: 'warning',
        autoDismiss: true,
        autoDismissTimeout: 5000,
      });
      setSearchText('');
      return;
    }

    (async () => {
      await doNewLocationRequest(getGeoLocationUrl(searchText));
    })();
  }, [addToast, doNewLocationRequest, locations, searchText]);

  useEffect(() => {
    if (newLocation.loaded && newLocation.data && newLocation.data.length) {
      setSelectedLocation({ ...newLocation.data[0], isNew: true });
      setLocations(prevState => [...prevState, newLocation.data[0]]);
      setSearchText('');
      addToast(`Added ${newLocation.data[0].name} with success`, {
        appearance: 'success',
        autoDismiss: true,
        autoDismissTimeout: 5000,
      });
    }
  }, [addToast, newLocation, setSelectedLocation, setLocations]);

  useEffect(() => {
    if (
      newLocation.loaded &&
      newLocation.data &&
      newLocation.data.length <= 0
    ) {
      addToast(`Couldn't find ${searchText}`, {
        appearance: 'warning',
        autoDismiss: true,
        autoDismissTimeout: 5000,
      });
      setSearchText('');
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addToast, newLocation]);

  return (
    <InputContainer>
      <Input
        name="search"
        data-testid="searchLocation"
        onChange={e => setSearchText(e.target.value)}
        placeholder="Search city"
        type="text"
        value={searchText}
      />
      <SearchButton onClick={handleSearchClick} disabled={false}>
        <VscSearch />
      </SearchButton>
    </InputContainer>
  );
};
