import React from "react";
import styles from "./Editor.module.css";
import test from "../../assets/images/test.png";
// /home/mohan/Mohan/fullstack/react- Projects/photo-editor/assets/images/test.png

import Image from "next/image";

const Editor = () => {
  return (
    <div className={styles.editor}>
      <div className={styles.editorImageContainer}>
        <Image
          src={test}
          // layout="responsive"
        
          className={styles.editorImage}
        ></Image>
      </div>
    </div>
  );
};

export default Editor;
