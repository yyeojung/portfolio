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
const Url = styled.i`
  ${IconStyle}
  background-image: url(${(props) => props.theme.project.iconLink});

  &:hover {
    background-image: url(${LinkFull});
  }
`;
export default function Post({ children }: { children: ReactNode }) {
  const [isLike, setIsLike] = useState(false);

  const clickLike = () => {
    setIsLike(!isLike);
  };
  return (
    <>
      <Wrap className='post'>
        <div
          className='img_wrap'
          style={{ background: '#ccc', height: '29rem' }}
        >
          <img src='' alt='' />
        </div>
        <IconArea>
          <Like className={isLike ? 'active' : ''} onClick={clickLike}></Like>
          <Chat></Chat>
          <Url></Url>
        </IconArea>
        <>{children}</>
      </Wrap>
    </>
  );
}
