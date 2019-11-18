import React from 'react'; 
import {withStyles} from '@material-ui/styles';
import {styles} from '../resource/stylesWith';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';


class ProjectCard extends React.Component{

     render(){

         return(

            <div>

            <Card style={{ padding:10, borderRadius:10, height:'250px', minWidth:"250px"}} className={this.props.classes.projectContainer}>

                <CardMedia
                  component="img"
                  alt='we in here'
                  height="100%"
                  width="100%"
                  src={this.props.props.image}
                  title='my image'
                />

                {/* <Box
                  alt='we in here'
                  height="auto"
                  className={this.props.classes.projectImage}
                  title='my image'
                  style={{backgroundImage:"url(" + `${this.props.props.image}` + ")", borderRadius:10}}
                /> */}

                
            </Card>
            <Box>
            <Typography component='h1' style={{color:'#fff', textAlign:'center', marginTop:10}}>
                <Link href={this.props.props.url}>
                 {this.props.props.name}
                </Link>
            </Typography>
        </Box>

        </div>

        )

    }
}



export default withStyles(styles)(ProjectCard);