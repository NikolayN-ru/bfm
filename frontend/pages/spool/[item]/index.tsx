import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../components/layout/Layout";
import { useGetSpoolApiItemQuery } from "../../../redux/spoolItemApi";

const index = () => {
  const router = useRouter();
  const { data, isLoading } = useGetSpoolApiItemQuery(router.query.item);
  console.log(data);
  if (isLoading) {
    return <>Loading</>;
  }
  const { count, description, image1, image2 } = data;

  return (
    <div>
      <Layout />
      <div>index = {router.query.item}</div>;
      <hr />
      количество грамм {count}
      <p>description ={description}</p>
      <img src={image1} alt="" />
      <img src={image2} alt="" />
    </div>
  );
};

export default index;
