import styles from "./MainInfoProduct.module.scss";
import { useRouter } from "next/router";
import { useGetProductMainQuery } from "../../redux/productApi";
import { FC } from "react";

const MainInfoProduct:FC<any> = ({setMainDesc}) => {
  const router = useRouter();
  const { data = [], isLoading } = useGetProductMainQuery(router.query.name);

  if (data[0]){
    setMainDesc(data[0]);
  }

  if (isLoading){
    return null
  }

  return (
    <div className={styles.left}>
      <div className={styles.title}>
        <h3>{data[0] && data[0].name}</h3>
      </div>
      <div className={styles.title}>
        страна производитель: {data[0] && data[0].country}
      </div>
      <div className={styles.title}>
        {/* фирма производитель: {data.category && data.category[0].title} */}
      </div>
      <div className={styles.title}>длинна: {data[0] && data[0].length} метров.</div>
      <div className={styles.title}>
        рекомендуемые спицы:  {data[0] && data[0].needles} мм.
      </div>
      <div className={styles.title}>вес мотка: {data[0] && data[0].wieght} грамм.</div>
      <div className={styles.title}>
        {/* состав:  */}
        <hr />
        {/* {data.tags &&
                    data.tags.map((item: any, id: number) => {
                        return (
                            <div key={id} className={styles.tag}>
                            {item.title}
                            </div>
                            );
                        })} */}
      </div>
      <div className={styles.price}>цена: {data[0] && data[0].price} руб.</div>
    </div>
  );
};

export default MainInfoProduct;
