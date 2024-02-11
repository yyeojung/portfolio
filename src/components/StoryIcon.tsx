import React from 'react';
import styled, { keyframes } from 'styled-components';

interface StoryBoxProps {
  width?: string;
  height?: string;
  className?: string;
  imgUrl?: string;
}
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const StoryBox = styled.div<StoryBoxProps>`
  width: ${(props) => props.width || '20rem'};
  height: ${(props) => props.height || '20rem'};
  position: relative;
  border-radius: 50%;
  border: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};

  & .inner_circle {
    background: ${(props) => props.theme.mainBg};
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & .img_box {
      background: #fff;
      border-radius: 50%;
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};
      img {
        height: 85%;
      }
    }
  }

  &.spin {
    border: none;
    .story_bg {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-image: linear-gradient(
        to bottom,
        #fff500 0%,
        #ff00f5 50%,
        #ee022c 100%
      );
      animation: ${spin} 2s linear infinite;
    }
    .inner_circle {
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
    }
  }

  &.menu {
    .img_box {
      background: ${(props) => props.theme.storyIcon.storyBg};
      cursor: pointer;
    }
    .img_box:hover {
      background: ${(props) => props.theme.storyIcon.storyHover};
    }
  }
`;

export default function StoryIcon({
  width,
  height,
  className,
  imgUrl
}: StoryBoxProps) {
  return (
    <>
      <StoryBox width={width} height={height} className={className}>
        <div className='story_bg'></div>
        <div className='inner_circle'>
          <div className='img_box'>
            <img src={imgUrl} alt='story icon' />
          </div>
        </div>
      </StoryBox>
    </>
  );
}
