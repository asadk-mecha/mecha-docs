import React from "react";

import styles from "./styles.module.css";
import Image from "";

const Figure = ({ src, alt }) => {
  return <img src={src} className={styles.figure} alt={alt} />;
};

export default Figure;
