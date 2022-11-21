import Link from "next/link"
import { FC } from "react"
import { useDeleteProductMutation } from "../../../../redux/ProductsApi"
import styles from "./ProductItem.module.scss"
import { ButtonDel, StyledCategory, WrapProduct } from "./ProductItem.styled"

interface Iitem {
  name: string
}

const ProductItem: FC<any> = ({ item }) => {
  const [deleteProduct, { isError: isError, isLoading: isLoading }] =
    useDeleteProductMutation()

  const deleteProductFunc = async (id: any) => {
    // setActiveTag(id)
    await deleteProduct(id).unwrap()
  }
  return (
    <WrapProduct>
      <Link href={`/products/${item._id}`}>
        <div className={styles.wrapper}>
          {item.name ? (
            <div>
              {item.name}{" "}
              <StyledCategory>{item.category[0]?.title}</StyledCategory>
            </div>
          ) : (
            "новый товар"
          )}
        </div>
      </Link>
      <ButtonDel onClick={() => deleteProductFunc(item._id)}>del</ButtonDel>
    </WrapProduct>
  )
}
export default ProductItem
