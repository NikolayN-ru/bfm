import { FC } from "react"
import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import styles from './Layout.module.scss';

const Layout: FC<any> = ({ children }) => {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Menu />
                <div className={styles.main}>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Layout