import React, { FC } from "react";
import s from "./SpoolFilter.module.scss";

let localData = ["варежки", "свитера", "шапки", "перчатки"];

const SpoolFilter: FC<any> = ({}): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <div className={s.items}>
        {localData.map((item: any, id: number) => {
          return <div key={id} className={s.item}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default SpoolFilter;
