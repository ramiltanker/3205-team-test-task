import React from "react";

import { FunctionComponent } from "react";
import styled from "styled-components";

// Styles
import styles from "./InputString.module.css";
// Styles

interface IInputString {
  inputName: string;
  inputType: "text" | "email";
  inputValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputId: string;
  labelText: string;
  inputWidth?: string | number | undefined;
  marginRight?: string | number | undefined;
  inputPlaceholder: string;
}

type FC<P = IInputString> = FunctionComponent<P>;

const Input = styled.input`
  width: ${(props) => props.width};
  height: 60px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 4px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  padding-left: 16px;
  padding-top: 5px;
  margin-right: ${(props) => props.style?.marginRight};
  &:focus,
  &:hover {
    border-color: #01a7fd;
    border-width: 2px;
    outline-color: #01a7fd;
  }
`;

const InputString: FC<IInputString> = ({
  inputName,
  inputType,
  inputId,
  labelText,
  inputWidth,
  marginRight,
  inputValue,
  onChange,
  inputPlaceholder,
}) => {
  return (
    <div className={styles.input_box}>
      <label className={styles.label}>{labelText}</label>
      <Input
        placeholder={inputPlaceholder}
        style={{ marginRight: marginRight }}
        width={inputWidth}
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={onChange}
        id={inputId}
      />
    </div>
  );
};

export default InputString;
