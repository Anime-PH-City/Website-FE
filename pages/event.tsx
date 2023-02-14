import PageLoader from "components/loader";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const EventModule = dynamic(() => import("page-modules/event-module"), {
    loading: () => <PageLoader />,
  });

  const Event: NextPage = () => {
    return <EventModule />;
  };
  
  export default Event;