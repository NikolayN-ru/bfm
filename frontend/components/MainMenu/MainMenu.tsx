import Link from "next/link"
import styles from "./MainMenu.module.scss";

const data = [
    { title: "Пряжа", href: "/" },
    { title: "Спицы", href: "/needles" },
    { title: "Изделия", href: "/products" },
    { title: "Блог", href: "/blog" },
    { title: "О нас", href: "/about" }

]

const MainMenu = () => {
    return (
        <div className={styles.menu}>
            {data.map(({ title, href }, id: number) => <div key={id} className={styles.item}>
                <Link href={href}>{title}</Link>
            </div>)}
        </div>
    )
}
export default MainMenu