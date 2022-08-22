import React from "react";
import styles from "./SideBar.module.css";
import Slider from "@mui/material/Slider";

const SideBar = () => {
  const adjustOptions = [
    {
      label: "Brightness",
      slider: (
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      ),
    },
    {
      label: "Contrast",
      slider: (
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      ),
    },
    {
      label: "WhitePoint",
      slider: (
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      ),
    },
    {
      label: "Highlights",
      slider: (
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      ),
    },
    {
      label: "Shadows",
      slider: (
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      ),
    },
    {
      label: "Saturation",
      slider: (
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      ),
    },
    {
      label: "Warmth",
      slider: (
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      ),
    },
    {
      label: "tint",
      slider: (
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      ),
    },
  ];

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarContainer}>
        {adjustOptions.map((adjustOption) => {
          return (
            <div>
              <p>{adjustOption.label}</p>
              <p>{adjustOption.slider}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
