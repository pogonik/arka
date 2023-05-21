import { useState, useLayoutEffect } from "react"

const useResize = (callback) => {
  const [winWidth, setWidth] = useState(0)
  const handleResize = () => setWidth(window.innerWidth)

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return winWidth;
};

export default useResize