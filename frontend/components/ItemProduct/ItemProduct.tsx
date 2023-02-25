import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./ItemProduct.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { shangeMainProduct } from "../../redux/mainProduct";
import { back_api } from "../../variables";

const ItemProduct: FC<any> = ({ item }): JSX.Element | null => {
  let { image, name, price, category, discount, discountPercentage } = item;
  const filterProduct = useSelector((state: any) => state.filter.filter[0]);
  const tagsFilter = useSelector(
    (state: any) => state.filter.filter[1].variablles
  );

  const linkPath = `/yarn/${name}`;
  const dispatch = useDispatch();
  image.indexOf("http") && (image = back_api + image);
  discountPercentage = +price - (+price / 100) * +discountPercentage;
  let sale = discount || discountPercentage;
  if (sale === discount) {
    sale = price - discount;
  }

  let endPrice = discount ?? discountPercentage ?? price;
  if (filterProduct.min && filterProduct.max) {
    if (filterProduct.min >= endPrice || endPrice >= filterProduct.max) {
      return null;
    }
  }

  let intersection: string[] = item.tag.filter((num: any) => {
    return tagsFilter.includes(num.title);
  });

  if (tagsFilter.length && intersection.length == 0) {
    return null;
  }

  return (
    <Link href={linkPath} onClick={() => dispatch(shangeMainProduct(item))}>
      <div className={styles.wrapper}>
        <img src={`${image}`} alt="" />
        {/* <Image src={`${image}`} alt={'yarn'}   width='150' height='300'/> */}
        <div className={styles.description}>
          <p className={styles.category}>{category.title}</p>
          <h3>{name}</h3>
          <h3>{sale ? sale : price} P.</h3>
        </div>
      </div>
    </Link>
  );
};
export default ItemProduct;
