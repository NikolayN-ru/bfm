import axios from "axios";
import { FC, useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import styles from "./Order.module.scss";

const Order: FC = (): JSX.Element => {
  const [state, setState] = useState<any>();
  const products = useSelector((state: any) => state.cart.cart);
  const [param, setParam] = useState<any>({});
  
  const cart = useSelector((state: any) => state.cart);
  console.log(cart.cart, "cart");

  const changeParam = (param: string, e: any) => {
    setParam((prev: any) => {
      return { ...prev, [param]: e.target.value };
    });
  };

  useEffect(() => {
    setState(totalPrice());
  }, []);

  const totalPrice = () => {
    let totalA = 100;
    products.forEach((element: any) => {
      totalA += element.price * element.count;
    });
    return totalA;
  };

  const sendOrder = () => {
    setParam((prev: any) => {
      // return {...prev, order: products[prev.order] };
      return { ...prev, price: state , positions: [...cart.cart]};
    });
    // axios.post('http://localhost:4200/api/telegram/', {
    //     msg: `№00042 на сумму ${state}р.`
    // })
    axios.post("http://localhost:4200/api/order/", {
      //   msg: `№00042 на сумму ${state}р.`,
      ...param,
    });
  };

  return (
    <div>
      <Layout>
        <div className={styles.wrapper}>
         
          <div className={styles.wrapInput}>
            <span>Фамилия</span>
            <input
              type="text"
              value={param.surname}
              onChange={(e: any) => changeParam("surname", e)}
            />
          </div>
          <div className={styles.wrapInput}>
            <span>Имя</span>
            <input
              type="text"
              value={param.name}
              onChange={(e: any) => changeParam("name", e)}
            />
          </div>
          <div className={styles.wrapInput}>
            <span>Отчество</span>
            <input
              type="text"
              value={param.patronymic}
              onChange={(e: any) => changeParam("patronymic", e)}
            />
          </div>
          <div className={styles.wrapInput}>
            <span>Индекс</span>
            <input
              type="text"
              value={param.zipcode}
              onChange={(e: any) => changeParam("zipcode", e)}
            />
          </div>
          <div className={styles.wrapInput}>
            <span>Регион</span>
            <input
              type="text"
              value={param.region}
              onChange={(e: any) => changeParam("region", e)}
            />
          </div>
          <div className={styles.wrapInput}>
            <span>Город</span>
            <input
              type="text"
              value={param.city}
              onChange={(e: any) => changeParam("city", e)}
            />
          </div>
          <div className={styles.wrapInput}>
            <span>Адрес</span>
            <input
              type="text"
              value={param.addres}
              onChange={(e: any) => changeParam("addres", e)}
            />
          </div>
          <div className={styles.wrapInput}>
            <span>Телефон</span>
            <input
              type="text"
              value={param.phone}
              onChange={(e: any) => changeParam("phone", e)}
            />
          </div>
          <div className={styles.wrapInput}>
            <span>Email</span>
            <input
              type="text"
              value={param.email}
              onChange={(e: any) => changeParam("email", e)}
            />
          </div>
          <div className={styles.wrapInput}>
            <span>Коментарий к заказу</span>
            <input
              type="text"
              value={param.message}
              onChange={(e: any) => changeParam("message", e)}
            />
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
  );
};
export default Order;
