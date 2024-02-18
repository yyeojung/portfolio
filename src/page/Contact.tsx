import React from 'react';
import styled from 'styled-components';
import Nav from 'components/Nav';
import propfileImg from '../image/propfileImg.jpg';
import { useMediaQuery } from '@react-hook/media-query';
import HamburgerMenu from 'components/HamburgerMenu';
import DirectMessage from 'components/DirectMessage';
import Message from 'components/modal/Message';
import { closeModal } from 'store/modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';

const Wrap = styled.div`
  position: relative;
  overflow-y: hidden;
`;
const Contents = styled.div`
  width: calc(100% - 24rem);
  margin-left: 24rem;
  min-height: 100vh;
  color: ${(props) => props.theme.mainColor};

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
export default function Contact() {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

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
          <DirectMessage />
        </Contents>
      </Wrap>

      {/* 메세지 모달창 */}
      {isOpen && (
        <div>
          <Message onClick={() => dispatch(closeModal())} />
        </div>
      )}
    </>
  );
}
