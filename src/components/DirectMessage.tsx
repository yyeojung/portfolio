import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import iconDm from '../image/icon/icon_dm.png';
import iconDelete from '../image/icon/icon_delete.png';
import { useDispatch } from 'react-redux';
import { openModal } from 'store/modal';

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

    &.pointer {
      cursor: pointer;
    }
    &:first-child {
      border-top-left-radius: 3rem;
    }
    &:last-child {
      border-bottom-left-radius: 3rem;
    }
    &:not(:first-child):hover {
      transition: all 0.3s;
      background: ${(props) => props.theme.contact.chatBgHover};
    }
  }

  li ~ li {
    margin-top: 1rem;
  }

  &.right {
    align-items: flex-end;
    padding-bottom: 1rem;

    li {
      background: ${(props) => props.theme.contact.userBg};
      border-radius: 3rem 1rem 1rem 3rem;
      &:first-child {
        border-top-right-radius: 3rem;
      }
      &:last-child {
        border-bottom-right-radius: 3rem;
        background: ${(props) => props.theme.contact.chatBg};
      }
      &:not(:first-child):hover {
        background: ${(props) => props.theme.contact.userBg};
      }
      &:last-child:hover {
        background: ${(props) => props.theme.contact.chatBgHover};
      }
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
export default function DirectMessage() {
  const [dm, setDm] = useState('');
  const [showDm, setShowDm] = useState(false);
  const [messages, setMessages] = useState<SaveDmProps[]>([]);
  const dmListRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

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
    setMessages([]);
  };

  // 스크롤 하단 이동
  useEffect(() => {
    scrollDown();
  }, [messages]);

  return (
    <>
      <MessageArea ref={dmListRef}>
        <DMessage>
          <p>언제든지 연락 부탁드립니다 :)</p>
          <Chat>
            <li>
              <strong>Contact with me!</strong>
            </li>
            <li
              className='pointer'
              onClick={() => dispatch(openModal('message'))}
            >
              <strong>email : </strong>hongshii0i0i@gmail.com
            </li>
            <li>
              <a
                href='https://github.com/yyeojung'
                target='_blank'
                rel='noopener noreferrer'
              >
                <strong>github : </strong>github.com/yyeojung
              </a>
            </li>
            <li>
              <a
                href='https://distinct-feels-7f8.notion.site/1b9f7bfe6bfd4e27846b77f275be8ba6?pvs=4'
                target='_blank'
                rel='noopener noreferrer'
              >
                <strong>notion : </strong>yyeojung notion
              </a>
            </li>
            <li>
              <a
                href='https://hhyj0000.tistory.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <strong>blog : </strong>hhyj0000.tistory.com
              </a>
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
    </>
  );
}
