import { useGetCategoryAllQuery } from '../../../redux/CategoryApi'
import styles from './Category.module.scss'

const Category = () => {
  const { data = [], isLoading } = useGetCategoryAllQuery('1')

  return (
    <div className={styles.wrapper}>
      <p>Категории</p>
      <div>
        {data.map((item: any, id: number) => {
          return (
            <div key={id} className={styles.item}>
              {item.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Category
