import { FunctionComponent } from "react";

import styled from "styled-components";

interface IButton {
  text: string;
  width?: string | number;
  height?: string | number;
  marginRight?: string | number;
  marginLeft?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  alignSelf?: string;
  isButtonDisabled?: boolean;
}

type FC<P> = FunctionComponent<P>;

const ButtonStyled = styled.button`
  width: ${(props) => props.style?.width};
  height: ${(props) => props.style?.height};
  background: #01a7fd;
  border-radius: 100px;
  border-style: none;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s linear;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  align-self: ${(props) => props.style?.alignSelf};
  margin-right: ${(props) => props.style?.marginRight};
  margin-left: ${(props) => props.style?.marginLeft};
  margin-top: ${(props) => props.style?.marginTop};
  margin-bottom: ${(props) => props.style?.marginBottom};
  &:hover {
    opacity: 0.6;
    transition: opacity 0.3s linear;
  }
  &:disabled,
  &hover {
    background-color: #cccccc;
    cursor: not-allowed;
    transition: none;
    opacity: 1;
  }
`;

const Button: FC<IButton> = ({
  text,
  width,
  height,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
  alignSelf,
  isButtonDisabled,
}) => {
  return (
    <ButtonStyled
      style={{
        marginRight: marginRight,
        marginLeft: marginLeft,
        marginTop: marginTop,
        marginBottom: marginBottom,
        width: width,
        height: height,
        alignSelf: alignSelf,
      }}
      disabled={isButtonDisabled}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
