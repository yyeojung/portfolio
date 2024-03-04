import { keyframes } from 'styled-components';

// about fadein 탭
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 햄버거 토글 메뉴 애니메이션
export const animateLine1 = keyframes` 
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(16px) rotate(0);
  }
  100% {
    transform: translateY(16px) rotate(45deg);
  }
`;
export const returnLine1 = keyframes` 
  0% {
    transform: translateY(16px) rotate(45deg);
  }
  50% {
    transform: translateY(16px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;
export const animateLine2 = keyframes`
  0% { 
    transform: scale(1);
    opacity:1;
  }
  100% {
    transform: scale(0);
    opacity:0;
  }
`;
export const returnLine2 = keyframes`
  0% { 
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity:1;
  }
`;
export const animateLine3 = keyframes` 
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-16px) rotate(0);
  }
  100% {
    transform: translateY(-16px) rotate(135deg);
  }
`;
export const returnLine3 = keyframes` 
  0% {
    transform: translateY(-16px) rotate(135deg);
  }
  50% {
    transform: translateY(-16px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;
