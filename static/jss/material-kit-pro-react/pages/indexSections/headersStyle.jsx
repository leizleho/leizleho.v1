import headerLinksStyle from './headerLinksStyle.jsx';
import {
  container,
  mrAuto,
  title,
  blackColor,
  whiteColor,
  primaryColor,
  hexToRgb
} from '../../../material-kit-pro-react.jsx';

const headersSection = theme => ({
  ...headerLinksStyle(theme),
  sectionBlank: {
    height: '70px',
    display: 'block'
  },
  container: {
    ...container,
    zIndex: '2',
    position: 'relative',
    '& h1, & h2, & h4, & h6': {
      color: whiteColor
    }
  },
  conatinerHeader2: {
    ...container,
    zIndex: '2',
    position: 'relative',
    '& h1, & h4, & h6': {
      color: whiteColor
    },
    paddingTop: '25vh'
  },
  title,
  pageHeader: {
    position: 'relative',
    height: '100vh',
    maxHeight: '1600px',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    border: '0',
    display: 'flex',
    WebkitBoxAlign: 'center',
    MsFlexAlign: 'center',
    alignItems: 'center',
    '&:before': {
      background:
        'linear-gradient(45deg,rgba(' +
        hexToRgb(primaryColor[1]) +
        ',.99),rgba(' +
        hexToRgb(primaryColor[2]) +
        ',.5))'
    },
    '&:after,&:before': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''"
    }
  },
  iframeContainer: {
    '& > iframe': {
      width: '100%',
      boxShadow:
        '0 16px 38px -12px rgba(' +
        hexToRgb(blackColor) +
        ', 0.56), 0 4px 25px 0px rgba(' +
        hexToRgb(blackColor) +
        ', 0.12), 0 8px 10px -5px rgba(' +
        hexToRgb(blackColor) +
        ', 0.2)'
    }
  },
  mrAuto,
  textCenter: {
    textAlign: 'center'
  },
  card: {
    marginTop: '60px'
  },
  formControl: {
    margin: '0',
    padding: '8px 0 0 0'
  },
  textRight: {
    textAlign: 'right'
  },
  button: {
    margin: '0 !important'
  }
});

export default headersSection;
