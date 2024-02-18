import React from 'react';
import MyProfile from 'components/modal/MyProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from 'store/modal';
import { RootState } from 'store/store';
import styled from 'styled-components';
import Header from 'components/Header';
import StoryIcon from 'components/StoryIcon';
import propfileImg from '../image/propfileImg.jpg';
import iconHome from '../image/icon/icon_home.png';
import iconAbout from '../image/icon/icon_about.png';
import iconProject from '../image/icon/icon_project.png';
import iconContact from '../image/icon/icon_contact.png';
import Clock from 'components/Clock';
import Button from 'components/Button';
import Setting from 'components/modal/Setting';
import Message from 'components/modal/Message';

const HomeWrap = styled.div`
  min-height: 100vh;

  & .guide {
    max-width: 120rem;
    margin: auto;
    padding-top: 12rem;

    @media (max-width: 1200px) {
      padding: 10rem 1.6rem 0;
      margin: 0;
    }
  }
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Introduce = styled.div`
  margin-top: 2rem;
  color: ${(props) => props.theme.mainColor};
  & strong {
    font-size: 2.4rem;
  }
  & p {
    font-size: 2rem;
    margin-top: 1rem;
    line-height: 1.5;
  }
  & .btn_wrap {
    display: flex;
    gap: 3rem;
    margin-top: 3rem;
  }
  @media (${(props) => props.theme.size.mobile}) {
    & strong {
      font-size: 1.8rem;
    }
    & p {
      font-size: 1.4rem;
    }
    & .btn_wrap {
      gap: 1rem;
    }
  }
`;

const StoryWrap = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 6rem;

  @media (${(props) => props.theme.size.mobile}) {
    gap: 1rem;
    overflow-x: auto;
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: transparent;
    }
  }
`;
export default function Home() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalName = useSelector((state: RootState) => state.modal.modalName);

  const handleOpenModal = (name: string) => {
    dispatch(openModal(name));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const renderModal = () => {
    if (modalName === 'profile') {
      return <MyProfile onClick={handleCloseModal} />;
    } else if (modalName === 'setting') {
      return <Setting onClick={handleCloseModal} />;
    } else {
      return <Message onClick={handleCloseModal} />;
    }
  };

  return (
    <>
      <HomeWrap>
        <Header />
        <div className='guide'>
          <Contents>
            <StoryIcon
              width={['22rem', '12rem']}
              className='spin'
              src={propfileImg}
            />
            <Clock></Clock>
          </Contents>
          <Introduce>
            <strong>홍여정</strong>
            <p>
              안녕하세요! <br />
              매일 성장 중인 퍼블리셔 홍여정입니다 :)
              <br />
              팀에서 원활한 협업을 위해 노력하고 저의 열정과 커뮤니케이션 능력을
              <br />
              바탕으로 팀에 기여할 수 있도록 노력하겠습니다!
            </p>
            <div className='btn_wrap'>
              <Button
                text='My Profile'
                width={['calc((100% - 14rem)/2)', 'calc((100% - 6rem)/2)']}
                onClick={() => handleOpenModal('profile')}
              ></Button>
              <Button
                text='Message'
                width={['calc((100% - 14rem)/2)', 'calc((100% - 6rem)/2)']}
                onClick={() => handleOpenModal('message')}
              ></Button>
              <Button
                className='setting'
                onClick={() => handleOpenModal('setting')}
              ></Button>
            </div>
          </Introduce>
          <StoryWrap>
            <StoryIcon
              width={['18rem', '10rem']}
              className='menu'
              src={iconHome}
              title='home🏠'
              onClick='/'
            />
            <StoryIcon
              width={['18rem', '10rem']}
              className='menu'
              src={iconAbout}
              title='about😊'
              onClick='/about'
            />
            <StoryIcon
              width={['18rem', '10rem']}
              className='menu'
              src={iconProject}
              title='project👩‍💻️'
              onClick='/project'
            />
            <StoryIcon
              width={['18rem', '10rem']}
              className='menu'
              src={iconContact}
              title='contact📞'
              onClick='/contact'
            />
          </StoryWrap>
        </div>

        {/* 메세지 모달창 */}
        {isOpen && <>{renderModal()}</>}
      </HomeWrap>
    </>
  );
}
