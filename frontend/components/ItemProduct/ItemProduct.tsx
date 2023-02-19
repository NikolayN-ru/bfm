import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./ItemProduct.module.scss";
import { useDispatch } from "react-redux";
import { shangeMainProduct } from "../../redux/mainProduct";
import { back_api } from "../../variables";

const ItemProduct: FC<any> = ({ item }) => {
  let { id, image, name, price, category } = item;
  const linkPath = `/yarn/${name}`;
  const dispatch = useDispatch();
  image.indexOf("http") && (image = back_api + image);
  return (
    <Link href={linkPath} onClick={() => dispatch(shangeMainProduct(item))}>
      <div className={styles.wrapper}>
        <img src={`${image}`} alt="" />
        {/* <Image src={`${image}`} alt={'yarn'} width='150' height='300'/> */}
        <div className={styles.description}>
          <p className={styles.category}>{category.title}</p>
          <h3>{name}</h3>
          <h3>{price} P.</h3>
        </div>
      </div>
    </Link>
  );
};
export default ItemProduct;
