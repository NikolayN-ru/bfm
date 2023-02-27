import React, { FC } from "react";
import s from "./post.module.scss";
import Image from "next/image";
import Link from "next/link";

const Post: FC<any> = ({ pk, author, title, image }) => {
  return (
    <Link href={`/blog/${pk}`}>
      <div className={s.post}>
        <div className={s.header}>{author}</div>
        <div className={s.line}></div>
        <div className={s.title}>{title}</div>
        <div className={s.image}>
          <Image
            src={image}
            alt={image}
            width={500}
            height={500}
            className={s.imageMain}
          />
        </div>
        <div className={s.line}></div>
      </div>
    </Link>
  );
};

export default Post;
