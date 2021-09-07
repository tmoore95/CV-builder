import React from "react";
import styles from "./FormLayout.module.css";

const FormLayout = (props) => {
  return (
    <div>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default FormLayout;
