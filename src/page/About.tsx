import React, { useState } from 'react';
import Nav from 'components/Nav';
import AboutBottom from 'components/AboutBottom';
import LikeAnimation from 'components/LikeAnimation';
import TabAbout from 'components/TabAbout';
import TabSkill from 'components/TabSkill';
import styled from 'styled-components';
import propfileImg from '../image/propfileImg.jpg';
import { fadeIn } from 'components/animation';

const Wrap = styled.div`
  position: relative;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  color: #fff;
  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  p {
    margin-left: 2.4rem;
    font-size: 3.2rem;
    font-weight: 700;
  }

  span {
    font-size: 2rem;
    padding-top: 1rem;
    margin-left: 1rem;
  }
  @media (${(props) => props.theme.size.mobile}) {
    img {
      width: 4rem;
      height: 4rem;
    }
    p {
      margin-left: 1.6rem;
      font-size: 2rem;
    }

    span {
      font-size: 1.4rem;
      padding-top: 0.8rem;
    }
  }
`;

const TabMenu = styled.div`
  position: absolute;
  z-index: 1;
  width: calc(100% - 24rem);
  left: 24rem;
  padding: 2.8rem 4rem;
  height: 30rem;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.59) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (${(props) => props.theme.size.mobile}) {
    width: 100%;
    left: 0;
    padding: 2.8rem 1.6rem;
  }

  ul {
    display: flex;
    gap: 4rem;

    li {
      width: 50%;
      height: 3.2rem;
      border-radius: 2.4rem;
      background: rgba(255, 255, 255, 0.3);
      font-size: 2.4rem;
      font-weight: 700;
      text-align: center;
      cursor: pointer;
    }
    li.active {
      background: #fff;
    }
    @media (${(props) => props.theme.size.mobile}) {
      gap: 2rem;
      li {
        height: 2rem;
        font-size: 1.6rem;
      }
    }
  }
`;
const Contents = styled.div`
  > div {
    animation: ${fadeIn} 0.5s ease-in;
  }
`;
export default function About() {
  const [tab, setTab] = useState(0);
  const tabContents = () => {
    if (tab === 0) {
      return <TabAbout />;
    } else {
      return <TabSkill />;
    }
  };
  return (
    <>
      <Wrap>
        <Nav currentPage='about'></Nav>
        <TabMenu>
          <ul>
            <li onClick={() => setTab(0)} className={tab === 0 ? 'active' : ''}>
              about
            </li>
            <li onClick={() => setTab(1)} className={tab === 1 ? 'active' : ''}>
              skill
            </li>
          </ul>
          <User>
            <img src={propfileImg} alt='profile' />
            <p>yeojung</p>
            <span>지금</span>
          </User>
        </TabMenu>
        <Contents>{tabContents()}</Contents>
        <AboutBottom>
          <LikeAnimation />
        </AboutBottom>
      </Wrap>
    </>
  );
}
