import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Filter from '../components/Filter/Filter'
import ItemProduct from '../components/ItemProduct/ItemProduct'
import Layout from '../components/layout/Layout'
import { useGetProductsQuery } from '../redux/productApi'
import styles from './main.module.scss';

const HomePage = () => {
  const {data, isLoading} = useGetProductsQuery('all');

  if(isLoading){
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    )
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
          <div className={styles.items}>
            {data && data.map((item: any, id: number) => (
              <ItemProduct key={id} item={item} />
            )
            )}
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default HomePage;