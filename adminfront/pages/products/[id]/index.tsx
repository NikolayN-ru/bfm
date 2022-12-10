import { useRouter } from "next/router"
import Product from "../../../components/Product/Product"
import Product2 from "../../../components/Product2/Product2"
import { useGetOrderQuery } from "../../../redux/OrderApi"

const Index = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Product id={id} />
      {/* <Product2 id={id} /> */}
    </div>
  )
}
export default Index
