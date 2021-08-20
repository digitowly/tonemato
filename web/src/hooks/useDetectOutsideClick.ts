import { useEffect } from 'react';

export function useDetectOutsideClick(
  ref: React.MutableRefObject<HTMLElement>,
  onOutsideClick: () => void
) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onOutsideClick();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);
}
