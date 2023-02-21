import styles from "./MainInfoProduct.module.scss";
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
    return null;
  }

  const { name, category, length, needles, wieght, tag, price } = data[0];

  return (
    <div className={styles.left}>
      <div className={styles.title}>
        <h3>{name}</h3>
      </div>
      <div className={styles.title}>
        страна производитель: {category.country}
      </div>
      <div className={styles.title}>фирма производитель: {category.title}</div>
      <div className={styles.title}>длинна: {length} метров.</div>
      <div className={styles.title}>рекомендуемые спицы: {needles} мм.</div>
      <div className={styles.title}>вес мотка: {wieght} грамм.</div>
      <div className={styles.title}>
        состав:
        <hr />
        {tag.map((item: any, id: number) => {
          return (
            <div key={id} className={styles.tag}>
              {item.title}
            </div>
          );
        })}
      </div>
      {data[0].discount || data[0].discountPercentage ? (
        <>
          <div className={styles.price}>
            <div style={{ textDecoration: "line-through", fontSize: "16px" }}>
              старая цена: {data[0] && data[0].price} руб.
            </div>
            <div className={styles.discount}>
              цена со скидкой:{" "}
              {data[0].discount
                ? data[0].price - data[0].discount
                : (data[0].price * data[0].discountPercentage) / 100}
              руб.
            </div>
          </div>
        </>
      ) : (
        <div className={styles.price}>цена: {price} руб.</div>
      )}
    </div>
  );
};

export default MainInfoProduct;
