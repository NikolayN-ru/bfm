import React from "react"
import { useGetWaresCategoryQuery } from "../../redux/WaresCategory"
import styles from "./CategoryWares.module.scss";
const CategoryWares = () => {
  const { data, error, isLoading } = useGetWaresCategoryQuery(null)

  if (isLoading) return <div>Loading...</div>
  return (
    <div className={styles.wrapper}>
      {data.map((category: any, index: number) => {
        return (
          <div key={index} className={styles.item}>
            <p>{category.name}</p>
            <p>{category.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryWares
