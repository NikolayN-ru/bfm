import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import s from "./SpoolItem.module.scss";
const SpoolItem: FC<any> = ({ item }): JSX.Element => {
  const { image1, price } = item;
  return (
    <Link href={`/spool/${item.id}`}>
      <div className={s.wrapper}>
        <Image
          src={image1}
          alt={image1}
          width={500}
          height={500}
          className={s.spoolItem}
        />
        <p>price - {price}</p>
      </div>
    </Link>
  );
};

export default SpoolItem;
