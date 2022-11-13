import { FC } from "react";
import styles from "./ButtonOk.module.scss";

interface IButtonOk {
    title: string;
    okFunc: () => void;
}

const ButtonOk: FC<IButtonOk> = ({ title = 'ButtonOk', okFunc }): JSX.Element => {
    return (
        <button className={styles.wrapper} onClick={()=>okFunc()}>{title}</button>
    )
}
export default ButtonOk;