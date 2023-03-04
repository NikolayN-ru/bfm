import React, { FC, useEffect, useState } from "react"
import {
  useChangeVariablesNeedleMutation,
  useGetNeedleQuery,
} from "../../redux/NeedlesApi"
import { Wrapper } from "../Layout/Layout.styled"
import s from "./needles.module.scss"

const Needles: FC<any> = ({ id }): JSX.Element => {
  const { data, isLoading } = useGetNeedleQuery(id)
  const [updateNeedlesVariable, { isLoading: isLoading2 }] =
    useChangeVariablesNeedleMutation()
  const [state, setState] = useState<any>([
    { value: 3.25, count: 5, price: 530 },
  ])

  useEffect(() => {
    if (data) {
      setState(JSON.parse(data.variablesItem))
    }
  }, [data])

  const newVariable = () => {
    const obj = { value: 0, count: 0, price: 0 }
    setState((prev: any) => [...prev, obj])
  }

  const changeValue = (e: any, id: number) => {
    if (typeof +e.target.value === ("number" || ".")) {
      setState((prev: any) => {
        let newState = [...state]
        newState[id].value = e.target.value
        return newState
      })
    }
  }

  const changeCount = (e: any, id: number) => {
    if (typeof +e.target.value === "number") {
      setState((prev: any) => {
        let newState = [...state]
        newState[id].count = +e.target.value
        return newState
      })
    }
  }

  const changePrice = (e: any, id: number) => {
    if (typeof +e.target.value === "number") {
      setState((prev: any) => {
        let newState = [...state]
        newState[id].price = +e.target.value
        return newState
      })
    }
  }

  const saveValues = async () => {
    // console.log(JSON.stringify(state), "state")
    // console.log({id, state})
    await updateNeedlesVariable({ id, state }).unwrap()
  }

  if (isLoading) return <p>Loading!!</p>
  const { title, description, variablesItem } = data
  return (
    <div className={s.wrapper}>
      {title}
      <hr />
      {/* <p>{description}</p> */}
      <p>размер - - - количество - - - цена</p>
      <ul>
        {/* {JSON.parse(variablesItem).map((i: any, id:number) => { */}
        {state.map((i: any, id: number) => {
          return (
            <li key={id}>
              <input
                type="text"
                value={i.value}
                onChange={(e) => {
                  changeValue(e, id)
                }}
              />
              <input
                type="text"
                value={i.count}
                onChange={(e) => {
                  changeCount(e, id)
                }}
              />
              <input
                type="text"
                value={i.price}
                onChange={(e) => changePrice(e, id)}
              />
            </li>
          )
        })}
        <button onClick={newVariable}>добавить новую вариацию</button>
      </ul>
      <div>
        <hr />
        {/* <p>вариации</p> */}
        {/* <span>{variablesItem}</span> */}
      </div>
      <button onClick={() => saveValues()}>Сохранить</button>
    </div>
  )
}

export default Needles
