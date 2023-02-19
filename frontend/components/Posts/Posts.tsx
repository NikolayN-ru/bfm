import styles from "./posts.module.scss";
import Image from "next/image";
import Post from "./Post/Post";
import { FC } from "react";

const Posts: FC<any> = ({ state }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.posts}>
        {/* <div>
          <div className={styles.text}>Сортировка по: дате</div>
          <div className={styles.line}></div>
        </div> */}
        {/* <Post /> */}
        {state?.map((_: any, id: number) => (
          <Post
            pk={_.pk}
            key={id}
            title={_.title}
            author="Lidiya"
            image={_.image}
          />
        ))}
      </div>
      {/* <div className={styles.block}>
        <span>блок тегов</span>
        <hr />
        <div className={styles.blockWrap}>
          <div>#TAG1</div>
          <div>#TAGs2</div>
          <div>#TAG323</div>
          <div>#TA</div>
          <div>#TAG5sdf</div>
          <div>#TAG6</div>
        </div>
      </div> */}
    </div>
  );
};

export default Posts;
