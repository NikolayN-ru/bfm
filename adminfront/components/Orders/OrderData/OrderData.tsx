import { FC, useState } from "react"
import { useShangeOrderMutation } from "../../../redux/OrderApi"
import ButtonOk from "../../Buttons/ButtonOK/ButtonOk"
import { Message, OrderItem, Pcontent, Pdata } from "./OrderData.styled"

const OrderData:FC<any> = ({ data, id }) => {
    const [state, setState] = useState<string>("")
  
    const [changeOrder, { isError}] = useShangeOrderMutation()
  
    const changeStatus = async ()=>{
      await changeOrder({"status" : state, "id": id}).unwrap()
  }
  
  return (
    <div>

    <OrderItem>
      <div>
        <Pcontent>
          Статус заказа: <Pdata>{data.status}</Pdata>
        </Pcontent>
        <div>
          <select name="select"  onChange={(e: any) => setState(e.target.value)}>
            <option value="asd" selected>---</option>
            <option value="создан">создан</option>
            <option value="завершен">завершен</option>
            <option value="отменен">отменен</option>
          </select>
          {/* <button onClick={changeStatus}>qwe</button> */}
          <ButtonOk title="поменять статус заказа" okFunc={changeStatus}/>
        </div>
        <hr />
        {data.positions &&
          data.positions.map((item: any, id: number) => {
            return (
              <div>
                {item.title} - {item.color} - {item.count}
                <hr />
              </div>
            )
          })}
      </div>
      <hr />
      <div>
        <Pcontent>поступил от: </Pcontent>
        <Pdata>{data.number}</Pdata>
      </div>
      <div>
        <Pcontent>имя: </Pcontent>
        <Pdata>{data.name}</Pdata>
      </div>
      <div>
        <Pcontent>фамилия:</Pcontent>
        <Pdata>{data.surname}</Pdata>
      </div>
      <div>
        <Pcontent>отчество:</Pcontent>
        <Pdata>{data.patronymic}</Pdata>
      </div>
      <div>
        <Pcontent>индекс:</Pcontent>
        <Pdata>{data.zipcode}</Pdata>
      </div>
      <div>
        <Pcontent>регион:</Pcontent>
        <Pdata>{data.region}</Pdata>
      </div>
      <div>
        <Pcontent>город:</Pcontent>
        <Pdata>{data.city}</Pdata>
      </div>
      <div>
        <Pcontent>АРДЕС -</Pcontent>
        <Pdata>{data.addres}</Pdata>
      </div>
      <div>
        <Pcontent>telefhone:</Pcontent>
        <Pdata>{data.phone}</Pdata>
      </div>
      <div>
        <Pcontent>email:</Pcontent>
        <Pdata>{data.email}</Pdata>
      </div>
      <div>
        <Pcontent>комментарий от заказчика:</Pcontent>
        <Message>{data.message}</Message>
      </div>
      <hr />
      <div>
        <Pcontent>опции заказа: доставка </Pcontent>
        <Pdata>{data.delivery}</Pdata>
      </div>
      <div>
        <Pcontent>оплата: </Pcontent>
        <Pdata>{data.payment}</Pdata>
      </div>
    </OrderItem>
    </div>
  )
}
export default OrderData