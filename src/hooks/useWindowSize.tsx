import { useState } from "react";
import useEventListener from "./useEventListener";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener({
    type: "resize",
    listener: () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    },
  });

  return windowSize;
};

export default useWindowSize;
