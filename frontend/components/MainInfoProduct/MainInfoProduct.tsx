import _ from "./MainInfoProduct.module.scss";
import { useRouter } from "next/router";
import { useGetProductMainQuery } from "../../redux/productApi";
import { FC } from "react";

const MainInfoProduct: FC<any> = ({ setMainDesc }) => {
  const router = useRouter();
  const { data = [], isLoading } = useGetProductMainQuery(router.query.name);

  if (data[0]) {
    setMainDesc(data[0]);
  }

  if (isLoading) {
    return <>LOADING</>;
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
  } = data[0];

  return (
    <div className={_.left}>
      <div className={_.title}>
        <h3>{name}</h3>
      </div>
      <div className={_.title}>страна производитель: {category.country}</div>
      <div className={_.title}>фирма производитель: {category.title}</div>
      <div className={_.title}>длинна: {length} метров.</div>
      <div className={_.title}>рекомендуемые спицы: {needles} мм.</div>
      <div className={_.title}>вес мотка: {wieght} грамм.</div>
      <div className={_.title}>
        состав:
        <hr />
        {tag.map((item: any, id: number) => {
          return (
            <div key={id} className={_.tag}>
              {item.title}
            </div>
          );
        })}
      </div>
      {discount || discountPercentage ? (
        <>
          <div className={_.price}>
            <div style={{ textDecoration: "line-through", fontSize: "16px" }}>
              старая цена: {price} руб.
            </div>
            <div className={_.discount}>
              цена со скидкой:{" "}
              {discount
                ? price - discount
                : +price - (price * discountPercentage) / 100}
              руб.
            </div>
          </div>
        </>
      ) : (
        <div className={_.price}>цена: {price} руб.</div>
      )}
    </div>
  );
};

export default MainInfoProduct;
