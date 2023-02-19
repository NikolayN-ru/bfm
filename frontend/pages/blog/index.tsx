import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import Posts from "../../components/Posts/Posts";
import { useGetBlogQuery } from "../../redux/blogApi";

const Blog = () => {
  const { data, isLoading } = useGetBlogQuery("all");
//   console.log(data, "data");
  return (
    <div>
      <Layout />
      {/* <h1>Blog</h1> */}
      <Posts state={data} />
    </div>
  );
};
export default Blog;
