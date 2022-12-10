import {
  useAddProductMutation,
  useGetProductsQuery,
} from "../../../redux/ProductsApi"
import ButtonOk from "../../Buttons/ButtonOK/ButtonOk"
import ProductItem from "./ProductItem/ProductItem"
import { SearchInput, WrapperComponent } from "./Products.styled"

const Products = () => {
  const { data = [], isLoading } = useGetProductsQuery(null)
  const [addProduct, { isError }] = useAddProductMutation()

  const createProduct = async () => {
    await addProduct({}).unwrap()
  }
  return (
    <WrapperComponent>
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <h4>поиск по товарам</h4>
        <SearchInput type="text" />
        {/* <ButtonOk title='искать' okFunc={()=>{}} /> */}
        <ButtonOk title="добавить новый товар" okFunc={createProduct} />
      </div>
      {data.map((item: any, id: number) => {
        return <ProductItem key={id} item={item} />
      })}
    </WrapperComponent>
  )
}
export default Products
