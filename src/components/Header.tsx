import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import HamburgerMenu, { ListStyle } from './HamburgerMenu';

const Headers = styled.header`
  width: 120rem;
  height: 8rem;
  background: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.mainColor};
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 10;

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (${(props) => props.theme.size.mobile}) {
    height: 5.6rem;
    padding: 0 2rem;
  }
`;
// 타이틀 스타일
const Title = styled.div`
  display: flex;
  align-items: flex-end;

  & h1 {
    font-weight: 700;
    font-size: 4.8rem;
    @media (${(props) => props.theme.size.mobile}) {
      font-size: 2.4rem;
    }
  }
  & .dropdown {
    transition: all 0.3s;
    width: 4rem;
    height: 4rem;
    background: url(${(props) => props.theme.dropdown.icon}) center center/ 100%
      no-repeat;
    margin-left: 1rem;

    @media (${(props) => props.theme.size.mobile}) {
      width: 2rem;
      height: 2rem;
    }
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
      @media (${(props) => props.theme.size.mobile}) {
        height: 13.2rem;
      }
    }
  }
`;

export default function Header() {
  const [seletOpen, setSelectOpen] = useState(false);
  const clickRef = useRef<HTMLDivElement>(null);

  const toggleSelect = () => {
    setSelectOpen(!seletOpen);
  };

  // 헤더 밖 토글 닫힘
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (clickRef.current && !clickRef.current.contains(e.target as Node)) {
        setSelectOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };
  }, [clickRef]);

  return (
    <>
      <Headers>
        <Title className={`${seletOpen ? 'active' : ''}`} ref={clickRef}>
          <h1>yeojung</h1>
          <button className='dropdown' onClick={toggleSelect}></button>
          <ul className='my_list'>
            <li>
              <a
                href='https://github.com/yyeojung'
                target='_blank'
                rel='noopener noreferrer'
              >
                yyeojung github
              </a>
            </li>
            <li>
              <a
                href='https://distinct-feels-7f8.notion.site/1b9f7bfe6bfd4e27846b77f275be8ba6?pvs=4'
                target='_blank'
                rel='noopener noreferrer'
              >
                notion
              </a>
            </li>
            <li>
              <a
                href='https://hhyj0000.tistory.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                blog
              </a>
            </li>
          </ul>
        </Title>
        <HamburgerMenu />
      </Headers>
    </>
  );
}
