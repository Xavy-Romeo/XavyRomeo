import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Resume = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow} variant='h6' component='h1'>
                    RESUME
                </Typography>
                <Typography className={classes.sectionTitle} variant='h4'>
                    My Resume
                </Typography>
            </Grid>
        </>
    )
}

export default Resume;
