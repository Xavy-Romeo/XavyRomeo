import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import useStyles from './styles';
import projects from './projects';

const Projects = () => {
    const classes = useStyles();

    window.scrollTo(0,0);

    return (
        <>
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow} variant='h6' component='h1'>
                    PROJECTS
                </Typography>
                <Typography className={classes.sectionTitle} variant='h4'>
                    Portfolio
                </Typography>
            </Grid>
            <Paper className={classes.projectsPaper}>
                <Grid container justifyContent='center'>
                    {projects.map((project) => (
                        <Grid item key={project.name} className={classes.cardGridContainer} xs={12} sm={6} lg={3} >
                            <Box className={classes.cardContainer}>
                                <Grid container justifyContent='center'>
                                    <Box>
                                        <Typography variant='subtitle1'>
                                            {project.name}
                                        </Typography>
                                    </Box>
                                    <Box className={classes.imageContainer}>
                                        <img src={project.image} width='100%' height='100%' alt={project.name} />
                                    </Box>
                                   
                                    <Box>
                                        <Typography>
                                            Technologies Used: 
                                        </Typography>
                                    </Box>
                                    <Box style={{width: '100%', marginTop: '10px', height: '100px'}}>
                                        <Paper style={{background: 'rgba(255,255,255, .05)', padding: '5px', width: '100%', height: '100%'}}>
                                            <Typography  variant='body2'>
                                                {project.technologies}
                                            </Typography>
                                        </Paper>
                                    </Box>
                                    <Box>
                                        <Link
                                            href={project.deployed}
                                            target='_blank' 
                                            rel='noreferrer noopener'
                                            underline='none'
                                        >
                                            <Button className={classes.cardButton}>
                                                Live
                                            </Button>
                                        </Link>
                                        <Link
                                            href={project.github}
                                            target='_blank' 
                                            rel='noreferrer noopener'
                                            underline='none'
                                        >
                                            <Button className={classes.cardButton}>
                                                GitHub
                                            </Button>
                                        </Link>
                                    </Box>
                                </Grid>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </>
    )
}

export default Projects;
