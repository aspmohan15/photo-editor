import React from "react";
import Editor from "../components/Editor/Editor";
import styles from "../styles/MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.mainLayoutContainer}>
      <Editor />
    </div>
  );
};

export default MainLayout;
