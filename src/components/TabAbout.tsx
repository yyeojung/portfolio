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
            적극적인 의사소통으로 팀원들과의 문제 없는 협업이 가능하며 지속적인
            학습으로 문제 해결을 할 수 있도록 노력합니다.
          </p>
          <p className='desc'>
            함께 일하는 동료들과의 긍정적인 관계를 유지하며, 항상 최선을 다해
            결과를 이끌어내고자 합니다!
          </p>
        </div>
        <LinkWrap>
          <LinkBtn title='이력서 바로가기' />
          <LinkBtn title='포트폴리오 바로가기' />
        </LinkWrap>
      </AboutWrap>
    </>
  );
}
