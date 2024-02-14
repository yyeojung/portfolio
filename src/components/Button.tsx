import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text?: string;
  width?: [string, string];
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const CustomBtn = styled.button<ButtonProps>`
  background: ${(props) => props.theme.buttonBg};
  width: ${(props) => (props.width ? props.width[0] : '6.4rem')};
  height: 6.4rem;
  border-radius: 2rem;
  font-size: 2.8rem;
  color: ${(props) => props.theme.mainColor};

  &:hover {
    background: ${(props) => props.theme.buttonHover};
  }

  &.setting {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      display: block;
      width: 4rem;
      height: 4rem;
      background: url(${(props) => props.theme.settingIcon}) center center/ 100%
        no-repeat;
    }
  }
  @media (${(props) => props.theme.size.mobile}) {
    width: ${(props) => (props.width ? props.width[1] : '6.4rem')};
    height: 4rem;
    border-radius: 1rem;
    font-size: 1.6rem;
    &.setting {
      i {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;
export default function Button({
  text,
  width,
  className,
  onClick
}: ButtonProps) {
  return (
    <>
      <CustomBtn width={width} className={className} onClick={onClick}>
        {className ? <i></i> : null}
        {text}
      </CustomBtn>
    </>
  );
}
