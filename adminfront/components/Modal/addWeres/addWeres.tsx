import { FC, useState } from "react"
import {
  useAddProductMutation,
  useGetCategoryProductAllQuery,
} from "../../../redux/waresApi"
import ButtonOff from "../../Buttons/ButtonOff/ButtonOff"
import ButtonOk from "../../Buttons/ButtonOK/ButtonOk"
import { Content, WrapCategory, WrapWheres } from "./addWeres.styled"

const initialState = {
  title: "",
  category: [],
}

const AddWeres: FC<any> = ({ setModal }) => {
  const { data, isLoading } = useGetCategoryProductAllQuery("all")
  const [addProduct, { isError }] = useAddProductMutation()
  const [state, setState] = useState<any>(initialState)

  const addCategory = (id: string) => {
    setState((prev: any) => ({ ...prev, category: [id] }))
    // setModal(true)
  }
  const changeTitle = (title: string) => {
    setState((prev: any) => ({ ...prev, title }))
    // setModal(true)
  }

  const createProduct = async () => {
    await addProduct({ ...state }).unwrap()
    setModal((prev: any) => !prev)
  }

  if (isLoading) {
    return <div>loading</div>
  }

  return (
    <WrapWheres>
      <ButtonOff
        delFunc={() => setModal((prev: any) => !prev)}
        title="закрыть окно"
      />
      <Content>создание нового продукта</Content>
      <hr />
      <div>
        <Content>введите заголовок: </Content>
        <input type="text" onChange={(e: any) => changeTitle(e.target.value)} />
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
        <Content>выберете категорию: </Content>
        <WrapCategory>
          {data.map((item: any, id: number) => {
            return (
              <button onClick={() => addCategory(item._id)}>{item.name}</button>
            )
          })}
        </WrapCategory>
      </div>
      <hr />
      <ButtonOk okFunc={createProduct} title="Добавить товар" />
    </WrapWheres>
  )
}
export default AddWeres
