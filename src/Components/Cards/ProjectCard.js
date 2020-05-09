import React from 'react'; 
import {withStyles} from '@material-ui/styles';
import {styles} from '../../resource/stylesWith';
import {Box, Card, CardMedia, Grid, Link, Typography} from '@material-ui/core/';


class ProjectCard extends React.Component{

     render(){

         return(

            <>


            <Grid container className={`${this.props.classes.project_container}`}>


                <Grid item xs={12}>
                    <Card className={this.props.classes.project_snapShot_container}>

                        <CardMedia
                            className={this.props.classes.project_snapShot}
                            component="img"
                            alt='we in here'
                            src={this.props.props.image}
                            title='my image'
                        />

                    </Card>
                </Grid>

                <Grid item xs={12}>

                    <Grid className={`${this.props.classes.project_description_container}`}>

                        <Box className={`${this.props.classes.project_description_box}`}>
                            <Typography component="h1" variant='h5'align='center' gutterBottom='true'>{this.props.props.name}</Typography>
                        </Box>

                        <Box>
                            <Typography component='p' align='center' variant="subtitle2" color='textSecondary' paragraph='true'>
                                Stack: React | Redux | Heroku | Node.js | Express | Material UI | Whimsical | SendGrid
                            </Typography>
                        </Box>

                        <Box>
                            <Typography component='p' variant='subtitle1' align='center'>
                            Platform for users or stakeholders to post projects that can be upvoted 
                            and become a live project for developers to work on.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography component='h1' style={{color:'#fff', textAlign:'center', marginTop:10}}>
                                <Link href={this.props.props.url}>
                                view
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

        </>

        )

    }
}



export default withStyles(styles)(ProjectCard);