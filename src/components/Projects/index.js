import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import useStyles from './styles';
import { projects } from '../../utils/';
import Modals from '../Modals';

const Projects = () => {
    const classes = useStyles();

    window.scrollTo(0,0);
    
    const [open, setOpen] = useState(false);
  
    const handleOpen = (project) => {
      setOpen(true);
      setModalProject(project);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [modalProject, setModalProject] = useState('');

    return (
        <>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
            >
                <Modals 
                    project={modalProject}
                    handleClose={handleClose}
                />
            </Modal>
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
                                    <Box className={classes.technologies}>
                                        <Paper className={classes.techPaper}>
                                            <Typography  variant='body2'>
                                                {project.technologies}
                                            </Typography>
                                        </Paper>
                                    </Box>
                                    <Button 
                                        onClick={() => {
                                            handleOpen(project)
                                        }}
                                        className={classes.modalButton}
                                    >
                                        <Typography>
                                            View Project
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </>
    )
};

export default Projects;