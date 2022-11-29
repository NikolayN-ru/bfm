import { FC } from "react"
import { useGetOrderAllQuery } from "../../redux/OrderApi"
import OrderItem from "./OrderItem/OrderItem"
import { OrdersWrap, Title } from "./Orders.styled"

const Orders: FC = () => {
  const { data = [], isLoading } = useGetOrderAllQuery("1")

  if (isLoading) {
    return <OrdersWrap>Loading...</OrdersWrap>
  }

  return (
    <OrdersWrap>
      <Title>страница заказов:</Title>
      {data.map((item: any, id: number) => (
        <OrderItem key={id} item={item} />
      ))}
    </OrdersWrap>
  )
}
export default Orders
