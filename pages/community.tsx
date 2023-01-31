import PageLoader from "components/loader";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const CommunityModule = dynamic(() => import("page-modules/community-module"), {
    loading: () => <PageLoader />,
  });

  const Community: NextPage = () => {
    return <CommunityModule />;
  };
  
  export default Community;