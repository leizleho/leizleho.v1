import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import cardStyle from './cardStyle.jsx';

function randomColor() {
  let color = '#';
  let letters = [
    'ffffff',
    'f0f8ff',
    'ffe4e1',
    'e6e6fa',
    'd3ffce',
    'e2f0ff',
    'cbffed',
    'fddce1',
    'ffd9dc',
    'fff2e3',
    'ffffba',
    'd5ffde',
    'd5edff',
    'f3e8f9',
    'ffe3d4',
    'fff1c5',
    'fffcc0',
    'dbf7b5',
    'd4f1cc',
    'ffe7e7',
    'fff0da',
    'c0f2e7',
    'f2f6c3',
    'cff3ff',
    'd6eaff',
    'b2ffff',
    'ccffe5',
    'eaeaff',
    'ffffd6',
    'ffeaea'
  ]; //Set your colors here
  color += letters[Math.floor(Math.random() * letters.length)];
  return color;
}

function ColoredCard({ ...props }) {
  const {
    classes,
    className,
    children,
    plain,
    profile,
    blog,
    raised,
    background,
    pricing,
    color,
    product,
    testimonial,
    ...rest
  } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]:
      (pricing && color !== undefined) || (pricing && background !== undefined),
    [classes[color]]: color,
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [className]: className !== undefined
  });
  return (
    <div
      className={cardClasses}
      {...rest}
      style={{
        fontWeight: '400',
        backgroundColor: randomColor()
      }}
    >
      {children}
    </div>
  );
}

ColoredCard.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  blog: PropTypes.bool,
  raised: PropTypes.bool,
  background: PropTypes.bool,
  pricing: PropTypes.bool,
  testimonial: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose'
  ]),
  product: PropTypes.bool
};

export default withStyles(cardStyle)(ColoredCard);
