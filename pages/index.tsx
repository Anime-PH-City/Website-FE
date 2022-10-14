import PageLoader from "components/loader";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const HomeModule = dynamic(() => import("page-modules/home-module"), {
  loading: () => <PageLoader />,
});

const Home: NextPage = () => {
  return <HomeModule />;
};

export default Home;
