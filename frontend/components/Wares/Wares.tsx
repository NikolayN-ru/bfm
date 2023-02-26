import { FC } from "react";
import MenuCategories from "../MenuCategories/MenuCategories";
import SpoolFilter from "../Spool/SpoolItem/SpoolFilter/SpoolFilter";



const Wares: FC<any> = () => {
  return (
    <div>
      <SpoolFilter />
      <MenuCategories />
    </div>
  );
};

export default Wares;
