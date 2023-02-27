import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { useGetBlogItemQuery } from "../../../redux/blogApi";

import Layout from "../../../components/layout/Layout";
import s from "./post.module.scss";

const Index: FC = (): JSX.Element => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, isLoading } = useGetBlogItemQuery(id);
  if (isLoading) {
    return <p>LOADING!</p>;
  }
  const { title, image, body, image2, image3, body2, body3 } = data;
  return (
    <div>
      <Layout />
      <div className={s.wrapper}>
        <hr />
        <div className={s.link}>
          <Link href="/blog">на главную</Link>
        </div>
        <hr />
        <div>
          {/* <p dangerouslySetInnerHTML={{__html:data.title}}>{data.title}</p> */}
          <p className={s.title}>{data.title}</p>
          {/* <img src={data.image} className={s.image} alt={data.image} /> */}
          <Image
            // loader={myLoader}
            src={image}
            alt={image}
            width={500}
            height={500}
          />
          <span>{body}</span>
          <br />
          <Image src={image2} alt={image2} width={500} height={500} />
          <span> {body2}</span>
          <br />
          <Image src={image3} alt={image3} width={500} height={500} />
          <span> {body3}</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
