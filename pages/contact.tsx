import PageLoader from "components/loader";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const ContactModule = dynamic(() => import("page-modules/contact-module"), {
    loading: () => <PageLoader />,
  });

  const Contact: NextPage = () => {
    return <ContactModule />;
  };
  
  export default Contact;