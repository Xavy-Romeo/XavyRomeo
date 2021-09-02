import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import useStyles from './styles';
import NavBar from '../NavBar';

export default function Header () {
    const classes = useStyles();

    return (
        <AppBar className={classes.appbar} id='header'>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.nameContainer}> 
                    <Link to='/Home' className={classes.nameLink}>
                        <Typography className={classes.xavyTitle}>
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