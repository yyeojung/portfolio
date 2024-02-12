import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ListStyle = css`
  position: absolute;
  transition: all 0.3s;
  top: 100%;
  background: ${(props) => props.theme.dropdown.bg};
  border: 0.1rem solid ${(props) => props.theme.dropdown.border};
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  height: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0rem;

  & li {
    font-size: 2.8rem;
    height: 3.8rem;
    padding: 0rem 3rem;
    cursor: pointer;
  }
  & li ~ li {
    margin-top: 1rem;
  }
`;

const Headers = styled.header`
  height: 8rem;
  background: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.mainColor};
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
`;
// 타이틀 스타일
const Title = styled.div`
  display: flex;
  align-items: flex-end;

  & h1 {
    font-weight: 700;
    font-size: 4.8rem;
  }
  & .dropdown {
    transition: all 0.3s;
    width: 4rem;
    height: 4rem;
    background: url(${(props) => props.theme.dropdown.icon}) center center/ 100%
      no-repeat;
    margin-left: 1rem;
  }
  & .my_list {
    ${ListStyle}
    & li:hover {
      background: rgba(226, 53, 53, 0.19);
    }
  }

  &.active {
    .dropdown {
      transform: rotate(180deg);
    }
    .my_list {
      opacity: 1;
      height: 18.4rem;
      padding: 2rem 0rem;
    }
  }
`;
// 메뉴 스타일
const Menu = styled.div`
  & .menu {
    span {
      display: block;
      width: 5rem;
      height: 0.6rem;
      border-radius: 0.6rem;
      background: ${(props) => props.theme.mainColor};
    }
    span ~ span {
      margin-top: 1rem;
    }
  }

  & .menu_list {
    ${ListStyle};
    width: 22rem;
    right: 4rem;

    & li {
      padding: 0 2rem;
      height: 4.4rem;
    }
    & li:hover {
      background: rgba(226, 53, 53, 0.19);
    }
  }
  &.active {
    .menu_list {
      opacity: 1;
      height: 26.6rem;
      padding: 3rem 0rem;
    }
  }
`;

export default function Header() {
  const [seletOpen, setSelectOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const clickRef = useRef<HTMLUListElement>(null);

  const toggleSelect = () => {
    setSelectOpen(!seletOpen);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSelectOpen(false);
  };

  // 헤더 밖 토글 닫힘
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (clickRef.current && !clickRef.current.contains(e.target as Node)) {
        setSelectOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };
  }, [clickRef]);

  return (
    <>
      <Headers ref={clickRef}>
        <Title className={`${seletOpen ? 'active' : ''}`}>
          <h1>yeojung</h1>
          <button className='dropdown' onClick={toggleSelect}></button>
          <ul className='my_list'>
            <li>yyeojung github</li>
            <li>notion</li>
            <li>blog</li>
          </ul>
        </Title>
        <Menu className={`${menuOpen ? 'active' : ''}`}>
          <button className='menu' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className='menu_list'>
            <li>
              <Link to='/'>🏠 home</Link>
            </li>
            <li>
              <Link to='/about'>😊 about</Link>
            </li>
            <li>
              <Link to='/project'>👩‍💻️ project</Link>
            </li>
            <li>
              <Link to='/contact'>📞 contact</Link>
            </li>
          </ul>
        </Menu>
      </Headers>
    </>
  );
}
