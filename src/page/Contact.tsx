import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Nav from 'components/Nav';
import { Link } from 'react-router-dom';
import propfileImg from '../image/propfileImg.jpg';
import iconDm from '../image/icon/icon_dm.png';
import iconDelete from '../image/icon/icon_delete.png';
import { useMediaQuery } from '@react-hook/media-query';
import HamburgerMenu from 'components/HamburgerMenu';

const Wrap = styled.div`
  position: relative;
  overflow-y: hidden;
`;
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
  height: 10rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};
  display: flex;
  align-items: center;
  padding: 0 4rem;
  position: fixed;
  width: 100%;
  z-index: 1;
  background: ${(props) => props.theme.mainBg};

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

  @media (${(props) => props.theme.size.mobile}) {
    height: 8rem;
    padding: 0 2rem;

    .ham_menu {
      position: absolute;
      right: 2rem;

      .menu_list {
        right: 0;
        top: 4rem;
      }
    }
  }
`;
const MessageArea = styled.div`
  position: absolute;
  top: 10rem;
  width: calc(100% - 24rem);
  max-height: calc(100vh - 22rem);
  overflow-y: auto;

  @media (${(props) => props.theme.size.mobile}) {
    width: 100%;
    max-height: calc(100vh - 18rem);
  }
`;
const DMessage = styled.div`
  padding: 0rem 8rem;

  p {
    color: ${(props) => props.theme.contact.dmAlert};
    font-size: 1.4rem;
    text-align: center;
    margin-top: 2rem;
  }

  @media (${(props) => props.theme.size.mobile}) {
    padding: 0rem 1.6rem;
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
    padding: 1rem 2rem;
    min-height: 4.4rem;
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

  &.right {
    align-items: flex-end;
    padding-bottom: 1rem;

    li {
      background: ${(props) => props.theme.contact.userBg};
      border-radius: 3rem 1rem 1rem 3rem;
    }
    li:first-child {
      border-top-right-radius: 3rem;
    }
    li:last-child {
      border-bottom-right-radius: 3rem;
      background: ${(props) => props.theme.contact.chatBg};
    }
    li:not(:first-child):hover {
      background: ${(props) => props.theme.contact.userBg};
    }
    li:last-child:hover {
      background: ${(props) => props.theme.contact.chatBgHover};
    }

    button.delete {
      &::before {
        background: url(${iconDelete}) center center/ 100% no-repeat;
        width: 2rem;
        height: 2rem;
        display: inline-block;
        content: '';
        clear: both;
        vertical-align: text-bottom;
        margin-right: 0.5rem;
      }
      font-size: 1.6rem;
    }
  }
`;
const SendDm = styled.div`
  position: fixed;
  height: 10rem;
  left: 24rem;
  width: 100%;
  background: ${(props) => props.theme.mainBg};
  bottom: 0;

  > * {
    position: absolute;
  }

  input {
    height: 8rem;
    border-radius: 4rem;
    width: calc(100% - 32rem);
    left: 4rem;
    background: ${(props) => props.theme.buttonBg};
    bottom: 1rem;
    outline: none;
    padding: 0rem 12rem 0rem 4rem;
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
    right: 29rem;
    top: 2rem;

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

  @media (${(props) => props.theme.size.mobile}) {
    left: 0rem;
    height: 8rem;

    input {
      width: calc(100% - 8rem);
      height: 6rem;
    }
    button.send {
      right: 5rem;
      height: 4rem;
      width: 8rem;
      i {
        width: 2.8rem;
        height: 2.8rem;
      }
    }
  }
`;
export default function Contact() {
  const [dm, setDm] = useState('');
  const [showDm, setShowDm] = useState(false);
  const [messages, setMessages] = useState<SaveDmProps[]>([]);
  const dmListRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 1023px)');

  interface SaveDmProps {
    message: string;
  }
  useEffect(() => {
    const data = localStorage.getItem('message');
    const storedMessages: SaveDmProps[] = data ? JSON.parse(data) : [];
    setMessages(storedMessages);
    setShowDm(storedMessages.length > 0);
    scrollDown();
  }, []);

  // 스크롤 하단으로
  const scrollDown = () => {
    if (dmListRef.current) {
      dmListRef.current.scrollTop = dmListRef.current.scrollHeight;
    }
  };
  // 메세지 보내기 버튼
  const sendMessage = () => {
    if (dm.trim() === '') {
      return;
    }

    const newMessages = { message: dm };
    const updatedMessages = [...messages, newMessages];
    setMessages(updatedMessages);

    localStorage.setItem('message', JSON.stringify(updatedMessages));
    setDm('');
    setShowDm(true);
  };

  // 메세지 보내기 엔터
  const enterMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // 메세지 삭제
  const deleteDm = () => {
    localStorage.removeItem('message');
    setShowDm(false);
  };

  // 스크롤 하단 이동
  useEffect(() => {
    scrollDown();
  }, [messages]);

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
            {isMobile && <HamburgerMenu />}
          </Header>
          <MessageArea ref={dmListRef}>
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
            {showDm && (
              <DMessage>
                <p>localStorage에만 저장되는 메세지입니다 :)</p>
                <Chat className='right'>
                  {messages.map((message, index) => (
                    <li key={index}>{message.message}</li>
                  ))}
                  <li>
                    <button className='delete' onClick={deleteDm}>
                      메세지 삭제
                    </button>
                  </li>
                </Chat>
              </DMessage>
            )}
          </MessageArea>
          <SendDm>
            <input
              type='text'
              placeholder='메세지를 입력해주세요! :)'
              value={dm}
              onChange={(e) => setDm(e.target.value)}
              onKeyDown={enterMessage}
            />
            <button className='send' onClick={sendMessage}>
              <i></i>
            </button>
          </SendDm>
        </Contents>
      </Wrap>
    </>
  );
}
