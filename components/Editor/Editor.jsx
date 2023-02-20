import React, { Suspense } from "react";
import styles from "./Editor.module.css";
import "tui-image-editor/dist/tui-image-editor.css";
import dynamic from "next/dynamic";
const ImageEditor = () =>
  dynamic(import("@toast-ui/react-image-editor"), { Suspense: true });
  
const Editor = () => {
  const myTheme = () => {};
  return (
    <div className={styles.editor}>
      <div className={styles.editorImageContainer}>
        <ImageEditor
          includeUI={{
            loadImage: {
              // path: "img/sampleImage.jpg",
              name: "SampleImage",
            },
            theme: myTheme,
            menu: ["shape", "filter"],
            initMenu: "filter",
            uiSize: {
              width: "1000px",
              height: "700px",
            },
            menuBarPosition: "bottom",
          }}
          cssMaxHeight={500}
          cssMaxWidth={700}
          selectionStyle={{
            cornerSize: 20,
            rotatingPointOffset: 70,
          }}
          usageStatistics={true}
        />
      </div>
    </div>
  );
};

export default Editor;
