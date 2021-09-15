import styles from "./PageLayout.module.scss";
import React from "react";

const PageLayout = (props) => {
  return <div className={styles.body}>{props.children}</div>;
};

export default PageLayout;
