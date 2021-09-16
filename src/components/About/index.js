import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import useStyles from './styles';
import SectionContext from '../../contexts/SectionContext';
import { navActive } from '../../utils';
import Avatar from '../../assets/images/avatar.png';
import logos from './skillLogos';


const About = () => {
    const classes = useStyles();

    window.scrollTo(0,0);

    const { setCurrentSection } = useContext(SectionContext);

    return (
        <>
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow} variant='h6'>
                    ABOUT
                </Typography>
                <Typography className={classes.sectionTitle} variant='h4'>
                    About Xavy
                </Typography>
            </Grid>
            <Grid container className={classes.aboutContainer} alignItems='center'>
                <Grid item className={classes.avatarContainer} xs={12} lg={4} xl={3} >
                    <img src={Avatar} className={classes.avatarImg} alt='Avatar of Xavy Romeo' />
                </Grid>
                <Grid item xs={12} lg={8} xl={6}>
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
                            <Link
                                style={{width: '100%', height: '100%', textDecoration: 'none', color: 'black', display: 'flex', justifyContent: 'center'}}
                                to='#Projects'
                                onClick={() => {
                                    setCurrentSection('Projects')
                                    navActive('Projects')
                                }}
                            >
                                <Button className={classes.projectsButton}>
                                    <Typography variant='subtitle2'>
                                        My Projects
                                    </Typography>
                                </Button> 
                            </Link>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.skillsContainer}>
                        <Grid container alignItems='center' direction='column'>
                            <Grid item>
                                <Typography variant='subtitle2'>
                                    SKILLS
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container>
                                    {logos.map((img) => (
                                        <Grid item key={img.name} xs={3} sm={2}>
                                            <Box className={classes.logosContainer}>
                                                <img src={img.logo} className={classes.logos} alt='icon' />
                                                <Typography variant='overline'>
                                                    {img.name}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid> 
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent='space-between'>
                        <Grid item xs={12} sm={9} md={7} xl={4}>
                            <Typography variant='h5'>
                                Let's work together!
                            </Typography>
                            <Typography>
                                I am available fulltime. Hire me to get what you need done.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={5} xl={8}>
                            <Link
                                style={{width: '100%', height: '100%', textDecoration: 'none', color: 'black'}}
                                to='#Contact'
                                onClick={() => {
                                    setCurrentSection('Contact Me')
                                    navActive('Contact Me')
                                }}
                            >
                                <Button className={classes.hireButton}>
                                    <Typography variant='subtitle2'>
                                        Hire Me
                                    </Typography>
                                </Button>
                            </Link> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default About;