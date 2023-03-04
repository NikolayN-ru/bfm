import router from "next/router"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLogoutMutation } from "../../redux/LoginApi"
import { addToken, clearToken } from "../../redux/TokenApi"
import styles from "./Header.module.scss"

const Header: FC<any> = () => {
  const dispatch = useDispatch()
//   const token = useSelector((state: any) => state.loginApi.mutations);
//   console.log(token)
  const [logoutMutation, { isError: isError, isLoading: isLoading }] =
    useLogoutMutation()

  const logout = async () => {
    // await logoutMutation("all").unwrap()
    dispatch(clearToken())
    router.push("/login")
  }

  return (
    <div className={styles.wrapper}>
      Панель администратора -
      <button
        // onClick={()=>dispatch(useLogoutQuery('all'))}
        onClick={() => logout()}
      >
        разлогиниться
      </button>
    </div>
  )
}
export default Header
