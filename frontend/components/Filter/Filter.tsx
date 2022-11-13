import styles from './Filter.module.scss';

const data: string[] = ["кашимир", 'вискоза', 'ангора', 'меринос', 'альпака', 'шерсть', 'хлопок', 'лен', 'шелк', 'кид мохер']

const Filter = () => {
    return (
        <div className={styles.wrapper}>
            {/* <p>Фильтры:</p> */}
            <div className={styles.coast}>
                <p>стоимость:</p>
                <input type="text" placeholder='от' />
                <input type="text" placeholder='до' />
            </div>
            <div className={styles.compound}>
                <p>состав:</p>
                {data.map((item: string, id: number) => <div key={id}>
                    <input type="checkbox" id="scales" name={item} />
                    <label htmlFor={item}>{item}</label>
                </div>)}
            </div>
            <button className={styles.btn}>применить</button>
        </div>
    )
}
export default Filter;
