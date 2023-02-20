import React from "react";
import styles from "./Main.module.css";
import Editor from "../Editor/Editor";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <Editor/>
      </div>
    </div>
  );
};

export default Main;
