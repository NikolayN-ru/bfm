import { useRouter } from "next/router"
import { FC } from "react"
import OrderData from "../../../components/Orders/OrderData/OrderData"
import {
  useGetOrderQuery,
  useShangeOrderMutation,
} from "../../../redux/OrderApi"

const index: FC = (): JSX.Element => {
  const router = useRouter()
  const { id } = router.query

  const { data, isLoading } = useGetOrderQuery(id)
  const [changeOrder, { isError }] = useShangeOrderMutation()

  if (isLoading) {
    return <>LOADING</>
  }

  const changeStatus = async (state: any = "создан") => {
    await changeOrder({ status: state, id: id }).unwrap()
  }

  return <OrderData id={id} data={data} changeStatus={changeStatus} />
}
export default index
