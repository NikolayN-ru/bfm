import { useAddProductMutation, useGetProductsQuery } from "../../../redux/ProductsApi";
import ButtonOk from "../../Buttons/ButtonOK/ButtonOk";
import ProductItem from "./ProductItem/ProductItem";
import styles from './Products.module.scss';
import { SearchInput } from "./Products.styled";

const Products = () => {
    const { data = [], isLoading } = useGetProductsQuery('1');
    const [addProduct, { isError}] = useAddProductMutation()
    // console.log(data);

    const createProduct = async ()=>{
        await addProduct({}).unwrap()
    }
    return (
        <div className={styles.wrapper}>
            <div style={{display:"flex", alignItems:"center", gap:"30px"}}>
                <h4>поиск по товарам</h4>
                <SearchInput type="text" />
                {/* <ButtonOk title='искать' okFunc={()=>{}} /> */}
                <ButtonOk title='добавить новый товар' okFunc={createProduct} />
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
