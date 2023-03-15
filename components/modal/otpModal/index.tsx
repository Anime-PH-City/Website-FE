import React, { useState, useRef } from "react";
import MiniOverlay from "../mini-overlay";
import Button from "components/button";

const OTPModal = ({
  isOpen,
  onClose,
  header,
  source,
  reason
}: {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  source: string
  reason?: string
}) => {
    const PIN_LENGTH = 6 ;
    const [pin, setPin] = useState<Array < number | undefined >>(new Array (PIN_LENGTH))

    const onPinChanged = (pinEntry: number | undefined , index: number) => {
        const newPin = [...pin]
        newPin[index] = pinEntry
        setPin(newPin)
    }
    
  return (
    <MiniOverlay isOpen={isOpen} onClose={onClose} header={header}>
      <div className="w-[90%] mx-auto flex flex-col items-center">
        <p className="[word-spacing:4px] tracking-wide font-semibold">
          Please enter six digit pin sent to your {source}
        </p>
        <form
            onSubmit={(event) => {
                event?.preventDefault()
                console.log(pin)
            }}
        >
          <div className="mt-3">
            <label
              htmlFor="pin"
              className="text-sm mb-2 font-bold text-otaku-gray-2"
            >
              Pin
            </label>
            <PinInputGrid onPinChanged = {onPinChanged} pin = {pin} pinLength = {PIN_LENGTH} />
            
          </div>
          <div className="flex w-[100%] flex-col items-center mt-8 ">
            <p className="mb-5 text-[15px]">Enter pin to verify {reason || "email"}</p>
            <Button padding="small" color="primary">
              Confirm
            </Button>
          </div>
        </form>
      </div>
    </MiniOverlay>
  );
};

export default OTPModal;

interface PinInputGridProps {
    pin: Array<number | undefined>;
    onPinChanged: (pinEntry: number | undefined, index: number) => void;
    pinLength: number
}

const MIN_VALUE = 0
const MAX_VALUE = 9
const BACK_SPACE = 'Backspace'

const PinInputGrid: React.FC<PinInputGridProps> = ({pinLength, pin, onPinChanged}) => {
    const inputRefs = useRef<HTMLInputElement[]>([]);

  const changePinFocus = (pinIndex: number) => {
    const ref = inputRefs.current[pinIndex];
    if (ref) {
      ref.focus();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> , index: number) => {
    const value = event.target.value;
    const pinNumber = Number(value.trim())
    if(isNaN(pinNumber) || value.length === 0) {
        return
    }
    if(pinNumber >= MIN_VALUE && pinNumber <= MAX_VALUE) {
        onPinChanged(pinNumber, index);
        if(index < pinLength -1) {
            changePinFocus(index+1);
        }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement> , index : number) => {
    const keyBoardCode = event.nativeEvent.code    
    if(keyBoardCode !== BACK_SPACE) {
        return
    }
    if(pin[index] === undefined) {
        changePinFocus(index-1)
    }else {
        onPinChanged(undefined, index)
    }
  }

    return (
        <div>{
           Array.from({length: pinLength}, (_, index) =>(
            <input
                id="pin"
                key={index}
                className="bg-otaku-gray-1  w-8 h-9 m-3 text-center "
                maxLength={1}
                ref={(el) => {
                  if (el) {
                    inputRefs.current[index] = el;
                  }
                }}
                onChange={(event) => handleChange(event, index)}
                value = {pin[index] || ""}
                onKeyDown = {(event) => handleKeyDown(event, index)}
              />
           ))
        }</div>
    )
}

