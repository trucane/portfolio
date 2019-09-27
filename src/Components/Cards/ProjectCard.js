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

            <Card style={{ padding:20}} className={this.props.classes.barBackground}>
                <CardMedia
                  component="img"
                  alt='we in here'
                  height="auto"
                  src={this.props.props.image}
                  title='my image'
                  style={{width:'100%'}}
                />
                <Box>
                    <Typography component='h1' style={{color:'#fff', textAlign:'center', marginTop:10}}>
                        <Link href={this.props.props.url}>
                         {this.props.props.name}
                        </Link>
                    </Typography>
                </Box>
            </Card>

        )

    }
}



export default withStyles(styles)(ProjectCard);