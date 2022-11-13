import { FC } from "react";
import styles from "./ButtonOff.module.scss";

interface IButtonOff {
    title: string;
    delFunc: () => void;
    // param:any;
}

const ButtonOff: FC<IButtonOff> = ({ title = 'ButtonOk', delFunc,  }): JSX.Element => {
    return (
        <button className={styles.wrapper} onClick={()=>delFunc()}>{title}</button>
    )
}
export default ButtonOff;