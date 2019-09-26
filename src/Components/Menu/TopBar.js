import React from 'react';
import {styles} from '../resource/stylesWith';
import {withStyles} from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";




class TopMenu extends React.Component{

     render(){

         return(

            <AppBar position="static" className={this.props.classes.barBackground}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{flexGrow:1}}>Henry Leverette</Typography>
              
              <Link href='/' className={this.props.classes.topBarLink}>Home</Link>
              <Link href='/about' className={this.props.classes.topBarLink} >About</Link>
              <Link href='/projects' className={this.props.classes.topBarLink}>Projects</Link>
            </Toolbar>
          </AppBar>

        )

    }
}



export default withStyles(styles)(TopMenu);