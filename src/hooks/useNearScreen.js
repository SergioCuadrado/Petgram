import { useEffect, useState, useRef } from "react";
// Custom Hook para que vaya cargando las diferentes imagenes(article) cuando vayas avanzando por la pagina.
export function useNearScreen() {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
    //window.intersectionObserver te indica que se esta mostrando en el DOM, viewport y esta mostrando
  }, [element]);

  return [show, element];
}
