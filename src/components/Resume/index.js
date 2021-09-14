import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import useStyles from './styles';
import ResumePdf from '../../assets/files/resume.pdf';
import ResumeImg from '../../assets/images/resume.png'

const Resume = () => {
    const classes = useStyles();

    window.scrollTo(0,0);

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
            <Grid container justifyContent='center'>
                <Grid item xs={12}>
                    <img src={ResumeImg} className={classes.resumeImg} alt='resume'/>
                </Grid>
                <Link 
                    download='Xavy Romeo - Resume'
                    href={ResumePdf}
                    underline='none'
                    aria-label='download resume button'
                >
                    <Button className={classes.resumeButton}>
                        <Typography variant='subtitle2'>
                            Download Resume
                        </Typography>
                    </Button>
                </Link>  
            </Grid>
        </>
    )
}

export default Resume;
