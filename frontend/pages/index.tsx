import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Filter from '../components/Filter/Filter'
import ItemProduct from '../components/ItemProduct/ItemProduct'
import Layout from '../components/layout/Layout'
import styles from './main.module.scss';

const HomePage = () => {

  const [state, setState] = useState<any>([]);

  const updateProduct = () => {
    axios.get('http://localhost:4200/api/yarn/all')
      .then((res) => {
        // console.log(res.data)
        setState(res.data);
      })
  }

  useEffect(() => {
    updateProduct()
  }, [])

  console.log(state)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", gap: "20px" }}>
        <Layout>
          <Filter />
          <div className={styles.items}>
            {state && state.map((item: any, id: number) => (
              <ItemProduct key={id} name={item.name} image={item.image} id={item._id} price={item.price} />
            )
            )}
          </div>
        </Layout>
      </div>
      {/* <Home /> */}

    </div>
  )
}

export default HomePage;