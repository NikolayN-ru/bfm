import { useState } from "react"
import {
  useAddCategoryMutation,
  useAddDescCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategory2Query,
} from "../../../redux/Category2Api"
import ButtonOff from "../../Buttons/ButtonOff/ButtonOff"
import ButtonOk from "../../Buttons/ButtonOK/ButtonOk"
import styles from "./Category.module.scss"

const Category = () => {
  const [state, setState] = useState<string>("")
  const { data, isLoading } = useGetCategory2Query("")
  const [addCategory, { isError }] = useAddCategoryMutation()
  const [updateCategory, { isLoading: isLoading2 }] = useAddDescCategoryMutation()
  const [deleteCategory, { isError: Error2, isLoading: isLoading3 }] =
  useDeleteCategoryMutation()

  if (isLoading) {
    return <p>Loading...</p>
  }

  const createTag = async () => {
    await addCategory({}).unwrap();
}

const addDescriptionCateogry = async (id: any) => {
  await updateCategory({ title: state, id: id }).unwrap()
  setState("")
}

const deleteTagFunc = async (id: any) => {
  // setActiveTag(id)
  await deleteCategory(id).unwrap()
}

  return (
    <div className={styles.wrapper}>
      <p>Категории</p>
      <ButtonOk okFunc={createTag} title='добавить новую категорию' />
      <div>
        {data.map((item: any, id: number) => {
          return item.title ? (
            <div key={id} className={styles.item}>
              {item.title}
              <ButtonOff
                    delFunc={() => deleteTagFunc(item._id)}
                    title="удалить категорию"
                  />
            </div>
          ): (
            <div key={id}>
              {isLoading2 ? (
                "UPDATE-TAG"
              ) : (
                <div>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    style={{
                      margin: "5px",
                      width: "115px",
                      marginBottom: "20px",
                    }}
                  />
                  {/* <button onClick={() => addDescriptionTag(tag._id)}>ADD-description-tag</button> */}
                  <ButtonOk
                    okFunc={() => addDescriptionCateogry(item._id)}
                    title="добавить тег"
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Category
