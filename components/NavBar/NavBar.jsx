import React from "react";
import styles from "./Navbar.module.css";
import Button from "@mui/material/Button";
const NavBar = () => {
  return (
    <div className={styles.navBar}>
      {/* <Button variant="outlined">
        <input type="file" />
      </Button> */}
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button variant="outlined" component="span">
          Upload
        </Button>
      </label>
      <Button variant="contained">Download</Button>
    </div>
  );
};

export default NavBar;
