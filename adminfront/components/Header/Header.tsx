import { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC<any> = () => {
    return (
        <div className={styles.wrapper}>
            Панель администратора
        </div>
    )
}
export default Header