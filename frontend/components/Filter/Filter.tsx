import Link from "next/link";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetCategoryQuery } from "../../redux/categoryApi";
import { addTags, clearFilter, setMinMax } from "../../redux/filterReducer";
import { useGetTagYarnApiAllQuery } from "../../redux/tagYarnApi";
import s from "./Filter.module.scss";

const Filter: FC<any> = ({}): JSX.Element => {
  const { data, isLoading } = useGetTagYarnApiAllQuery("all");
  const dispatch = useDispatch();
  const [stateMin, setStateMin] = useState(0);
  const [stateMax, setStateMax] = useState(0);
  const [tagVariable, setTagVarible] = useState<string[]>([]);

  if (isLoading) return <div>Loading</div>;

  const clearValue = () => {
    dispatch(clearFilter());
    setStateMin(0);
    setStateMax(0);
  };

  const setTagVariables = (title: string) => {
    if (tagVariable.indexOf(title) >= 0) {
      setTagVarible((prev: any) => prev.filter((n: any) => n != title));
    } else {
      setTagVarible((prev: any) => [...prev, title]);
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.coast}>
        <button className={s.btn} onClick={() => clearValue()}>
          сбросить фильтры
        </button>
        <hr />
        <p>количество метров в 50 граммах:</p>
        <input
          type="text"
          placeholder="от"
          onChange={(e: any) => setStateMin(e.target.value)}
          value={stateMin}
        />
        <input
          type="text"
          placeholder="до"
          onChange={(e: any) => setStateMax(e.target.value)}
          value={stateMax}
        />
        <button
          className={s.btn}
          onClick={() => dispatch(setMinMax({ min: stateMin, max: stateMax }))}
        >
          фильтровать по цене
        </button>
        <hr />
      </div>
      <div className={s.compound}>
        <p>состав:</p>
        {data.map((item: any, id: number) => (
          <div key={id}>
            <input
              type="checkbox"
              id="scales"
              name={item}
              onChange={() => setTagVariables(item.title)}
            />
            <label htmlFor={item}>{item.title}</label>
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(addTags(tagVariable))} className={s.btn}>
        фильтровать по составу
      </button>
    </div>
  );
};
export default Filter;
