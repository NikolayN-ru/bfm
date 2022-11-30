import Link from "next/link"
import { FC, useState } from "react"
import ButtonOk from "../../components/Buttons/ButtonOK/ButtonOk"
import AddWeres from "../../components/Modal/addWeres/addWeres"
import { useGetWaresAllQuery } from "../../redux/waresApi"
import { BtnNew, H3Title, Item, WrapItems, WrapTitle } from "./weres.styled"

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
      <WrapTitle>
        <H3Title>Изделия</H3Title>
        <ButtonOk
          title="добавить новый товар"
          okFunc={() => setModal((prev) => !prev)}
        />
      </WrapTitle>
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
