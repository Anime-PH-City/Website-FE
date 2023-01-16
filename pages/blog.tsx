import PageLoader from "components/loader";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const BlogModule = dynamic(() => import("page-modules/blog-module"), {
    loading: () => <PageLoader />,
  });

  const Blog: NextPage = () => {
    return <BlogModule />;
  };
  
  export default Blog;
