import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './ItemProduct.module.scss';

const ItemProduct: FC<any> = ({ item }) => {
    const {_id, image, name, price} = item;
    const path = 'http://localhost:4200';
    const linkPath = `yarn/${_id}`;
    return (
        <Link href={linkPath}>
            <div className={styles.wrapper}>
                <img src={`${path}${image}`} alt="" />
                {/* <p>{image}</p> */}
                {/* {console.log(image)} */}
                {/* <Image src={`${image}`} alt={'yarn'} width='150' height='300'/> */}
                <div className={styles.description}>
                    <p className={styles.category}>{item.category[0].title}</p>
                    <h3>{name}</h3>
                    <h3>{price} P.</h3>
                </div>
            </div>
        </Link>
    )
}
export default ItemProduct