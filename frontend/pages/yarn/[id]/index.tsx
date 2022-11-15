import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ButtonCart from "../../../components/Buttons/ButtonCart/ButtonCart";
import Layout from "../../../components/layout/Layout";
import Variables from "../../../components/Variables/Variables";
import { useGetProductQuery } from "../../../redux/productApi";
import styles from "./productId.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../../redux/cartReducer";

const index = () => {
    const router = useRouter();
    const { data = [], isLoading } = useGetProductQuery(router.query.id);
    const path = 'http://localhost:4200';

    // const store = useSelector((state:any) => state.cart)
    const dispatch = useDispatch();

    const [variables, setVariables] = useState<any>([]);
    const [image, setImage] = useState<string>('');
    const [inputValue, setInputValue] = useState<number>(0);

    const setVariable = (item: any) => {
        setVariables(item);
        setInputValue(0);
    }

    const inc = () => {
        // console.log(variables.count, inputValue)
        if (variables.count > inputValue) {
            setInputValue(prev => prev += 1);
        }
    }

    const dec = () => {
        if (inputValue > 0) setInputValue(prev => prev -= 1);
    }
    // console.log(variables)

    const addToCart = () => {
        if (variables.color) {
            const Candidate = {
                "title": data.name,
                "image": variables.image,
                "color": variables.color,
                "count": inputValue,
                "price": data.price
            }
            dispatch(addItem(Candidate));
        }
    };

    return (
        <div>
            <Layout />
            <div className={styles.wrapper}>
                <div className={styles.right}>
                    {
                        variables.image ? <img src={`${path}${variables.image}`} alt="" /> :
                            <img src={`${path}${data.image}`} alt="" />
                    }
                </div>
                <div className={styles.left}>
                    <div className={styles.title}><h3>{data.name}</h3></div>
                    <div className={styles.title}>страна производитель: {data.country}</div>
                    <div className={styles.title}>фирма производитель: {data.category && data.category[0].title}</div>
                    <div className={styles.title}>длинна: {data.length} метров.</div>
                    <div className={styles.title}>рекомендуемые спицы - {data.needles}</div>
                    <div className={styles.title}>вес мотка:  {data.wieght} грамм.</div>
                    <div className={styles.price}>цена: {data.price} руб.</div>
                    <div className={styles.count}>
                        <button onClick={dec}>-</button>
                        <p>{inputValue}</p>
                        <button onClick={inc}>+</button>
                    </div>
                    {/* <button onClick={addToCart}>ADD</button> */}
                    <ButtonCart title='в корзину' active={false} funcActive={addToCart}/>
                    <div className={styles.wrapperVariables}>
                        {data.variables && data.variables.map((item: any, id: number) => {
                            return (
                                (item.number === variables.number) ?
                                    <div className={styles.border} key={id}>
                                        <Variables title={item.number} funcActive={() => setVariable(item)} />
                                    </div> :
                                    <Variables key={id} title={item.number} funcActive={() => setVariable(item)} />
                            );
                        })}
                    </div>
                    <p className={styles.title}>{variables.count && <span>кол-во мотков: {variables.count} </span>}</p>
                </div>
            </div>
            {/* <div className={styles.under}><p>описание товара: {data.description}</p> */}
            {/* <div className={styles.sostav}>состав:  {data.tags && data.tags.map((item: any) => <p>{item.title}</p>)} грамм.</div> */}
            {/* </div> */}
        </div>
    )
}
export default index;