import Link from "next/link";
import { useSelector } from "react-redux";
import { useGetCategoryQuery } from "../../redux/categoryApi";
import styles from "./MainMenu.module.scss";

const dataMain = [
  // { title: "Пряжа", href: "/" },
  { title: "Спицы", href: "/needles" },
  { title: "Изделия", href: "/products" },
  { title: "Блог", href: "/blog" },
  { title: "О нас", href: "/about" },
];

const CatrSvg = () => {
  return (
    <svg
      className={styles.cartMain}
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8169 2.23303H25.8169C35.758 2.23303 43.8169 10.2919 43.8169 20.233V25.233C43.8169 35.1742 35.758 43.233 25.8169 43.233H20.8169C10.8758 43.233 2.81689 35.1742 2.81689 25.233V20.233C2.81689 10.2919 10.8758 2.23303 20.8169 2.23303ZM0.816895 20.233C0.816895 9.18734 9.7712 0.233032 20.8169 0.233032H25.8169C36.8626 0.233032 45.8169 9.18734 45.8169 20.233V25.233C45.8169 36.2787 36.8626 45.233 25.8169 45.233H20.8169C9.7712 45.233 0.816895 36.2787 0.816895 25.233V20.233ZM33.7454 11.6044C34.2582 11.8095 34.5076 12.3915 34.3025 12.9043L32.4455 17.5467C32.3634 17.7518 32.2211 17.9148 32.0469 18.0234C32.053 18.3492 32.0053 18.6837 31.8963 19.0167L29.932 25.0167C29.5284 26.2495 28.3782 27.0833 27.0809 27.0833H17.2871C15.9899 27.0833 14.8397 26.2495 14.436 25.0167L12.4718 19.0167C11.8368 17.0771 13.282 15.0833 15.3229 15.0833H29.0452C29.8004 15.0833 30.4739 15.3562 30.9908 15.7984L32.4455 12.1615C32.6506 11.6487 33.2326 11.3993 33.7454 11.6044ZM29.0452 17.0833H15.3229C14.6426 17.0833 14.1608 17.7479 14.3725 18.3944L16.3368 24.3944C16.4713 24.8053 16.8547 25.0833 17.2871 25.0833H27.0809C27.5133 25.0833 27.8968 24.8053 28.0313 24.3944L29.9956 18.3944C30.2073 17.7479 29.7255 17.0833 29.0452 17.0833ZM18.3169 32.233C19.1453 32.233 19.8169 31.5615 19.8169 30.733C19.8169 29.9046 19.1453 29.233 18.3169 29.233C17.4885 29.233 16.8169 29.9046 16.8169 30.733C16.8169 31.5615 17.4885 32.233 18.3169 32.233ZM18.3169 34.233C20.2499 34.233 21.8169 32.666 21.8169 30.733C21.8169 28.8 20.2499 27.233 18.3169 27.233C16.3839 27.233 14.8169 28.8 14.8169 30.733C14.8169 32.666 16.3839 34.233 18.3169 34.233ZM27.8169 30.733C27.8169 31.5615 27.1453 32.233 26.3169 32.233C25.4885 32.233 24.8169 31.5615 24.8169 30.733C24.8169 29.9046 25.4885 29.233 26.3169 29.233C27.1453 29.233 27.8169 29.9046 27.8169 30.733ZM29.8169 30.733C29.8169 32.666 28.2499 34.233 26.3169 34.233C24.3839 34.233 22.8169 32.666 22.8169 30.733C22.8169 28.8 24.3839 27.233 26.3169 27.233C28.2499 27.233 29.8169 28.8 29.8169 30.733Z"
        fill="#613297"
      />
    </svg>
  );
};

const MainMenu = () => {
  const countProduct = useSelector((state: any) => state.cart.cart);
  const { data, isLoading } = useGetCategoryQuery("all");
  console.log(data, "data");
  return (
    <div className={styles.menu}>
      <div className={styles.main}>
        <div className={styles.item}>
          <Link href={"/"}>{"Пряжа"}</Link>
          <div className={styles.category}>
            {data && data.map((item: any, id: string) => {
              return (
                <p className={styles.categoryItem}>
                  <Link href={"/category/" + item._id} key={id}>
                    {item.title}
                  </Link>
                </p>
              );
            })}
          </div>
        </div>
      </div>
      {dataMain.map(({ title, href }: any, id: number) => (
        <div key={id} className={styles.item}>
          <Link href={href}>{title}</Link>
        </div>
      ))}
      <div className={styles.cart}>
        {countProduct.length ? (
          <div className={styles.count}>{countProduct.length}</div>
        ) : null}
        <Link href="/cart">
          <CatrSvg />
        </Link>
      </div>
    </div>
  );
};
export default MainMenu;
