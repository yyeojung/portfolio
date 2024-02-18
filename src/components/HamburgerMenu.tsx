import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// 리스트 스타일
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

    a {
      display: block;
      height: 100%;
      width: 100%;
    }
  }
  & li ~ li {
    margin-top: 1rem;
  }
  @media (${(props) => props.theme.size.mobile}) {
    & li {
      font-size: 1.6rem;
      height: 2.4rem;
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

    @media (${(props) => props.theme.size.mobile}) {
      span {
        width: 3rem;
        height: 0.4rem;
      }
      span ~ span {
        margin-top: 0.6rem;
      }
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

    @media (${(props) => props.theme.size.mobile}) {
      width: 14rem;
      & li {
        height: 2.4rem;
      }
    }
  }

  &.active {
    .menu_list {
      opacity: 1;
      height: 26.6rem;
      padding: 3rem 0rem;

      @media (${(props) => props.theme.size.mobile}) {
        height: 16.6rem;
        padding: 2rem 0rem;
      }
    }
  }
`;

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <Menu className={`ham_menu ${menuOpen ? 'active' : ''}`} ref={menuRef}>
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
    </>
  );
}
