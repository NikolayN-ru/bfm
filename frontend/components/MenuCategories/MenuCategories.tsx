import { useGetWaresAllQuery } from "../../redux/wariesCategoryApi";
import { ItemMenu, WrapperMenuCategories } from "./MenuCategories.styled";

const MenuCategories = () => {
  const { data, isLoading } = useGetWaresAllQuery(null);
  console.log(data, "data");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    // <WrapperMenuCategories>
    //     {data.map((item: any, id: number) => {
    //       return <ItemMenu key={id}>{item.name}</ItemMenu>;
    //     })}
    // </WrapperMenuCategories>
    <>в разработке ...</>
  );
};
export default MenuCategories;
