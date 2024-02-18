import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import like1 from '../image/like1.jpg';
import like2 from '../image/like2.jpg';
import like3 from '../image/like3.jpg';
import { ListStyle } from './HamburgerMenu';
import { useMediaQuery } from '@react-hook/media-query';
import { Link } from 'react-router-dom';

const Bottom = styled.div`
  height: 10rem;
  width: calc(100% - 24rem);
  background: #000;
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  .like_wrap {
    position: absolute;
    z-index: 2;
    bottom: 0.5rem;
    left: 0;
    width: 30rem;
    height: 30rem;
  }
  @media (${(props) => props.theme.size.mobile}) {
    height: 8rem;
    width: 100%;
    padding: 0 1.6rem;
    .like_wrap {
      width: 20rem;
    }
  }
`;

const Like = styled.div`
  .img_box {
    position: relative;
    width: 16rem;
    height: 8rem;
    img {
      position: absolute;
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    img:nth-child(2) {
      left: 4rem;
    }
    img:nth-child(3) {
      left: 8rem;
    }
  }

  @media (${(props) => props.theme.size.mobile}) {
    .img_box {
      width: 12rem;
      height: 6rem;
      img {
        width: 6rem;
        height: 6rem;
      }
      img:nth-child(2) {
        left: 3rem;
      }
      img:nth-child(3) {
        left: 6rem;
      }
    }
  }
`;

const More = styled.div`
  .more_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    width: 6rem;
    height: 6rem;
    span {
      display: block;
      width: 0.6rem;
      height: 0.6rem;
      background: #fff;
      border-radius: 50%;
    }
    @media (${(props) => props.theme.size.mobile}) {
      width: 4rem;
      height: 4rem;
      gap: 0.8rem;
      span {
        width: 0.4rem;
        height: 0.4rem;
      }
    }
  }
  p {
    color: #fff;
    font-size: 1.4rem;
    text-align: center;
    @media (${(props) => props.theme.size.mobile}) {
      font-size: 1.2rem;
    }
  }
`;

const List = styled.ul`
  ${ListStyle}
  color: ${(props) => props.theme.mainColor};
  width: 18rem;
  right: 4rem;
  display: none;
  top: auto;
  bottom: calc(100% + 2rem);
  height: auto;
  border: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};
  padding: 2rem;
  z-index: 2;

  li {
    font-size: 1.6rem;
    padding: 0;
    text-align: center;
    height: 4.8rem;
    line-height: 4.8rem;
    a {
      display: block;
      height: 100%;
    }
  }
  li:hover {
    font-weight: bold;
  }
  li ~ li {
    margin-top: 0;
    border-top: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};
  }

  &.active {
    opacity: 1;
    display: block;
  }

  @media (${(props) => props.theme.size.mobile}) {
    width: 16rem;
    right: 1.6rem;
    li {
      font-size: 1.4rem;
      height: 3.2rem;
      line-height: 3.2rem;
    }
  }
`;
export default function AboutBottom({ children }: { children: ReactNode }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const clickRef = useRef<HTMLUListElement>(null);
  const isMobile = useMediaQuery('(max-width: 1023px)');

  const toggleSelect = () => {
    setMoreOpen(!moreOpen);
  };

  // 바텀 밖 토글 닫힘
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (clickRef.current && !clickRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };
  }, [clickRef]);
  return (
    <>
      <Bottom>
        <Like>
          <div className='img_box'>
            <img src={like1} alt='스토리를 좋아합니다.' />
            <img src={like3} alt='스토리를 좋아합니다.' />
            <img src={like2} alt='스토리를 좋아합니다.' />
          </div>
        </Like>
        <More>
          <button className='more_btn' onClick={toggleSelect}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <p>더보기</p>
        </More>
        <List className={`${moreOpen ? 'active' : ''}`} ref={clickRef}>
          {isMobile && (
            <>
              <li>
                <Link to='/'>home🏠</Link>
              </li>
              <li>
                <Link to='/about'>about😊</Link>
              </li>
              <li>
                <Link to='/project'>project👩‍💻️</Link>
              </li>
              <li>
                <Link to='/contact'>contact📞</Link>
              </li>
            </>
          )}
          <li>
            <a
              href='https://distinct-feels-7f8.notion.site/ccc7154587a543b298324a8ad7d3ebe4?pvs=4'
              target='_blank'
              rel='noopener noreferrer'
            >
              이력서
            </a>
          </li>
          <li>
            <a
              href='https://distinct-feels-7f8.notion.site/1b9f7bfe6bfd4e27846b77f275be8ba6?pvs=4'
              target='_blank'
              rel='noopener noreferrer'
            >
              포트폴리오
            </a>
          </li>
          <li>
            <a
              href='https://distinct-feels-7f8.notion.site/9129a97ec14f4b8292f080b57299c2a9'
              target='_blank'
              rel='noopener noreferrer'
            >
              경력기술서
            </a>
          </li>
        </List>
        <div className='like_wrap'>{children}</div>
      </Bottom>
    </>
  );
}
