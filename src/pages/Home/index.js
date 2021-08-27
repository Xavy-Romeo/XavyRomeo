import React, { useEffect } from 'react';

// import About from '../components/About';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import Sea from '../../assets/images/sea.png';
import Sun from '../../assets/images/sun.png';
import Yatch from '../../assets/images/yatch.png';
import Ship from '../../assets/images/pirate-ship.png';
import Cloud from '../../assets/images/cloud.png';
import Palm from '../../assets/images/palm-tree.png';

export default function Home() {
    const classes = useStyles();

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
    });

    return (
        <>
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

            <Container maxWidth='xl'>
                {/* <About classes={classes} /> */}
            </Container>
        </>
    );
};