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

  .blur {
    min-height: 100vh;
    background: ${(props) => props.theme.about.blur};
  }

  .desc {
    position: absolute;
    top: 24rem;
    left: 8rem;
    color: #fff;
    font-size: 2.4rem;
    font-weight: 700;
    z-index: 2;
  }
`;

const LinkWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50rem;

  button:last-child {
    margin-top: 4rem;
  }
`;
export default function TabAbout() {
  return (
    <>
      <AboutWrap>
        <div className='blur'></div>
        <p className='desc'>안녕하세요</p>
        <LinkWrap>
          <LinkBtn title='이력서 바로가기' />
          <LinkBtn title='자기소개서 바로가기' />
        </LinkWrap>
      </AboutWrap>
    </>
  );
}
