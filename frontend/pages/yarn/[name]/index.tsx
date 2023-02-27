import { useRouter } from "next/router";
import { FC, useState } from "react";
import ButtonCart from "../../../components/Buttons/ButtonCart/ButtonCart";
import Layout from "../../../components/layout/Layout";
import Variables from "../../../components/Variables/Variables";
import {
  useGetProductMainQuery,
  useGetProductQuery,
} from "../../../redux/productApi";
import s from "./productId.module.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/cartReducer";
import { back_api } from "../../../variables";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IVariables {
  number: string | number;
  color: string | number;
  count: number;
  image: string;
  name?: string;
}

const Index: FC<any> = ({}): JSX.Element => {
  const router = useRouter();
  const { data = [], isLoading } = useGetProductQuery(router.query.name);
  const { data: data2, isLoading: isLoading2 } = useGetProductMainQuery(
    router.query.name
  );
  const dispatch = useDispatch();
  const [variables, setVariables] = useState<IVariables>();
  const [inputValue, setInputValue] = useState<number>(0);
  const [mainDesc, setMainDesc] = useState<any>({});

  const setVariable = (item: any) => {
    setVariables({
      ...item,
      number: Number(item.color),
    });
    setInputValue(0);
  };

  const inc = () => {
    if (variables && variables.count > inputValue) {
      setInputValue((prev) => (prev += 1));
    }
  };

  const dec = () => {
    if (inputValue > 0) setInputValue((prev) => (prev -= 1));
  };

  const addToCart = () => {
    if (variables && variables.color && inputValue) {
      const Candidate = {
        title: data.name,
        image: variables.image,
        color: variables.color,
        count: inputValue,
        price: mainDesc.price,
      };
      dispatch(addItem(Candidate));
      toast.info("вы добавили товар в корзину", {
        className: "toast-message",
        autoClose: 2000,
      });
    }
  };

  if (isLoading || isLoading2) {
    return <div>Loading</div>;
  }

  const {
    name,
    category,
    length,
    needles,
    wieght,
    tag,
    price,
    discount,
    discountPercentage,
  } = data2[0];

  return (
    <div>
      <Layout />
      <div className={s.wrapper}>
        <ToastContainer />
        <div className={s.right}>
          {variables?.image ? (
            <img src={`${back_api}${variables.image}`} alt="" />
          ) : (
            <img src={`${back_api}${data2[0].image}`} alt="" />
          )}

          <div className={s.variablePhoto}>
            <button className={s.variableItem}>
              <img src={`${back_api}${mainDesc.imageMain2}`} alt="" />
            </button>
            <button className={s.variableItem}>
              <img src={`${back_api}${mainDesc.imageMain3}`} alt="" />
            </button>
            <button className={s.variableItem}>
              <img src={`${back_api}${mainDesc.imageMain4}`} alt="" />
            </button>
          </div>
        </div>
        <div className={s.left}>
          <div className={s.left}>
            <div className={s.title}>
              <h3>{name}</h3>
            </div>
            <div className={s.title}>
              страна производитель: {category.country}
            </div>
            <div className={s.title}>фирма производитель: {category.title}</div>
            <div className={s.title}>длинна: {length} метров.</div>
            <div className={s.title}>рекомендуемые спицы: {needles} мм.</div>
            <div className={s.title}>вес мотка: {wieght} грамм.</div>
            <div className={s.title}>
              состав:
              <hr />
              {tag.map((item: any, id: number) => {
                return (
                  <div key={id} className={s.tag}>
                    {item.title}
                  </div>
                );
              })}
            </div>
            {discount || discountPercentage ? (
              <>
                <div className={s.price}>
                  <div
                    style={{ textDecoration: "line-through", fontSize: "16px" }}
                  >
                    старая цена: {price} руб.
                  </div>
                  <div className={s.discount}>
                    цена со скидкой:{" "}
                    {discount
                      ? price - discount
                      : +price - (price * discountPercentage) / 100}
                    руб.
                  </div>
                </div>
              </>
            ) : (
              <div className={s.price}>цена: {price} руб.</div>
            )}
          </div>

          <div className={s.wrapperVariables}>
            {data &&
              data.map((item: any, id: number) => {
                return Number(item.color) === variables?.number ? (
                  <div className={s.border} key={id}>
                    <Variables
                      title={item.color}
                      funcActive={() => setVariable(item)}
                    />
                  </div>
                ) : (
                  <div className={s.borderNone} key={id}>
                    <Variables
                      title={item.color}
                      funcActive={() => setVariable(item)}
                    />
                  </div>
                );
              })}
          </div>
          {variables?.name ? (
            <>
              <div className={s.count}>
                <button onClick={dec}>-</button>
                <p>{inputValue}</p>
                <button onClick={inc}>+</button>
              </div>
              <ButtonCart
                title="в корзину"
                active={false}
                funcActive={addToCart}
              />
            </>
          ) : (
            "Выбери опции !"
          )}
          <p className={s.title}>
            {variables?.count && <span>кол-во мотков: {variables.count} </span>}
          </p>
        </div>
      </div>
      <div className={s.under}>
        <p>описание: {mainDesc.description}</p>
      </div>
    </div>
  );
};
export default Index;
