import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import fetch from 'isomorphic-unfetch';
import skillsData from '../db/skills.json';
// core components
import Header from '../components/Header/Header.jsx';
import HeaderLinks from '../components/Header/HeaderLinks.jsx';
import SectionHeaders from './indexSections/SectionHeaders.jsx';
import SectionProjects from './indexSections/SectionProjects.jsx';
import SectionSkills from './indexSections/SectionSkills.jsx';
import SectionContact from './indexSections/SectionContact.jsx';
import indexPageStyle from '../static/jss/material-kit-pro-react/pages/indexPageStyle.jsx';
import logo from '../static/img/lho_logo.png';
class Index extends React.Component {
  /*
  static async getInitialProps() {
    return { skillsData };
  }

  static async getInitialProps() {
    const res = await fetch('/db/skills.json');
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.length}`);
    return {
      data
    };
  }
  */

  componentDidMount() {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    if (window.location.href.lastIndexOf('#') > 0)
      document.getElementById(href).scrollIntoView();
    window.addEventListener('scroll', this.updateView);
    this.updateView();
    //console.log('componentdidmount', skillsData);
  }
  componentDidUpdate() {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    document.getElementById(href).scrollIntoView();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateView);
  }
  easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  updateView() {
    var contentSections = document.getElementsByClassName('cd-section');
    var navigationItems = document
      .getElementById('cd-vertical-nav')
      .getElementsByTagName('a');

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute('data-number'), 10) - 1;
      if (
        contentSections[i].offsetTop - window.innerHeight / 2 <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add('is-selected');
      } else {
        navigationItems[activeSection].classList.remove('is-selected');
      }
    }
  }
  smoothScroll(target) {
    var targetScroll = document.getElementById(target);
    this.scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  }
  scrollGo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = this.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    }.bind(this);
    animateScroll();
  }
  render() {
    const { classes } = this.props;
    const brandlogo = <img src={logo} />;
    return (
      <div>
        <Header
          brand={brandlogo}
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 700,
            color: 'primary'
          }}
        />
        <div className={classes.main}>
          <SectionHeaders id="headers" />
          <SectionProjects id="projects" />
          <SectionSkills id="skills" />
          <SectionContact id="contact" />
        </div>
        <nav id="cd-vertical-nav">
          <ul>
            <li>
              <a
                href="#headers"
                data-number="1"
                className="is-selected"
                onClick={e => {
                  var isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll('headers');
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Headers</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                data-number="2"
                className=""
                onClick={e => {
                  var isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll('projects');
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                data-number="3"
                className=""
                onClick={e => {
                  var isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll('skills');
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Skills</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                data-number="4"
                className=""
                onClick={e => {
                  var isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll('contact');
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withStyles(indexPageStyle)(Index);
