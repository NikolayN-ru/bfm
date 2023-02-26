import Link from "next/link";
import React, { FC } from "react";
import s from "./SpoolItem.module.scss";
const SpoolItem: FC<any> = ({ item }): JSX.Element => {
  return (
    <Link href={`/spool/${item.id}`}>
      <div className={s.wrapper}>
        <img src={`${item.image1}`} alt="" className={s.spoolItem} />
        <p>price - {item.price}</p>
      </div>
    </Link>
  );
};

export default SpoolItem;
