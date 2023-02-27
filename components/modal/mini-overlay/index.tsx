import React from "react";
import {
  OverLayBackGround,
  OverLayChildren,
  OverLayContainer,
  OverLayControls,
} from "./style";
import back from "public/assets/svgs/icons8-close.svg";
import Image from "next/image";

export type MiniOverLayProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  isOpen: boolean; //value to set Overlay visibility
  onClose: () => void;
  header: string;
};

const MiniOverlay = ({ isOpen, onClose, header, children }: MiniOverLayProps) => {
  return (
    <>
      {isOpen && (
        <>
          <OverLayBackGround>
            <OverLayContainer>
              <OverLayControls>
                <h1 className="text-3xl font-bold">
                  {header.split(" ")[0]}
                  <span className="text-otaku-red-1">
                    {`${header.split(" ")[1] ? header.split(" ")[1] : ""}`}
                    {` ${header.split(" ")[2] || ""}`}
                  </span>
                </h1>
                <button
                  className="bg-transparent border-none text-lg cursor-pointer text-otaku-red-1  font-bold after:inline-block "
                  onClick={onClose}
                >
                  <Image src={back} alt="back" />
                </button>
              </OverLayControls>
              <OverLayChildren>{children}</OverLayChildren>
            </OverLayContainer>
          </OverLayBackGround>
        </>
      )}
    </>
  );
};

export default MiniOverlay;
