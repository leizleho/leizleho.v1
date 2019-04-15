import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Check from '@material-ui/icons/Check';
// core components
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import InfoArea from '../../components/InfoArea/InfoArea.jsx';
import Card from '../../components/Card/Card.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardFooter from '../../components/Card/CardFooter.jsx';
import CustomInput from '../../components/CustomInput/CustomInput.jsx';
import Button from '../../components/CustomButtons/Button.jsx';

import contactStyle from '../../static/jss/material-kit-pro-react/pages/indexSections/contactStyle.jsx';
import city from '../../static/img/city.jpg';

class SectionContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="cd-section" {...rest}>
        <div
          className={`${classes.contacts} ${classes.section}`}
          style={{ backgroundImage: `url(${city})` }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={8} md={8} className={classes.textCenter}>
                <h2 className={classes.title}>Get in Touch</h2>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={8} md={8}>
                <InfoArea
                  className={classes.infoArea}
                  title="ho.leizle@gmail.com"
                  description={''}
                  icon={Email}
                />
                <InfoArea
                  className={classes.infoArea}
                  title="(408)480-0273"
                  description={''}
                  icon={Phone}
                />
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={8} md={8}>
                <Card className={classes.card1}>
                  <form>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                            labelText="First Name"
                            id="first"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                            labelText="Last Name"
                            id="last"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                      <CustomInput
                        labelText="Email Address"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      <CustomInput
                        labelText="Your Message"
                        id="message"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot
                            }}
                          />
                        }
                        classes={{ label: classes.label }}
                        label="I'm not a robot"
                      />
                      <Button color="primary" className={classes.pullRight}>
                        Send Message
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(contactStyle)(SectionContacts);
