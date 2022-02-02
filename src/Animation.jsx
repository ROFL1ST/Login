import React, { useCallback, useEffect, useRef, useState } from "react";

import { useTransition, animated } from "react-spring";
import styles from "./animation/style.module.css";
function Animation() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#ffff" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(["Welcome to", "Peduli Lindungi"]), 2000)
    );
    ref.current.push(setTimeout(() => set(["Stay", "Healthy"]), 5000));
    ref.current.push(
      setTimeout(() => set(["From COVID-19", "Click Here!"]), 8000)
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="2 bg-blue-600 flex flex-col justify-center h-full items-center">
      <div className="justify-start">
        <h1 className="text-5xl font-bold text-white">
          {transitions(({ innerHeight, ...rest }, item) => (
            <animated.div
              className={styles.transitionsItem}
              style={rest}
              onClick={reset}
            >
              <animated.div style={{ overflow: "hidden", height: innerHeight }}>
                {item}
              </animated.div>
            </animated.div>
          ))}
        </h1>
      </div>
      <p className="w-8/12 pt-7 text-white font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        debitis porro rem, vero blanditiis autem.
      </p>
    </div>
  );
}

export default Animation;
