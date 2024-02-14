import Nav from 'components/Nav';
import Post from 'components/Post';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div``;
const Contents = styled.div`
  width: calc(100% - 24rem);
  margin-left: 24rem;
  min-height: 100vh;
  color: ${(props) => props.theme.mainColor};
  background: ${(props) => props.theme.mainBg};
`;
const Header = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};

  strong {
    font-size: 2.8rem;
  }
  p {
    font-size: 1.6rem;
  }
`;
const PostWrap = styled.div`
  padding: 4rem 6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;

  .post {
    width: calc((100% - 8rem) / 3);
  }

  @media (${(props) => props.theme.size.mobile}) {
    .post {
      width: calc(50% - 2rem);
    }
  }

  @media (max-width: 767px) {
    .post {
      width: 100%;
    }
  }
`;
const DescArea = styled.div`
  margin-top: 1rem;

  strong {
    margin-right: 1rem;
  }
  p,
  a {
    font-size: 1.6rem;
    display: block;
  }
  a ~ a {
    margin-top: 1rem;
  }
  p.tag {
    margin: 2rem 0;
    color: ${(props) => props.theme.project.tagColor};
    word-break: break-word;
    font-size: 1.4rem;
  }

  a:hover {
    color: ${(props) => props.theme.project.tagColor};
  }
`;
export default function Project() {
  return (
    <>
      <Wrap>
        <Nav currentPage='project'></Nav>
        <Contents>
          <Header>
            <strong>yeojung</strong>
            <p>게시물</p>
          </Header>
          <PostWrap>
            <Post>
              <DescArea>
                <p>
                  <strong>하이러닝</strong>경기도 교육청 AI기반 교수 학습 플랫폼
                </p>
                <p className='tag'>
                  #유지보수 #고도화 #html #css #javascript #chart.js #lottie.js
                  #swiper.js
                </p>
                <Link to='https://www.google.com'>
                  <strong>프로젝트 기술서</strong>바로가기
                </Link>
              </DescArea>
            </Post>
            <Post>
              <DescArea>
                <p>
                  <strong>ASUM</strong>skt 마케팅 플랫폼 백오피스
                </p>
                <p className='tag'>
                  #유지보수 #html #css #javascript #swiper.js
                </p>
                <Link to='https://www.google.com'>
                  <strong>프로젝트 기술서</strong>바로가기
                </Link>
              </DescArea>
            </Post>
            <Post>
              <DescArea>
                <p>
                  <strong>Tugboat</strong>대교 사용자 맞춤형 학습 전략 서비스
                </p>
                <p className='tag'>
                  #신규 프로젝트 #html #css #javascript #swiper.js #chart.js
                </p>
                <Link to='https://www.google.com'>
                  <strong>프로젝트 기술서</strong>바로가기
                </Link>
              </DescArea>
            </Post>
            <Post>
              <DescArea>
                <p>
                  <strong>Travel Pocket</strong>여행 가계부 토이프로젝트
                </p>
                <p className='tag'>
                  #토이 프로젝트 #React.js #styled-components #uuid #localstrage
                </p>
                <Link to='https://www.google.com'>
                  <strong>회고록</strong>바로가기
                </Link>
                <Link to='https://www.google.com'>
                  <strong>Github</strong>바로가기
                </Link>
                <Link to='https://www.google.com'>
                  <strong>Demo</strong>바로가기
                </Link>
              </DescArea>
            </Post>
            <Post>
              <DescArea>
                <p>
                  <strong>I’m memo</strong>간단한 메모 토이프로젝트
                </p>
                <p className='tag'>
                  #토이 프로젝트 #React.js #styled-components #uuid #localstrage
                </p>
                <Link to='https://www.google.com'>
                  <strong>회고록</strong>바로가기
                </Link>
                <Link to='https://www.google.com'>
                  <strong>Github</strong>바로가기
                </Link>
                <Link to='https://www.google.com'>
                  <strong>Demo</strong>바로가기
                </Link>
              </DescArea>
            </Post>
            <Post>
              <DescArea>
                <p>
                  <strong>Portfolio</strong>2024 포트폴리오 사이트
                </p>
                <p className='tag'>
                  #portfolio #React.js #styled-components #typescript #Redux
                  #Emailjs #lottie
                </p>
                <Link to='https://www.google.com'>
                  <strong>회고록</strong>바로가기
                </Link>
                <Link to='https://www.google.com'>
                  <strong>Github</strong>바로가기
                </Link>
                <Link to='https://www.google.com'>
                  <strong>Demo</strong>바로가기
                </Link>
              </DescArea>
            </Post>
          </PostWrap>
        </Contents>
      </Wrap>
    </>
  );
}
