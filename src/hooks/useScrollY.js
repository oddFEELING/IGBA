import { useState, useEffect } from 'react';

const useScrollY = () => {
  //-->  using usestate
  const [ScrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    //-->  function to handle scroll
    const handleScroll = (event) => {
      setScrollValue(event.path[1].scrollY);
    };
    //-->  add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    return () => {
      //-->   cleanup
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ScrollValue]);

  return ScrollValue;
};

export default useScrollY;
