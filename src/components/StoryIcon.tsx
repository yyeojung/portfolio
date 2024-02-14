import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface StoryBoxProps {
  width?: [string, string];
  className?: string;
  title?: string;
  src: string;
  onClick?: string;
}
const StoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StoryBox = styled.div<StoryBoxProps>`
  width: ${(props) => (props.width ? props.width[0] : '20rem')};
  height: ${(props) => (props.width ? props.width[0] : '20rem')};
  position: relative;
  border-radius: 50%;
  border: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};

  @media (${(props) => props.theme.size.mobile}) {
    width: ${(props) => (props.width ? props.width[1] : '10rem')};
    height: ${(props) => (props.width ? props.width[1] : '10rem')};
  }
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
      @media (${(props) => props.theme.size.mobile}) {
        width: calc(100% - 1rem);
        height: calc(100% - 1rem);
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
    }
    .inner_circle {
      width: calc(100% - 1rem);
      height: calc(100% - 1rem);
    }
    .img_box {
      width: calc(100% - 1rem);
      height: calc(100% - 1rem);
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
const Text = styled.p`
  color: ${(props) => props.theme.mainColor};
  margin-top: 1rem;
  font-size: 2.4rem;
  @media (${(props) => props.theme.size.mobile}) {
    font-size: 1.4rem;
  }
`;
export default function StoryIcon({
  width,
  className,
  src,
  title,
  onClick
}: StoryBoxProps) {
  const navigate = useNavigate();
  const NavigatePage = () => {
    if (onClick) {
      navigate(onClick);
    }
  };
  return (
    <>
      <StoryWrap>
        <div className='linkArea' onClick={NavigatePage}>
          <StoryBox width={width} className={className} src={src}>
            <div className='story_bg'></div>
            <div className='inner_circle'>
              <div className='img_box'>
                <img src={src} alt='story icon' />
              </div>
            </div>
          </StoryBox>
        </div>
        <Text>{title}</Text>
      </StoryWrap>
    </>
  );
}
