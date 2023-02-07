import Footer from "components/footer";
import NavBar from "components/navbar";
import NewsLetter from "components/newsletter";
import EventOverlay from "overlay_modules/event-module/EventOverlay";
import React, {useState} from "react";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggleOverlay = () => {
      setIsOpen(!isOpen)
  }

  return (
    <div className=" font-poppins min-h-[150vh] relative">
      <EventOverlay isOpen = {isOpen} onClose = {toggleOverlay} header = "Events"/>
      <NavBar showOverLay = {toggleOverlay} />
      {children}
      <div className="pb-36">
        <NewsLetter />
        <div className=" h-40"></div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
