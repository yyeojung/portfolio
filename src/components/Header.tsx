import React from 'react';
import styled from 'styled-components';

const Headers = styled.header`
  height: 12rem;
  background: ${(props) => props.theme.header};
  color: ${(props) => props.theme.mainColor};
  padding: 0 4rem;
  display: flex;
  align-items: center;
  position: relative;
`;
const Title = styled.div`
  display: flex;
  align-items: flex-end;

  & h1 {
    font-weight: 700;
    font-size: 5.2rem;
  }
  & .dropdown {
    width: 4rem;
    height: 4rem;
    background: url(${(props) => props.theme.dropdown.icon}) center center/ 100%
      no-repeat;
    margin-left: 1rem;
  }
  & .my_list {
    position: absolute;
    top: 100%;
    padding: 2.5rem 3rem;
    background: ${(props) => props.theme.dropdown.bg};
    border: 0.1rem solid ${(props) => props.theme.dropdown.border};
    box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
    border-radius: 2rem;

    & li {
      font-size: 2.8rem;
      height: 3.8rem;
      cursor: pointer;
    }
    & li:hover {
      border-bottom: 0.1rem solid ${(props) => props.theme.dropdown.border};
    }
    & li ~ li {
      margin-top: 1rem;
    }
  }
`;

export default function Header() {
  return (
    <>
      <Headers>
        <Title>
          <h1>yeojung</h1>
          <button className='dropdown'></button>
          <ul className='my_list'>
            <li>yyeojung github</li>
            <li>notion</li>
            <li>blog</li>
          </ul>
        </Title>
      </Headers>
    </>
  );
}
