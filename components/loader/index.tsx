import React from "react";
import { TailSpin } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen fixed w-screen top-0 left-0 bg-opacity-10 bg-slate-600">
      <TailSpin width={80} height={80} color={"#ED4424"} />
    </div>
  );
};

export default PageLoader;
