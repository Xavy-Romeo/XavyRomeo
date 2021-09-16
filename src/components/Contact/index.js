import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import useStyles from './styles';
import CodingPic from '../../assets/images/coding-pic.jpg';

const Contact = () => {
    const classes = useStyles();
        
    window.scrollTo(0,0);

    useEffect (() => {
        const form = document.getElementById('contact-form');

        async function handleSubmit(event) {
            event.preventDefault();
            let status = document.getElementById('status');
            let data = new FormData(event.target);
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                status.innerHTML = 'Message Sent. Thank You.';
                status.classList.add('sent');
                status.classList.add('success');
                form.reset();
                setTimeout(() => {
                    status.innerHTML = '';
                }, 3500);
                setTimeout(() => {
                    status.classList.remove('sent');
                    status.classList.remove('success');
                }, 4000);
            })
            .catch(error => {
                status.innerHTML = 'Oops! Message not sent!';
                status.classList.add('sent');
                status.classList.add('error');
                setTimeout(() => {
                    status.innerHTML = '';
                }, 3500);
                setTimeout(() => {
                    status.classList.remove('sent');
                    status.classList.remove('error');
                }, 4000);
            });
        };

        form.addEventListener('submit', handleSubmit);
    }, []);
    
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
                    <form 
                        action='https://formspree.io/f/xpzkbprn'
                        method='POST'
                        className={classes.contactForm}
                        id='contact-form'
                    >
                        <Grid container direction='column'>
                            <Typography className={classes.contactFormLabel} variant='h5'>
                                Name:
                            </Typography>
                            <input 
                                className={classes.contactFromInputs} 
                                type='text' 
                                placeholder='Your Name' 
                                required
                                name='Name'
                            />
                        </Grid>

                        <Grid container direction='column'>
                            <Typography className={classes.contactFormLabel} variant='h5'>
                                Email:
                            </Typography>
                            <input 
                                className={classes.contactFromInputs} 
                                type='email' 
                                placeholder='Your Email' 
                                required
                                name='Email'
                            />
                        </Grid>

                        <Grid container direction='column'>
                            <Typography className={classes.contactFormLabel} variant='h5'>
                                Message:
                            </Typography>
                            <textarea 
                                className={classes.contactFromInputs} 
                                placeholder='Your Message Here' 
                                rows='5'
                                required
                                name='Message'
                            />
                        </Grid>

                        <Grid container justifyContent='center'>
                            <button className={classes.formButton} type='submit'>
                                <Typography variant='subtitle2'>
                                    Send Message
                                </Typography>
                            </button>
                        </Grid>
                        
                    </form>

                    <Box id='status'>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Contact;