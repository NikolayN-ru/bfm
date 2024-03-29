import axios from "axios";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import styles from "./Order.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order: FC = (): JSX.Element => {
  const router = useRouter();
  const [state, setState] = useState<any>();
  const products = useSelector((state: any) => state.cart.cart);
  const [param, setParam] = useState<any>({});
  const [modal, setModal] = useState<boolean>(false);

  const cart = useSelector((state: any) => state.cart);

  const changeParam = (param: string, e: any) => {
    setParam((prev: any) => {
      return { ...prev, [param]: e.target.value };
    });
  };

  useEffect(() => {
    setState(totalPrice());
  }, []);

  const totalPrice = () => {
    let totalA = 0;
    products.forEach((element: any) => {
      totalA += element.price * element.count;
    });
    return totalA;
  };

  const sendOrder = () => {
    toast.info("заказ оформлен", {
      autoClose: 2000,
    });
    setParam((prev: any) => {
      return { ...prev, price: state, positions: [...cart.cart] };
    });
    // axios.post("http://localhost:4200/api/order/", {
    //   ...param,
    //   totalPrice: state,
    // });
    // axios.post("http://localhost:4200/api/telegram/", {
    //   msg: `на сумму ${state} p.`,
    // });
    setModal(true);
  };

  const delivery = (value: string) => {
    setParam((prev: any) => {
      return { ...prev, delivery: value };
    });
  };

  const payment = (value: string) => {
    setParam((prev: any) => {
      return { ...prev, payment: value };
    });
  };

  return (
    <div>
      {modal && (
        <div className={styles.modal}>
          <p>ваш заказ принят</p>
          <button onClick={() => router.push("/")}>OK</button>
        </div>
      )}
      <Layout>
        <ToastContainer />
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.wrapInput}>
              <span>Фамилия</span>
              <input
                type="text"
                value={param.surname}
                placeholder="Фамилия"
                onChange={(e: any) => changeParam("surname", e)}
              />
            </div>
            <div className={styles.wrapInput}>
              <span>Имя</span>
              <input
                type="text"
                value={param.name}
                placeholder="Имя"
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
          </div>
          <div className={styles.right}>
            <div className={styles.inputBlock}>
              <fieldset>
                <p>доставкка заказа</p>
                <div>
                  <input
                    type="radio"
                    name="delivery"
                    onChange={() => delivery("курьер по городу")}
                  />
                  <span>курьер по городу</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="delivery"
                    onChange={() => delivery("почта")}
                  />
                  <span>почта</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="delivery"
                    onChange={() => delivery("сдэк")}
                  />
                  <span>сдэк</span>
                </div>
              </fieldset>
            </div>

            <div className={styles.inputBlock}>
              <fieldset>
                <p>оплата заказа</p>
                <div>
                  <input
                    type="radio"
                    name="pay"
                    onChange={() => payment("на карту")}
                  />
                  <span>на карту</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="pay"
                    onChange={() => payment("по реквизитам")}
                  />
                  <span>по реквизитам</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="pay"
                    onChange={() => payment("по QR коду")}
                  />
                  <span>по QR коду</span>
                </div>
              </fieldset>
            </div>

            <div className={styles.wrapInputComment}>
              <span>Коментарий к заказу</span>
              <textarea
                value={param.message}
                onChange={(e: any) => changeParam("message", e)}
              />
            </div>
            <div className={styles.wrapTotal}>
              <span>Итоговая сумма заказа:</span>
              <p>{state} руб.</p>
              {/* <input type="text" value={state} onChange={(e) => setState(e.target.value)} /> */}
              {!modal && (
                <button onClick={sendOrder} className={styles.btn}>
                  оформить заказ
                </button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Order;
