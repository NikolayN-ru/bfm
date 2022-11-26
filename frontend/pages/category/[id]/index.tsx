import { Head } from "next/document";
import { useRouter } from "next/router";
import { FC } from "react";
import ItemProduct from "../../../components/ItemProduct/ItemProduct";
import Layout from "../../../components/layout/Layout";
import { useGetProductQuery } from "../../../redux/productApi";
import styles from "./categoryItem.module.scss";

const index: FC = () => {
  const router = useRouter();
  const { data = [], isLoading } = useGetProductQuery(router.query.id);
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Yarn catalog</title>
        <meta name="description" content="Yarn catalog magazine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>index - {router.query.id}</div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Layout>
          {/* <Filter /> */}
          {/* <div className={styles.items}> */}
          <div>
            {data &&
              data.map((item: any, id: number) => (
                <ItemProduct key={id} item={item} />
              ))}
          </div>
        </Layout>
      </div>
    </div>
  );
};
export default index;
