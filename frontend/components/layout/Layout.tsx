import React, { FC } from "react";
import MainMenu from "../MainMenu/MainMenu";
import { ILoyout } from "./Layout.interface";
import styles from "./Layout.module.scss";

const Layout: FC<ILoyout> = ({ children }) => {
  return (
    <div className={styles.app}>
      <MainMenu />
      <div className={styles.main}>
        <div style={{ display: "flex", gap: "20px" }}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
