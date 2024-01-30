import useEventListener from "./useEventListener";

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
): void => {
  const handleClickOutside = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEventListener({
    target: document,
    type: "mousedown",
    listener: handleClickOutside,
  });
};

export default useOutsideClick;
