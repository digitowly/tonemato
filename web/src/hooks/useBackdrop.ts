import { useEffect } from 'react';
import { backdropVar } from '../lib/apollo/cache';

export function useBackdrop() {
  useEffect(() => {
    backdropVar(true);
    return () => {
      backdropVar(false);
    };
  }, []);
}
