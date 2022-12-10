import React, { FC, useEffect, useState } from "react"
import { BASE_URL } from "../../env"
import { useGetProductQuery } from "../../redux/ProductApi"
import TagsProduct from "../Blocks/TagsProduct/TagsProduct"
import ButtonOff from "../Buttons/ButtonOff/ButtonOff"
import ButtonOk from "../Buttons/ButtonOK/ButtonOk"
import SelectLite from "../Select/SelectLite/SelectLite"
import Upload from "../Upload/Upload"
import { InputField, InputVariable, MainImg, MainWrap, SaveButton, TextAreaInput, WrapperProduct, WrapperTags, WrapperVariables } from "./Product2.styled"

const Product2: FC<any> = ({ id = "6370cba11b47bbb24573f006" }) => {
  const { data = [], isLoading } = useGetProductQuery(id)
  const [state, setState] = useState<any>(data)
  
  useEffect(() => {
    setState(data)
  }, [data])

  console.log(state);

  const setCategory = (item:string='') => {
    console.log(item, 'CATEGORY-ITEM')
    const newCategory = [String(item)]
    setState((prev: any) => {
      return {
        ...prev,
        category: newCategory,
      }
    })
    // console.log(state, 'stateNEW')
  }

  const changeValue = (e: any, field: string) => {
    setState((prev: any) => {
      const newState = { ...prev, [field]: Number(e.target.value.trim()) }
      return newState
    })
  }

  if (isLoading) {
    return <WrapperProduct>LOADInG!</WrapperProduct>
  }

  return (
    <MainWrap>
    <div style={{ width: "300px" }}>
      {/* <SaveButton onClick={changeFunc}>Сохранить</SaveButton> */}
      <MainImg src={BASE_URL + data.image} alt="" />
      {/* <input type="checkbox" value={checked} onChange={toggle} /> */}
      <div>
        <hr />
        {/* <TagsProduct const toggleTag={toggleTag} /> */}
        <hr />
        <p>теги:</p>
        {data?.tags?.map((tag: any, id: number) => {
          return (
            <WrapperTags>
              {tag.title ? (
                <span>{tag.title}</span>
              ) : (
                <span>сохраните изменения</span>
              )}
            </WrapperTags>
          )
        })}
        <hr />
      </div>
      <div>
        имя:{" "}
        <InputField
          type="text"
          value={state.name}
          onChange={(e) => changeValue(e, "name")}
        />
      </div>
      <div>
        <h4>
          {/* фирма производитель -{" "} */}
          {/* {state?.category?.length ? state.category[0].title : <>vopa</>} */}
        </h4>
        {/* <SelectLite setCategory={setCategory} /> */}
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
      {/* <TextAreaInput
        value={state.description}
        onChange={(e) => changeValue(e, "description")}
      /> */}
    </div>
    <WrapperProduct>
      <div>
        {/* <p>вариации:</p> */}
        {/* <div style={{ display: "flex", gap: 40 }}>
          {variableState.map((item: any, id: number) => (
            <div key={id}>{item}</div>
          ))}
        </div> */}
        {state?.variables?.map((item: any, id: number) => {
          return (
            <WrapperVariables key={id}>
              {/* <InputVariable value={item.number} /> */}
              {/* <InputVariable
                value={item.color || 0}
                onChange={(e) => changeProp(e, id, "color")}
              /> */}
              {/* <InputVariable
                value={item.count}
                onChange={(e) => changeProp(e, id, "count")}
              /> */}
              {item.image ? (
                <img src={BASE_URL + item.image} width="40" />
              ) : (
                <div>
                  {/* <Upload
                    filePath={`${state.category[0].title}_${state.name}`}
                    addImageProp={addImageProp}
                    id={id}
                  /> */}

                  {/* <input type="file" /> */}
                </div>
              )}
              {/* <ButtonOff
                title="удалить вариацию"
                delFunc={() => removeVariable(id)}
              /> */}
              {/* <button onClick={() => changeMainPhoto(item.image)}>*</button> */}
            </WrapperVariables>
          )
        })}
        <hr />
        {state?.category?.length ? (
        //   <ButtonOk title="добавить вариацию" okFunc={addVariable} />
        <></>
        ) : (
          <p>выберете фирму товара и сохраните ее</p>
        )}
      </div>
    </WrapperProduct>
  </MainWrap>
  )
}

export default Product2
