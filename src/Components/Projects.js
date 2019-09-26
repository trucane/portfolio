import React from 'react';
import { withStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ProjectCard from '../Components/Cards/ProjectCard';

const styles = {
    greyBackground: { backgroundColor: "#f6f7fb" },
    gridPadding: { padding: "1.5rem 3rem" },
    divider: { borderTop: "1px #bdb7b7 solid" },
}

const projects = [
    {name:'Water My Plants'},
    {name:'LambdaNext'}
];


class Projects extends React.Component{

     render(){

         return(

            <Grid container style={{marginTop:'20px',}} >
                <Grid container className={`${this.props.classes.greyBackground} ${this.props.classes.gridPadding} ${this.props.classes.divider}`}>
                    <Typography component="h1" variant="h4" gutterBottom>
                        Projects
                    </Typography>
                </Grid>
                <Grid container spacing={2} justify="center" style={{paddingTop:'1rem'}} >
                    {projects.map(project =>(
                        <Grid item key={project.name} >
                            <ProjectCard props={project}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        )

    }
}



export default withStyles(styles)(Projects);