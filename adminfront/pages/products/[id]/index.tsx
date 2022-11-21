import { useRouter } from 'next/router'
import Product from '../../../components/Product/Product'
import { useGetProductQuery } from '../../../redux/ProductApi'

const Index = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Product id={id}/>
      {/* <p>Post: {id}</p> */}
    </div>
  )
}
export default Index
