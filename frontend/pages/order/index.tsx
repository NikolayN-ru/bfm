import axios from "axios";
import { FC, useState } from "react";
import Layout from "../../components/layout/Layout";
import styles from './Order.module.scss';

const Order: FC = (): JSX.Element => {
    const [state, setState] = useState<any>();

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
                        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                    </div>
                    <button onClick={sendOrder}>оформить заказ</button>
                </div>
            </Layout>
        </div>
    )
}
export default Order;
