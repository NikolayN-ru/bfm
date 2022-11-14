import { FC } from 'react';
import styles from './Variables.module.scss';

const Variables: FC<any> = ({ color, title, funcActive }) => {
    return (
        <div className={styles.variables}>
            <button onClick={funcActive}>
                {title}
            </button>
        </div>
    )
}
export default Variables;