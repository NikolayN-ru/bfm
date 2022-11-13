import React, { FC } from 'react'
import MainMenu from '../MainMenu/MainMenu';
import { ILoyout } from './Layout.interface';
import styles from './Layout.module.scss';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';

const Layout: FC<ILoyout> = ({ children }) => {

  return (
    <div className={styles.app}>
      {/* <Navigation /> */}
      <MainMenu />
      {/* <Sidebar /> */}
      <div>{children}</div>
    </div>
  )
}

export default Layout;