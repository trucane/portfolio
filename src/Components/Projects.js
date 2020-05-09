import React from 'react';
import ProjectCard from '../Components/Cards/ProjectCard';

import {Grid, Typography} from '@material-ui/core';

import { withStyles } from "@material-ui/styles";
import {styles} from '../resource/stylesWith'

const projects = [
    {name:'Water My Plants', url:"https://watermyplants-bw.netlify.com/", image:'https://watermyplants-bw.netlify.com/img/hero.svg'},
    {name:'LambdaNext', url:"https://lambdschoolanext.netlify.com", image:'https://lambdschoolanext.netlify.com/static/media/finding-problem-solution.34e6db16.jpg'}
];


class Projects extends React.Component{

     render(){

         return(

            <Grid container >

                <Grid container className={`${this.props.classes.projectHeader_H1_Container}  }`} >
                    <Typography
                    className={
                        `${this.props.classes.projectHeader_H1}  }`}
                        component="h1"
                        variant="h4"
                        gutterBottom>

                        Projects
                    </Typography>
                </Grid>


                {/* <Grid container spacing={2} justify="center" style={{padding:'10rem'}} > */}


                <Grid container justify="center">
                    {projects.map(project =>(
                        <Grid  key={project.name}>
                            <ProjectCard props={project}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        )

    }
}



export default withStyles(styles)(Projects);