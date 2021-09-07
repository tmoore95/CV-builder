import styles from "./PageLayout.module.css";
import React from "react";

const PageLayout = (props) => {
  return <div className={styles.body}>{props.children}</div>;
};

export default PageLayout;
