import {
  container,
  mlAuto,
  mrAuto,
  title,
  cardTitle,
  description,
  coloredShadow,
  whiteColor,
  blackColor,
  sectionDark,
  hexToRgb
} from '../../../material-kit-pro-react.jsx';

const skillsSection = {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  coloredShadow,
  cardTitle,
  textCenter: {
    textAlign: 'center'
  },
  skills: {
    padding: '80px 0',
    background: 'rgba(' + hexToRgb(blackColor) + ',0.1)'
  },
  tabSpace: {
    padding: '20px 0 50px 0px'
  },
  cardCategory: {
    color: 'rgba(' + hexToRgb(whiteColor) + ', 0.7) !important',
    marginTop: '10px'
  },
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + '  !important',
    marginTop: '10px !important'
  },
  cardDescription: {
    color: 'rgba(' + hexToRgb(whiteColor) + ', 0.7) !important'
  },
  sectionSpace: {
    height: '70px',
    display: 'block'
  },
  marginTop20: {
    marginTop: '20px'
  },
  card2: {
    textAlign: 'center'
  },
  sectionDark: {
    ...sectionDark,
    backgroundSize: '550% 450%',
    '& $title, & $cardTitle': {
      color: whiteColor
    },
    '& $cardCategory': {
      color: 'rgba(' + hexToRgb(whiteColor) + ', 0.5) !important'
    },
    '& $cardDescription': {
      color: 'rgba(' + hexToRgb(whiteColor) + ', 0.76) !important'
    }
  }
};

export default skillsSection;
