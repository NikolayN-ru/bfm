import Link from "next/link";
import { useGetCategoryQuery } from "../../redux/categoryApi";
import styles from "./Filter.module.scss";

const dataLocal: string[] = [
  "кашимир",
  "вискоза",
  "ангора",
  "меринос",
  "альпака",
  "шерсть",
  "хлопок",
  "лен",
  "шелк",
  "кид мохер",
];

const Filter = () => {
    const { data, isLoading } = useGetCategoryQuery("all");
  return (
    <div className={styles.wrapper}>
      {/* <p>Фильтры:</p> */}
      <div className={styles.coast}>
        {data &&
          data.map((item: any, id: string) => {
            return (
              <p className={styles.categoryItem} key={id}>
                <Link href={"/category/" + item.id}>{item.title}</Link>
              </p>
            );
          })}
        <hr />
        <p>количество метров в 50 граммах:</p>
        <input type="text" placeholder="от" />
        <input type="text" placeholder="до" />
        <button>фильтровать</button>
        <hr />
      </div>
      <div className={styles.compound}>
        <p>состав:</p>
        {dataLocal.map((item: string, id: number) => (
          <div key={id}>
            <input type="checkbox" id="scales" name={item} />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
      <button className={styles.btn}>применить</button>
    </div>
  );
};
export default Filter;
