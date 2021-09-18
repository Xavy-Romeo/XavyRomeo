import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import useStyles from './styles';

const Modals = ({ project, handleClose }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.paper}>
            <button 
                className={classes.closeButton}
                type='button' 
                aria-label='Close Button'
                onClick={handleClose}
            >
                X
            </button>
            <Grid item xs={12} >
                <Typography variant='h5'>
                    {project.name}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent='center'>
                    <img 
                        src={project.preview} 
                        className={classes.previewImage} 
                        alt={project.name}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} lg={8}>
                <Grid container>
                    <Grid item xs={12} className={classes.descBox}>
                        <Typography variant='subtitle2'>
                            Project Description:
                        </Typography>
                        <Typography variant='body2'>
                            {project.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle2'>
                            Technologies Used:
                        </Typography>
                        <Typography variant='body2'>
                            {project.technologies}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Link
                    href={project.deployed}
                    target='_blank' 
                    rel='noreferrer noopener'
                    underline='none'
                >
                    <Button className={classes.cardButton}>
                        <Typography>
                            Live
                        </Typography>
                    </Button>
                </Link>
                <Link
                    href={project.github}
                    target='_blank' 
                    rel='noreferrer noopener'
                    underline='none'
                >
                    <Button className={classes.cardButton}>
                        <Typography>
                            GitHub
                        </Typography>
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
};

export default Modals;