import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../components/Filter/Filter";
import ItemProduct from "../components/ItemProduct/ItemProduct";
import Layout from "../components/layout/Layout";
import { useGetCategoryQuery } from "../redux/categoryApi";
import { useGetProductsQuery } from "../redux/productApi";
import styles from "./main.module.scss";

const HomePage = () => {
  const { data, isLoading } = useGetProductsQuery("all");
  const { data: data2, isLoading: isLoading2 } = useGetCategoryQuery("all");
  if (isLoading || isLoading2) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Yarn catalog</title>
        <meta name="description" content="Yarn catalog magazine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", gap: "20px" }}>
        <Layout>
          <Filter />
          <div className={styles.container}>
            <div className={styles.underMenu}>
              {data2 &&
                data2.map((item: any, id: string) => {
                  return (
                    <p className={styles.categoryItem} key={id}>
                      <Link href={"/category/" + item.id}>{item.title}</Link>
                    </p>
                  );
                })}
            </div>
            <div className={styles.items}>
              {data.map((item: any, id: number) => (
                <ItemProduct key={id} item={item} />
              ))}
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default HomePage;
