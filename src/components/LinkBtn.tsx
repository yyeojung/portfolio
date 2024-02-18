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
  width: fit-content;
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

  @media (${(props) => props.theme.size.mobile}) {
    font-size: 1.6rem;
    i {
      width: 2rem;
      height: 2rem;
    }
  }
`;
interface linkBtnProps {
  title: string;
  linkUrl?: string;
}
export default function LinkBtn({ title, linkUrl }: linkBtnProps) {
  return (
    <>
      <Button>
        {linkUrl ? (
          <a href={linkUrl} target='_blank' rel='noopener noreferrer'>
            <i></i>
            <span>{title}</span>
          </a>
        ) : (
          <>
            <i></i>
            <span>{title}</span>
          </>
        )}
      </Button>
    </>
  );
}
