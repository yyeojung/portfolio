import React from 'react';
import styled from 'styled-components';
import StoryIcon from './StoryIcon';
import iconHome from '../image/icon/icon_home.png';
import iconAbout from '../image/icon/icon_about.png';
import iconProject from '../image/icon/icon_project.png';
import iconContact from '../image/icon/icon_contact.png';

const SideNav = styled.nav`
  position: fixed;
  width: 24rem;
  min-height: 100vh;
  background: ${(props) => props.theme.mainBg};
  border-right: 0.1rem solid ${(props) => props.theme.storyIcon.storyBorder};
  display: flex;
  gap: 2.8rem;
  flex-direction: column;
  padding-top: 4rem;
`;
export default function Nav({ currentPage }: { currentPage: string }) {
  return (
    <SideNav>
      <StoryIcon
        src={iconHome}
        width={['14rem', '0']}
        title='home🏠'
        className='menu'
        onClick='/'
      ></StoryIcon>
      <StoryIcon
        src={iconAbout}
        width={['14rem', '0']}
        title='about😊'
        onClick='/about'
        className={currentPage === 'about' ? 'spin menu' : 'menu'}
      ></StoryIcon>
      <StoryIcon
        src={iconProject}
        width={['14rem', '0']}
        title='project👩‍💻️'
        onClick='/project'
        className={currentPage === 'project' ? 'spin menu' : 'menu'}
      ></StoryIcon>
      <StoryIcon
        src={iconContact}
        width={['14rem', '0']}
        title='contact📞'
        onClick='/contact'
        className={currentPage === 'contact' ? 'spin menu' : 'menu'}
      ></StoryIcon>
    </SideNav>
  );
}
