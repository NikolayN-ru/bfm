import { spawn } from "child_process"
import { FC, Reducer, useEffect, useReducer, useState } from "react"
import { BASE_URL } from "../../env"
import { useGetProductQuery } from "../../redux/ProductApi"
import Tags from "../Blocks/Tags/Tags"
import ButtonOff from "../Buttons/ButtonOff/ButtonOff"
import ButtonOk from "../Buttons/ButtonOK/ButtonOk"
import {
  ButtonTag,
  InputField,
  InputVariable,
  MainImg,
  MainWrap,
  SaveButton,
  TextAreaInput,
  WrapperProduct,
  WrapperTags,
  WrapperVariables,
} from "./Product.styled"

const Product: FC<any> = ({ id }) => {
  const { data = [], isLoading } = useGetProductQuery(id)
  const [state, setState] = useState<any>(data)
  // const [checked, toggle] = useReducer<Reducer<boolean>, boolean>(checked => !checked, false)
  const [checked, toggle] = useReducer((checked) => !checked, false)
  //   const [inputName, setInputName] = useState<string>('')
  console.log(state, "state")

  useEffect(() => {
    setState(data)
  }, [data])

  const changeValue = (e: any, field: string) => {
    setState((prev: any) => {
      const newState = { ...prev, [field]: e.target.value }
      return newState
    })
  }

  const addVariable = () => {
    setState((prev: any) => {
      const newState = {
        ...prev,
        variables: [
          ...prev.variables,
          { number: "", color: "", count: 0, image: "" },
        ],
      }
      return newState
    })
  }

  if (isLoading || !state.name) {
    return <WrapperProduct>LOADInG!</WrapperProduct>
  }

  const variableState = ["номер", "цвет", "количество", "изображение"]

  return (
    <MainWrap>
      <div style={{ width: "300px" }}>
        <MainImg src={BASE_URL + state.image} alt="" />
        <ButtonOk title="сменить главную картинку" okFunc={() => {}} />
        <input type="checkbox" value={checked} onChange={toggle} />
      </div>
      <WrapperProduct>
        <div>
          <p>вариации:</p>
          <div style={{ display: "flex", gap: 40 }}>
            {variableState.map((item: any, id: number) => (
              <div key={id}>{item}</div>
            ))}
          </div>
          {state.variables?.map((item: any, id: number) => {
            return (
              <WrapperVariables key={id}>
                <InputVariable value={item.number} />
                <InputVariable value={item.color} />
                <InputVariable value={item.count} />
                {item.image ? (
                  <img src={BASE_URL + item.image} width="50" />
                ) : (
                  <input type="file" />
                )}
                <ButtonOff title="удалить варриацию" />
              </WrapperVariables>
            )
          })}
          <hr />
          <ButtonOk title="добавить вариацию" okFunc={addVariable} />
        </div>

        <h3>{data?.name}</h3>
        <div>
          имя:{" "}
          <InputField
            type="text"
            value={state.name}
            onChange={(e) => changeValue(e, "name")}
          />
        </div>
        <div>
          цена:{" "}
          <InputField
            type="text"
            value={state.price}
            onChange={(e) => changeValue(e, "price")}
          />
        </div>
        <div>
          страна:{" "}
          <InputField
            type="text"
            value={state.country}
            onChange={(e) => changeValue(e, "country")}
          />
        </div>
        <div>
          длина:{" "}
          <InputField
            type="text"
            value={state.length}
            onChange={(e) => changeValue(e, "length")}
          />
        </div>

        <div>
          вес:{" "}
          <InputField
            type="text"
            value={String(state.wieght)}
            onChange={(e) => changeValue(e, "wieght")}
          />
        </div>
        <TextAreaInput
          value={state.description}
          onChange={(e) => changeValue(e, "description")}
        />
        <div>
          <p>теги:</p>
          {state.tags?.map((tag: any, id: number) => {
            return (
              <WrapperTags>
                <ButtonTag>{tag.title}</ButtonTag>
              </WrapperTags>
            )
          })}
        </div>

        <SaveButton>Сохранить</SaveButton>
      </WrapperProduct>
    </MainWrap>
  )
}
export default Product
