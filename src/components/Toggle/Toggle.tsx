import styled from "@emotion/styled";
import { useState } from "react";

import { Box } from "../Box";
import { FlexBox } from "../FlexBox";
import { Text } from "../Text";

const ToggleBox = styled.div`
  position: relative;
  width: 100%;
  height: 52px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  background-color: #F6F6F6;
  border-radius: 10px;
`;

const ToggleSlide = styled.div<{ right: boolean }>`
  position: absolute;
  width: calc(50% - 4px);
  height: 44px;
  left: ${({ right }) => (right ? "50%" : "4px")};
  border-radius:10px;
  background: #FFF;
  box-shadow: rgba(25, 29, 35, 0.12) 0px 2px;
  transition: all 0.3s;
`;

type ToggleProps = {
  data: {
    text: string;
    value: number;
  }[];
  selectedValue?: number;
  onChange?: (value: number) => void;
};

export const Toggle = ({ data, selectedValue, onChange }: ToggleProps) => {
  return (
    <ToggleBox>
      {data.map(item => (
        <FlexBox
          width="100%"
          height="100%"
          key={item.value}
          zIndex={1}
          onClick={() => (onChange ? onChange(item.value) : {})}
        >
          <Text size={16} weight={600} color="#494F54">
            {item.text}
          </Text>
        </FlexBox>
      ))}
      <ToggleSlide right={selectedValue === data[1].value} />
    </ToggleBox>
  );
};
