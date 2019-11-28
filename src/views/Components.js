import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './Components.module.scss';

const Components = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, { x: '-100%', opasity: 0, scale: 5 });
  });

  return (
    <div>
      <h2 className="title is-3">Components</h2>
      <div ref={boxRef} className={styles.box} />
    </div>
  );
};

export default Components;
