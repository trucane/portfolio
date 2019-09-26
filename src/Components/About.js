import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";

import { withStyles } from "@material-ui/styles";
import { styles } from "./resource/stylesWith";


const skills = [
    {name:'Angular'},{name:'React'},{name:'Redux'},{name:'Node.Js'},{name:'HTML'},{name:'CSS3'},{name:'LESS'},{name:'SASS'},{name:'Express'},
    {name:'Javascript'},{name:'JEST'},{name:'JQuery'},{name:'SCRUM'},{name:'Axios'},{name:'PHP'},{name:'SQLite3'},{name:'PostgreSQL'},{name:'MongoDB'},
    {name:'MYSQL'},{name:'Firebase'},{name:'GIT'},{name:'GitHub'},{name:'Heroku'},{name:'Netlify'}
]

class About extends React.Component {
  render() {
    return (
      <Grid>
        <Grid container className={this.props.classes.aboutSectionGrid}>
          <Grid item xs={12} md={6}>
            <Box className={this.props.classes.aboutBox}>
              <Typography variant="h5" gutterBottom>About Me</Typography>
              <Typography variant="overline">
                I am a computer programer. As amazing as that sounds it is
                true. You know when you are fullfilled in life when you can
                honestly say you are doing something you love. I have a passion
                for creation and programming is the ultimate form of art. I have
                a thirst for learning and programming offers a continuous change
                resulting in a wealth of ongoing accessible knowledge. I am
                code.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={this.props.classes.aboutBox}>
              <Card
                style={{ width: "450px", padding: 20 }}
                className={this.props.classes.barBackground}
              >
                <CardMedia
                  component="img"
                  alt="we in here"
                  height="auto"
                  src="https://secureservercdn.net/184.168.47.225/a9e.0ac.myftpupload.com/wp-content/uploads/public-domatin-pictures-dot-net-dog-using-laptop-computer.jpg?time=1560456548"
                  title="my image"
                />
                <Box>
                  <Typography
                    component="h1"
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      marginTop: 10
                    }}
                  >
                    I am Code
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          className={this.props.classes.aboutSectionGrid}
          style={{ background: "#F5F5F5" }}
        >
          <Grid container item xs={12}>
            <Grid item xs={12}>
                <Box className={this.props.classes.aboutBox}>
                <Typography variant='h4' gutterBottom>Skills</Typography>
                <Typography variant='overline'>
                    I started my journey off self taught learning the basic skills HTML, CSS. Then dove into
                    more interactive coding with Javscript. I wanted to do backend instead of using API's so I dove into
                    PHP and MySQL. Later, popular coding was Angular so I dived deep into AngularFire and WOW! I really
                    fell in love. Then came Lambda School. And when you think you know something you quickly
                    get humbled. File structuring, naming conventions, preprocessors, deployment, merge conflicts, testing, algorithms... StakeHolder!!!
                    What's a StakeHolder??? SCRUM? So I dont need to clean my shoes! Release Canvases, Notion, Version Controls...
                    Imposter Syndrome! Before Lambda, yes. Imposter Syndrome is and was real. Now... Full Stack Developer 
                    with an array of tools and languages to create a robust, scalable, and astethically pleasing
                    product within and out of the confounds of any development environment.
                </Typography>
                <Box>
                    <Button>
                    <Link href='/projects'>
                    View My Projects
                </Link>
                    </Button>
                </Box>
                </Box>
            </Grid>
            <Grid container spacing={4} className={this.props.classes.aboutBox}>
                {skills.map(skill =>(
                    <Grid key={skill.name} item xs={12} sm={6} md={3}>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem>
                            <ListItemIcon>
                                <DeveloperModeIcon />
                            </ListItemIcon>
                            <ListItemText primary={skill.name} />
                            </ListItem>
                        </List>
                    </Grid>
                ))}
            </Grid>
          </Grid>
          
        </Grid>

        <Grid container className={this.props.classes.aboutSectionGrid}>
          <Grid item xs={12} sm={6}>
            <Box className={this.props.classes.aboutBox}>
              <Typography variant="h2">HIRE ME</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={4} className={this.props.classes.aboutBox}>
              <Grid item xs={4}>
                <Link href='https://www.linkedin.com/in/henry-leverette'>
                    <Icon>
                    <LinkedInIcon></LinkedInIcon>
                    </Icon>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link href='https://twitter.com/leverette_henry'>
                    <Icon>
                    <TwitterIcon></TwitterIcon>
                    </Icon>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Icon>
                  <MailOutlineIcon></MailOutlineIcon>
                </Icon>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          className={this.props.classes.aboutSectionGrid}
          style={{ background: "#F5F5F5" }}
        >
          <Grid item xs={12} sm={6}>
            <Box className={this.props.classes.aboutBox}>
                <Typography variant="h4" gutterBottom>Activities</Typography>
                <Typography variant="overline">
                    There is nothing more than I like othe than coding and that's my family.
                    When it's time to relax that means it's time to play with the kids. People say
                    I need to get out more but family is the moment I say "I have it all". On the 
                    occasion I do go out its enjoying what I think the outside world have to offer and 
                    sitting in a chair behind a desk most of the time that means getting in to something active.
                    The Beach, Paintballing with friends and family, Golfing for that quiet outdoor time.
                    AND.. maybe I cheat a little and attend a local Hack-A-Thon or 2. 
                </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className={this.props.classes.aboutBox}>
              <Paper className={this.props.classes.aboutPaper}>
                <Typography variant="subtitle1">Working Out</Typography>
              </Paper>
              <Paper className={this.props.classes.aboutPaper}>
                <Typography variant="subtitle1">Family Time</Typography>
              </Paper>
              <Paper className={this.props.classes.aboutPaper}>
                <Typography variant="subtitle1">Paint Ball</Typography>
              </Paper>
              <Paper className={this.props.classes.aboutPaper}>
                <Typography variant="subtitle1">Hack-A-Thon(s)</Typography>
              </Paper>
              <Paper className={this.props.classes.aboutPaper}>
                <Typography variant="subtitle1">Golfing</Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(About);
