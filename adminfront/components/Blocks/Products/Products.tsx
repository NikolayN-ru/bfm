import { useGetProductsQuery } from "../../../redux/ProductsApi";
import ProductItem from "./ProductItem/ProductItem";
import styles from './Products.module.scss';

const Products = () => {
    const { data = [], isLoading } = useGetProductsQuery('1');
    console.log(data);
    return (
        <div className={styles.wrapper}>
            <div style={{display:"flex", alignItems:"center", gap:"30px"}}>
                <h5>поиск по товарам</h5>
                <input type="text" />
            </div>
            {data.map((item: any, id: number) => {
                return (
                    <ProductItem key={id} item={item} />
                    // <div key={id}>{item.name}</div>
                )
            })}
        </div>
    )
}
export default Products;