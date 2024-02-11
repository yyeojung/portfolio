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
  background: ${(props) => props.theme.mainBg};
  min-height: 100vh;

  & .guide {
    width: 120rem;
    margin: auto;
  }
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6rem;
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
`;

const StoryWrap = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 6rem;
`;
export default function Home() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalName = useSelector((state: RootState) => state.modal.modalName);

  const handleOpenModal = (name: string) => {
    dispatch(openModal(name));
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    document.body.style.overflow = '';
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
        <div className='guide'>
          <Header />
          <Contents>
            <StoryIcon
              width='22rem'
              height='22rem'
              className='spin'
              imgUrl={propfileImg}
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
                width='calc((100% - 14rem)/2)'
                onClick={() => handleOpenModal('profile')}
              ></Button>
              <Button
                text='Message'
                width='calc((100% - 14rem)/2)'
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
              width='18rem'
              height='18rem'
              className='menu'
              imgUrl={iconHome}
            />
            <StoryIcon
              width='18rem'
              height='18rem'
              className='menu'
              imgUrl={iconAbout}
            />
            <StoryIcon
              width='18rem'
              height='18rem'
              className='menu'
              imgUrl={iconProject}
            />
            <StoryIcon
              width='18rem'
              height='18rem'
              className='menu'
              imgUrl={iconContact}
            />
          </StoryWrap>
        </div>

        {isOpen && (
          <div>
            {renderModal()}
            <button onClick={handleCloseModal}>close</button>
          </div>
        )}
      </HomeWrap>
    </>
  );
}
