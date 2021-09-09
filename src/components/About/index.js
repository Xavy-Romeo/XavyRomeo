import React from 'react';
import { NavLink } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import Avatar from '../../assets/images/avatar.png';

const About = () => {
    const classes = useStyles();

    return (
        <>
        {/* <Paper> */}
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow} variant='h6'>
                    ABOUT
                </Typography>
                <Typography className={classes.sectionTitle} variant='h4'>
                    About Xavy
                </Typography>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={3}>
                    <img src={Avatar} className={classes.avatarImg} alt='Avatar of Xavy Romeo' />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.aboutPaper}>
                        <Typography variant='h5' className={classes.aboutContent}>
                            I am Xavy Romeo, a Fullstack Software Engineer.
                        </Typography>
                        <Typography className={classes.aboutContent}>
                            I am a developer based in the United States. 
                            I help bring visions and ideas to life. 
                            Show me a design and I can create it.
                            I am the guy that makes sites work, plain and simple.
                            Take a look at my projects and see if my knowledge fits what you are looking for.  
                        </Typography>
                        <Grid container justifyContent='center'>
                            <Button className={classes.projectsButton}>
                                <Typography>
                                    My Projects
                                </Typography>
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={{height:'200px'}}>
                        SKILLS
                    </Paper>
                </Grid>
                <Grid item >
                    <Typography variant='h5'>
                        Let's work together!
                    </Typography>
                    <Typography>
                        I am available fulltime. Hire me to get what you need done.
                    </Typography>
                    <Button>
                        Hire Me
                    </Button>
                </Grid>
            </Grid>
        {/* </Paper> */}
        </>
    )
}

export default About;
