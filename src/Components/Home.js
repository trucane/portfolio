import React from "react";
import TopBar from './Menu/TopBar';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Typography } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <Grid item container style={{height:'500px'}}>
        <Grid container item xs={12} justify='center' alignItems='center'>
          <Box style={{textAlign:'center'}}>

            <Grid>
              <Typography variant='h2'>I am code</Typography>
            </Grid>
            <Grid>
              <Link href='/about'><Button>Enter</Button></Link>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
