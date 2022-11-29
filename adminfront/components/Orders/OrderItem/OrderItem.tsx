import Link from "next/link"
import { FC } from "react"
import { OrderItemWrap } from "./OrderItem.styled"

const OrderItemMain: FC<any> = ({ item, id }) => {
  console.log(item)
  return (
    <Link href={`/orders/${item._id}`}>
      <OrderItemWrap>
        <p>{item.number}</p>
        <p>{item.totalPrice > 1 && item.totalPrice}</p>
        <p>{item.status}</p>
      </OrderItemWrap>
    </Link>
  )
}
export default OrderItemMain
