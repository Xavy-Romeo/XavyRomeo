import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../../components/Loading';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MailIcon from '@material-ui/icons/Mail';

import useStyles from './styles';
import SectionContext from '../../contexts/SectionContext';
import { navActive } from '../../utils';
import Sea from '../../assets/images/sea.png';
import Yatch from '../../assets/images/yatch.png';
import Ship from '../../assets/images/pirate-ship.png';
import Sun from '../../assets/images/sun.png';
import Cloud from '../../assets/images/cloud.png';
import Palm from '../../assets/images/palm-tree.png';
import Coding from '../../assets/images/coding.svg';

export default function Home() {
    const classes = useStyles();

    window.scrollTo(0,0);

    const [loaded, setLoaded] = useState(false);

    const { setCurrentSection } = useContext(SectionContext);

    useEffect(() => {
        const sun = document.getElementById('sun');
        const cloud = document.getElementById('cloud');
        const cloud2 = document.getElementById('cloud2');
        const yatch = document.getElementById('yatch');
        const ship = document.getElementById('ship');
        const title = document.getElementById('title');

        window.addEventListener('scroll', () => {
            var value = window.scrollY;
        
            sun.style.transform = `translate3d(-${value*.5}px, ${value*.75}px , 0px)`;
            cloud.style.transform = `translate3d(-${value*.5}px, ${value*.15}px , 0px)`;
            cloud2.style.transform = `translate3d(-${value*.5}px, ${value*.15}px , 0px)`;
            yatch.style.transform = `translate3d(-${value*2}px, ${value*.1}px , 0px)`;
            ship.style.transform = `translateX(-${value*.15}px)`;
            title.style.transform = `translateY(${value*1.5}px)`;
        });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0,0);
            setLoaded(true);
        }, 2000);
    }, []);
    
    return (
        <>  
            <Box className={!loaded ? classes.loadingContainer : classes.loaded}>
                <Loading />
            </Box>

            <Box className={classes.landingPageContainer}>
                <img src={Sun} className={classes.landingSun} id='sun' alt='sun illustration' />
                <img src={Cloud} className={classes.landingCloud} id='cloud' alt='cloud illustration' />
                <img src={Cloud} className={classes.landingCloud2} id='cloud2' alt='cloud illustration' />
                <img src={Yatch} className={classes.landingYatch} id='yatch' alt='yatch illustration' />
                <img src={Ship} className={classes.landingShip} id='ship'  alt='pirate ship illustration' />
                <img src={Sea} className={classes.landingSea} id='sea' alt='beach illustration' />  
                <img src={Palm} className={classes.landingPalm} id='palm' alt='palm tree illustration' />          
                <Typography className={classes.landingTitle} id='title'>
                    Xavy Romeo
                </Typography>      
            </Box>

            <Container maxWidth='xl' id='landing-about'>
                <Box className={classes.landingAboutContainer}>
                    <Grid container className={classes.landingAbout} justifyContent='center' alignItems='center'>
                        <Grid item lg={6} md={8} sm={10} xs={12}>
                            <img src={Coding} alt='Coding on a laptop with a hot coffee on the side.' width='100%' />
                        </Grid>
                        <Grid item lg={6} md={8} sm={10} xs={12}>
                            <Paper className={classes.landingPaper} elevation={10}>
                                <Box>
                                    <Typography variant='h2'>
                                        Xavy Romeo 
                                    </Typography>
                                    <Grid container>
                                        <Typography className={classes.stackTitle} variant='h3'>
                                            Full Stack
                                        </Typography>
                                        <Typography className={classes.stackTitle} variant='h3'>
                                            Software Engineer
                                        </Typography>
                                    </Grid>
                                </Box>
                            
                                <Grid container className={classes.landingButtonContainer} justifyContent='center'>
                                    <Link
                                        style={{width: '100%', height: '100%', textDecoration: 'none', color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                        to='Portfolio/#Projects'
                                        onClick={() => {
                                            setCurrentSection('Contact Me')
                                            navActive('Contact Me')
                                        }}
                                    >
                                        <Button className={classes.landingButton}>
                                            <MailIcon className={classes.mailIcon} />
                                            <Typography variant='subtitle1'>
                                                Say Hello
                                            </Typography>
                                        </Button>
                                    </Link>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </> 
    );
};