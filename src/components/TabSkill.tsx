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
`;
const Contents = styled.div`
  position: absolute;
  width: calc(100% - 24rem);
  z-index: 1;
  top: 16rem;
  display: flex;
  gap: 18rem;

  .link_wrap {
    position: absolute;
    top: 11rem;
    left: 22rem;
  }
`;
const Box = styled.div`
  margin-top: 4rem;

  .text_wrap {
    margin-top: 2rem;
  }
`;
const Tag = styled.p`
  display: inline-block;
  padding: 0 2rem;
  background: #000;
  border-radius: 1rem;
  font-size: 2.4rem;
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
            <LinkBtn title='경력기술서 바로가기'></LinkBtn>
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
                <strong>html, css</strong>
                <p>시맨틱 태그 어쩌구 저쩌구 저쩔러구....</p>
              </div>
              <div className='text_wrap'>
                <strong>Javascript, Typescript</strong>
                <p>
                  시맨틱 태그 어쩌구 저쩌구 저태그 <br />
                  어쩌구 저쩌구 저쩔러구.쩔러구....
                </p>
              </div>
              <div className='text_wrap'>
                <strong>React</strong>
                <p>
                  시맨틱 태그 어쩌구 저쩌구 저태그 <br />
                  어쩌구 저쩌구 저쩔러구.쩔러구....
                </p>
              </div>
            </Box>
          </div>
          <div className='right'>
            <Box>
              <Tag>공부 중</Tag>
              <div className='text_wrap'>
                <strong>공부하고 있는거..</strong>
                <p>뭐라도 시작해서 여기에 얼른 적기</p>
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
                <strong>
                  강남그린컴퓨터아카데미
                  <br />
                  UI/UX 반응형 웹디자인&웹퍼블리셔 과정 수료
                </strong>
                <p>2022.02.28 ~ 2022.08.12</p>
              </div>
            </Box>
          </div>
        </Contents>
      </SkillWrap>
    </>
  );
}
