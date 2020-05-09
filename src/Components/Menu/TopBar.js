import React from 'react';
import {styles} from '../../resource/stylesWith'
import {withStyles} from '@material-ui/styles';
import {Toolbar, AppBar, IconButton, Typography, Link} from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";




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