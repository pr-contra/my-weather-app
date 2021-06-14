import { useEffect, useReducer, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

export const useRequest = () => {
  const { addToast } = useToasts();
  const [url, setUrl] = useState(undefined);
  const [state, dispatch] = useReducer(requestReducer, {
    ...requestReducer.initialState,
  });

  useEffect(() => {
    const abortController = new AbortController();
    if (!url) return;

    (async () => {
      dispatch({ type: requestReducer.types.REQUESTED });

      try {
        await fetch(url, {
          signal: abortController.signal,
        }).then(response => {
          if (!response.ok) {
            throw new Error(
              `Ups, something went wrong! code: ${response.status}`,
            );
          }

          response.json().then(function (data) {
            if (!abortController.signal.aborted) {
              dispatch({
                type: requestReducer.types.RECEIVED,
                data,
              });
              setUrl(null);
            }
          });
        });
      } catch (err) {
        if (!abortController.signal.aborted) {
          dispatch({ type: requestReducer.types.ERROR, error: err });
          setUrl(null);
        }
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [addToast, url]);

  const doRequest = url => {
    setUrl(url);
  };

  return [state, doRequest];
};

const requestReducer = (state = requestReducer.initialState, action) => {
  switch (action.type) {
    case requestReducer.types.REQUESTED:
      return {
        ...requestReducer.initialState,
        isLoading: true,
        hasError: false,
        loaded: false,
      };
    case requestReducer.types.RECEIVED:
      return {
        ...requestReducer.initialState,
        data: action.data,
        isLoading: false,
        hasError: false,
        loaded: true,
      };
    case requestReducer.types.ERROR:
      return {
        ...requestReducer.initialState,
        error: action.error,
        isLoading: false,
        hasError: true,
        loaded: true,
      };
    default:
      return state;
  }
};

requestReducer.initialState = {
  data: undefined,
  isLoading: false,
  hasError: false,
  loaded: false,
};

requestReducer.types = {
  REQUESTED: 'REQUESTED',
  RECEIVED: 'RECEIVED',
  ERROR: 'ERROR',
};
