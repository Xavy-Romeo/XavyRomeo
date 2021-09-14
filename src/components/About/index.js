import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import useStyles from './styles';
import Avatar from '../../assets/images/avatar.png';
import Css from '../../assets/images/css.svg';
import Express from '../../assets/images/express.svg';
import Git from '../../assets/images/git.svg';
import Html from '../../assets/images/html.svg';
import Js from '../../assets/images/js.svg';
import Mongo from '../../assets/images/mongo.svg';
import Mui from '../../assets/images/mui.svg';
import MySql from '../../assets/images/mysql.svg';
import Node from '../../assets/images/node.svg';
import ReactLogo from '../../assets/images/react.svg';
import GraphQL from '../../assets/images/graphql.svg';
import Jest from '../../assets/images/jest.svg';
import Stripe from '../../assets/images/stripe.svg';
import JQuery from '../../assets/images/jquery.svg';

const About = () => {
    const classes = useStyles();

    const logos = [
        {logo: ReactLogo, name: 'REACT'}, 
        {logo: Mui, name: 'MATERIAL-UI'},
        {logo: Html, name: 'HTML'}, 
        {logo: Css, name: 'CSS'}, 
        {logo: Js, name: 'JS'}, 
        {logo: JQuery, name: 'JQUERY'},
        {logo: Git, name: 'GIT'}, 
        {logo: Node, name: 'NODE'}, 
        {logo: Express, name: 'EXPRESS'},
        {logo: Jest, name: 'JEST'},
        {logo: Stripe, name: 'STRIPE'},
        {logo: MySql, name: 'MYSQL'}, 
        {logo: Mongo, name: 'MONGO'},
        {logo: GraphQL, name: 'GRAPHQL'} 
    ];

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
                            <Button className={classes.projectsButton}>
                                <Typography>
                                    My Projects
                                </Typography>
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.skillsContainer}>
                        <Grid container alignItems='center' direction='column'>
                            <Grid item>
                                <Typography>
                                    SKILLS
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container>
                                    {logos.map((img) => (
                                        <Grid item xs={3} sm={2}>
                                            <Box className={classes.logosContainer}>
                                                <img src={img.logo} key={img.name} className={classes.logos} alt='icon' />
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
                            <Button className={classes.hireButton}>
                                <Typography>
                                    Hire Me
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default About;