import React, { FC } from "react";
import styles from "./post.module.scss";
import Image from "next/image";
import Link from "next/link";

const Post: FC<any> = ({ pk, author, title, image }) => {
  return (
    <Link href={`/blog/${pk}`}>
      <div className={styles.post}>
        <div className={styles.header}>{author}</div>
        <div className={styles.line}></div>
        <div className={styles.title}>{title}</div>

        <div className={styles.image}>
          <img src={image} className={styles.imageMain} />
        </div>
        {/* <div className={styles.post}></div> */}
        <div className={styles.line}></div>
      </div>
    </Link>
  );
};

export default Post;