import { FC } from 'react';
import styles from './ProductItem.module.scss';

interface Iitem {
    name: string;
}

const ProductItem:FC<any> = ({item}) => {
    return (
        <div className={styles.wrapper}>{item.name}</div>
    )
}
export default ProductItem