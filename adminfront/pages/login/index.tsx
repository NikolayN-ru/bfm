import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"
import router from "next/router"
import React from "react"
import { useDispatch } from "react-redux"
import { useLoginQueryQuery } from "../../redux/LoginApi"
import { addToken } from "../../redux/TokenApi"
import s from "./login.module.scss"

const Index = () => {
  const dispatch = useDispatch()
  const data = {
    username: "admin",
    password: "admin",
  }

  const { data: query, isLoading } = useLoginQueryQuery(data)
  const addTokenQuery = () => {
    dispatch(addToken(query?.auth_token))
  }
  // router.push("/needles") | скидывает все состояние

  return (
    <div className={s.wrapper}>
      <div className={s.form}>
        <h1 className="text-3xl font-bold">Login form</h1>
        <input type="text" />
        <input type="text" />
        <button onClick={() => addTokenQuery()}>вход</button>
        <Link href="/needles">уйти с формы</Link>
      </div>
    </div>
  )
}

export default Index
