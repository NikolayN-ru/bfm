import Category from "../../components/Blocks/Category/Category";
import Tags from "../../components/Blocks/Tags/Tags"
import Menu from "../../components/Menu/Menu"
import styles from './Variables.module.scss';

const Variables = () => {


    return (
        <div className={styles.wrapper}>
            {/* <Menu /> */}

                <Tags />
                <Category/>
        </div>
    )
}
export default Variables