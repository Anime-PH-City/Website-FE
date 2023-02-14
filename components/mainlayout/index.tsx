import Footer from "components/footer";
import NavBar from "components/navbar";
import NewsLetter from "components/newsletter";
import EventOverlay from "components/modal/event-module/EventOverlay";
import Profile from "components/modal/profile-module";
import React, { useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleEventModal = () => {
    setIsEventOpen(!isEventOpen);
  };

  const toggleProfileModal = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className=" font-poppins min-h-[150vh] relative">
      <EventOverlay
        isOpen={isEventOpen}
        onClose={toggleEventModal}
        header="Events"
        futureEvents={true}
      />
      <Profile
        isOpen={isProfileOpen}
        onClose={toggleProfileModal}
        header="Profile  Information"
      />
      <NavBar
        showEventModal={toggleEventModal}
        showProfileModal={toggleProfileModal}
      />
      {children}
      <div className="pb-36">
        <NewsLetter />
        <div className=" h-40"></div>
        <Footer showEventOverLay={toggleEventModal} />
      </div>
    </div>
  );
};

export default MainLayout;
