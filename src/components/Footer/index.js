import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import useStyles from './styles';
import XRLogo from '../../assets/images/xr-logo.png';

const Footer = () => {
    const classes = useStyles();

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <footer>
            <Box className={classes.footer}>
                <Container className={classes.footerContainer} maxWidth={'xl'}>
                    <Grid container className={classes.footerContainer} justifyContent='space-between' alignItems='center'>
                        <Grid item>
                            <img src={XRLogo} className={classes.footerLogo} alt='xr logo' />
                        </Grid>
                        <Grid item>
                            <Grid container alignItems='center'>
                                <PeopleAltIcon className={classes.connectIcon} />
                                <Typography variant='body2'>
                                    Connect:
                                </Typography>
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Link 
                                    href='https://www.linkedin.com/in/xavy-romeo'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='linked in profile'
                                >
                                    <LinkedInIcon className={classes.connectIcons} />
                                </Link>
                                <Link 
                                    href='https://github.com/Xavy-Romeo'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='github profile'
                                >
                                    <GitHubIcon className={classes.connectIcons} />
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant='body2'>
                                &copy; {new Date().getFullYear()}
                            </Typography>
                            <Typography variant='body2'>
                                Xavy Romeo
                            </Typography>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;