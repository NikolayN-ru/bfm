import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './ItemProduct.module.scss';

const ItemProduct: FC<any> = ({ id, image, name, price }) => {
    const path = 'http://localhost:4200';
    const linkPath = `yarn/${id}`;
    return (
        <Link href={linkPath}>
            <div className={styles.wrapper}>
                <img src={`${path}${image}`} alt="" width='150' />
                {/* <p>{image}</p> */}
                {/* {console.log(image)} */}
                {/* <Image src={`${image}`} alt={'yarn'} width='150' height='300'/> */}
                <div>
                    <p>{name}</p>
                    <p>{price} P.</p>
                </div>
            </div>
        </Link>
    )
}
export default ItemProduct