import React, { FC } from 'react'
import { ILoyout } from './Layout.interface';
import styles from './Layout.module.scss';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';

const Layout: FC<ILoyout> = ({ children = '<p>none</p>' }) => {

  return (
    <div className={styles.app}>
      <Navigation />
      <div>{children}</div>
      <Sidebar />
      <article className="prose">
        ...asd
      </article>
    </div>
  )
}

export default Layout;