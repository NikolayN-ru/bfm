import Link from "next/link"
import { FC, useState } from "react"
import AddWeres from "../../components/Modal/addWeres/addWeres"
import { useGetWaresAllQuery } from "../../redux/waresApi"
import { BtnNew, Item, WrapItems } from "./weres.styled"

const index: FC = () => {
  const { data, isLoading } = useGetWaresAllQuery("all")
  console.log(data)
  const [modal, setModal] = useState<boolean>(false)
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {modal && <AddWeres setModal={setModal} />}
      <h3>Изделия</h3>
      <BtnNew onClick={() => setModal((prev) => !prev)}>добавить новый товар</BtnNew>
      <WrapItems>
        {data &&
          data.map((item: any, index: number) => (
            <Link href={`/wares/${item._id}`} key={index}>
              <Item>{item.title}</Item>
            </Link>
          ))}
      </WrapItems>
    </div>
  )
}
export default index
