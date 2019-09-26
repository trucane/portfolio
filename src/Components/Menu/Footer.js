import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/ToolBar";
import {withStyles} from '@material-ui/styles';
import {styles} from '../resource/stylesWith'



class Footer extends React.Component {
  render() {
    return (
      <AppBar
        position="static"
        color="primary"
        style={{ top: "auto", bottom: 0 }}
        className={this.props.classes.barBackground}
      >
        <Toolbar></Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Footer);
