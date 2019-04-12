/* eslint-disable */
import React from 'react';
import skillsData from '../../db/skills.json';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';

import skillsStyle from '../../static/jss/material-kit-pro-react/pages/indexSections/skillsStyle.jsx';

function SectionSkills({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.skills}>
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
              <h2 className={classes.title}>Skills</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            {skillsData.map(skill => (
              <GridItem
                key={skill.id}
                xs={12}
                sm={4}
                md={3}
                className={classes.gridItem}
              >
                <Card plain className={classes.card2}>
                  <CardHeader image plain>
                    <img src={skill.icon} alt="..." />
                    <h4 className={classes.cardTitle}>{skill.title}</h4>
                  </CardHeader>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(skillsStyle)(SectionSkills);
