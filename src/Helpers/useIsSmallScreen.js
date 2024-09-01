import { useState, useEffect } from 'react';

function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1439);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 1439);
    }

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallScreen;
}

export default useIsSmallScreen;