import Overlay from "components/modal/overlay";
import React from "react";

const Profile = ({
  isOpen,
  onClose,
  header,
}: {
  isOpen: boolean;
  onClose: () => void;
  header: string;
}) => {
  return (
    <Overlay isOpen={isOpen} onClose={onClose} header={header}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div
            // css={{
            //   width: "10rem",
            //   border: "1px solid black",
            //   height: "10rem",
            //   borderRadius: "50%",
            // }}
            className="w-[10rem] border border-black h-[10rem] rounded-full"
          >
            <p>Choose Image</p>
          </div>
        </div>
        <div></div>
      </div>
    </Overlay>
  );
};

export default Profile;
