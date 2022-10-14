import Footer from "components/footer";
import NavBar from "components/navbar";
import NewsLetter from "components/newsletter";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" font-poppins min-h-[150vh] relative">
      <NavBar />
      {children}
      <div className="absolute w-screen bottom-0 pb-36">
        <NewsLetter />
        <div className=" h-40"></div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
