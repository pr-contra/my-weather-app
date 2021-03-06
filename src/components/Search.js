import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { VscSearch } from 'react-icons/vsc';
import { getGeoLocationUrl } from '../services';
import { AppStateContext } from '../context';
import { useRequest } from '../hooks';
import { Input, InputContainer, SearchButton } from './Search.styled';
import { sendToast } from '../utils/toasts';

export const Search = () => {
  const { addToast } = useToasts();

  const { locations, setLocations, setSelectedLocation } =
    useContext(AppStateContext);
  const [searchText, setSearchText] = useState('');
  const [newLocation, doNewLocationRequest] = useRequest();

  const handleSearchClick = useCallback(() => {
    if (!searchText) return;
    if (locations.find(location => location.name === searchText)) {
      sendToast(addToast, `${searchText} already exists`, 'warning');
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
      sendToast(
        addToast,
        `Added ${newLocation.data[0].name} with success`,
        'success',
      );
    }
  }, [addToast, newLocation, setSelectedLocation, setLocations]);

  useEffect(() => {
    if (
      newLocation.loaded &&
      newLocation.data &&
      newLocation.data.length <= 0
    ) {
      sendToast(addToast, `Couldn't find ${searchText}`, 'warning');

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
