/* eslint-disable */
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import footerStyle from './footerStyle.jsx';

function Footer(props) {
  const { children, classes, theme, big, className } = props;
  const themeType =
    theme === 'transparent' || theme == undefined ? false : true;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });
  const aClasses = classNames({
    [classes.a]: true
  });

  const content = (
    <div>
      <div className={classes.left}>
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <a href="#!" className={classes.block}>
              Freebay
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="#!" className={classes.block}>
              About us
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="#!" className={classes.block}>
              Blog
            </a>
          </ListItem>
        </List>
      </div>
      <div className={classes.right}>
        &copy; {1900 + new Date().getYear()} , made with{' '}
        <Favorite className={classes.icon} /> by{' '}
        <a href="www.freebay.com">Freebay</a>
      </div>
    </div>
  );

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {children !== undefined ? (
          <div>
            <div className={classes.content}>{children}</div>
            <hr />
          </div>
        ) : (
          ' '
        )}
        {content}
        <div className={classes.clearFix} />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.oneOf(['dark', 'white', 'transparent']),
  big: PropTypes.bool,
  content: PropTypes.node
};

export default withStyles(footerStyle)(Footer);
