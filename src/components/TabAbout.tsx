import React from 'react';
import styled from 'styled-components';
import aboutBackground from '../image/aboutBackground.jpg';
import LinkBtn from './LinkBtn';

const AboutWrap = styled.div`
  background: url(${aboutBackground}) center center/ cover no-repeat;
  width: calc(100% - 24rem);
  margin-left: 24rem;
  min-height: 100vh;
  position: relative;

  @media (${(props) => props.theme.size.mobile}) {
    width: 100%;
    margin-left: 0;
  }

  .blur {
    min-height: 100vh;
    background: ${(props) => props.theme.about.blur};
  }

  .desc_wrap {
    position: absolute;
    top: 24rem;
    padding: 0 8rem;
    z-index: 1;

    @media (max-width: 1400px) {
      padding: 0 4rem;
    }
    @media (${(props) => props.theme.size.mobile}) {
      top: 18rem;
      padding: 0 1.6rem;
    }
  }
  .desc {
    color: ${(props) => props.theme.about.descColor};
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.8;
    max-width: 56rem;
    word-break: keep-all;

    @media (${(props) => props.theme.size.mobile}) {
      font-size: 1.6rem;
    }
  }
  .desc ~ .desc {
    margin-top: 1rem;
  }
`;

const LinkWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  top: 52rem;
  right: 30%;

  @media (max-width: 1400px) {
    right: 8%;
  }
  @media (${(props) => props.theme.size.mobile}) {
    display: none;
  }
  button:last-child {
    margin-top: 4rem;
  }
`;
export default function TabAbout() {
  return (
    <>
      <AboutWrap>
        <div className='blur'></div>
        <div className='desc_wrap'>
          <p className='desc'>
            안녕하세요!
            <br />
            저는 원활한 커뮤니케이션 능력과 꾸준한 학습을 바탕으로 문제를
            해결하는 능력을 갖추고 있습니다.
          </p>
          <p className='desc'>
            저의 장점으로는 적극적인 의사소통으로 팀원들과의 문제 없는 협업이
            가능하며 지속적인 학습으로 문제 해결을 할 수 있도록 노력하는
            것입니다.
          </p>
          <p className='desc'>
            코딩을 하는 것은 저에게 즐거움과 성취감을 주어 꾸준한 학습의 동기가
            되어줍니다. 배움을 계속하고 응용함으로써 항상 최선의 결과를 위해
            노력하겠습니다!
          </p>
        </div>
        <LinkWrap>
          <LinkBtn
            title='이력서 바로가기'
            linkUrl='https://distinct-feels-7f8.notion.site/ccc7154587a543b298324a8ad7d3ebe4'
          />
          <LinkBtn
            title='포트폴리오 바로가기'
            linkUrl='https://distinct-feels-7f8.notion.site/1b9f7bfe6bfd4e27846b77f275be8ba6?pvs=4'
          />
        </LinkWrap>
      </AboutWrap>
    </>
  );
}
