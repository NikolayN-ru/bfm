import { FC } from "react"
import { OrderItemWrap } from "./OrderItem.styled"

const OrderItem: FC<any> = ({ item }) => {
  return (
    <OrderItemWrap>
      <p>
        {item.number} - {item.status}
      </p>
      <p></p>
    </OrderItemWrap>
  )
}
export default OrderItem
