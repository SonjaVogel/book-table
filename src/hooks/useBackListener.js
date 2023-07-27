import { useEffect } from 'react';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const useBackListener = (callback) => {
  useEffect(() => {
    const unlisten = history.listen(({ action }) => {
      if (action === 'POP') {
        callback();
      }
    });

    return unlisten;
  }, [callback]);
};