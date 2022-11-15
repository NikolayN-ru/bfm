import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import { removeItem } from "../../redux/cartReducer";

import styles from "./cart.module.scss";

const mockData = [
    { title: 'title1', color: '1023', count: 4, price: 340 },
    // { title: 'title2', color: '3948', count: 2, price: 690 },
    // { title: 'title3', color: '8872', count: 7, price: 870 },
    // { title: 'title4', color: '0123', count: 8, price: 210 },
    // { title: 'title5', color: '1092', count: 1, price: 440 },
]

const Cart = () => {
    const [total, setTotal] = useState<any>();
    const products = useSelector((state: any) => state.cart.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        setTotal(totalPrice())
    }, [products]);

    const totalPrice = () => {
        let totalA = 0;
        products.forEach((element: any) => {
            totalA += element.price * element.count;
        });
        return totalA;
    }

    return (
        <div>
            <Layout >
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        {products.map((item: any, id: number) => {
                            return (
                                <div key={id} className={styles.item}>
                                    <span>{item.title}</span>
                                    <img src={`http://localhost:4200${item.image}`} alt="" />
                                    <span>цвет: {item.color}</span>
                                    <span>кол-во: {item.count}</span>
                                    <span>цена: {item.price}</span>
                                    <button onClick={() => dispatch(removeItem(item.title))}>удалить</button>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.right}>
                        <div>
                            <p>итого:</p>
                            <span>{total} руб.</span>
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
            </Layout>
        </div>
    )
}
export default Cart;