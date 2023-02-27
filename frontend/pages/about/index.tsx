import { FC } from "react";
import Select from "react-select";
import Image from "next/image";

import Layout from "../../components/layout/Layout";
import styles from "./about.module.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Index: FC = () => {
  return (
    <div>
      <Layout>
        <div style={{ color: "rgb(118, 85, 165)" }} className={styles.wrapper}>
          <div className={styles.cantact}>
            <p>Мы находимся по адресу:</p>
            <hr />
            <span> ​Фрунзе, 80 4 этаж; </span>
            <p>​437 бутик; левое крыло</p>
            <hr />
            <p>телефон: +7‒913‒967‒79‒85</p>
            <hr />
            <p>время работы:</p>
            <p>пн-пт 11:00 - 19:00</p>
            <p>cб, вс 11:00 - 17:00</p>
          </div>
          <div>
            {/* <img src="/point.png" alt="" width="90%" /> */}
            <Image src="/point.png" alt="point" width={800} height={400} />
          </div>
        </div>
      </Layout>
      <div>
        {/* <Select
                        placeholder='placeholder'
                        options={options}
                        isSearchable={true}
                    /> */}
      </div>
    </div>
  );
};
export default Index;
