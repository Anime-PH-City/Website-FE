import PageLoader from "components/loader";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const CartModule = dynamic(() => import("page-modules/cart-module"), {
    loading: () => <PageLoader />,
  });

  const Cart: NextPage = () => {
    return <CartModule />;
  };
  
  export default Cart;