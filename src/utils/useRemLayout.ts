import { useEffect } from "react";
export default function useRemLayout() {
  useEffect(() => {
    const baseSize = 21;
    function setRem() {
      const scale = document.documentElement.clientWidth / 1920;
      document.documentElement.style.fontSize =
        baseSize * Math.min(scale, 2) + "px";
    }
    window.onload = setRem;
    window.onresize = setRem;
    return () => {
      window.onresize = null;
      window.onload = null;
    };
  }, []);
}
