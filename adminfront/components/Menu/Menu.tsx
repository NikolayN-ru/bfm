import Link from "next/link"
import styles from "./Menu.module.scss"

const items = [
  // { title: "статистика", link: "/statistics" },
  // { title: "заказы", link: "/orders" },
  // { title: "пряжа", link: "/products" },
  { title: "логин", link: "/login" },
  { title: "спицы", link: "/needles" },
  // { title: "изделия", link: "/wares" },
  // { title: "вариации", link: "/variables" },
  // { title: "блог", link: "/blog" },
]

const Menu = () => (
  <div className={styles.wrapper}>
    <div className={styles.list}>
      {items.map((item, id: number) => (
        <Link key={id} href={`${item.link}`}>
          <div className={styles.item}>{item.title}</div>
        </Link>
      ))}
    </div>
  </div>
)

export default Menu
