import Link from "next/link";
import Layout from "../../components/layout/Layout";

import styles from "./cart.module.scss";

const mockData = [
    { title: 'title1', color: '1023', count: 4, price: 340 },
    { title: 'title2', color: '3948', count: 2, price: 690 },
    { title: 'title3', color: '8872', count: 7, price: 870 },
    { title: 'title4', color: '0123', count: 8, price: 210 },
    { title: 'title5', color: '1092', count: 1, price: 440 },
]

const Cart = () => {
    return (
        <div>
            <Layout >
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        {mockData.map((item: any, id: number) => {
                            return (
                                <div key={id} className={styles.item}>
                                    <span>{item.title}</span>
                                    <span>цвет: {item.color}</span>
                                    <span>кол-во: {item.count}</span>
                                    <span>цена: {item.price}</span>
                                    <button>удалить</button>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.right}>
                        <div>
                            <p>итого:</p>
                            <span>23400 руб.</span>
                        <hr />
                        </div>
                        <p>купон</p>
                        <input type="text" />
                        {/* <button>применить</button> */}
                        <hr />
                        <Link href='/order'>
                            <button>
                                оформить заказ
                            </button>
                        </Link>
                    </div>

                </div>
                {/* <p>Корзина</p> */}

            </Layout>
        </div>
    )
}
export default Cart;