import { useRouter } from "next/router"
import { FC, useState } from "react"
import ButtonOk from "../../../components/Buttons/ButtonOK/ButtonOk"
import OrderData from "../../../components/Orders/OrderData/OrderData"
import OrderItemMain from "../../../components/Orders/OrderItem/OrderItem"
import { useGetOrderQuery, useShangeOrderMutation } from "../../../redux/OrderApi"
import { Message, OrderItem, Pcontent, Pdata } from "./OrderItem.styled"

const index: FC = (): JSX.Element => {
  const [state, setState] = useState<string>("")
  const router = useRouter()
  const { id } = router.query

  const { data = [], isLoading } = useGetOrderQuery(id)
  const [changeOrder, { isError}] = useShangeOrderMutation()
  if (isLoading) {
    return <>LOADING</>
  }

  // console.log(state, id)
  const changeStatus = async ()=>{
    await changeOrder({"status" : state, "id": id}).unwrap()
}

  return (
    <>
{/* <OrderItemMain id={id} item={data}/> */}

<OrderData id={id} data={data}/>

  
    </>
  )
}
export default index
