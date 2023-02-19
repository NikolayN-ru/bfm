import { useRouter } from "next/router";
import { FC, useState } from "react";
import ButtonCart from "../../../components/Buttons/ButtonCart/ButtonCart";
import Layout from "../../../components/layout/Layout";
import Variables from "../../../components/Variables/Variables";
import {
  useGetProductMainQuery,
  useGetProductQuery,
} from "../../../redux/productApi";
import styles from "./productId.module.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/cartReducer";
import { back_api } from "../../../variables";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import MainInfoProduct from "../../../components/MainInfoProduct/MainInfoProduct";

interface IVariables {
  number: string | number;
  color: string | number;
  count: number;
  image: string;
}

const index: FC = () => {
  const router = useRouter();
  const { data = [], isLoading } = useGetProductQuery(router.query.name);

  // const getTodos = () => {
  //   axios
  //     .get(`http://127.0.0.1:8000/api/variables/${router.query.name}`)
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // };
  // getTodos();

  const dispatch = useDispatch();
  const [variables, setVariables] = useState<IVariables>();
  const [inputValue, setInputValue] = useState<number>(0);
  const [mainDesc, setMainDesc] = useState<any>({});

  const setVariable = (item: any) => {
    setVariables(item);
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

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Layout />
      <div className={styles.wrapper}>
        <ToastContainer />
        <div className={styles.right}>
          {variables?.image ? (
            <img src={`${back_api}${variables.image}`} alt="" />
          ) : (
            <img src={`${back_api}${mainDesc.image}`} alt="" />
          )}
        </div>
        <div className={styles.left}>
          {
            isLoading ? null : 
          <MainInfoProduct setMainDesc={setMainDesc} />
          }
          <div className={styles.wrapperVariables}>
            {data &&
              data.map((item: any, id: number) => {
                return item.number === variables?.number ? (
                  <div className={styles.border} key={id}>
                    <Variables
                      title={item.color}
                      funcActive={() => setVariable(item)}
                    />
                  </div>
                ) : (
                  <div className={styles.borderNone} key={id}>
                    <Variables
                      title={item.color}
                      funcActive={() => setVariable(item)}
                    />
                  </div>
                );
              })}
          </div>
          <div className={styles.count}>
            <button onClick={dec}>-</button>
            <p>{inputValue}</p>
            <button onClick={inc}>+</button>
          </div>
          <ButtonCart title="в корзину" active={false} funcActive={addToCart} />
          <p className={styles.title}>
            {variables?.count && <span>кол-во мотков: {variables.count} </span>}
          </p>
        </div>
      </div>
      <div className={styles.under}>
        <p>описание: {data.description}</p>
      </div>
    </div>
  );
};
export default index;
