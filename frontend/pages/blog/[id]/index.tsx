import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import { useGetBlogItemQuery } from "../../../redux/blogApi";
import { back_api } from "../../../variables";
import styles from "./post.module.scss";

const index = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data = [], isLoading } = useGetBlogItemQuery(id);
  if (isLoading){
    return <>LOADING!</>
  }
  return (
    <div>
      <Layout />
      <div className={styles.wrapper}>
        <hr />
        <div className={styles.link}>
          <Link href="/blog">на главную</Link>
        </div>
        <hr />
        {data && (
          <div  >
            {/* <p dangerouslySetInnerHTML={{__html:data.title}}>{data.title}</p> */}
            <p className={styles.title}>{data.title}</p>
            <img
              src={`${data.image}`}
              className={styles.image}
              alt={data.image}
            />
            <span>{data.body}</span>
            <br />
            <img src={data.image2} className={styles.image} alt="" />
            <span> {data.body2}</span>
            <br />
            <img src={data.image3} className={styles.image} alt="" />
            <span> {data.body3}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
