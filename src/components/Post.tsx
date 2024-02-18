import React, { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
import LikeFull from '../image/icon/post_like_full.png';
import LinkFull from '../image/icon/icon_link.png';

const IconStyle = css`
  width: 3.2rem;
  height: 3.2rem;
  display: block;
  cursor: pointer;
  background: url(${(props) => props.theme.project.iconLike}) center center/
    100% no-repeat;
`;
const Wrap = styled.div`
  min-height: 52rem;
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};

  .img_wrap {
    border-radius: 1rem;
    height: 29rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};

    img {
      height: 100%;
      object-fit: cover;
    }
  }
`;
const IconArea = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
const Like = styled.i`
  ${IconStyle}

  &.active {
    background-image: url(${LikeFull});
  }
`;
const Chat = styled.i`
  ${IconStyle}
  background-image: url(${(props) => props.theme.project.iconChat});
`;
const Url = styled.a`
  ${IconStyle}
  background-image: url(${(props) => props.theme.project.iconLink});

  &:hover {
    background-image: url(${LinkFull});
  }
`;

interface PostProps {
  imgUrl?: string;
  imgSrc?: string;
}

export default function Post({
  children,
  imgUrl,
  imgSrc
}: { children: ReactNode } & PostProps) {
  const [isLike, setIsLike] = useState(false);

  const clickLike = () => {
    setIsLike(!isLike);
  };
  return (
    <>
      <Wrap className='post'>
        <a
          className='img_wrap'
          href={imgUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={imgSrc} alt='프로젝트 이미지' />
        </a>
        <IconArea>
          <Like className={isLike ? 'active' : ''} onClick={clickLike}></Like>
          <Chat></Chat>
          <Url href={imgUrl} target='_blank' rel='noopener noreferrer'></Url>
        </IconArea>
        <>{children}</>
      </Wrap>
    </>
  );
}
