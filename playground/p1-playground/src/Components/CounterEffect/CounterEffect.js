import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAX_COUNT = 3;

const CounterEffect = () => {
  const [counter, setcounter] = useState(0);

  const buttonRef = useRef();
  const counterHeading = useRef();

  const addSecondaryCounter = () => buttonRef.current.click();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(counterHeading.current, { y: 10, duration: 0.2, ease: "ease.out" });
    tl.to(counterHeading.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    });
  }, []);

  useEffect(() => {
    if (counter === MAX_COUNT) {
      const tl = gsap.timeline();

      tl.to(counterHeading.current, { y: 10, duration: 0.2, ease: "ease.out" });
      tl.to(counterHeading.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      });

      console.log("Ya es mucho");
    }
  }, [counter]);

  const addCounter = () => setcounter((prev) => prev + 1);

  return (
    <div>
      <h2 ref={counterHeading}>El conteo es {counter}</h2>
      <button onClick={addCounter} ref={buttonRef}>
        Agregar
      </button>
      <button onClick={addSecondaryCounter}>Hago lo mismo</button>
    </div>
  );
};

export default CounterEffect;
