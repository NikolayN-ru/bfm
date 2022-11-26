import Link from "next/link"
import { FC } from "react"
import { OrderItemWrap } from "./OrderItem.styled"

const OrderItem: FC<any> = ({ item, id }) => {

  return (
    <Link href={`/orders/${item._id}`}>
      <OrderItemWrap>
        <p>
          {item.number} - {item.status}
        </p>
        <p></p>
      </OrderItemWrap>
    </Link>
  )
}
export default OrderItem
