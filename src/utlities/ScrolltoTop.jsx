import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScrolltoTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const unlisten = () => window.scrollTo(0, 0);
    return () => {
      unlisten();
    };
  }, [pathname]);
  return null;
};

export default ScrolltoTop;
