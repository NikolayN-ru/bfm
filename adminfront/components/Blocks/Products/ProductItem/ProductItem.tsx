import Link from 'next/link'
import { FC } from 'react'
import styles from './ProductItem.module.scss'
import { StyledCategory } from './ProductItem.styled'

interface Iitem {
  name: string
}

const ProductItem: FC<any> = ({ item }) => {
  return (
    <Link href={`/products/${item._id}`}>
      <div className={styles.wrapper}>
        {item.name} <StyledCategory>{item.category[0]?.title}</StyledCategory>
      </div>
    </Link>
  )
}
export default ProductItem
