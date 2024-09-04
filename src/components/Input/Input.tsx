"use client";

import styled from "@emotion/styled";
import React, { InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react";

import { Box } from "../Box";

type InputProps = {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  tail?: React.ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export const Input = ({ value, onChange, style, tail, ...props }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <Box position="relative">
      <StyledInput value={value} onChange={handleChange} {...props} style={style} />
      <TailContainer>{tail}</TailContainer>
    </Box>
  );
};

export const FileInput = ({ onChange, style, tail, ...props }: InputProps) => {
  const [labelText, setLabelText] = useState("파일 선택");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);

    let labelText = "파일 선택";
    if (e.target.files) {
      if (e.target.files.length > 1) {
        labelText = `파일 ${e.target.files.length}개`;
      } else {
        labelText = e.target.files[0]?.name || "파일 선택";
      }
    }

    setLabelText(labelText);
  };

  return (
    <Box position="relative">
      <StyledInput id="inputFile" onChange={handleChange} {...props} style={{ display: "none" }} />
      <StyledFileLabel
        htmlFor="inputFile"
        style={{ color: labelText === "파일 선택" ? "#CDD1D5" : "#25292C" }}
      >
        {labelText}
      </StyledFileLabel>
      <TailContainer>{tail}</TailContainer>
    </Box>
  );
};

type TextAreaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange">;

export const TextArea = ({ value, onChange, style, ...props }: TextAreaProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
  };

  return (
    <Box position="relative">
      <StyledTextarea value={value} onChange={handleChange} {...props} style={style} />
    </Box>
  );
};

const TailContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 9px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 34px;
  padding-left: 9px;
  padding-right: 9px;
  font-size: 14px;
  font-weight: 400;
  color: #25292C;
  border: 1px solid #CDD1D5;
  border-radius: 8px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  
  &:focus {
    outline: none;
    border-color: #50BF50;
  }

  &::placeholder {
    font-weight: 400;
    color: #CDD1D5;
  }
  
  &:disabled {
    background-color: #EDF0F3;
    color: #A6ABAF;
    border: 1px solid #EDF0F3;
  }
`;

const StyledFileLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 34px;
  padding-left: 9px;
  padding-right: 9px;
  font-size: 14px;
  font-weight: 400;
  color: #25292C;
  border: 1px solid #CDD1D5;
  border-radius: 8px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  
  &:focus {
    outline: none;
    border-color: #50BF50;
  }

  &::placeholder {
    font-weight: 400;
    color: #CDD1D5;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 9px;
  font-size: 14px;
  font-weight: 400;
  color: #25292C;
  border: 1px solid #CDD1D5;
  border-radius: 10px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  resize: none;

  &:focus {
    outline: none;
    border-color: #50BF50;
  }

  &::placeholder {
    font-weight: 400;
    color: #CDD1D5;
  }
`;
