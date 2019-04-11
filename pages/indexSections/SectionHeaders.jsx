import React from 'react';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import headersStyle from '../../static/jss/material-kit-pro-react/pages/indexSections/headersStyle.jsx';

import bgheader from '../../static/img/bg-header.png';

function SectionHeaders({ ...props }) {
  const { classes, ...rest } = props;
  return (
    // set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <div>
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: `url("${bgheader}")` }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h1 className={classes.title}>Leizle Ho</h1>
                <h1>Full stack web developer</h1>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(headersStyle)(SectionHeaders);
