import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import Posts from "../../components/Posts/Posts";
import { useGetBlogQuery } from "../../redux/blogApi";

const Blog = () => {
  return (
    <div>
      <Layout>
        <div style={{ color: "rgb(118, 85, 165)" }}>
          <h5>в разработке ... </h5>
          {/* <Wares /> */}
        </div>
      </Layout>
    </div>
  );
};
export default Blog;
