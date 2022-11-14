import React, { FC } from 'react'
import Filter from '../Filter/Filter';
import MainMenu from '../MainMenu/MainMenu';
import { ILoyout } from './Layout.interface';
import styles from './Layout.module.scss';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';

const Layout: FC<ILoyout> = ({ children }) => {

  return (
    <div className={styles.app}>
      <MainMenu />
      <div className={styles.main}>
        <div style={{ display: "flex", gap: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;
