import { useEffect } from 'react';

import { Inview } from 'tailwind-inview';

export const useInview = () => {
  useEffect(() => {
    const inview = new Inview();
    return () => {
      inview.stop();
    };
  }, []);
};
