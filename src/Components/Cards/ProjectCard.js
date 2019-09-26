import React from 'react'; 
import {withStyles} from '@material-ui/styles';
import {styles} from '../resource/stylesWith';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';


class ProjectCard extends React.Component{

     render(){

         return(

            <Card style={{width:'450px', padding:20}} className={this.props.classes.barBackground}>
                <CardMedia
                  component="img"
                  alt='we in here'
                  height="auto"
                  src='https://parade.com/wp-content/uploads/2018/03/golden-puppy-life-national-geographic-ftr-1.jpg'
                  title='my image'
                />
                <Box>
                    <Typography component='h1' style={{color:'#fff', textAlign:'center', marginTop:10}}>
                        {this.props.props.name}
                    </Typography>
                </Box>
            </Card>

        )

    }
}



export default withStyles(styles)(ProjectCard);