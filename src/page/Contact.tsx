import React from 'react';
import styled from 'styled-components';
import Nav from 'components/Nav';
import { Link } from 'react-router-dom';
import propfileImg from '../image/propfileImg.jpg';
import iconDm from '../image/icon/icon_dm.png';

const Wrap = styled.div`
  position: relative;
`;
const Contents = styled.div`
  width: calc(100% - 24rem);
  margin-left: 24rem;
  min-height: 100vh;
  color: ${(props) => props.theme.mainColor};
  background: ${(props) => props.theme.mainBg};
`;
const Header = styled.div`
  height: 10rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};
  display: flex;
  align-items: center;
  padding: 0 4rem;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};
  }
  .user {
    margin-left: 2rem;
    font-size: 2rem;

    p {
      font-size: 1.6rem;
    }
  }
`;
const DMessage = styled.div`
  padding: 6rem 8rem;

  p {
    color: ${(props) => props.theme.contact.dmAlert};
    font-size: 1.4rem;
    text-align: center;
  }
`;
const Chat = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  li {
    color: #fff;
    display: inline-block;
    background: ${(props) => props.theme.contact.chatBg};
    padding: 1.2rem 2rem;
    font-size: 1.6rem;
    border-radius: 1rem 3rem 3rem 1rem;
    width: fit-content;
  }
  li:first-child {
    border-top-left-radius: 3rem;
  }
  li:last-child {
    border-bottom-left-radius: 3rem;
  }
  li ~ li {
    margin-top: 1rem;
  }
  li:not(:first-child):hover {
    transition: all 0.3s;
    background: ${(props) => props.theme.contact.chatBgHover};
  }
`;
const SendDm = styled.div`
  height: 8rem;
  border-radius: 4rem;
  width: calc(100% - 32rem);
  left: 28rem;
  background: ${(props) => props.theme.buttonBg};
  position: absolute;
  bottom: 2rem;

  > * {
    position: absolute;
  }

  input {
    background: transparent;
    outline: none;
    height: 6rem;
    top: 1rem;
    left: 3rem;
    width: calc(100% - 16rem);
    color: ${(props) => props.theme.mainColor};

    &::placeholder {
      color: ${(props) => props.theme.contact.placeholder};
    }
  }

  button.send {
    background: ${(props) => props.theme.contact.chatBg};
    width: 10rem;
    height: 6rem;
    border-radius: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 1rem;
    top: 1rem;

    &:hover {
      transition: all 0.3s;
      background: ${(props) => props.theme.contact.chatBgHover};
    }
    i {
      display: block;
      width: 4rem;
      height: 4rem;
      background: url(${iconDm}) center center/ 100% no-repeat;
    }
  }
`;
export default function Contact() {
  return (
    <>
      <Wrap>
        <Nav currentPage='contact'></Nav>
        <Contents>
          <Header>
            <img src={propfileImg} alt='profile' />
            <div className='user'>
              <strong>yeojung</strong>
              <p>발전하는 퍼블리셔 홍여정입니다!</p>
            </div>
          </Header>
          <DMessage>
            <p>언제든지 연락 부탁드립니다 :)</p>
            <Chat>
              <li>
                <strong>Contact with me!</strong>
              </li>
              <li>
                <Link to='www.naver.com'>
                  {' '}
                  <strong>email : </strong>hongshii0i0i@gmail.com
                </Link>
              </li>
              <li>
                <Link to='www.naver.com'>
                  <strong>github : </strong>github.com/yyeojung
                </Link>
              </li>
              <li>
                <Link to='www.naver.com'>
                  <strong>notion : </strong>노션 주소
                </Link>
              </li>
              <li>
                <Link to='www.naver.com'>
                  <strong>blog : </strong>hhyj0000.tistory.com
                </Link>
              </li>
            </Chat>
          </DMessage>
          <SendDm>
            <input
              type='text'
              placeholder='메세지를 보내시려면 우측 아이콘을 클릭해주세요.'
            />
            <button className='send'>
              <i></i>
            </button>
          </SendDm>
        </Contents>
      </Wrap>
    </>
  );
}
