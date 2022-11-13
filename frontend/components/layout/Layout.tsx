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
      {/* <Navigation /> */}
      {/* <Sidebar /> */}
      <div className={styles.main}>
        <Filter />
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Layout;