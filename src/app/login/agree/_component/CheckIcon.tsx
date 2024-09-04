"use client";

import styled from "@emotion/styled";

import CheckIcon from "@/public/icons/check.svg";

export const CheckBoxIcon = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid #A6ABAF;
  border-radius: 50%;
`;

const CheckBoxOn = styled(CheckBoxIcon)`
  background-color: #50BF50;
  border: 1px solid #50BF50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckBoxOnIcon = () => {
  return (
    <CheckBoxOn>
      <CheckIcon />
    </CheckBoxOn>
  );
};

export const CheckBox = () => {};
