import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import Layout from "../../components/layout/Layout";
import { useGetSpoolApiAllQuery } from "../../redux/spoolApi";
import styles from "./spool.module.scss";

const Spool = () => {
  const { data, isLoading } = useGetSpoolApiAllQuery("all");
//   console.log(data, "spool");
  if (isLoading) {
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
          <div className={styles.data}>
            {data && data.map((item: any, id: number) => (
                <Link href={"#"}>{item.name}</Link>
            ))}
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Spool;
