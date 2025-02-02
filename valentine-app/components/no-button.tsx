"use client";

import { useState } from "react";
import styles from "./no-button.module.css";

export default function NoButton() {
  const [x, setX] = useState(54);
  const [y, setY] = useState(54);
  const [z, setZ] = useState(54);
  const [w, setW] = useState(54);

  function mouseOver() {
      var randomNumber = Math.floor(Math.random() * 4) + 1;
      console.log(randomNumber);
    if (randomNumber === 1) {
        setX(Math.random() * 100);
    } else if (randomNumber === 2 ) {
        setY(Math.random() * 100);
    } else if (randomNumber === 3) {
        setZ(Math.random() * 100)
    } else {
        setW(Math.random() * 100)
    }
  }


  let noStyle = {
    left: x + "%",
    top: y + "%",
  };

  return (
    <div className={styles.container}>
      <button onMouseOver={mouseOver} onClick={mouseOver} style={noStyle} className={styles['no-button']}>
        No
      </button>
    </div>
  );
}
