import { useRouter } from "next/router"
import { FC } from "react"

const index: FC = (): JSX.Element => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {/* <Product id={id}/> */}
      <p>Order: {id}</p>
    </div>
  )
}
export default index
