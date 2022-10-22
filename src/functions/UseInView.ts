import { useState, useRef, useEffect } from "react";

const UseInView = (type: string, options: object) => {
  const ElementRef = useRef<any>(null);
  const [inView, setInView] = useState(false);

  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;

    setInView(entry.isIntersecting);
  }, options);

  useEffect(() => {
    if (ElementRef.current) observer.observe(ElementRef.current);

    return () => {
      observer.unobserve(ElementRef.current);
    };
  }, []);

  return { ElementRef, inView };
};

export default UseInView;
