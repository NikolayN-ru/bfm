import { useRouter } from "next/router"
import { FC } from "react"
import { useGetOrderQuery } from "../../../redux/OrderApi"

const index: FC = (): JSX.Element => {
  const router = useRouter()
  const { id } = router.query

  const { data = [], isLoading } = useGetOrderQuery(id)
  // console.log(data, "data")
  if (isLoading) {
    return <>LOADING</>
  }
  return (
    <div>
      {/* <p>заказ id: {id}</p> */}
      <p>поступил от: {data.number}</p>
      <p>STATUS = {data.status}</p>
      <button>поменять статус заказа</button>
      <hr />
      {data.positions && 
        data.positions.map((item:any, id:number) => {
          return (
            <div>
              {item.title} - {item.color} - {item.count}
              <hr />
            </div>
          )
        })
      }
      <hr />
      <hr />
      <hr />
      поступил от  
      <p>имя: {data.name} </p>
      <p>фомилия: {data.surname} </p>
      <p>отчество: {data.patronymic} </p>
      <p>индекс: {data.zipcode} </p>
      <p>регион: {data.region} </p>
      <p>город: {data.city} </p>
      <p>АРДЕС - {data.addres} </p>
      <p>telefhone: {data.phone} </p>
      <p>email: {data.email} </p>
      <p>message: {data.message} </p>
      <hr />

<div>
  опции заказа:
  доставка - СДЭК, Почта
<br />
  оплата:
  на расчетный счет по реквизитам,
  по куар-коду,
  по ссылке
</div>
    </div>
  )
}
export default index
