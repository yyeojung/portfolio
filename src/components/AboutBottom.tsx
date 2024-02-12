import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import like1 from '../image/like1.jpg';
import like2 from '../image/like2.jpg';
import like3 from '../image/like3.jpg';
import { ListStyle } from './Header';

const Bottom = styled.div`
  height: 12rem;
  width: calc(100% - 24rem);
  background: #000;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  .like_wrap {
    position: absolute;
    bottom: 0.5rem;
    left: 0;
    width: 30rem;
    height: 30rem;
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
      width: 0.8rem;
      height: 0.8rem;
      background: #fff;
      border-radius: 50%;
    }
  }
  p {
    color: #fff;
  }
`;

const List = styled.ul`
  ${ListStyle}
  color: ${(props) => props.theme.mainColor};
  width: 18rem;
  right: 4rem;
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
  }
`;
export default function AboutBottom({ children }: { children: ReactNode }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const clickRef = useRef<HTMLDivElement>(null);
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
      <Bottom ref={clickRef}>
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
        <List className={`${moreOpen ? 'active' : ''}`}>
          <li>이력서</li>
          <li>자기소개서</li>
          <li>경력기술서</li>
        </List>
        <div className='like_wrap'>{children}</div>
      </Bottom>
    </>
  );
}
