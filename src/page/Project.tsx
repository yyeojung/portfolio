import { useMediaQuery } from '@react-hook/media-query';
import HamburgerMenu from 'components/HamburgerMenu';
import Nav from 'components/Nav';
import Post from 'components/Post';
import React from 'react';
import styled from 'styled-components';
import highlearning from '../image/highlearning.png';
import asum from '../image/asum.jpg';
import tugboat from '../image/tugboat.png';
import portfolio from '../image/portfolio.png';
import memo from '../image/memo.png';
import travelPocket from '../image/travel_pocket.png';

const Wrap = styled.div``;
const Contents = styled.div`
  width: calc(100% - 24rem);
  margin-left: 24rem;
  min-height: 100vh;
  color: ${(props) => props.theme.mainColor};
  background: ${(props) => props.theme.mainBg};

  @media (${(props) => props.theme.size.mobile}) {
    width: 100%;
    margin-left: 0;
  }
`;
const Header = styled.div`
  height: 8rem;
  width: calc(100% - 24rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  border-bottom: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};
  background: ${(props) => props.theme.mainBg};

  @media (${(props) => props.theme.size.mobile}) {
    width: 100%;

    .ham_menu {
      position: absolute;
      left: 2rem;

      .menu_list {
        right: auto;
        top: 4rem;
      }
    }
  }

  strong {
    font-size: 2.8rem;
  }
  p {
    font-size: 1.6rem;
  }
`;
const PostWrap = styled.div`
  padding: 12rem 6rem 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;

  .post {
    width: calc((100% - 8rem) / 3);
  }

  @media (${(props) => props.theme.size.mobile}) {
    padding: 12rem 1.6rem 4rem;
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
  const isMobile = useMediaQuery('(max-width: 1023px)');

  return (
    <>
      <Wrap>
        <Nav currentPage='project'></Nav>
        <Contents>
          <Header>
            {isMobile && <HamburgerMenu />}
            <strong>yeojung</strong>
            <p>게시물</p>
          </Header>
          <PostWrap>
            <Post
              imgSrc={highlearning}
              imgUrl='https://distinct-feels-7f8.notion.site/627afaf21bba42b0bbd7847b10e847dc'
            >
              <DescArea>
                <p>
                  <strong>하이러닝</strong>경기도 교육청 AI기반 교수 학습 플랫폼
                </p>
                <p className='tag'>
                  #유지보수 #고도화 #html #css #javascript #chart.js #lottie.js
                  #swiper.js
                </p>
                <a
                  href='https://distinct-feels-7f8.notion.site/627afaf21bba42b0bbd7847b10e847dc'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>프로젝트 기술서</strong>바로가기
                </a>
              </DescArea>
            </Post>
            <Post
              imgSrc={asum}
              imgUrl='https://distinct-feels-7f8.notion.site/ASUM-3faf40221fba4cd1880cad8d3f6d34d1'
            >
              <DescArea>
                <p>
                  <strong>ASUM</strong>skt 마케팅 플랫폼 백오피스
                </p>
                <p className='tag'>
                  #유지보수 #html #css #javascript #swiper.js
                </p>
                <a
                  href='https://distinct-feels-7f8.notion.site/ASUM-3faf40221fba4cd1880cad8d3f6d34d1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>프로젝트 기술서</strong>바로가기
                </a>
              </DescArea>
            </Post>
            <Post
              imgSrc={tugboat}
              imgUrl='https://distinct-feels-7f8.notion.site/33d69edb66774827bea8611f61d935d4'
            >
              <DescArea>
                <p>
                  <strong>Tugboat</strong>대교 사용자 맞춤형 학습 전략 서비스
                </p>
                <p className='tag'>
                  #신규 프로젝트 #html #css #javascript #swiper.js #chart.js
                </p>
                <a
                  href='https://distinct-feels-7f8.notion.site/33d69edb66774827bea8611f61d935d4'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>프로젝트 기술서</strong>바로가기
                </a>
              </DescArea>
            </Post>
            <Post
              imgSrc={travelPocket}
              imgUrl='https://yyeojung.github.io/react_travel/'
            >
              <DescArea>
                <p>
                  <strong>Travel Pocket</strong>여행 가계부 토이프로젝트
                </p>
                <p className='tag'>
                  #토이 프로젝트 #React.js #styled-components #uuid #localstrage
                </p>
                <a
                  href='https://distinct-feels-7f8.notion.site/b124368120ca4dacb72f61b7e56129bb'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>회고록</strong>바로가기
                </a>
                <a
                  href='https://github.com/yyeojung/react_travel'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>Github</strong>바로가기
                </a>
                <a
                  href='https://yyeojung.github.io/react_travel/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>Demo</strong>바로가기
                </a>
              </DescArea>
            </Post>
            <Post imgSrc={memo} imgUrl='https://yyeojung.github.io/react_memo/'>
              <DescArea>
                <p>
                  <strong>I’m memo</strong>간단한 메모 토이프로젝트
                </p>
                <p className='tag'>
                  #토이 프로젝트 #React.js #styled-components #uuid #localstrage
                </p>
                <a
                  href='https://distinct-feels-7f8.notion.site/b2ee71f3e1324a089fc07ffa569f57ee'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>회고록</strong>바로가기
                </a>
                <a
                  href='https://github.com/yyeojung/react_memo'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>Github</strong>바로가기
                </a>
                <a
                  href='https://yyeojung.github.io/react_memo/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>Demo</strong>바로가기
                </a>
              </DescArea>
            </Post>
            <Post imgSrc={portfolio} className='none'>
              <DescArea>
                <p>
                  <strong>Portfolio</strong>2024 포트폴리오 사이트
                </p>
                <p className='tag'>
                  #portfolio #React.js #styled-components #typescript #Redux
                  #Emailjs #lottie
                </p>
                <a
                  href='https://distinct-feels-7f8.notion.site/2024-portfolio-f54b70757f1a48b09de544a29d63862f'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>회고록</strong>바로가기
                </a>
                <a
                  href='https://github.com/yyeojung/portfolio'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>Github</strong>바로가기
                </a>
              </DescArea>
            </Post>
          </PostWrap>
        </Contents>
      </Wrap>
    </>
  );
}
