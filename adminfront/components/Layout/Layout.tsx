import { FC } from "react"
import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import styles from "./Layout.module.scss"

interface ILayout {
  children: React.ReactNode
}

const Layout: FC<ILayout> = ({ children }):JSX.Element => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Menu />
        <div>{children}</div>
      </div>
    </>
  )
}
export default Layout
