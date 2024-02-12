import React from 'react';
import styled from 'styled-components';
import iconLink from '../image/icon/icon_link.png';
import iconLinkhover from '../image/icon/icon_link_hover.png';

const Button = styled.button`
  background: ${(props) => props.theme.mainBg};
  height: 4rem;
  padding: 0 2rem;
  border-radius: 1rem;
  font-size: 2rem;
  color: #1cacda;
  font-weight: 700;
  box-shadow: 0 0.1rem 0.6rem 0 rgba(0, 0, 0, 0.2);

  i {
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    vertical-align: text-top;
    margin-right: 1rem;
    background: url(${iconLink}) center center/ 100% no-repeat;
  }

  &:hover i {
    background-image: url(${iconLinkhover});
  }
  &:hover span {
    background-image: linear-gradient(
      to top right,
      #fff500 10%,
      #ff00f5 40%,
      #ff0000 80%
    );
    color: transparent;
    -webkit-background-clip: text;
  }
`;
export default function LinkBtn({ title }: { title: string }) {
  return (
    <>
      <Button>
        <i></i>
        <span>{title}</span>
      </Button>
    </>
  );
}
