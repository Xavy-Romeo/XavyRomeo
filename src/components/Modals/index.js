import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

const Modals = ({ project }) => {
    const classes = useStyles();

    console.log('project', project.name)
    return (
        <Grid container className={classes.paper}>
            <Grid item xs={12}>
                <Typography>
                    {project.name}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    Technologies Used: 
                </Typography>
                <Typography>
                    {project.technologies}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    Project Description:
                </Typography>
                <Typography>
                    {project.description}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button>
                    Live
                </Button>
                <Button>
                    GitHub
                </Button>
            </Grid>
            
        </Grid>
    )
}

export default Modals;
