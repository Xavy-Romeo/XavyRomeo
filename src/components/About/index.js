import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

import useStyles from './styles';
import Avatar from '../../assets/images/avatar.png';
import Css from '../../assets/images/css.png';
import Express from '../../assets/images/express.png';
import Git from '../../assets/images/git.png';
import Html from '../../assets/images/html.png';
import Js from '../../assets/images/js.png';
import Mongo from '../../assets/images/mongo.png';
import Mui from '../../assets/images/mui.png';
import MySql from '../../assets/images/mysql.png';
import Node from '../../assets/images/node.png';
import ReactLogo from '../../assets/images/react.png'

const About = () => {
    const classes = useStyles();

    const logos = [
        {logo: Html, name: 'HTML'}, 
        {logo: Css, name: 'CSS'}, 
        {logo: Js, name: 'JS'}, 
        {logo: ReactLogo, name: 'REACT'}, 
        {logo: Mui, name: 'MATERIAL-UI'}, 
        {logo: Git, name: 'GIT'}, 
        {logo: Node, name: 'NODE'}, 
        {logo: Express, name: 'EXPRESS'},
        {logo: MySql, name: 'MYSQL'}, 
        {logo: Mongo, name: 'MONGO'}, 
    ];

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
                    <Paper style={{padding: '10px'}}>
                        <Grid container alignItems='center' direction='column'>
                            <Grid item>
                                <Typography>
                                    SKILLS
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container>
                                    {logos.map((img) => (
                                        <div style={{ margin: '5px', paddingTop: '20px', width: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                            <CardMedia>
                                                <img src={img.logo} key={img.name} className={classes.logos} />
                                            </CardMedia>
                                            <CardContent>
                                                <Typography variant='body2'>
                                                    {img.name}
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid> 
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