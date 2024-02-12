import dropdownLignt from '../image/icon/dropdown_light.png';
import dropdownDark from '../image/icon/dropdown_dark.png';
import settingLight from '../image/icon/setting_light.png';
import settingDark from '../image/icon/setting_dark.png';
import btnAboutLight from '../image/icon/btn_about_light.png';
import btnAboutDark from '../image/icon/btn_about_dark.png';
import btnProfileLight from '../image/icon/btn_profile_light.png';
import btnProfileDark from '../image/icon/btn_profile_dark.png';
import arrowLight from '../image/icon/arrow_light.png';
import arrowDark from '../image/icon/arrow_dark.png';
import postLike from '../image/icon/post_like_light.png';
import postLikeDark from '../image/icon/post_like_dark.png';
import postChat from '../image/icon/post_chat_light.png';
import postChatDark from '../image/icon/post_chat_dark.png';
import postLink from '../image/icon/post_link_light.png';
import postLinkDark from '../image/icon/post_link_dark.png';

export const lightTheme = {
  mainColor: '#000',
  mainBg: '#fff',
  dropdown: {
    icon: `${dropdownLignt}`,
    bg: '#fff',
    border: '#000'
  },
  storyIcon: {
    storyBorder: '#ccc',
    storyBg: '#fff',
    storyHover: 'rgba(227, 232,242,0.5)'
  },
  buttonBg: '#efefef',
  buttonHover: '#D2D4DA',
  settingIcon: `${settingLight}`,
  modal: {
    border: '#ccc',
    modalBg: '#fff',
    iconAbout: `${btnAboutLight}`,
    iconProfile: `${btnProfileLight}`,
    arrow: `${arrowLight}`,
    lightBg: '#fff',
    lightHover: 'rgba(227, 232, 242, 0.52)'
  },
  about: {
    blur: 'rgba(255,255,255,0.5)',
    skillBg: 'linear-gradient(to bottom, #d3d3d3 0%, #e6e6fa 100%)'
  },
  project: {
    iconLike: `${postLike}`,
    iconChat: `${postChat}`,
    iconLink: `${postLink}`,
    tagColor: '#3682c9'
  },
  contact: {
    chatBg: '#3791F0',
    chatBgHover: '#4324C0',
    dmAlert: '#666',
    placeholder: '#666'
  }
};
export const darkTheme = {
  mainColor: '#F0F1F2',
  mainBg: '#02050E',
  dropdown: {
    icon: `${dropdownDark}`,
    bg: '#18191A',
    border: '#626567'
  },
  storyIcon: {
    storyBorder: '#626567',
    storyBg: '#A0A5AF',
    storyHover: '#6C7A95'
  },
  buttonBg: '#404040',
  buttonHover: '#656268',
  settingIcon: `${settingDark}`,
  modal: {
    border: '#626567',
    modalBg: '#303234',
    iconAbout: `${btnAboutDark}`,
    iconProfile: `${btnProfileDark}`,
    arrow: `${arrowDark}`,
    lightBg: '#8F9091',
    lightHover: '#727A89'
  },
  about: {
    blur: 'rgba(0,0,0,0.5)',
    skillBg: 'linear-gradient(to bottom, #333 0%, #0f4c81 100%)'
  },
  project: {
    iconLike: `${postLikeDark}`,
    iconChat: `${postChatDark}`,
    iconLink: `${postLinkDark}`,
    tagColor: '#99C6F0'
  },
  contact: {
    chatBg: '#4324C0',
    chatBgHover: '#3791F0',
    dmAlert: '#888',
    placeholder: '#A7AFB7'
  }
};
export const theme = {
  lightTheme,
  darkTheme
};

export default theme;
