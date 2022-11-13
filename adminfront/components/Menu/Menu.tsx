import Link from 'next/link';
import styles from './Menu.module.scss';

const items = [
    { title: 'статистика', link: '/statistics', },
    { title: 'продукты', link: '/products', },
    { title: 'заказы', link: '/orders', },
    // { title: '', link: '', },
]

const Menu = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {items.map((item) => (
                    <Link href={`${item.link}`} >
                        <div className={styles.item}>
                            {item.title}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Menu