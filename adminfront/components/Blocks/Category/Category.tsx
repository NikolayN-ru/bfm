import {
  useAddCategoryMutation,
  useGetCategory2Query,
} from "../../../redux/Category2Api"
import ButtonOk from "../../Buttons/ButtonOK/ButtonOk"
import styles from "./Category.module.scss"

const Category = () => {
  const { data, isLoading } = useGetCategory2Query("")
  const [addCategory, { isError }] = useAddCategoryMutation()
  console.log(data, "data")

  if (isLoading) {
    return <p>Loading...</p>
  }

  const createTag = async () => {
    await addCategory({}).unwrap();
}

  return (
    <div className={styles.wrapper}>
      <p>Категории</p>
      {/* <ButtonOk okFunc={createTag} title='добавить новую категорию' /> */}
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
