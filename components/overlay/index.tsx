import React from "react";
import { OverLayBackGround } from "./style";

export type OverLayProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  isOpen: boolean; //value to set Overlay visibility
  onClose: () => void;
};

const Overlay = ({ isOpen, onClose }: OverLayProps) => {
  return (
    <>
      {isOpen && (
        <OverLayBackGround>
          <div className="overlay__background">
            <div className="overlay__container">
              <div className="overlay__controls">
                <h1>OverLay Title</h1>
                <button
                  className="overlay__close"
                  type="button"
                  onClick={onClose}
                ></button>
              </div>
              <div className="overlay__children"></div>
            </div>
          </div>
        </OverLayBackGround>
      )}
    </>
  );
};

export default Overlay;
