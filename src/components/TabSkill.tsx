import React from 'react';
import styled from 'styled-components';
import LinkBtn from './LinkBtn';

const SkillWrap = styled.div`
  width: calc(100% - 24rem);
  margin-left: 24rem;
  min-height: 100vh;
  position: relative;
  background-image: ${(props) => props.theme.about.skillBg};
  color: ${(props) => props.theme.mainColor};
  padding: 6rem;
  display: flex;

  @media (${(props) => props.theme.size.mobile}) {
    width: 100%;
    margin-left: 0;
    padding: 0 2rem;
  }
`;
const Contents = styled.div`
  position: absolute;
  width: calc(100% - 12rem);
  z-index: 1;
  top: 14rem;
  overflow-y: auto;
  display: flex;
  justify-content: space-around;
  max-height: calc(100vh - 26rem);

  @media (${(props) => props.theme.size.mobile}) {
    width: calc(100% - 2rem);
    max-height: calc(100vh - 24rem);
    top: 12rem;
    justify-content: normal;
    flex-wrap: wrap;

    .link_wrap {
      display: none;
    }
  }

  .link_wrap {
    position: absolute;
    bottom: 4rem;
    right: 0.8rem;
  }

  .left {
    margin-right: 4rem;
  }
`;
const Box = styled.div`
  margin-top: 2.8rem;

  .text_wrap {
    margin-top: 1.6rem;
    max-width: 52rem;

    p {
      font-size: 1.6rem;
      margin-top: 0.4rem;
      line-height: 1.5;
    }
  }
`;
const Tag = styled.p`
  display: inline-block;
  padding: 0 2rem;
  background: #000;
  border-radius: 1rem;
  font-size: 2rem;
  height: 4rem;
  line-height: 4rem;
  color: #fff;
`;
export default function TabSkill() {
  return (
    <>
      <SkillWrap>
        <Contents>
          <div className='link_wrap'>
            <LinkBtn
              title='경력기술서 바로가기'
              linkUrl='https://distinct-feels-7f8.notion.site/9129a97ec14f4b8292f080b57299c2a9'
            ></LinkBtn>
          </div>
          <div className='left'>
            <Box>
              <Tag>경력사항</Tag>
              <div className='text_wrap'>
                <strong>(주) 유엑스스토리</strong>
                <p>2023.02.16 ~ 재직 중</p>
              </div>
            </Box>
            <Box>
              <Tag>사용 기술</Tag>
              <div className='text_wrap'>
                <strong>html, Css</strong>
                <p>
                  JavaScript를 사용하지 않아도 충분히 구현 가능한
                  <br /> Html,Css를 활용하여 UI/UX 개선하는 것에 중점을 둡니다.
                </p>
              </div>
              <div className='text_wrap'>
                <strong>JavaScript, TypeScript</strong>
                <p>
                  기본적인 JavaScript를 학습하여 웹페이지에서
                  <br />
                  동적인 기능 구현이 가능합니다.
                </p>
                <p>
                  타입스크립트를 학습하여 코드의 가독성과 유지보수성을
                  <br /> 높이기 위해 노력합니다.
                </p>
              </div>
              <div className='text_wrap'>
                <strong>React, Redux</strong>
                <p>
                  데이터 전달을 위한 props의 개념을 이해하고 활용할 수 있습니다.
                </p>
                <p>
                  state를 효과적으로 관리하기 위해 Redux Toolkit으로 전역
                  상태관리를
                  <br />
                  경험해보았습니다.
                </p>
              </div>
            </Box>
          </div>
          <div className='right'>
            <Box>
              <Tag>공부 중</Tag>
              <div className='text_wrap'>
                <strong>Next.js</strong>
                <p>
                  서버사이드 렌더링과 클라이언트 사이드 렌더링의 차이를 이해하고
                  <br />
                  서버에 부담을 줄이고 성능을 향상시키는 방법에 대해 학습
                  중입니다.
                </p>
              </div>
            </Box>
            <Box>
              <Tag>교육 · 수료 </Tag>
              <div className='text_wrap'>
                <strong>실무프로젝트 기반의 VUE JS</strong>
                <p>2023.12.16 ~ 2023.12.17</p>
              </div>
              <div className='text_wrap'>
                <strong>한국방송통신대학교 컴퓨터과학과 3학년</strong>
                <p>2023.09 ~ 재학 중</p>
              </div>
              <div className='text_wrap'>
                <strong>UI/UX 반응형 웹디자인&웹퍼블리셔 과정 수료</strong>
                <p>강남그린컴퓨터아카데미</p>
                <p>2022.02.28 ~ 2022.08.12</p>
              </div>
            </Box>
          </div>
        </Contents>
      </SkillWrap>
    </>
  );
}
