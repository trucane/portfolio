import React from "react";

import Icon from "@material-ui/core/Icon";


import {Box, Button, Card, CardMedia, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from '@material-ui/core';
import {DeveloperMode, LinkedIn, Twitter} from '@material-ui/icons'

import { withStyles } from "@material-ui/styles";
import { styles } from "../resource/stylesWith";


import images from '../resource/images/images'


const skills = [
    {name:'Angular', img:images.angular},{name:'React', img:images.react},{name:'Redux', img:images.redux},
    {name:'Node.Js', img:images.node},{name:'HTML', img:images.html},{name:'CSS3', img:images.css},
    {name:'LESS',img:images.less},{name:'SASS',img:images.sass},{name:'Express',img:images.express},
    {name:'Javascript',img:images.js},{name:'JEST',img:images.jest},{name:'JQuery',img:images.jquery},{name:'SCRUM',img:images.scrum},
    {name:'Axios',img:images.axios},{name:'PHP',img:images.php},{name:'SQLite3', img:images.sql},{name:'PostgreSQL', img:images.postgresql},{name:'MongoDB',img:images.mongo},
    {name:'MYSQL',img:images.mysql},{name:'Firebase',img:images.firebase},{name:'GIT', img:images.git},{name:'GitHub',img:images.github},{name:'Heroku',img:images.heroku},{name:'Netlify',img:images.netlify}
]

class About extends React.Component {
  render() {
    return (
      <Grid>
        <Grid container className={this.props.classes.aboutSectionGrid}>
          <Grid item xs={12} md={6}>
            <Box className={this.props.classes.aboutBox}>
              <Typography variant="h5" gutterBottom>About Me</Typography>
              <Box className={this.props.classes.aboutSection}>
              <Typography variant="overline" gutterBottom>
                Software Developer with a passion
                for creation. Im my opinion programming is the ultimate form of art. I have
                a thirst for learning and programming offers a continuous change
                resulting in a wealth of ongoing accessible knowledge.
              </Typography>

              </Box>

              <Box>
                <Typography variant="h5" gutterBottom >
                  My Journey
                </Typography>
                <Typography variant='overline'>
                      I started off my journey as a Developer being self taught learning the basic foundational web development skills... i.e. HTML and CSS. Once having a solid
                      grasps of that foundation I wanted to learn the client side manipulation of a web appliction so I dove into
                      more interactive coding with Javacript. While storing data in sessions and the localstorage was helpful, I wanted to learn more robust storage capabilities so I learned to code
                      on the backend. My journey took me to realtional databases like MySQL, as a result learning PHP and how to run it on an Apache server.
                      Later, the popular and on demand coding language was Angular so I dived right in with Angular 5. Learing SPA's and the benefits of NoSQL like MongoDB. 
                      Then came along Googles Firestore and Angularfire and WOW! I really
                      fell in love.

                      As we all know, trends and changes happen often in programming and technology...and AppS! was where to be. I wanted to use a transitional
                      platform to perform across all devices and operation systems and thats where I discovered React Native. But to be sufficient in React Native
                      (in my opinion) I first needed to get profificent with vanilla React.js. And this is where I have been. React.
                      
                      It is said you are not a complete programmer without knowledge of Computer Science. Thats where Lambda School came into the picture. And when you think you know something you quickly
                      get humbled. File structuring, naming conventions, preprocessors, deployment, merge conflicts, testing, algorithms... StakeHolder!!!
                      What's a StakeHolder??? SCRUM? So I dont need to clean my shoes! Release Canvases, Notion, Version Controls...
                      Imposter Syndrome! Before Lambda, yes. Imposter Syndrome is and was real. Now... Full Stack Developer 
                      with an array of tools and languages to create a robust, scalable, and astethically pleasing
                      product within and out of the confounds of any development environment.
                  </Typography>
              </Box>
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
                              <CardMedia
                                  style={{height:'30px', width:'30px'}}
                                  component="img"
                                  alt="we in here"
                                  src={skill.img}
                                  title={skill.name}
                                />
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
                    <LinkedIn></LinkedIn>
                    </Icon>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link href='https://twitter.com/leverette_henry'>
                    <Icon>
                    <Twitter></Twitter>
                    </Icon>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <Typography variant="subtitle1">
                    Contact me at:
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption">
                  programmer.Hleverette@gmail.com
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption">
                  (219) 316-4600
                  </Typography>
                </Box>
                
                
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
                    There is nothing that I like other than coding and that's my family.
                    When it's time to relax that means it's time to play with the kids. People say
                    I need to get out more but family is the moment I say "I have it all". On the 
                    occasion I do go outside, its enjoying what I think the outside world has to offer.
                    Sitting in a chair behind a desk most of the time creates a need for something active.
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
