import { useEffect } from 'react';
import { backdropVar } from '../lib/apollo/cache';

export function useBackdrop() {
  useEffect(() => {
    backdropVar({ display: true, hideOnClick: false });
    return () => {
      backdropVar({ display: false, hideOnClick: false });
    };
  }, []);
}
