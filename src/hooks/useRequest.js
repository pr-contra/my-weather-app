import { useEffect, useReducer, useState } from 'react';

export const useRequest = () => {
  const [url, setUrl] = useState(null);
  const [state, dispatch] = useReducer(requestReducer, {
    ...requestReducer.initialState,
  });

  useEffect(() => {
    let abortRequest = false;
    if (!url) return;

    (async () => {
      dispatch({ type: requestReducer.types.REQUESTED });

      try {
        await fetch(url).then(response => {
          if (!response.ok) {
            throw new Error('Ups, something on our servers went wrong!');
          }

          response.json().then(function (data) {
            if (abortRequest) return;
            dispatch({
              type: requestReducer.types.RECEIVED,
              data,
            });
            setUrl(null);
          });
        });
      } catch (err) {
        if (abortRequest) return;
        dispatch({ type: requestReducer.types.ERROR });
        setUrl(null);
      }
    })();

    return () => {
      abortRequest = true;
    };
  }, [url]);

  const doRequest = url => {
    setUrl(url);
  };

  return [state, doRequest];
};

const requestReducer = (state, action) => {
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
};

requestReducer.initialState = {
  data: [],
  isLoading: false,
  hasError: false,
  loaded: false,
};

requestReducer.types = {
  REQUESTED: 'REQUESTED',
  RECEIVED: 'RECEIVED',
  ERROR: 'ERROR',
};
