import { useRouter } from "next/router";
import { FC } from "react";
import Filter from "../../../components/Filter/Filter";
import ItemProduct from "../../../components/ItemProduct/ItemProduct";
import Layout from "../../../components/layout/Layout";
import { useGetCategoryItemQuery } from "../../../redux/categoryApi";
import styles from "./categoryItem.module.scss";

const index: FC = (): JSX.Element => {
  const router = useRouter();
  const { data = [], isLoading } = useGetCategoryItemQuery(router.query.id);
  console.log(data[0], "data");

  if (isLoading) {
    return <>"LOADING "</>;
  }

  return (
    <div className={styles.container}>
      <div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Layout>
            <Filter />
            {/* <Filter /> */}
            <div className={styles.items}>
              {data &&
                data.map((item: any, id: number) => (
                  <ItemProduct key={id} item={item} />
                ))}
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
};
export default index;
