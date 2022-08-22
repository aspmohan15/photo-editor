import React from "react";
import styles from "./Controls.module.css";
import Switch from "@mui/material/Switch";
const Controls = () => {
  const controlOptions = [
    {
      label: "Adjust",
      component: <Switch defaultChecked />,
    },
    {
      label: "Filter",
      component: <Switch defaultChecked />,
    },
    {
      label: "Crop",
      component: <Switch defaultChecked />,
    },
    {
      label: "Blur",
      component: <Switch defaultChecked />,
    },
  ];
  return (
    <div className={styles.controls}>
      <div className={styles.controlBase}>
        <div className={styles.controlBoxes}>
          {controlOptions.map((controlOption) => {
            return (
              <>
                <div className={styles.controlLableAndComponent}>
                  <div>{controlOption.component}</div>
                  <div> {controlOption.label}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Controls;
