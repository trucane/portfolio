import React from "react";

import { Box, Grid, Link, Button, Typography } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <Grid item container style={{height:'100vh',
        backgroundImage:`url('https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
        backgroundSize:'cover'
      }}>
        <Grid container item xs={12} justify='center' alignItems='center'>
          <Box style={{textAlign:'center'}}>

            <Grid>
              <Typography variant='h2'>I am code</Typography>
            </Grid>
            <Grid style={{marginTop:10}}>
              <Link href='/about'><Button size="large" variant="contained" color="primary">Enter</Button></Link>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
