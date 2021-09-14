import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import useStyles from './styles';
import NavBar from '../NavBar';
import { navActive, throttle, debounce } from '../../utils';

export default function Header () {
    const classes = useStyles();
    
    const [headerActive, setHeaderActive] = useState(false);

    const changeHeader = () => {
        if (window.scrollY > 250) {
            setHeaderActive(true);
        }
        else {
            setHeaderActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', throttle(debounce(changeHeader)));
        return () => window.removeEventListener('scroll', throttle(debounce(changeHeader)));
    }, []);

    return (
        <AppBar className={headerActive ? classes.appbarDark : classes.appbarLight} id='header'>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.nameContainer}> 
                    <Link 
                        to='/Home' 
                        className={classes.nameLink}
                        onClick={navActive}
                    >
                        <Typography className={classes.xavyTitle} variant='h1'>
                            Xavy Romeo
                        </Typography>
                    </Link>
                </Box>
                <Box>
                    <NavBar />
                </Box>
            </Toolbar>
        </AppBar>
    );
};