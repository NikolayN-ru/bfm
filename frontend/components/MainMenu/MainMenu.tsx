import Link from "next/link"
import styles from "./MainMenu.module.scss";

const MainMenu = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/blog">Blog </Link>
                </li>
            </ul>
        </div>
    )
}
export default MainMenu