import styled from "@emotion/styled";
import React from "react";
import {OverLayBackGround, OverLayChildren, OverLayContainer, OverLayControls} from './style'

export type OverLayProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  isOpen: boolean; //value to set Overlay visibility
  onClose: () => void;
  header: string;
};


const Overlay = ({ isOpen, onClose, header, children }: OverLayProps) => {
  return (
    <>
      {isOpen && (
        <>
        <OverLayBackGround>
          <OverLayContainer>
            <OverLayControls>
              <h1 className="text-2xl font-bold">{header}</h1>
              <button
                className="bg-transparent border-none text-4xl cursor-pointer  after:content-['\00d7'] after:inline-block "
                onClick={onClose}
              >
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

export default Overlay;
