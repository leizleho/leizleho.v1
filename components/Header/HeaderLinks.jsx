/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// @material-ui/icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Settings';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Loyalty from '@material-ui/icons/Loyalty';
import Redeem from '@material-ui/icons/Redeem';
import ViewList from '@material-ui/icons/ViewList';

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx';

import headerLinksStyle from './headerLinksStyle.jsx';

class HeaderLinks extends React.Component {
  easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  smoothScroll = (e, target) => {
    if (window.location.pathname === '/sections') {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };

  scrollGo = (element, to, duration) => {
    let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    let animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  onClickSections = {};

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { classes, dropdownHoverColor } = this.props;
    const navLinks = (
      <div>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            hoverColor={dropdownHoverColor}
            buttonText="My Account"
            buttonProps={{
              className: classes.navLink,
              color: 'transparent'
            }}
            buttonIcon={ViewList}
            dropdownList={[
              <Link href="/my-offers">
                <a className={classes.dropdownLink}>
                  <Redeem className={classes.dropdownIcons} /> My Offers
                </a>
              </Link>,
              <Link href="/mywants">
                <a className={classes.dropdownLink}>
                  <Loyalty className={classes.dropdownIcons} /> My Wishes
                </a>
              </Link>,
              <Link href="/myprofile">
                <a className={classes.dropdownLink}>
                  <AccountCircle className={classes.dropdownIcons} /> Profile
                </a>
              </Link>,
              <Link href="/settings">
                <a className={classes.dropdownLink}>
                  <Settings className={classes.dropdownIcons} /> Settings
                </a>
              </Link>,

              <Link href="#!">
                <a
                  className={classes.dropdownLink}
                  onClick={this.onLogoutClick.bind(this)}
                >
                  <ExitToApp className={classes.dropdownIcons} />
                  Logout
                </a>
              </Link>
            ]}
          />
        </ListItem>
      </div>
    );

    return (
      <List className={classes.list + ' ' + classes.mlAuto}>
        <ListItem className={classes.listItem}>
          <Link href="#projects">
            <a className={classes.navLink}>Projects</a>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="/skills">
            <a className={classes.navLink}>Skills</a>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="/about">
            <a className={classes.navLink}>About</a>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="/skills">
            <a className={classes.navLink}>Contact</a>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="/resume">
            <a className={classes.navLink}>Resume</a>
          </Link>
        </ListItem>
      </List>
    );
  }
}

HeaderLinks.defaultProps = {
  hoverColor: 'primary'
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    'dark',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose'
  ])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
