import Link from "next/link"
import { FC } from "react"
import { OrderItemWrap } from "./OrderItem.styled"

const OrderItemMain: FC<any> = ({ item }) => {
  return (
    <Link href={`/orders/${item._id}`}>
      <OrderItemWrap>
        <p>{item.number}</p>
        <p>{item.totalPrice > 1 ? item.totalPrice : 0}</p>
        <p>{item.status}</p>
      </OrderItemWrap>
    </Link>
  )
}
export default OrderItemMain
