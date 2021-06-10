import { useCallback, useEffect, useReducer, useState } from 'react';

export const useRequest = () => {
  const [url, setUrl] = useState(null);

  const [state, dispatch] = useReducer(requestReducer, {
    ...requestReducer.initialState,
  });

  const fetchUrl = useCallback(async () => {
    try {
      dispatch({ type: requestReducer.types.REQUESTED });

      await fetch(url).then(response => {
        if (!response.ok) {
          throw new Error('Ups, something on our servers went wrong!');
        }

        response.json().then(function (data) {
          dispatch({
            type: requestReducer.types.RECEIVED,
            data,
          });
        });
      });
    } catch (err) {
      dispatch({ type: requestReducer.types.ERROR });
    }
  }, [url]);

  useEffect(() => {
    if (!url) return;
    fetchUrl();
  }, [url, fetchUrl]);

  const doRequest = url => {
    setUrl(url);
  };

  return [state, doRequest];
};

function requestReducer(state, action) {
  switch (action.type) {
    case requestReducer.types.REQUESTED:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        loaded: false,
      };
    case requestReducer.types.RECEIVED:
      return {
        ...state,
        data: action.data,
        isLoading: false,
        hasError: false,
        loaded: true,
      };
    case requestReducer.types.ERROR:
      return { ...state, isLoading: false, hasError: true, loaded: true };
    default:
      return state;
  }
}

requestReducer.initialState = {
  isLoading: false,
  hasError: false,
  loaded: false,
};

requestReducer.types = {
  REQUESTED: 'REQUESTED',
  RECEIVED: 'RECEIVED',
  ERROR: 'ERROR',
};
