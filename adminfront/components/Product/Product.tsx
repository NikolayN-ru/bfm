import axios from "axios"
import { spawn } from "child_process"
import { FC, Reducer, useEffect, useReducer, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../../env"
import { useGetCategoryAllQuery } from "../../redux/CategoryApi"
import {
  useChangeProductMutation,
  useGetProductQuery,
} from "../../redux/ProductApi"
import Tags from "../Blocks/Tags/Tags"
import TagsProduct from "../Blocks/TagsProduct/TagsProduct"
import ButtonOff from "../Buttons/ButtonOff/ButtonOff"
import ButtonOk from "../Buttons/ButtonOK/ButtonOk"
import DataSelect from "../Select/DataSelect/DataSelect"
import SelectLite from "../Select/SelectLite/SelectLite"
import Upload from "../Upload/Upload"
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
  const [checked, toggle] = useReducer((checked) => !checked, false)
  const [changeProduct, { isLoading: isLoading2 }] = useChangeProductMutation()

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
          { number: 0, color: 0, count: 0, image: "" },
        ],
      }
      return newState
    })
  }

  const removeVariable = (index: number) => {
    setState((prev: any) => {
    const candidate = prev.variables.filter((_: any, i: number) => i === index)
    console.log(candidate[0].image);
      axios.post(`http://localhost:4200/api/files/delete`, {
        "file": candidate[0].image
      })
      .then(res => {
      //  console.log(`Success` + res.data);
        })
        .catch(err => {
            console.log(err);
        })
      const newState = {
        ...prev,
        variables: prev.variables.filter((_: any, i: number) => i !== index),
      }
      return newState
    })
  }


  const changeProp = (e: any, id: number, prop: string) => {
    setState((prev: any) => {
      // console.log(state, 'STATE!')
      const newState = {
        ...state,
        variables: state.variables.map((_: any, i: number) => {
          if (i === id) {
            // console.log(_, 'color!', e.target.value)
            _ = { ..._, [prop]: e.target.value, number: e.target.value }
          }
          return _
        }),
      }
      // console.log(newState, 'newState')
      return newState
    })
  }

  const changeFunc = async () => {
    await changeProduct(state).unwrap()
  }

  const setCategory = (item: any) => {
    // console.log(item, 'CATEGORY-ITEM')
    const newCategory = [String(item)]
    setState((prev: any) => {
      return {
        ...prev,
        category: newCategory,
      }
    })
    // console.log(state, 'stateNEW')
  }

  const addImageProp = (id:number, fileUrl:string) => {
    setState((prev: any) => {
      // console.log(state, 'STATE!')
      const newState = {
        ...state,
        variables: state.variables.map((_: any, i: number) => {
          if (i === id) {
            // console.log(_, 'color!', e.target.value)
            _ = { ..._, image: fileUrl }
          }
          return _
        }),
      }
      // console.log(newState, 'newState')
      return newState
    })
  }

  const changeMainPhoto = (url:string) => {
    // console.log(state.mainPhoto,'state.mainPhoto')
    setState((prev: any) => {
      return {
       ...prev,
       image:url,
      }
    })
  }
   //todo
  const toggleTag = (id:any) => {
    console.log(id, 'toggleTags - ID')
  }

  // if (isLoading || !state.name) {
  if (isLoading) {
    return <WrapperProduct>LOADInG!</WrapperProduct>
  }

  // const variableState = ["номер", "цвет", "количество", "изображение"]
  const variableState = ["цвет", "количество", "изображение"]

  return (
    <MainWrap>
      <div style={{ width: "300px" }}>
        <SaveButton onClick={changeFunc}>Сохранить</SaveButton>
        <MainImg src={BASE_URL + state.image} alt="" />
        <ButtonOk title="сменить главную картинку" okFunc={() => {}} />
        {/* <input type="checkbox" value={checked} onChange={toggle} /> */}
        {/* <h3>{data?.name}</h3> */}
        <div>
          <hr />
          //todo
          <TagsProduct const toggleTag={toggleTag}/>
          <hr />
          <button>SAVE - TAGS</button>
          <p>теги:</p>
          {state.tags?.map((tag: any, id: number) => {
            return (
              <WrapperTags>
                <ButtonTag>{tag.title}</ButtonTag>
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
            фирма производитель -{" "}
            {state.category?.length ? state.category[0].title : null}
          </h4>
          <SelectLite setCategory={setCategory} />
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
        
      </div>
      <WrapperProduct>
        <div>
          {/* <p>вариации:</p> */}
          <div style={{ display: "flex", gap: 40 }}>
            {variableState.map((item: any, id: number) => (
              <div key={id}>{item}</div>
            ))}
          </div>
          {state.variables?.map((item: any, id: number) => {
            return (
              <WrapperVariables key={id}>
                {/* <InputVariable value={item.number} /> */}
                <InputVariable
                  value={item.color || 0}
                  onChange={(e) => changeProp(e, id, "color")}
                  />
                <InputVariable
                  value={item.count}
                  onChange={(e) => changeProp(e, id, "count")}
                  />
                {item.image ? (
                  <img src={BASE_URL + item.image} width="40" />
                  ) : (
                    <div>
                    <Upload 
                    filePath={`${state.category[0].title}_${state.name}`}
                    addImageProp={addImageProp}
                    id={id}
                    />
                    {/* <input type="file" /> */}
                  </div>
                )}
                <ButtonOff
                  title="удалить варриацию"
                  delFunc={() => removeVariable(id)}
                  />
                  <button onClick={()=>changeMainPhoto(item.image)}>*</button>
              </WrapperVariables>
            )
          })}
          <hr />
          <ButtonOk title="добавить вариацию" okFunc={addVariable} />
        </div>
      </WrapperProduct>
    </MainWrap>
  )
}
export default Product