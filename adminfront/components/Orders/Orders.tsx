import { FC } from "react"
import { useGetOrderAllQuery } from "../../redux/OrderApi"
import OrderItem from "./OrderItem/OrderItem"

const Orders: FC = () => {
  const { data = [], isLoading } = useGetOrderAllQuery<any>("1")
  console.log(data, "data")

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h3>Orders:</h3>
      {data.map((item: any, id: number) => {
        return <OrderItem key={id} item={item}/>
      })}
    </div>
  )
}
export default Orders
