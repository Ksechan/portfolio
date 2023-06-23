import { useState, useEffect } from 'react';

// pass a query like `(min-width: 768px)`
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);

    mediaQueryList.addEventListener('change', onChange);
    return () => mediaQueryList.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
