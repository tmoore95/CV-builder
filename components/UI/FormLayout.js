import React from "react";
import styles from "./FormLayout.module.scss";

const FormLayout = (props) => {
  return (
    <div>
      <main className={styles.main}>
        <h1>CV Builder</h1>
        {props.children}
      </main>
    </div>
  );
};

export default FormLayout;
