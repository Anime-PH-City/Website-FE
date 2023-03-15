import Footer from "components/footer";
import NavBar from "components/navbar";
import NewsLetter from "components/newsletter";
import EventOverlay from "components/modal/event-module/EventOverlay";
import Profile from "components/modal/profile-module";
import React, { useState } from "react";
import UpdateProfile from "components/modal/update-profile-module";
import ConfirmEmail from "components/modal/otpModal";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isUpdateProfileOpen, setIsUpdateProfileOpen] = useState(false);
  const [isConfirmEmailOpen, setIsConfirmEmailOpen] = useState(false);



  const toggleEventModal = () => {
    setIsEventOpen(!isEventOpen);
  };

  const toggleProfileModal = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleUpdateProfileModal = () => {
    setIsUpdateProfileOpen(!isUpdateProfileOpen);
  };

  const toggleConfirmEmailModal = () => {
    setIsConfirmEmailOpen(!isConfirmEmailOpen);
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
      <UpdateProfile
        isOpen={isUpdateProfileOpen}
        onClose={toggleUpdateProfileModal}
        header="Update  Profile"
      />
      <ConfirmEmail 
        isOpen={isConfirmEmailOpen}
        onClose={toggleConfirmEmailModal}
        header="Update  Profile"
        source="email address"
      />
      <NavBar
        showEventModal={toggleEventModal}
        showProfileModal={toggleProfileModal}
      />
      {children}
      <div className="pb-36">
        <NewsLetter />
        <div className=" h-40"></div>
        <Footer showEventOverLay={toggleEventModal} showUpdateProfileModal = {toggleUpdateProfileModal} showConfirmEmailModal = {toggleConfirmEmailModal}/>
      </div>
    </div>
  );
};

export default MainLayout;
