import React from "react";
import styles from "./CvLayout.module.css";

const CvLayout = (props) => {
  return (
    <div>
      <main className={styles.cv}>{props.children}</main>
    </div>
  );
};

export default CvLayout;
