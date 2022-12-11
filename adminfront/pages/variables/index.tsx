import Category from "../../components/Blocks/Category/Category"
import Tags from "../../components/Blocks/Tags/Tags"
import CategoryWares from "../../components/CategoryWares/CategoryWares"
import styles from "./Variables.module.scss"

const Variables = () => {
  return (
    <div className={styles.wrapper}>
      <Tags />
      <Category />
      <CategoryWares />
    </div>
  )
}
export default Variables
