import React from "react";
import styles from "./Main.module.css";
import Controls from "../Controls/Controls";
import Editor from "../Editor/Editor";
import NavBar from "../NavBar/NavBar";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        {/* nav upload download */}
        <NavBar />
        {/* edit screen */}
        <Editor />
        {/* controls */}
        <Controls />
      </div>
    </div>
  );
};

export default Main;
