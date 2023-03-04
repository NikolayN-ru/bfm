import Link from "next/link"
import router from "next/router"
import { useSelector } from "react-redux"
import { useGetNeedlesQuery } from "../../redux/NeedlesApi"
import s from "./needles.module.scss"

const Index = () => {
  
  const token = useSelector((state: any) => state.token.token)
  // console.log(token, "token")
  const { data: needles, isLoading } = useGetNeedlesQuery(token)

  // const [updateNeedlesVariable, { isLoading: isLoading2 }] =
  // useChangeVariablesNeedleMutation()

  // console.log(needles, "needles")
  if (isLoading) {
    return <p>LOADING!!!</p>
  }
  return (
    <div className={s.wrapper}>
      needles
      <ul>
        {needles != undefined ? (
          needles.map(({ title }: any, id: number) => {
            return (
              <Link href={`/needles/${id+1}`}>
                <li key={id}>{title}</li>
              </Link>
            )
          })
        ) : (
          <button onClick={() => router.push("/login")}>
            {" "}
            'кнопка - авторизоваться !
          </button>
        )}
      </ul>
    </div>
  )
}
export default Index
