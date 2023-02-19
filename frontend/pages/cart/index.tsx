import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import { removeItem } from "../../redux/cartReducer";
import { back_api } from "../../variables";

import styles from "./cart.module.scss";
import { BtnSubmit, WrapperCart } from "./cart.styled";

const Cart = () => {

  const [total, setTotal] = useState<any>();
  const products = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(totalPrice());
  }, [products]);

  const totalPrice = () => {
    let totalA = 0;
    products.forEach((element: any) => {
      totalA += element.price * element.count;
    });
    return totalA;
  };

  return (
    <WrapperCart>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            {products.length ? (
              products.map((item: any, id: number) => {
                return (
                  <div key={id} className={styles.item}>
                    <span>{item.title}</span>
                    <img src={`${back_api}${item.image}`} alt="" />
                    <span>
                      цвет:<div>{item.color}</div>
                    </span>
                    <span>
                      кол-во:<div>{item.count}</div>
                    </span>
                    <span>
                      цена:<div>{item.price} руб.</div>
                    </span>
                    <button onClick={() => dispatch(removeItem({"title": item.title, "color": item.color}))}>
                      удалить
                    </button>
                  </div>
                );
              })
            ) : (
              <p> корзина пуста </p>
            )}
          </div>
          <div className={styles.right}>
            <p>купон</p>
            <input disabled={true} type="text" />
            <hr />
            <div>
              <p>итого:</p>
              <span>{total} руб.</span>
            </div>
            <hr />
            <Link href="/order">
              <BtnSubmit>оформить заказ</BtnSubmit>
            </Link>
          </div>
        </div>
      </Layout>
    </WrapperCart>
  );
};
export default Cart;
