import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import animationData from '../json/like_animation.json';
import styled from 'styled-components';

const Like = styled.div`
  width: 100%;
  height: 100%;
`;
export default function LikeAnimation() {
  const likeContainer = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem>();

  useEffect(() => {
    if (animationRef.current) {
      // 이미 생성된 애니메이션이 있는 경우 삭제
      animationRef.current.destroy();
    }
    if (likeContainer.current) {
      lottie.loadAnimation({
        container: likeContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
      });
    }
  }, []);
  return (
    <>
      <Like ref={likeContainer}></Like>
    </>
  );
}
