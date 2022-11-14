import { FC } from "react"
import styles from "./Button.module.scss";

interface IButtonCart {
    title: string;
    active?: boolean;
    funcActive?: () => void;
}

const ButtonCart: FC<IButtonCart> = ({ title = "ButtonCart", active = true, funcActive }): JSX.Element => {
    return (
        <button className={styles.btn} disabled={active}>{title}</button>
    )
}
export default ButtonCart;