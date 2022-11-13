import Link from 'next/link';
import styles from './Menu.module.scss';

const items = [
    { title: 'статистика', link: '/statistics', },
    { title: 'продукты', link: '/products', },
    { title: 'заказы', link: '/orders', },
    { title: 'вариации', link: '/variables', },
]

const Menu = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {items.map((item, id: number) => (
                    <Link key={id} href={`${item.link}`} >
                        <div className={styles.item}>
                            {item.title}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Menu;