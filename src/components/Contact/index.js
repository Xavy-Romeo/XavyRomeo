import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import useStyles from './styles';
import CodingPic from '../../assets/images/coding-pic.jpg';

const Contact = () => {
    const classes = useStyles();
    
    window.scrollTo(0,0);
    
    return (
        <>
           <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow} variant='h6' component='h1'>
                    CONTACT
                </Typography>
                <Typography className={classes.sectionTitle} variant='h4'>
                    Contact Me
                </Typography>
            </Grid>
            <Box style={{position: 'relative'}}>
                <Box style={{height: '100%'}}>
                    <img src={CodingPic} width='100%' style={{objectFit: 'cover', height:'60vh', minHeight:'550px'}} alt='laptop with code' />
                </Box>

                <Grid container justifyContent='center' className={classes.formContainer}>
                    <form className={classes.contactForm}>
                        <Grid container direction='column'>
                            <Typography className={classes.contactFormLabel} variant='h5'>
                                Name:
                            </Typography>
                            <input className={classes.contactFromInputs} type='text' placeholder='Your Name' />
                        </Grid>

                        <Grid container direction='column'>
                            <Typography className={classes.contactFormLabel} variant='h5'>
                                Email:
                            </Typography>
                            <input className={classes.contactFromInputs} type='email' placeholder='Your Email' />
                        </Grid>

                        <Grid container direction='column'>
                            <Typography className={classes.contactFormLabel} variant='h5'>
                                Message:
                            </Typography>
                            <textarea className={classes.contactFromInputs} placeholder='Your Message Here' rows='5' />
                        </Grid>

                        <Grid container justifyContent='center'>
                            <button className={classes.formButton} type='submit'>
                                <Typography variant='subtitle2'>
                                    Send Message
                                </Typography>
                            </button>
                        </Grid>
                        
                    </form>
                </Grid>
            </Box>
        </>
    )
}

export default Contact;
