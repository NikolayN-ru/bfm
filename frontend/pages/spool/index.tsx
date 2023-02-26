import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import Layout from "../../components/layout/Layout";
import SpoolItem from "../../components/Spool/SpoolItem/SpoolItem";
import { useGetSpoolApiAllQuery } from "../../redux/spoolApi";
import { useGetSpoolApiAllItemQuery } from "../../redux/spoolItemApi";
import styles from "./spool.module.scss";

const Spool: FC<any> = ({}): JSX.Element => {
  const { data, isLoading } = useGetSpoolApiAllQuery("all");
  const { data: items, isLoading: isLoading2 } =
    useGetSpoolApiAllItemQuery("all");
  console.log(items, "items");
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
          <div>
            <div className={styles.data}>
              {data &&
                data.map((item: any, id: number) => (
                  <Link key={id} href={"#"}>
                    {item.name}
                  </Link>
                ))}
            </div>
            <div className={styles.items}>
              {items.map((item: any, id: number) => (
                <SpoolItem key={id} item={item} />
              ))}
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Spool;
