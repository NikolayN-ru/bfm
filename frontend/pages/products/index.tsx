import { FC } from "react";
import Layout from "../../components/layout/Layout";
import MainMenu from "../../components/MainMenu/MainMenu";
import Wares from "../../components/Wares/Wares";

const Products:FC<any> = () => {
  return (
    <Layout>
      <div style={{ color: "rgb(118, 85, 165)" }}>
        <p>страница изделий</p>
        <Wares />
      </div>
    </Layout>
  );
};
export default Products;
