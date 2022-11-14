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
                {/* <Image src={`${path}${image}`} alt={name} width='200' height='200' /> */}
                <img src={`${path}${image}`} alt="" width='150' />
                <div>
                    <p>{name}</p>
                    <p>{price} P.</p>
                </div>
            </div>
        </Link>
    )
}
export default ItemProduct