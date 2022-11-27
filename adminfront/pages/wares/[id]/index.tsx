import { useRouter } from "next/router"
import Product from "../../../components/Product/Product"
import { useGetOrderQuery } from "../../../redux/OrderApi"

const Index = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
        warres - id -- {id}
    </div>
  )
}
export default Index
