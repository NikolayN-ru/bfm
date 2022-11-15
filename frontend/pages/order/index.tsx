import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import styles from './Order.module.scss';

const Order: FC = (): JSX.Element => {
    const [state, setState] = useState<any>();
    const products = useSelector((state: any) => state.cart.cart);

    useEffect(() => {
        setState(totalPrice())
    }, []);

    const totalPrice = () => {
        let totalA = 0;
        products.forEach((element: any) => {
            totalA += element.price * element.count;
        });
        return totalA;
    }

    const sendOrder = () => {
        axios.post('http://localhost:4200/api/telegram/', {
            msg: `№00042 на сумму ${state}р.`
        })
    }

    return (
        <div>
            <Layout >
                <div className={styles.wrapper}>
                    <div className={styles.wrapInput}>
                        <span>имя</span>
                        <input type="text" />
                    </div>
                    <div className={styles.wrapInput}>
                        <span>телефон</span>
                        <input type="text" />
                    </div>
                    <div className={styles.wrapInput}>
                        <span>адрес</span>
                        <input type="text" />
                    </div>
                    <div className={styles.wrapInput}>
                        <span>сумма</span>
                        <p>{state} руб.</p>
                        {/* <input type="text" value={state} onChange={(e) => setState(e.target.value)} /> */}
                    </div>
                    <button onClick={sendOrder}>оформить заказ</button>
                </div>
            </Layout>
        </div>
    )
}
export default Order;
