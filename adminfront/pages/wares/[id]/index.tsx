import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Product from "../../../components/Product/Product"
import Wares from "../../../components/Wares/Wares"
import { useGetOrderQuery } from "../../../redux/OrderApi"
import { useGetWaresQuery } from "../../../redux/waresApi"

const Index = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
     <Wares id={id}/>
    </div>
  )
}
export default Index
