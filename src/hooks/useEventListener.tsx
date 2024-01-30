import { useEffect, useRef } from "react";

type EventCallback = (e: Event) => void;

interface useEventListenerOptions {
  target?: EventTarget;
  type: string;
  listener: EventCallback;
}

const useEventListener = ({
  target = window,
  type,
  listener,
}: useEventListenerOptions): void => {
  const listenerRef = useRef<EventCallback>(listener);

  useEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    const eventListener: EventCallback = (event) => {
      listenerRef.current(event);
    };

    target.addEventListener(type, eventListener);

    return () => {
      target.removeEventListener(type, eventListener);
    };
  }, [target, type, listener]);
};

export default useEventListener;
