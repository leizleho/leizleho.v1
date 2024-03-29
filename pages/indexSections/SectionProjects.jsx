/* eslint-disable */
import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Build from '@material-ui/icons/Build';
import Subject from '@material-ui/icons/Subject';

// core components
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import Card from '../../components/Card/Card.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import Button from '../../components/CustomButtons/Button.jsx';

import projectsStyle from '../../static/jss/material-kit-pro-react/pages/indexSections/projectsStyle.jsx';

import office2 from '../../static/img/office2.jpg';
import cardBlog3 from '../../static/img/card-blog3.jpg';
import cardProject1 from '../../static/img/card-project1.jpg';
import cardProject2 from '../../static/img/card-project2.jpg';
import cardProject3 from '../../static/img/card-project3.jpg';
import cardProject4 from '../../static/img/card-project4.jpg';
import cardProject6 from '../../static/img/card-project6.jpg';

function SectionProjects({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      {/* Project 1 START */}
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>Recent Projects</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${office2})` }}
              >
                <CardBody background>
                  <h6 className={classes.cardCategory}>PRODUCTIVITY</h6>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      The Best Productivity Apps on Market
                    </h3>
                  </a>
                  <p className={classes.cardDescription}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <Button round color="danger">
                    <Icon>content_copy</Icon> View App
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${cardBlog3})` }}
              >
                <CardBody background>
                  <h6 className={classes.cardCategory}>DESIGN</h6>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      The Sculpture Where Details Matter
                    </h3>
                  </a>
                  <p className={classes.cardDescription}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <Button round color="info">
                    <Build />
                    View Project
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${cardProject6})` }}
              >
                <CardBody background>
                  <h6 className={classes.cardCategory}>MARKETING</h6>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      0 to 100.000 Customers in 6 months
                    </h3>
                  </a>
                  <p className={classes.cardDescription}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <Button round color="warning">
                    <Subject /> Case study
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 1 END */}

      {/* Project 2 START */}
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>Sample Web Applications</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={
                        'https://s3.amazonaws.com/creativetim_bucket/products/83/original/opt_mk_react_thumbnail.jpg?1525851474'
                      }
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/83/original/opt_mk_react_thumbnail.jpg?1525851474')",
                        opacity: '1'
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Material Kit Free React
                    </h4>
                  </a>
                  <h6 className={classes.description}>FREE UI KIT</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Material Kit is a Free Material-UI Kit with a fresh, new
                    design inspired by Google's material design. It's a great
                    pleasure to introduce to you the material concepts in an
                    easy to use and beautiful set of components.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309')",
                        opacity: '1'
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Light Bootstrap Dashboard PRO React
                    </h4>
                  </a>
                  <h6 className={classes.description}>Premium Template</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Light Bootstrap Dashboard PRO is a Bootstrap 3 Admin Theme
                    designed to look simple and beautiful. Forget about boring
                    dashboards and grab yourself a copy to kickstart new
                    project!
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                        opacity: '1'
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Now UI Dashboard PRO React
                    </h4>
                  </a>
                  <h6 className={classes.description}>Premium Template</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Now UI Dashboard React is an admin dashboard template
                    designed by Invision and coded by Creative Tim. It is built
                    on top of Reactstrap, using Now UI Dashboard and it is fully
                    responsive.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 2 END */}
      {/* Project 3 START */}
      <div
        className={`${classes.projects} ${classes.sectionDark} ${
          classes.projects3
        }`}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>Data Vizualization</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject1} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>WEB DESIGN</h6>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>
                      Famous Website Redesign
                    </h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject2} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>PRODUCTIVITY TOOLS</h6>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>
                      Beautiful Desktop for Designers
                    </h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject3} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>ANDROID APP</h6>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>Analytics for Android</h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject4} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>WEBSITE</h6>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>Behance Redesign</h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 3 END */}
    </div>
  );
}

export default withStyles(projectsStyle)(SectionProjects);
