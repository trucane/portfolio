import React from 'react';
import {styles} from '../resource/stylesWith';
import {withStyles} from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";




class TopMenu extends React.Component{

     render(){

         return(

            <AppBar position="static" className={this.props.classes.barBackground}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Henry Leverette</Typography>
              
              <Button >Projects </Button>
            </Toolbar>
          </AppBar>

        )

    }
}



export default withStyles(styles)(TopMenu);