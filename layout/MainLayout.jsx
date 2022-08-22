import React from "react";
import Main from "../components/main/Main";
import SideBar from "../components/sideBar/SideBar";
import styles from "../styles/MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.mainLayoutContainer}>
      <Main  />
      <SideBar  />
    </div>
  );
};

export default MainLayout;
