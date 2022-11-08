import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import Home from '../components/screens/home/Home'
import Testing from '../components/testing'
import styles from '../styles/Home.module.scss'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Home />

      </Layout>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default HomePage;