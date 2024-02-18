import React from 'react';
import ModalLayout from './ModalLayout';
import profileImg from '../../image/propfileImg.jpg';
import styled from 'styled-components';

const Contents = styled.div`
  padding: 0 2rem;
  & .me {
    margin: 2rem auto;
    img {
      border-radius: 50%;
      width: 6rem;
      height: 6rem;
    }
    h3 {
      font-size: 1.6rem;
      margin-top: 1rem;
    }
  }

  & p {
    background: ${(props) => props.theme.buttonBg};
    border-radius: 1rem;
    padding: 1rem;
    font-size: 1.4rem;
    line-height: 1.5;
    text-align: left;
  }

  & .btn_wrap {
    margin: 2rem 0;
    button {
      display: flex;
      align-items: center;
      width: 100%;
      position: relative;
      font-size: 1.6rem;
      height: 2.8rem;

      i {
        margin-right: 1rem;
        display: block;
        width: 1.6rem;
        height: 1.6rem;
        background: url(${(props) => props.theme.modal.iconAbout}) center
          center/ 100% no-repeat;

        &.resume {
          background-image: url(${(props) => props.theme.modal.iconProfile});
        }
      }
      a {
        width: 100%;
        text-align: left;
      }
    }
    button:hover {
      font-weight: bold;
    }
    button:last-child {
      margin-top: 2rem;
    }
    button:after {
      display: inline-block;
      clear: both;
      content: '';
      position: absolute;
      right: 0;
      width: 1.6rem;
      height: 1.6rem;
      background: url(${(props) => props.theme.modal.arrow}) center center/ 100%
        no-repeat;
    }
  }
`;
export default function MyProfile({ onClick }: { onClick: () => void }) {
  return (
    <>
      <ModalLayout title='My Profile' onClick={onClick}>
        <Contents>
          <div className='me'>
            <img src={profileImg} alt='profile' />
            <h3>홍여정</h3>
          </div>
          <p className='desc'>
            매일 성장 중인 퍼블리셔 홍여정입니다 :) <br />
            웹 기술에 대한 공부를 성실히 하며 <br />
            사용자 경험 개선을 위해 노력합니다!
          </p>
          <div className='btn_wrap'>
            <button>
              <i className='resume'></i>
              <a
                href='https://distinct-feels-7f8.notion.site/ccc7154587a543b298324a8ad7d3ebe4?pvs=4'
                target='_blank'
                rel='noopener noreferrer'
              >
                이력서 바로가기
              </a>
            </button>
            <button>
              <i></i>
              <a
                href='https://distinct-feels-7f8.notion.site/1b9f7bfe6bfd4e27846b77f275be8ba6?pvs=4'
                target='_blank'
                rel='noopener noreferrer'
              >
                포트폴리오 바로가기
              </a>
            </button>
          </div>
        </Contents>
      </ModalLayout>
    </>
  );
}
