import { FC, useState } from "react"
import { useAddProductMutation, useGetCategoryProductAllQuery } from "../../../redux/waresApi"
import { WrapWheres } from "./addWeres.styled"

const initialState = {
  title: "",
  category: [],
}

const AddWeres: FC<any> = ({ setModal }) => {
  const { data, isLoading } = useGetCategoryProductAllQuery("all")
  const [addProduct, {isError}] = useAddProductMutation();
  const [state, setState] = useState<any>(initialState)

  console.log(state, "state")

  const addCategory = (id: string) => {
    setState((prev: any) => ({ ...prev, category: [id] }))
    // setModal(true)
  }
  const changeTitle = (title: string) => {
    setState((prev: any) => ({ ...prev, title }))
    // setModal(true)
  }

  const createProduct = async () => {
    await addProduct({...state}).unwrap();
    setModal((prev: any) => !prev)
}

  if(isLoading) {
    return <div>loading</div>
  }

  return (
    <WrapWheres>
      <button onClick={() => setModal((prev: any) => !prev)}>X</button>
      addWeres
      <hr />
      <div>
        <span>title</span>
        <input type="text" onChange={(e:any) => changeTitle(e.target.value)} />
        <hr />
        {/* <select
          name="pets"
          id="category-select"
          onChange={(e: any) => setLocalCategory(e.target.value)}
        >
          <option value="">-- выберите категорию --</option>
          {data.map((item: any, id: number) => {
            return (
              <option key={id} value={item.name}>
                {item.name}
              </option>
            )
          })}
        </select> */}
        <hr />
        <div>
          {data.map((item: any, id: number) => {
            return (
              <button onClick={() => addCategory(item._id)}>{item.name}</button>
            )
          })}
        </div>
      </div>
      <button onClick={createProduct}>Добавить товар</button>
    </WrapWheres>
  )
}
export default AddWeres
