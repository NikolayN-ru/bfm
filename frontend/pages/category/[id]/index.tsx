import { useRouter } from "next/router";
import { FC } from "react";
import ItemProduct from "../../../components/ItemProduct/ItemProduct";
import Layout from "../../../components/layout/Layout";
import { useGetCategoryItemQuery } from "../../../redux/categoryApi";
import styles from "./categoryItem.module.scss";

const index: FC = () => {
  const router = useRouter();
  const { data = [], isLoading } = useGetCategoryItemQuery(router.query.id);
  return (
    <div className={styles.container}>
      <div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Layout>
            {/* <Filter /> */}
            <div className={styles.items}>
              {data[0] &&
                data[0].YarnItem.map((item: any, id: number) => (
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
