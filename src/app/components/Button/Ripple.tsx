import React, { useState, useLayoutEffect, useEffect, forwardRef, RefObject } from "react";
import { RippleContainer } from "./styles/Ripple.styled";

type RipplePropsType = {
  color: string,
  duration: number,
}

type RippleType = {
  x: number;
  y: number;
  size: number;
};

const Ripple = ({color = "#000", duration = 600} : RipplePropsType) => {
  const [ripple, setRipple] = useState<RippleType | null>(null);

  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;

    setRipple({x, y, size});

    setTimeout(() => {
      setRipple(null);
    }, duration);
  };

  return (
    <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
        {ripple && <span
          style={{
            top: ripple?.y,
            left: ripple?.x,
            width: ripple?.size,
            height: ripple?.size
          }}
        />}
    </RippleContainer>
  );
};

export default Ripple;
